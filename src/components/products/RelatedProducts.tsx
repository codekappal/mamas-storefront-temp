import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">
        You may also like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function RelatedProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-[transform,box-shadow] duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative aspect-square bg-cream overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/85 px-2.5 py-0.5 text-xs font-semibold text-neutral-700 shadow-sm backdrop-blur-sm">
          {product.weight}
        </span>
      </div>
      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-600">
          {product.category}
        </p>
        <h3 className="mt-1 font-semibold text-neutral-900 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-primary-700 font-bold mt-1.5">₹{product.price}</p>
      </div>
    </Link>
  );
}