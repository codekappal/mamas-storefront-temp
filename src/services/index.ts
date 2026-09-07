import {
  products,
  featuredProductIds,
  recipes,
  blogPosts,
  masterIngredients,
} from "@/data/mock";
import type {
  Product,
  Recipe,
  BlogPost,
  MasterIngredient,
} from "@/lib/types";

export const productService = {
  list(): Product[] {
    return products;
  },

  listFeatured(): Product[] {
    return featuredProductIds
      .map((id) => products.find((product) => product.id === id))
      .filter((product): product is Product => Boolean(product));
  },

  listCategories(): string[] {
    return Array.from(new Set(products.map((product) => product.category)));
  },

  listByCategory(category: string): Product[] {
    return products.filter((product) => product.category === category);
  },

  findById(id: string): Product | undefined {
    return products.find((product) => product.id === id);
  },
};

export const recipeService = {
  list(): Recipe[] {
    return recipes;
  },

  findById(id: string): Recipe | undefined {
    return recipes.find((recipe) => recipe.id === id);
  },
};

export const blogService = {
  list(): BlogPost[] {
    return blogPosts;
  },
};

export const ingredientService = {
  listMaster(): MasterIngredient[] {
    return masterIngredients;
  },

  listCategories(): string[] {
    return Array.from(
      new Set(masterIngredients.map((ingredient) => ingredient.category))
    );
  },

  filterByTerm(term: string): MasterIngredient[] {
    const query = term.trim().toLowerCase();
    if (!query) {
      return masterIngredients;
    }
    return masterIngredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query)
    );
  },

  filterByCategory(category: string): MasterIngredient[] {
    if (category === "all") {
      return masterIngredients;
    }
    return masterIngredients.filter(
      (ingredient) => ingredient.category === category
    );
  },
};
