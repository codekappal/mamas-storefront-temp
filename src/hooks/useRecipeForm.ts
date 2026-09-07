"use client";

import { useMemo, useState } from "react";
import { ingredientService } from "@/services";
import type { MasterIngredient } from "@/lib/types";
import { useIngredientSelection } from "@/hooks/useIngredientSelection";

export interface SelectedIngredient {
  id: string;
  name: string;
  unit: string;
  quantity: string;
}

export interface RecipeFormState {
  title: string;
  description: string;
  cookTime: string;
  servings: number;
  tags: string;
  instructions: string;
}

export interface RecipeFormViewModel {
  form: RecipeFormState;
  updateField: (field: keyof RecipeFormState, value: string | number) => void;
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  categories: string[];
  visibleIngredients: MasterIngredient[];
  selectedIngredients: SelectedIngredient[];
  isSelected: (id: string) => boolean;
  toggleIngredient: (ingredient: MasterIngredient) => void;
  updateQuantity: (id: string, quantity: string) => void;
  removeIngredient: (id: string) => void;
  error: string;
  submitted: boolean;
  submit: () => boolean;
  reset: () => void;
}

const emptyForm: RecipeFormState = {
  title: "",
  description: "",
  cookTime: "",
  servings: 4,
  tags: "",
  instructions: "",
};

export function useRecipeForm(): RecipeFormViewModel {
  const [form, setForm] = useState<RecipeFormState>(emptyForm);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    selectedIngredients,
    isSelected,
    toggleIngredient,
    updateQuantity,
    removeIngredient,
    reset: resetIngredients,
  } = useIngredientSelection();

  const categories = useMemo(() => ingredientService.listCategories(), []);

  const visibleIngredients = useMemo(() => {
    const byCategory = ingredientService.filterByCategory(category);
    const byTerm = ingredientService.filterByTerm(search);
    const categoryIds = byCategory.map((item) => item.id);
    return byTerm.filter((ingredient) => categoryIds.includes(ingredient.id));
  }, [category, search]);

  const updateField = (field: keyof RecipeFormState, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = (): string => {
    if (!form.title.trim()) {
      return "Please add a recipe title.";
    }
    if (selectedIngredients.length === 0) {
      return "Please add at least one ingredient.";
    }
    if (selectedIngredients.some((item) => !item.quantity.trim())) {
      return "Please add a quantity for every selected ingredient.";
    }
    if (!form.instructions.trim()) {
      return "Please add cooking instructions.";
    }
    return "";
  };

  const submit = (): boolean => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return false;
    }
    setError("");
    setSubmitted(true);
    return true;
  };

  const reset = () => {
    setForm(emptyForm);
    setSearch("");
    setCategory("all");
    setError("");
    setSubmitted(false);
    resetIngredients();
  };

  return {
    form,
    updateField,
    search,
    setSearch,
    category,
    setCategory,
    categories,
    visibleIngredients,
    selectedIngredients,
    isSelected,
    toggleIngredient,
    updateQuantity,
    removeIngredient,
    error,
    submitted,
    submit,
    reset,
  };
}
