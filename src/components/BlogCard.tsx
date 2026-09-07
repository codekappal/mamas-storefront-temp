import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="h-40 bg-accent-100 flex items-center justify-center">
        <span className="text-5xl">🌿</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs px-2.5 py-1 rounded-full bg-accent-600 text-white font-medium">
            {blog.category}
          </span>
          <span className="text-xs text-neutral-400">{formatDate(blog.createdAt)}</span>
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          {blog.title}
        </h3>
        <p className="text-sm text-neutral-500 line-clamp-3">{blog.excerpt}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100">
          <span className="text-sm text-neutral-500">{blog.author}</span>
          <Link
            href={`/recipes?post=${blog.id}`}
            className="inline-flex items-center gap-1 text-accent-700 hover:text-accent-800 text-sm font-medium"
          >
            Read more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
