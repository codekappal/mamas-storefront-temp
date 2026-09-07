import type { Product } from "@/lib/types";
import ProductCard from "@/components/products/ProductCard";

interface CategorySectionProps {
  category: string;
  products: Product[];
}

export default function CategorySection({
  category,
  products,
}: CategorySectionProps) {
  return (
    <section id={category} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
        <span className="h-8 w-1.5 rounded-full bg-accent-500 inline-block" />
        {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
