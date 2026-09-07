"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] w-full items-center overflow-hidden bg-primary-950 text-white">
      <BackgroundVideo />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-16 pt-32 sm:px-8">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cream">
            <span className="h-px w-8 bg-accent-500" />
            Authentic Indian Masalas
          </p>
          <h1 className="font-bold leading-[1.08] tracking-[-2px] text-[46px] sm:text-[64px] lg:text-[80px]">
            Spice Up
            <br />
            Your Kitchen
          </h1>
          <p className="mt-10 max-w-2xl text-[22px] font-normal leading-[1.4] text-cream/90 sm:text-[28px]">
            Small batch masalas made the traditional way. 
            From farm to your pan the soul of Indian cooking, in every jar.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-accent-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-700"
            >
              Shop Masalas
              <ArrowIcon />
            </Link>
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 px-2 py-4 text-sm font-semibold tracking-[0.15em] text-white transition-colors hover:text-accent-400"
            >
              Explore Recipes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.defaultPlaybackRate = 0.75;
    video.playbackRate = 0.75;
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      onLoadedMetadata={(event) => {
        event.currentTarget.playbackRate = 0.75;
      }}
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/video/1000142739.mp4" type="video/mp4" />
    </video>
  );
}

function ArrowIcon() {
  return <ArrowRight className="h-4 w-4" />;
}
