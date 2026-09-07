import type { ContentStats } from "@/lib/types";
import { Soup, FileText, Flame, Clock } from "lucide-react";

interface StatsSectionProps {
  stats: ContentStats;
}

interface TeamStat {
  icon: keyof typeof iconMap;
  value: string;
  label: string;
}

const iconMap = {
  soup: Soup,
  file: FileText,
  flame: Flame,
  clock: Clock,
} as const;

export default function StatsSection({ stats }: StatsSectionProps) {
  const teamStats: TeamStat[] = [
    { icon: "soup", value: String(stats.totalRecipes), label: "Recipes" },
    { icon: "file", value: String(stats.totalBlogs), label: "Blog Posts" },
    { icon: "flame", value: String(stats.totalIngredients), label: "Ingredients" },
    {
      icon: "clock",
      value: `${stats.avgCookTimeMinutes}m`,
      label: "Avg. Cook Time",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {teamStats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ stat }: { stat: TeamStat }) {
  const Icon = iconMap[stat.icon];
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-accent-50/50">
      <Icon className="h-8 w-8 text-accent-600" aria-hidden />
      <div>
        <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
        <p className="text-sm text-neutral-500">{stat.label}</p>
      </div>
    </div>
  );
}
