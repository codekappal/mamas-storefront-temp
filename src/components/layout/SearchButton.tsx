import { Search, ChevronDown } from "lucide-react";

interface SearchButtonProps {
  transparent: boolean;
  fullWidth?: boolean;
}

export default function SearchButton({
  transparent,
  fullWidth = false,
}: SearchButtonProps) {
  return (
    <button
      type="button"
      aria-label="Search"
      className={`inline-flex items-center gap-2 rounded-full transition-colors ${
        fullWidth ? "w-full justify-start px-4 py-2.5 text-left" : "p-2"
      } ${
        transparent
          ? "text-white hover:bg-white/10"
          : "text-neutral-700 hover:bg-neutral-100"
      }`}
    >
      <Search className="h-5 w-5" />
      {fullWidth ? <span className="text-neutral-500">Search</span> : null}
    </button>
  );
}

export function ChevronIcon({ open }: { open: boolean }) {
  return (
    <ChevronDown
      className={`h-3.5 w-3.5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      strokeWidth={2.5}
    />
  );
}
