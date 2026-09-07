import Link from "next/link";
import { Clock, Users } from "lucide-react";
import type { Recipe } from "@/lib/types";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group flex flex-col h-full"
    >
      <div className="p-6 flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {recipe.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-accent-100 text-accent-800 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
          {recipe.title}
        </h3>
        <p className="text-sm text-neutral-500 mt-2 line-clamp-2">
          {recipe.description}
        </p>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <div className="flex items-center gap-6 text-sm text-neutral-500 pt-4 border-t border-neutral-100">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-accent-600" />
            {recipe.cookTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-4 w-4 text-accent-600" />
            {recipe.servings} servings
          </span>
        </div>
      </div>
    </Link>
  );
}
