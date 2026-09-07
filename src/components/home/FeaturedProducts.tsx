"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import useScrollParallax from "@/hooks/useScrollParallax";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const isThreeLayout = products.length === 3;

  // Scroll-linked parallax hooks for the LEFT and RIGHT products only.
  // The MIDDLE product (red chili) is deliberately stable so it stays the
  // visual anchor of the section while the turmeric and garam masala packets
  // drift upward as you scroll.
  const [leftRef, leftY] = useScrollParallax();
  const [rightRef, rightY] = useScrollParallax();

  if (!isThreeLayout) {
    return (
      <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
        <BackgroundDecoration />
        <Container>
          <SectionHeader />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center sm:hidden">
            <ViewAllLink />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <BackgroundDecoration />
      <Container>
        <SectionHeader />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <ParallaxCard ref={leftRef} translateY={leftY} shouldLift>
            <FeaturedProductCard product={products[0]} />
          </ParallaxCard>

          {/* MIDDLE product (red chili): stable, no transform of any kind. */}
          <ParallaxCard shouldLift={false}>
            <FeaturedProductCard product={products[1]} />
          </ParallaxCard>

          <ParallaxCard ref={rightRef} translateY={rightY} shouldLift>
            <FeaturedProductCard product={products[2]} />
          </ParallaxCard>
        </div>

        <div className="mt-12 text-center sm:hidden">
          <ViewAllLink />
        </div>
      </Container>
    </section>
  );
}

function BackgroundDecoration() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-40 top-8 h-[26rem] w-[26rem] rounded-full bg-primary-200/50 blur-3xl" />
      <div className="absolute -right-32 top-1/4 h-[30rem] w-[30rem] rounded-full bg-warm-200/45 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent-200/30 blur-3xl" />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <SectionHeading
        title="Our masalas"
        description="A selection of our most-loved blends and pure spices, ground in small batches for uncompromising freshness."
      />
      <Link
        href="/products"
        className="hidden items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-700 sm:inline-flex"
      >
        View all products →
      </Link>
    </div>
  );
}

function ViewAllLink() {
  return (
    <Link
      href="/products"
      className="inline-flex text-sm font-semibold text-primary-700 transition-colors hover:text-accent-700"
    >
      View all products →
    </Link>
  );
}

function FeaturedProductCard({ product }: { product: Product }) {
  return (
    <article className="group h-full">
      <Link
        href={`/products/${product.id}`}
        aria-label={product.name}
        className="block h-full"
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_2px_20px_-6px_rgba(15,32,23,0.12),0_18px_50px_-20px_rgba(15,32,23,0.28)] ring-1 ring-neutral-900/5 transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_6px_30px_-8px_rgba(15,32,23,0.18),0_34px_70px_-24px_rgba(15,32,23,0.42)]">
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-cream to-primary-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              loading="lazy"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm ring-1 ring-white/60 backdrop-blur-md">
              {product.weight}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-7 pt-6 sm:p-8 sm:pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-600">
              {product.category}
            </p>
            <h3 className="mt-1.5 font-serif text-2xl leading-snug text-neutral-900">
              {product.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500">
              {product.description}
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-primary-700 transition-colors group-hover:text-accent-700">
              View Product
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

interface ParallaxCardProps {
  ref?: React.Ref<HTMLDivElement>;
  translateY?: number;
  shouldLift: boolean;
  children: React.ReactNode;
}

// Wraps a single product card with optional scroll-parallax + hover lift.
// `shouldLift` keeps the hover effect for left/right cards; the middle card
// (shouldLift=false) renders with no parallax and no hover lift. The measuring
// `ref` sits on the OUTER wrapper (never transformed) so the scroll progress is
// computed from the real page position.
function ParallaxCard({ ref, translateY = 0, shouldLift, children }: ParallaxCardProps) {
  const inner = shouldLift ? (
    <div className="product-lift">{children}</div>
  ) : (
    children
  );

  const content = shouldLift ? (
    <div style={{ transform: `translateY(${translateY}px)` }}>{inner}</div>
  ) : (
    inner
  );

  return <div ref={ref}>{content}</div>;
}