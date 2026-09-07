import type { ContentTab, Recipe, BlogPost } from "@/lib/types";
import RecipeCard from "@/components/RecipeCard";
import BlogCard from "@/components/BlogCard";
import EmptyState from "@/components/shared/EmptyState";

interface ContentGridProps {
  tab: ContentTab;
  recipes: Recipe[];
  blogs: BlogPost[];
}

export default function ContentGrid({ tab, recipes, blogs }: ContentGridProps) {
  if (tab === "recipes") {
    return recipes.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    ) : (
      <EmptyState message="No recipes found for this filter." />
    );
  }

  return blogs.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  ) : (
    <EmptyState message="No blog posts found for this filter." />
  );
}
