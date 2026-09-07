"use client";

import Link from "next/link";
import { useState } from "react";
import type { ShopIngredient } from "@/components/recipe/ShopIngredientsModal";

type TabId = "ingredients" | "method" | "reviews";

interface RecipeTabsProps {
  ingredients: ShopIngredient[];
  instructions: string[];
}

const TABS: { id: TabId; label: string }[] = [
  { id: "ingredients", label: "Ingredients" },
  { id: "method", label: "Method" },
  { id: "reviews", label: "Reviews" },
];

export default function RecipeTabs({
  ingredients,
  instructions,
}: RecipeTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("ingredients");

  return (
    <div className="mt-12">
      <div className="flex gap-1 border-b border-neutral-200">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
              activeTab === tab.id
                ? "border-accent-600 text-accent-700"
                : "border-transparent text-neutral-500 hover:text-neutral-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="py-6">
        {activeTab === "ingredients" && (
          <IngredientsTab ingredients={ingredients} />
        )}
        {activeTab === "method" && <MethodTab instructions={instructions} />}
        {activeTab === "reviews" && <ReviewsTab />}
      </div>
    </div>
  );
}

function IngredientsTab({ ingredients }: { ingredients: ShopIngredient[] }) {
  return (
    <div>
      <h3 className="font-serif text-xl text-neutral-900">
        Ingredient details &amp; availability
      </h3>
      <p className="mt-1 text-sm text-neutral-500">
        Every ingredient is matched to its Maamis product where available.
      </p>
      <ul className="mt-5 space-y-3">
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.productId}
            className="rounded-lg border border-neutral-200 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-neutral-900">
                    {ingredient.productName}
                  </p>
                  <span className="text-sm text-neutral-500">
                    ({ingredient.quantity})
                  </span>
                  {ingredient.available ? (
                    <span className="inline-flex rounded-full bg-primary-100 px-2 py-0.5 text-[10px] font-semibold text-primary-700">
                      &#10003; Maamis product
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-neutral-200 px-2 py-0.5 text-[10px] font-semibold text-neutral-500">
                      Not available from Maamis
                    </span>
                  )}
                </div>
                {ingredient.available && (
                  <p className="mt-1 text-sm text-neutral-500">
                    {ingredient.productWeight} &middot; ₹{ingredient.productPrice}
                  </p>
                )}
              </div>
              {ingredient.available && (
                <Link
                  href={`/products/${ingredient.productId}`}
                  className="flex-shrink-0 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
                >
                  View product &rarr;
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MethodTab({ instructions }: { instructions: string[] }) {
  return (
    <div>
      <h3 className="font-serif text-xl text-neutral-900">Method</h3>
      <ol className="mt-5 space-y-5">
        {instructions.map((step, index) => (
          <li key={index} className="flex gap-4">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
              {index + 1}
            </span>
            <p className="leading-relaxed text-neutral-700">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ReviewsTab() {
  return (
    <div>
      <h3 className="font-serif text-xl text-neutral-900">Reviews</h3>
      <p className="mt-4 rounded-lg bg-neutral-50 p-6 text-sm text-neutral-500">
        No reviews yet.
      </p>
    </div>
  );
}
