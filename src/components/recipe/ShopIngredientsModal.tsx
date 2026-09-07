"use client";

import { useState } from "react";
import { X } from "lucide-react";
import ShoppingItemRow from "@/components/recipe/ShoppingItemRow";

export interface ShopIngredient {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productWeight: string;
  quantity: string;
  available: boolean;
}

interface ShopIngredientsModalProps {
  recipeTitle: string;
  servings: number;
  ingredients: ShopIngredient[];
  onClose: () => void;
}

export default function ShopIngredientsModal({
  recipeTitle,
  servings,
  ingredients,
  onClose,
}: ShopIngredientsModalProps) {
  const available = ingredients.filter((ingredient) => ingredient.available);
  const [quantities, setQuantities] = useState<Record<string, number>>(() =>
    Object.fromEntries(available.map((ingredient) => [ingredient.productId, 1]))
  );
  const [selected, setSelected] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(available.map((ingredient) => [ingredient.productId, true]))
  );

  const total = available.reduce(
    (sum, ingredient) =>
      sum +
      (selected[ingredient.productId] === false
        ? 0
        : ingredient.productPrice * (quantities[ingredient.productId] ?? 1)),
    0
  );

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities((current) => {
      const next = Math.max(1, (current[productId] ?? 1) + delta);
      return { ...current, [productId]: next };
    });
  };

  const toggleSelected = (productId: string) => {
    setSelected((current) => ({
      ...current,
      [productId]: current[productId] === false,
    }));
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Shop ingredients"
    >
      <div
        className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-neutral-200 px-5 py-4 sm:px-6">
          <div>
            <h2 className="font-serif text-xl text-primary-900">
              Shop ingredients
            </h2>
            <p className="mt-0.5 text-sm text-neutral-500">
              {recipeTitle} &middot; Serves {servings}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          {available.length === 0 ? (
            <p className="py-10 text-center text-sm text-neutral-500">
              No ingredients are currently available from Maamis.
            </p>
          ) : (
            <ul className="space-y-3">
              {available.map((ingredient) => (
                <ShoppingItemRow
                  key={ingredient.productId}
                  ingredient={ingredient}
                  quantity={quantities[ingredient.productId] ?? 1}
                  isSelected={selected[ingredient.productId] !== false}
                  onToggle={() => toggleSelected(ingredient.productId)}
                  onQuantityChange={(delta) =>
                    updateQuantity(ingredient.productId, delta)
                  }
                />
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-neutral-200 bg-neutral-50 px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-600">Total</span>
            <span className="font-serif text-xl text-primary-900">₹{total}</span>
          </div>
          <button className="mt-3 w-full bg-accent-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-700">
            Add to trolley &middot; ₹{total}
          </button>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return <X className="h-5 w-5" />;
}
