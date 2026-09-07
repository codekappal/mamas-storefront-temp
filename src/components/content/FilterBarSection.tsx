import Link from "next/link";
import { Plus } from "lucide-react";
import type { ContentTab } from "@/lib/types";

interface FilterBarSectionProps {
  tab: ContentTab;
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
}

const recipeFilters = ["all", "South Indian", "Non-Veg", "Vegan", "Comfort"];
const blogFilters = ["all"];

export default function FilterBarSection({
  tab,
  activeFilter,
  onSelectFilter,
}: FilterBarSectionProps) {
  const filters = tab === "recipes" ? recipeFilters : blogFilters;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <FilterChip
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => onSelectFilter(filter)}
            />
          ))}
        </div>
        {tab === "recipes" && <CreateRecipeButton />}
      </div>
    </section>
  );
}

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
        isActive
          ? "bg-accent-600 text-white border-accent-600"
          : "bg-white text-neutral-600 border-neutral-200 hover:border-accent-400"
      }`}
    >
      {label === "all" ? "All" : label}
    </button>
  );
}

function CreateRecipeButton() {
  return (
    <Link
      href="/recipes/new"
      className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
    >
      <PlusIcon />
      Create Recipe
    </Link>
  );
}

function PlusIcon() {
  return <Plus className="h-5 w-5" />;
}
