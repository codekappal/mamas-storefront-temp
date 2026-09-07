import type { Metadata } from "next";
import { productService } from "@/services";
import ProductsHeader from "@/components/products/ProductsHeader";
import CategorySection from "@/components/products/CategorySection";

export const metadata: Metadata = {
  title: "All Products | Maamis",
  description:
    "Handcrafted masalas, whole spices, and flavorful blends from Maamis.",
};

export default function ProductsPage() {
  const categories = productService.listCategories();

  return (
    <div className="bg-neutral-100 min-h-screen">
      <ProductsHeader
        eyebrow="Our Range"
        title="All Products"
        subtitle="Handcrafted masalas, whole spices, and flavorful blends, every pack promises authenticity."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {categories.map((category) => (
          <CategorySection
            key={category}
            category={category}
            products={productService.listByCategory(category)}
          />
        ))}
      </div>
    </div>
  );
}
