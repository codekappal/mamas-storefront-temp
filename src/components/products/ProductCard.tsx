import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link
        href={`/products/${product.id}`}
        aria-label={product.name}
        className="block"
      >
        <div className="relative aspect-square overflow-hidden bg-cream">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-700">
            {product.weight}
          </span>
        </div>
        <div className="pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600">
            {product.category}
          </p>
          <h3 className="mt-1.5 font-serif text-xl text-neutral-900">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500 line-clamp-2">
            {product.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors group-hover:text-accent-700">
            View Product
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
