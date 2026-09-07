import { parseCookTimeToMinutes } from "@/lib/formatting";
import type { Recipe } from "@/lib/types";

export interface ContentCounts {
  totalRecipes: number;
  totalBlogs: number;
}

export function countRecipes(recipes: Recipe[]): number {
  return recipes.length;
}

export function countIngredients(recipes: Recipe[]): number {
  return recipes.reduce(
    (total, recipe) => total + recipe.ingredients.length,
    0
  );
}

export function averageCookTimeMinutes(recipes: Recipe[]): number {
  if (recipes.length === 0) {
    return 0;
  }
  const total = recipes.reduce(
    (sum, recipe) => sum + parseCookTimeToMinutes(recipe.cookTime),
    0
  );
  return Math.round(total / recipes.length);
}
