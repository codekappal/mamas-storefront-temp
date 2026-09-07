export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  weight: string;
}

export interface RecipeIngredient {
  productId: string;
  productName: string;
  quantity: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
  cookTime: string;
  servings: number;
  author: string;
  createdAt: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  createdAt: string;
  tags: string[];
  category: string;
}

export type ContentTab = "recipes" | "blogs";

export interface MasterIngredient {
  id: string;
  name: string;
  category: string;
  unit: string;
}

export interface ContentStats {
  totalRecipes: number;
  totalBlogs: number;
  totalIngredients: number;
  avgCookTimeMinutes: number;
}

export interface FeaturedSectionProduct {
  product: Product;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}
