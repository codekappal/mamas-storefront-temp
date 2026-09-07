"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useContentManager } from "@/hooks/useContentManager";
import ContentHeaderSection from "@/components/content/ContentHeaderSection";
import StatsSection from "@/components/content/StatsSection";
import FilterBarSection from "@/components/content/FilterBarSection";
import ContentGrid from "@/components/content/ContentGrid";

export default function ContentPage() {
  return (
    <Suspense fallback={null}>
      <ContentPageInner />
    </Suspense>
  );
}

function ContentPageInner() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") ?? "all";
  const content = useContentManager(initialFilter);

  return (
    <div className="bg-neutral-100 min-h-screen">
      <ContentHeaderSection
        activeTab={content.tab}
        onSelectTab={content.selectTab}
      />
      <StatsSection stats={content.stats} />
      <FilterBarSection
        tab={content.tab}
        activeFilter={content.filter}
        onSelectFilter={content.selectFilter}
      />
      <ContentGrid
        tab={content.tab}
        recipes={content.filteredRecipes}
        blogs={content.filteredBlogs}
      />
    </div>
  );
}
