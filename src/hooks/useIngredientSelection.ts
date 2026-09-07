"use client";

import { useState } from "react";
import type { MasterIngredient } from "@/lib/types";
import type { SelectedIngredient } from "@/hooks/useRecipeForm";

export function useIngredientSelection() {
  const [selectedIngredients, setSelectedIngredients] = useState<
    SelectedIngredient[]
  >([]);

  const isSelected = (id: string) =>
    selectedIngredients.some((ingredient) => ingredient.id === id);

  const toggleIngredient = (ingredient: MasterIngredient) => {
    if (isSelected(ingredient.id)) {
      setSelectedIngredients((prev) =>
        prev.filter((item) => item.id !== ingredient.id)
      );
    } else {
      setSelectedIngredients((prev) => [
        ...prev,
        {
          id: ingredient.id,
          name: ingredient.name,
          unit: ingredient.unit,
          quantity: "",
        },
      ]);
    }
  };

  const updateQuantity = (id: string, quantity: string) => {
    setSelectedIngredients((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const reset = () => setSelectedIngredients([]);

  return {
    selectedIngredients,
    isSelected,
    toggleIngredient,
    updateQuantity,
    removeIngredient,
    reset,
  };
}
