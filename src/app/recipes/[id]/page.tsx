import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { productService, recipeService } from "@/services";
import type { Product } from "@/lib/types";
import type { ShopIngredient } from "@/components/recipe/ShopIngredientsModal";
import RecipeDetailTop from "@/components/recipe/RecipeDetailTop";
import RecipeTabs from "@/components/recipe/RecipeTabs";
import RelatedRecipes from "@/components/recipe/RelatedRecipes";

const FALLBACK_IMAGE =
  "https://www.maamis.com/wp-content/uploads/2021/06/curry50f.jpg";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = recipeService.findById(id);

  if (!recipe) {
    notFound();
  }

  const shopIngredients: ShopIngredient[] = recipe.ingredients.map(
    (ingredient) => resolveShopIngredient(ingredient, productService.findById(ingredient.productId))
  );

  const firstProductId = recipe.ingredients[0]?.productId;
  const firstProduct = firstProductId
    ? productService.findById(firstProductId)
    : undefined;
  const imageSrc = firstProduct?.image ?? FALLBACK_IMAGE;

  return (
    <div className="bg-neutral-100">
      <div className="mx-auto max-w-[1200px] px-5 pt-8 sm:px-8">
        <BackToRecipesLink />
      </div>

      <RecipeDetailTop
        recipe={{
          imageSrc,
          imageAlt: recipe.title,
          title: recipe.title,
          description: recipe.description,
          tags: recipe.tags,
          author: recipe.author,
          cookTime: recipe.cookTime,
          servings: recipe.servings,
          ingredients: shopIngredients,
        }}
      />

      <div className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
        <RecipeTabs
          ingredients={shopIngredients}
          instructions={recipe.instructions}
        />
        <RelatedRecipes currentId={recipe.id} />
      </div>
    </div>
  );
}

function resolveShopIngredient(
  ingredient: { productId: string; productName: string; quantity: string },
  product: Product | undefined
): ShopIngredient {
  if (!product) {
    return {
      productId: ingredient.productId,
      productName: ingredient.productName,
      productImage: "",
      productPrice: 0,
      productWeight: "",
      quantity: ingredient.quantity,
      available: false,
    };
  }
  return {
    productId: ingredient.productId,
    productName: ingredient.productName,
    productImage: product.image,
    productPrice: product.price,
    productWeight: product.weight,
    quantity: ingredient.quantity,
    available: true,
  };
}

function BackToRecipesLink() {
  return (
    <Link
      href="/recipes"
      className="inline-flex items-center gap-1 text-sm font-medium text-accent-700 transition-colors hover:text-accent-800"
    >
      <BackIcon />
      Back to recipes
    </Link>
  );
}

function BackIcon() {
  return <ArrowLeft className="h-4 w-4" />;
}
