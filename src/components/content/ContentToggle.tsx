"use client";

import type { ContentTab } from "@/lib/types";
import { Soup, FileText } from "lucide-react";

interface ContentToggleProps {
  activeTab: ContentTab;
  onSelect: (tab: ContentTab) => void;
}

interface ToggleOption {
  tab: ContentTab;
  label: string;
  icon: keyof typeof iconMap;
}

const iconMap = {
  soup: Soup,
  file: FileText,
} as const;

const toggleOptions: ToggleOption[] = [
  { tab: "recipes", label: "Recipes", icon: "soup" },
  { tab: "blogs", label: "Blogs", icon: "file" },
];

export default function ContentToggle({
  activeTab,
  onSelect,
}: ContentToggleProps) {
  return (
    <div className="mt-8 inline-flex rounded-xl bg-white/10 backdrop-blur p-1 border border-white/20">
      {toggleOptions.map((option) => {
        const Icon = iconMap[option.icon];
        return (
          <button
            key={option.tab}
            type="button"
            onClick={() => onSelect(option.tab)}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-colors ${
              activeTab === option.tab
                ? "bg-white text-primary-800 shadow"
                : "text-primary-100 hover:text-white"
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden />
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
