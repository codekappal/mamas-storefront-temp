import type { MasterIngredient } from "@/lib/types";
import { IngredientList } from "@/components/recipe-form/IngredientPickerList";

interface IngredientPickerProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
  ingredients: MasterIngredient[];
  isSelected: (id: string) => boolean;
  onToggle: (ingredient: MasterIngredient) => void;
}

export default function IngredientPicker({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
  ingredients,
  isSelected,
  onToggle,
}: IngredientPickerProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 lg:sticky lg:top-24">
      <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
        <span>🌶️</span> Ingredient Picker
      </h2>
      <p className="text-sm text-neutral-500 mb-4">
        Search and select ingredients from our master product list to add to
        your recipe.
      </p>
      <SearchInput value={search} onChange={onSearchChange} />
      <CategoryFilter
        categories={categories}
        activeCategory={category}
        onSelect={onCategoryChange}
      />
      <IngredientList
        ingredients={ingredients}
        isSelected={isSelected}
        onToggle={onToggle}
      />
    </div>
  );
}

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search ingredients..."
      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none mb-3"
    />
  );
}

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

function CategoryFilter({
  categories,
  activeCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onSelect(item)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
            activeCategory === item
              ? "bg-accent-600 text-white border-accent-600"
              : "bg-white text-neutral-600 border-neutral-200 hover:border-accent-400"
          }`}
        >
          {item === "all" ? "All" : item}
        </button>
      ))}
    </div>
  );
}
