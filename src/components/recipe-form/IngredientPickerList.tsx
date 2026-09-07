import { Check } from "lucide-react";
import type { MasterIngredient } from "@/lib/types";

interface IngredientListProps {
  ingredients: MasterIngredient[];
  isSelected: (id: string) => boolean;
  onToggle: (ingredient: MasterIngredient) => void;
}

export function IngredientList({
  ingredients,
  isSelected,
  onToggle,
}: IngredientListProps) {
  if (ingredients.length === 0) {
    return (
      <p className="text-sm text-neutral-400 py-8 text-center">
        No ingredients found.
      </p>
    );
  }
  return (
    <div className="max-h-[420px] overflow-y-auto pr-1 space-y-2">
      {ingredients.map((ingredient) => (
        <IngredientRow
          key={ingredient.id}
          ingredient={ingredient}
          isSelected={isSelected(ingredient.id)}
          onToggle={() => onToggle(ingredient)}
        />
      ))}
    </div>
  );
}

interface IngredientRowProps {
  ingredient: MasterIngredient;
  isSelected: boolean;
  onToggle: () => void;
}

function IngredientRow({
  ingredient,
  isSelected,
  onToggle,
}: IngredientRowProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full flex items-center justify-between gap-3 p-3 rounded-lg border text-left transition-colors ${
        isSelected
          ? "border-accent-500 bg-accent-50"
          : "border-neutral-200 hover:border-accent-300 hover:bg-accent-50/40"
      }`}
    >
      <div className="min-w-0">
        <p className="text-sm font-medium text-neutral-800 truncate">
          {ingredient.name}
        </p>
        <p className="text-xs text-neutral-400">{ingredient.category}</p>
      </div>
      <Checkbox isChecked={isSelected} />
    </button>
  );
}

function Checkbox({ isChecked }: { isChecked: boolean }) {
  return (
    <span
      className={`flex-shrink-0 h-5 w-5 rounded border-2 flex items-center justify-center ${
        isChecked ? "bg-accent-600 border-accent-600" : "border-neutral-300"
      }`}
    >
      {isChecked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
    </span>
  );
}
