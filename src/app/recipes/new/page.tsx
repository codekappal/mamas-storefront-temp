"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRecipeForm } from "@/hooks/useRecipeForm";
import type { RecipeFormViewModel } from "@/hooks/useRecipeForm";
import RecipeDetailsForm from "@/components/recipe-form/RecipeDetailsForm";
import SelectedIngredientsPanel from "@/components/recipe-form/SelectedIngredientsPanel";
import InstructionsField from "@/components/recipe-form/InstructionsField";
import IngredientPicker from "@/components/recipe-form/IngredientPicker";
import SubmitButton from "@/components/recipe-form/SubmitButton";
import FormError from "@/components/recipe-form/FormError";
import RecipeSuccess from "@/components/recipe-form/RecipeSuccess";

export default function NewRecipePage() {
  const recipe = useRecipeForm();

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader />

        {recipe.submitted ? (
          <RecipeSuccess
            title={recipe.form.title}
            ingredientCount={recipe.selectedIngredients.length}
          />
        ) : (
          <RecipeBuilder recipe={recipe} />
        )}
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="mb-8">
      <BackLink />
      <h1 className="text-4xl font-bold text-neutral-900">Create Recipe</h1>
      <p className="text-neutral-500 mt-2 max-w-2xl">
        Craft your own dish. Select ingredients from our master product list and
        add your own instructions.
      </p>
    </div>
  );
}

function BackLink() {
  return (
    <Link
      href="/recipes"
      className="inline-flex items-center gap-1 text-accent-700 hover:text-accent-800 text-sm font-medium mb-4"
    >
      <BackIcon />
      Back to recipes
    </Link>
  );
}

function BackIcon() {
  return <ArrowLeft className="h-4 w-4" />;
}

function RecipeBuilder({ recipe }: { recipe: RecipeFormViewModel }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <LeftColumn recipe={recipe} />
      <IngredientPicker
        search={recipe.search}
        onSearchChange={recipe.setSearch}
        category={recipe.category}
        onCategoryChange={recipe.setCategory}
        categories={recipe.categories}
        ingredients={recipe.visibleIngredients}
        isSelected={recipe.isSelected}
        onToggle={recipe.toggleIngredient}
      />
    </div>
  );
}

function LeftColumn({ recipe }: { recipe: RecipeFormViewModel }) {
  return (
    <div className="space-y-6">
      <RecipeDetailsForm form={recipe.form} onChange={recipe.updateField} />
      <SelectedIngredientsPanel
        ingredients={recipe.selectedIngredients}
        onUpdateQuantity={recipe.updateQuantity}
        onRemove={recipe.removeIngredient}
      />
      <InstructionsField
        value={recipe.form.instructions}
        onChange={(value) => recipe.updateField("instructions", value)}
      />
      <FormError message={recipe.error} />
      <SubmitButton onSubmit={recipe.submit} />
    </div>
  );
}
