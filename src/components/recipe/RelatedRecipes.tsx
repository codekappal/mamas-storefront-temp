import Link from "next/link";
import type { Recipe } from "@/lib/types";
import { productService, recipeService } from "@/services";
import RecipeCard from "@/components/recipes/RecipeCard";

const FALLBACK_IMAGE =
  "https://www.maamis.com/wp-content/uploads/2021/06/curry50f.jpg";

interface RelatedRecipesProps {
  currentId: string;
}

export default function RelatedRecipes({ currentId }: RelatedRecipesProps) {
  const current = recipeService.findById(currentId);
  const related = recipeService
    .list()
    .filter((recipe: Recipe) => recipe.id !== currentId)
    .sort((a, b) => {
      const aMatch = tagOverlap(a, current);
      const bMatch = tagOverlap(b, current);
      return bMatch - aMatch;
    })
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between">
        <h2 className="font-serif text-2xl text-neutral-900">Related recipes</h2>
        <Link
          href="/recipes"
          className="text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
        >
          View all &rarr;
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((recipe: Recipe) => {
          const firstProductId = recipe.ingredients[0]?.productId;
          const product = firstProductId
            ? productService.findById(firstProductId)
            : undefined;
          const imageSrc = product?.image ?? FALLBACK_IMAGE;
          return (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              imageSrc={imageSrc}
              imageAlt={recipe.title}
            />
          );
        })}
      </div>
    </section>
  );
}

function tagOverlap(a: Recipe, b: Recipe | undefined): number {
  if (!b) {
    return 0;
  }
  const set = new Set(b.tags);
  return a.tags.reduce((count, tag) => count + (set.has(tag) ? 1 : 0), 0);
}
