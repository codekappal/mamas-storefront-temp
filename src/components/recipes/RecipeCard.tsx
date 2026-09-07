import Link from "next/link";
import Image from "next/image";
import type { Recipe } from "@/lib/types";

interface RecipeCardProps {
  recipe: Recipe;
  imageSrc: string;
  imageAlt: string;
}

export default function RecipeCard({ recipe, imageSrc, imageAlt }: RecipeCardProps) {
  const tag = recipe.tags[0];

  return (
    <article className="group">
      <Link href={`/recipes/${recipe.id}`} className="block" aria-label={recipe.title}>
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="pt-5">
          <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
            {tag ? <span className="text-accent-600">{tag}</span> : null}
            <span>{recipe.cookTime}</span>
          </div>
          <h3 className="mt-2 font-serif text-xl leading-snug text-neutral-900 group-hover:text-primary-700">
            {recipe.title}
          </h3>
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors group-hover:text-accent-700">
            View Recipe
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
