"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ShopIngredient } from "@/components/recipe/ShopIngredientsModal";
import ShopIngredientsModal from "@/components/recipe/ShopIngredientsModal";
import IngredientsList from "@/components/recipe/IngredientsList";
import StickyTrolleyBar from "@/components/recipe/StickyTrolleyBar";
import { TagList, MetaRow } from "@/components/recipe/RecipeMeta";

export interface RecipeTopData {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  author: string;
  cookTime: string;
  servings: number;
  ingredients: ShopIngredient[];
}

export default function RecipeDetailTop({ recipe }: { recipe: RecipeTopData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const availableCount = recipe.ingredients.filter(
    (ingredient) => ingredient.available
  ).length;

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-neutral-100">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 pb-2 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full">
          <Image
            src={recipe.imageSrc}
            alt={recipe.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-cover"
          />
        </div>

        <div>
          <TagList tags={recipe.tags} />
          <h1 className="mt-3 font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
            {recipe.title}
          </h1>
          <p className="mt-3 leading-relaxed text-neutral-600">
            {recipe.description}
          </p>
          <MetaRow
            author={recipe.author}
            cookTime={recipe.cookTime}
            servings={recipe.servings}
          />
          <div className="mt-8">
            <IngredientsList
              ingredients={recipe.ingredients}
              onOpenModal={() => setModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {showSticky && !modalOpen && (
        <StickyTrolleyBar
          availableCount={availableCount}
          ingredientsCount={recipe.ingredients.length}
          onOpenModal={() => setModalOpen(true)}
        />
      )}

      {modalOpen && (
        <ShopIngredientsModal
          recipeTitle={recipe.title}
          servings={recipe.servings}
          ingredients={recipe.ingredients}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
