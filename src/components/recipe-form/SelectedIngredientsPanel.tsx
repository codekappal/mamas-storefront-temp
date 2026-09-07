import { X } from "lucide-react";
import type { SelectedIngredient } from "@/hooks/useRecipeForm";

interface SelectedIngredientsPanelProps {
  ingredients: SelectedIngredient[];
  onUpdateQuantity: (id: string, quantity: string) => void;
  onRemove: (id: string) => void;
}

export default function SelectedIngredientsPanel({
  ingredients,
  onUpdateQuantity,
  onRemove,
}: SelectedIngredientsPanelProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
        <span>🍽️</span> Selected Ingredients ({ingredients.length})
      </h2>
      {ingredients.length === 0 ? (
        <p className="text-sm text-neutral-400">
          Use the ingredient picker on the right to add ingredients from our
          master product list.
        </p>
      ) : (
        <ul className="space-y-3">
          {ingredients.map((ingredient) => (
            <SelectedIngredientItem
              key={ingredient.id}
              ingredient={ingredient}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

interface SelectedIngredientItemProps {
  ingredient: SelectedIngredient;
  onUpdateQuantity: (id: string, quantity: string) => void;
  onRemove: (id: string) => void;
}

function SelectedIngredientItem({
  ingredient,
  onUpdateQuantity,
  onRemove,
}: SelectedIngredientItemProps) {
  return (
    <li className="flex items-center gap-3 p-3 rounded-lg bg-accent-50/60 border border-accent-100">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-800 truncate">
          {ingredient.name}
        </p>
        <p className="text-xs text-neutral-400">{ingredient.unit}</p>
      </div>
      <input
        type="text"
        value={ingredient.quantity}
        onChange={(e) => onUpdateQuantity(ingredient.id, e.target.value)}
        placeholder="Qty"
        aria-label={`Quantity for ${ingredient.name}`}
        className="w-20 px-2 py-1.5 text-sm rounded-md border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
      />
      <button
        type="button"
        onClick={() => onRemove(ingredient.id)}
        className="text-neutral-400 hover:text-red-500 transition-colors"
        aria-label={`Remove ${ingredient.name}`}
      >
        <RemoveIcon />
      </button>
    </li>
  );
}

function RemoveIcon() {
  return <X className="h-5 w-5" />;
}
