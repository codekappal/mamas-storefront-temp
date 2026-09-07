import { Clock, Users, User } from "lucide-react";

interface TagListProps {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

interface MetaRowProps {
  author: string;
  cookTime: string;
  servings: number;
}

export function MetaRow({ author, cookTime, servings }: MetaRowProps) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-500">
      <span className="flex items-center gap-1.5">
        <MetaIcon label="time" /> {cookTime}
      </span>
      <span className="flex items-center gap-1.5">
        <MetaIcon label="servings" /> {servings} servings
      </span>
      <span className="flex items-center gap-1.5">
        <MetaIcon label="author" /> {author}
      </span>
    </div>
  );
}

function MetaIcon({ label }: { label: "time" | "servings" | "author" }) {
  if (label === "time") {
    return <Clock className="h-4 w-4" />;
  }
  if (label === "servings") {
    return <Users className="h-4 w-4" />;
  }
  return <User className="h-4 w-4" />;
}
