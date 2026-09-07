import Link from "next/link";

interface RecipeSuccessProps {
  title: string;
  ingredientCount: number;
}

export default function RecipeSuccess({
  title,
  ingredientCount,
}: RecipeSuccessProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-12 text-center max-w-xl mx-auto">
      <p className="text-6xl mb-4">🎉</p>
      <h2 className="text-2xl font-bold text-neutral-900 mb-2">Recipe submitted!</h2>
      <p className="text-neutral-500 mb-6">
        <strong>{title}</strong> has been created with {ingredientCount}{" "}
        ingredient{ingredientCount !== 1 ? "s" : ""}. Our team will review and
        publish it soon.
      </p>
      <Link
        href="/recipes"
        className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Back to Recipes
      </Link>
    </div>
  );
}
