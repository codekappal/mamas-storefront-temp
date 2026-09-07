import Link from "next/link";
import type { Recipe } from "@/lib/types";
import { productService, recipeService } from "@/services";
import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RecipeSection() {
  const recipes = recipeService.list().slice(0, 3);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="From our kitchen"
            description="Simple, flavourful recipes that let our masalas shine."
          />
          <Link
            href="/recipes"
            className="hidden items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-700 sm:inline-flex"
          >
            All recipes →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              imageSrc={imageFor(recipe)}
              imageAlt={`${recipe.title} recipe`}
            />
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link
            href="/recipes"
            className="inline-flex text-sm font-semibold text-primary-700 transition-colors hover:text-accent-700"
          >
            All recipes →
          </Link>
        </div>
      </Container>
    </section>
  );
}

function imageFor(recipe: Recipe): string {
  const first = recipe.ingredients[0];
  if (!first) {
    return "https://www.maamis.com/wp-content/uploads/2021/06/curry50f.jpg";
  }
  const product = productService.findById(first.productId);
  return product?.image ?? "https://www.maamis.com/wp-content/uploads/2021/06/curry50f.jpg";
}
