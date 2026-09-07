"use client";

import { useMemo, useState } from "react";
import { recipeService, blogService } from "@/services";
import { filterRecipesByTag } from "@/lib/recipeFilter";
import { filterBlogs } from "@/lib/blogFilter";
import {
  countRecipes,
  countIngredients,
  averageCookTimeMinutes,
} from "@/lib/contentStats";
import type { ContentTab, ContentStats } from "@/lib/types";
import type { Recipe, BlogPost } from "@/lib/types";

export interface ContentViewModel {
  tab: ContentTab;
  filter: string;
  stats: ContentStats;
  filteredRecipes: Recipe[];
  filteredBlogs: BlogPost[];
  selectTab: (tab: ContentTab) => void;
  selectFilter: (filter: string) => void;
}

export function useContentManager(
  initialFilter: string = "all"
): ContentViewModel {
  const [tab, setTab] = useState<ContentTab>("recipes");
  const [filter, setFilter] = useState<string>(initialFilter);

  const recipes = useMemo(() => recipeService.list(), []);
  const blogs = useMemo(() => blogService.list(), []);

  const stats = useMemo<ContentStats>(
    () => ({
      totalRecipes: countRecipes(recipes),
      totalBlogs: blogs.length,
      totalIngredients: countIngredients(recipes),
      avgCookTimeMinutes: averageCookTimeMinutes(recipes),
    }),
    [recipes, blogs]
  );

  const filteredRecipes = useMemo(
    () => filterRecipesByTag(recipes, filter),
    [recipes, filter]
  );

  const filteredBlogs = useMemo(
    () => filterBlogs(blogs, filter),
    [blogs, filter]
  );

  const selectTab = (nextTab: ContentTab) => {
    setTab(nextTab);
    setFilter("all");
  };

  const selectFilter = (nextFilter: string) => {
    setFilter(nextFilter);
  };

  return {
    tab,
    filter,
    stats,
    filteredRecipes,
    filteredBlogs,
    selectTab,
    selectFilter,
  };
}
