"use client";

import { useEffect, useRef, useState } from "react";

// Maximum vertical movement (px) per breakpoint.
// Desktop gets the full effect, tablet is reduced, and mobile is disabled
// for performance/usability. Only scroll-linked (no continuous CSS animation).
function maxMotion(width: number): number {
  if (width >= 1024) return 84;
  if (width >= 640) return 48;
  return 0;
}

// Returns [ref, translateY]. translateY is derived directly from the page
// scroll position so the card moves smoothly with the user's scroll.
export default function useScrollParallax(): [
  React.RefObject<HTMLDivElement | null>,
  number
] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rafId = 0;

    const update = () => {
      const motion = maxMotion(window.innerWidth);
      if (motion === 0) {
        setTranslateY(0);
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // progress goes 0 -> 1 as the element travels from the bottom of the
      // viewport up to the upper third. When it first enters (progress 0) the
      // card is pushed DOWN by `motion`; as the user scrolls, progress rises
      // and the card translates back UP to its final resting position (0).
      const start = viewportHeight;
      const end = viewportHeight * 0.3;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end))
      );

      setTranslateY(Math.round(motion * (1 - progress)));
    };

    const onScroll = () => {
      // Coalesce burst of scroll events into one transform update per frame.
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [ref, translateY] as const;
}
