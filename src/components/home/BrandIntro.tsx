"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import useScrollProgress from "@/hooks/useScrollProgress";

interface BrandIntroProps {
  imageSrc: string;
  imageAlt: string;
}

export default function BrandIntro({ imageSrc, imageAlt }: BrandIntroProps) {
  const [imageRef, imageProgress] = useScrollProgress();
  const [textRef, textProgress] = useScrollProgress();

  const imageX = -45 + imageProgress * 90;
  const textX = 45 - textProgress * 90;

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
          <div ref={imageRef} className="order-2 lg:order-1 lg:pr-10">
            <div
              className="relative aspect-[4/3] overflow-hidden"
              style={{
                transform: `translateX(${imageX}px)`,
                opacity: 0.2 + imageProgress * 0.8,
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            ref={textRef}
            className="order-1 lg:order-2 lg:pl-10"
            style={{
              transform: `translateX(${textX}px)`,
              opacity: 0.2 + textProgress * 0.8,
            }}
          >
            <SectionHeading title="Tradition in every spoon" />
            <p className="mt-6 text-base leading-relaxed text-neutral-600">
              Maamis began in a small family kitchen with one belief, that the
              best food starts with the best spices. We hand select whole spices
              from trusted farms across India, dry them in the sun, and grind
              them in small batches to preserve every note of
              aroma and heat.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              The result is a range of authentic masalas that bring the warmth
              and character of Indian home cooking to your kitchen, just as our
              grandmothers intended.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
