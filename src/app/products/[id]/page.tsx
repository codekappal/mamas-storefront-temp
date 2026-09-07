import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { Product } from "@/lib/types";
import { productService } from "@/services";
import ProductDetail from "@/components/products/ProductDetail";
import RelatedProducts from "@/components/products/RelatedProducts";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = productService.findById(id);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Maamis`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = productService.findById(id);

  if (!product) {
    notFound();
  }

  const recommended = recommendationsFor(product);

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs productName={product.name} />
        <ProductDetail product={product} />
        <RelatedProducts products={recommended} />
      </div>
    </div>
  );
}

function recommendationsFor(product: Product): Product[] {
  return productService
    .list()
    .filter((item) => item.id !== product.id)
    .sort((a, b) => {
      const aScore = a.category === product.category ? 0 : 1;
      const bScore = b.category === product.category ? 0 : 1;
      return aScore - bScore;
    })
    .slice(0, 4);
}

function Breadcrumbs({ productName }: { productName: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium">
        <li>
          <Link
            href="/"
            className="text-accent-700 transition-colors hover:text-accent-800"
          >
            Home
          </Link>
        </li>
        <li aria-hidden className="text-neutral-300">
          ›
        </li>
        <li>
          <Link
            href="/products"
            className="text-accent-700 transition-colors hover:text-accent-800"
          >
            All Products
          </Link>
        </li>
        <li aria-hidden className="text-neutral-300">
          ›
        </li>
        <li aria-current="page" className="truncate text-neutral-500">
          {productName}
        </li>
      </ol>
    </nav>
  );
}