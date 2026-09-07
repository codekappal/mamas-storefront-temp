"use client";

import type { ShopIngredient } from "@/components/recipe/ShopIngredientsModal";

interface IngredientsListProps {
  ingredients: ShopIngredient[];
  onOpenModal: () => void;
}

export default function IngredientsList({
  ingredients,
  onOpenModal,
}: IngredientsListProps) {
  const availableCount = ingredients.filter(
    (ingredient) => ingredient.available
  ).length;

  return (
    <div>
      <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-900">
        <span className="text-lg">&#127869;&#65039;</span> Ingredients
      </h2>

      <ul className="mt-4 space-y-1.5">
        {ingredients.map((ingredient) => (
          <IngredientRow key={ingredient.productId} ingredient={ingredient} />
        ))}
      </ul>

      <div className="mt-6 rounded-xl border border-primary-200 bg-cream p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
          Buy ingredients from this recipe
        </p>
        <p className="mt-1 text-sm text-neutral-600">
          {availableCount} of {ingredients.length} ingredients available from
          Maamis
        </p>
        <button
          onClick={onOpenModal}
          className="mt-4 w-full bg-accent-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-700"
        >
          Add ingredients to trolley
        </button>
      </div>
    </div>
  );
}

function IngredientRow({ ingredient }: { ingredient: ShopIngredient }) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-lg bg-accent-50/60 px-4 py-2.5">
      <div className="flex min-w-0 items-center gap-2">
        <span className="truncate text-sm text-neutral-800">
          {ingredient.productName}
        </span>
        {ingredient.available ? (
          <span className="inline-flex flex-shrink-0 items-center gap-1 rounded-full bg-primary-100 px-2 py-0.5 text-[10px] font-semibold text-primary-700">
            &#10003; Maamis
          </span>
        ) : (
          <span className="inline-flex flex-shrink-0 items-center rounded-full bg-neutral-200 px-2 py-0.5 text-[10px] font-semibold text-neutral-500">
            Not from Maamis
          </span>
        )}
      </div>
      <span className="flex-shrink-0 text-sm font-semibold text-accent-700">
        {ingredient.quantity}
      </span>
    </li>
  );
}
