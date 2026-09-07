import type { BlogPost } from "@/lib/types";

export function blogMatchesQuery(blog: BlogPost, query: string): boolean {
  const haystack = `${blog.title} ${blog.category} ${blog.tags.join(
    " "
  )}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export function filterBlogs(blogs: BlogPost[], filter: string): BlogPost[] {
  if (filter === "all" || filter === "blogs") {
    return blogs;
  }
  return blogs.filter((blog) => blogMatchesQuery(blog, filter));
}
