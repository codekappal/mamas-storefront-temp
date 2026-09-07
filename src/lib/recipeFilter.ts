import type { Recipe } from "@/lib/types";

export function hasRecipeTag(recipe: Recipe, tag: string): boolean {
  return recipe.tags.some((recipeTag) =>
    recipeTag.toLowerCase().includes(tag.toLowerCase())
  );
}

export function filterRecipesByTag(recipes: Recipe[], tag: string): Recipe[] {
  if (tag === "all") {
    return recipes;
  }
  return recipes.filter((recipe) => hasRecipeTag(recipe, tag));
}
