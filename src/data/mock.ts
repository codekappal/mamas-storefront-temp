import type {
  Product,
  Recipe,
  BlogPost,
  MasterIngredient,
} from "@/lib/types";

export const products: Product[] = [
  {
    id: "turmeric",
    name: "Turmeric Powder",
    category: "Powdered Spices",
    price: 45,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/turmeric-50-f.jpg",
    description:
      "Bright golden turmeric from Erode, known for its rich curcumin content and earthy aroma.",
    weight: "200g",
  },
  {
    id: "red-chili-powder",
    name: "Red Chili Powder",
    category: "Powdered Spices",
    price: 60,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/red-chilli-50-f.jpg",
    description:
      "Fiery Guntur chili powder with a deep red hue and a punchy heat that elevates any curry.",
    weight: "200g",
  },
  {
    id: "coriander-powder",
    name: "Coriander Powder",
    category: "Powdered Spices",
    price: 50,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/coriander-powder-50g.jpg",
    description:
      "Freshly ground coriander with a citrusy, nutty flavor that forms the base of South Indian cooking.",
    weight: "200g",
  },
  {
    id: "cumin-powder",
    name: "Cumin Powder",
    category: "Powdered Spices",
    price: 55,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/cuminpowder50f.jpg",
    description:
      "Warm, earthy ground cumin with a distinctive aromatic kick, perfect for tempering and marinades.",
    weight: "150g",
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    category: "Whole Spices",
    price: 120,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/blackpepper50.jpg",
    description:
      "Whole Malabar black peppercorns with a sharp, pungent bite and delightful citrus notes.",
    weight: "100g",
  },
  {
    id: "cumin-seeds",
    name: "Cumin Seeds",
    category: "Whole Spices",
    price: 65,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/cumin50.jpg",
    description:
      "Whole jeera seeds with an intense earthy aroma, used for tempering and spice blends.",
    weight: "200g",
  },
  {
    id: "cardamom",
    name: "Cardamom (Elaichi)",
    category: "Whole Spices",
    price: 180,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/fennerl.jpg",
    description:
      "Fragrant green cardamom pods with a sweet, floral essence that perfumes desserts and chai.",
    weight: "50g",
  },
  {
    id: "cloves",
    name: "Cloves",
    category: "Whole Spices",
    price: 95,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/pepperpowder50f.jpg",
    description:
      "Whole dried clove buds with a potent, warm sweet spice perfect for biryanis and garam masala.",
    weight: "50g",
  },
  {
    id: "bay-leaves",
    name: "Bay Leaves",
    category: "Whole Spices",
    price: 40,
    image: "https://placehold.co/600x600/1b3627/e0eee3?text=Bay%20Leaves",
    description:
      "Aromatic Indian bay leaves that add depth and a subtle herbal note to curries and rice.",
    weight: "30g",
  },
  {
    id: "mustard-seeds",
    name: "Mustard Seeds",
    category: "Whole Spices",
    price: 35,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/mustard-1.jpg",
    description:
      "Small black mustard seeds that pop and crackle in hot oil, a signature South Indian tempering staple.",
    weight: "150g",
  },
  {
    id: "asafoetida",
    name: "Asafoetida (Hing)",
    category: "Powdered Spices",
    price: 85,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/Rasam50g.jpg",
    description:
      "Strong, pungent hing powder that adds a unique savory depth to dals and curries.",
    weight: "50g",
  },
  {
    id: "garam-masala",
    name: "Garam Masala",
    category: "Masala Blends",
    price: 110,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/curry50f.jpg",
    description:
      "A warming blend of cinnamon, cloves, cardamom, and pepper that adds richness to North Indian dishes.",
    weight: "200g",
  },
  {
    id: "sambar-powder",
    name: "Sambar Powder",
    category: "Masala Blends",
    price: 90,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/sambar-powder-50-f.jpg",
    description:
      "Authentic roasted sambar powder that instantly brings your dal and vegetable stew to life.",
    weight: "200g",
  },
  {
    id: "chicken-masala",
    name: "Chicken Masala",
    category: "Masala Blends",
    price: 100,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/chicken50f.jpg",
    description:
      "A robust, spice forward blend crafted for juicy, aromatic chicken curries.",
    weight: "200g",
  },
  {
    id: "biryani-masala",
    name: "Biryani Masala",
    category: "Masala Blends",
    price: 130,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/biriyani50f-1.jpg",
    description:
      "A fragrant royal blend of whole spices for layered, restaurant style biryani.",
    weight: "200g",
  },
  {
    id: "curry-leaves",
    name: "Curry Leaves",
    category: "Seasonings",
    price: 30,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/Kulambu500Front.jpg",
    description:
      "Dried curry leaves with a distinctive citrusy aroma essential to South Indian tempering.",
    weight: "50g",
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
    category: "Whole Spices",
    price: 75,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/biriyani50f-1.jpg",
    description:
      "Sweet, woody cinnamon sticks that warm up curries, biryanis, and masala chai.",
    weight: "100g",
  },
  {
    id: "dried-mint",
    name: "Dried Mint",
    category: "Herbs",
    price: 55,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/Idly50g.jpg",
    description:
      "Cooling dried mint leaves perfect for raitas, chutneys, and refreshing summer drinks.",
    weight: "50g",
  },
  {
    id: "fenugreek",
    name: "Fenugreek (Methi)",
    category: "Herbs",
    price: 45,
    image: "https://www.maamis.com/wp-content/uploads/2021/06/fenugreek.jpg",
    description:
      "Slightly bitter fenugreek seeds that lend depth to spice blends and pickles.",
    weight: "150g",
  },
];

export const featuredProductIds: string[] = [
  "turmeric",
  "red-chili-powder",
  "garam-masala",
  "biryani-masala",
  "sambar-powder",
  "black-pepper",
];

export const recipes: Recipe[] = [
  {
    id: "south-indian-sambar",
    title: "South Indian Sambar",
    description:
      "A comforting, tangy lentil and vegetable stew flavored with roasted sambar powder and a crackling tempering.",
    ingredients: [
      { productId: "turmeric", productName: "Turmeric Powder", quantity: "1 tsp" },
      { productId: "sambar-powder", productName: "Sambar Powder", quantity: "2 tbsp" },
      { productId: "mustard-seeds", productName: "Mustard Seeds", quantity: "1 tsp" },
      { productId: "asafoetida", productName: "Asafoetida (Hing)", quantity: "1/2 tsp" },
      { productId: "curry-leaves", productName: "Curry Leaves", quantity: "10 leaves" },
      { productId: "red-chili-powder", productName: "Red Chili Powder", quantity: "1 tsp" },
    ],
    instructions: [
      "Pressure cook toor dal with turmeric until soft and mash well.",
      "Boil vegetables of choice in water with sambar powder and salt.",
      "Add the mashed dal and simmer for 10 minutes.",
      "In a small pan, heat oil and splutter mustard seeds.",
      "Add asafoetida and curry leaves, then pour over the sambar.",
      "Stir, simmer for 5 minutes, and serve hot with rice.",
    ],
    cookTime: "35 minutes",
    servings: 4,
    author: "Maamis Kitchen",
    createdAt: "2026-05-12",
    tags: ["South Indian", "Vegan", "Staple"],
  },
  {
    id: "chettinad-chicken",
    title: "Chettinad Chicken",
    description:
      "A bold, fiery chicken curry from the Chettinad region loaded with roasted whole spices.",
    ingredients: [
      { productId: "chicken-masala", productName: "Chicken Masala", quantity: "2 tbsp" },
      { productId: "black-pepper", productName: "Black Pepper", quantity: "1 tbsp" },
      { productId: "cumin-seeds", productName: "Cumin Seeds", quantity: "1 tsp" },
      { productId: "coriander-powder", productName: "Coriander Powder", quantity: "1 tbsp" },
      { productId: "turmeric", productName: "Turmeric Powder", quantity: "1/2 tsp" },
      { productId: "curry-leaves", productName: "Curry Leaves", quantity: "8 leaves" },
    ],
    instructions: [
      "Dry roast cumin and black pepper, then grind to a coarse powder.",
      "Marinate chicken with turmeric, salt, and half the spice mix for 30 minutes.",
      "Heat oil, add curry leaves, onions, ginger garlic and cook till golden.",
      "Add chicken masala, coriander powder, and the remaining ground spices.",
      "Add the chicken and cook covered until tender.",
      "Garnish with fresh coriander and serve with parotta or rice.",
    ],
    cookTime: "50 minutes",
    servings: 4,
    author: "Maamis Kitchen",
    createdAt: "2026-06-03",
    tags: ["Non Veg", "Fiery", "Chettinad"],
  },
  {
    id: "biryani-masala-rice",
    title: "Biryani Masala Rice",
    description:
      "An aromatic one pot rice dish infused with premium biryani masala and whole spices.",
    ingredients: [
      { productId: "biryani-masala", productName: "Biryani Masala", quantity: "2 tbsp" },
      { productId: "bay-leaves", productName: "Bay Leaves", quantity: "2 leaves" },
      { productId: "cloves", productName: "Cloves", quantity: "4 pieces" },
      { productId: "cardamom", productName: "Cardamom (Elaichi)", quantity: "3 pods" },
      { productId: "cinnamon", productName: "Cinnamon", quantity: "1 stick" },
      { productId: "turmeric", productName: "Turmeric Powder", quantity: "1/2 tsp" },
    ],
    instructions: [
      "Rinse and soak basmati rice for 30 minutes.",
      "Heat ghee in a heavy pot and sauté bay leaves, cloves, cardamom, and cinnamon.",
      "Add the rice and fry gently for 2 minutes.",
      "Stir in biryani masala and turmeric with a little water.",
      "Add measured boiling water, cover, and cook on low till rice is fluffy.",
      "Rest for 10 minutes, then fluff and serve with raita.",
    ],
    cookTime: "40 minutes",
    servings: 4,
    author: "Maamis Kitchen",
    createdAt: "2026-04-20",
    tags: ["One Pot", "Aromatic", "Vegan"],
  },
  {
    id: "masala-chai",
    title: "Masala Chai",
    description:
      "A fragrant, spiced Indian tea simmered with cardamom, cloves, and fresh ginger.",
    ingredients: [
      { productId: "cardamom", productName: "Cardamom (Elaichi)", quantity: "3 pods" },
      { productId: "cloves", productName: "Cloves", quantity: "2 pieces" },
      { productId: "cumin-powder", productName: "Cumin Powder", quantity: "1/4 tsp" },
      { productId: "black-pepper", productName: "Black Pepper", quantity: "1/4 tsp" },
    ],
    instructions: [
      "Crush cardamom pods and cloves lightly.",
      "Bring water, crushed spices, and grated ginger to a boil.",
      "Add loose tea leaves and simmer for 3 minutes.",
      "Pour in milk and sugar, then bring to a gentle boil.",
      "Strain into cups and serve steaming hot.",
    ],
    cookTime: "15 minutes",
    servings: 2,
    author: "Maamis Kitchen",
    createdAt: "2026-03-15",
    tags: ["Beverage", "Comfort", "Tea"],
  },
  {
    id: "classic-rasam",
    title: "Classic Rasam",
    description:
      "A soothing, peppery South Indian soup that is both light and bursting with flavor.",
    ingredients: [
      { productId: "coriander-powder", productName: "Coriander Powder", quantity: "1 tbsp" },
      { productId: "cumin-seeds", productName: "Cumin Seeds", quantity: "1 tsp" },
      { productId: "black-pepper", productName: "Black Pepper", quantity: "1 tsp" },
      { productId: "turmeric", productName: "Turmeric Powder", quantity: "1/2 tsp" },
      { productId: "asafoetida", productName: "Asafoetida (Hing)", quantity: "1/4 tsp" },
      { productId: "curry-leaves", productName: "Curry Leaves", quantity: "6 leaves" },
    ],
    instructions: [
      "Roast cumin and pepper, then blend to a fine powder.",
      "Add tamarind extract, turmeric, and water and bring to a simmer.",
      "Stir in the ground spice mix and coriander powder.",
      "Prepare a tempering of mustard seeds, asafoetida, and curry leaves.",
      "Pour the tempering into the rasam and simmer for 5 minutes.",
      "Serve hot with steamed rice or as a comforting soup.",
    ],
    cookTime: "25 minutes",
    servings: 3,
    author: "Maamis Kitchen",
    createdAt: "2026-02-27",
    tags: ["Soup", "Light", "South Indian"],
  },
  {
    id: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    description:
      "Creamy, mildly spiced paneer in a rich tomato butter gravy finished with garam masala.",
    ingredients: [
      { productId: "garam-masala", productName: "Garam Masala", quantity: "1 tsp" },
      { productId: "red-chili-powder", productName: "Red Chili Powder", quantity: "1 tsp" },
      { productId: "cumin-powder", productName: "Cumin Powder", quantity: "1/2 tsp" },
      { productId: "coriander-powder", productName: "Coriander Powder", quantity: "1 tbsp" },
      { productId: "turmeric", productName: "Turmeric Powder", quantity: "1/4 tsp" },
      { productId: "fenugreek", productName: "Fenugreek (Methi)", quantity: "1/2 tsp" },
    ],
    instructions: [
      "Sauté tomato puree in butter until thick and fragrant.",
      "Add turmeric, red chili, cumin, and coriander powders and cook.",
      "Blend the mixture smooth and return to the pan.",
      "Stir in cream, garam masala, and fenugreek.",
      "Add paneer cubes and simmer gently until coated.",
      "Serve hot with naan or jeera rice.",
    ],
    cookTime: "35 minutes",
    servings: 4,
    author: "Maamis Kitchen",
    createdAt: "2026-01-18",
    tags: ["Vegetarian", "Creamy", "North Indian"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "history-of-indian-spices",
    title: "The History of Indian Spices",
    excerpt:
      "From ancient trade routes to modern kitchens, discover how Indian spices shaped world history.",
    content:
      "Indian spices have been prized for millennia, attracting traders from Rome, Arabia, and beyond. Black pepper was once so valuable it was called 'black gold,' driving the Age of Exploration. Today the same turmeric, cardamom, and chili that filled spice ships continue to define global cuisine, carrying centuries of culture in every pinch.",
    author: "Maamis Kitchen",
    createdAt: "2026-07-01",
    tags: ["History", "Culture"],
    category: "Spice Stories",
  },
  {
    id: "benefits-of-turmeric",
    title: "Benefits of Turmeric",
    excerpt:
      "The golden spice is more than a color, it is packed with curcumin and wellness potential.",
    content:
      "Turmeric owes its vibrant hue and health reputation to curcumin, a compound known for its antioxidant and anti inflammatory properties. Traditionally used in South Indian cooking and Ayurveda, turmeric brightens curries, lentil soups, and milk while adding warmth to every dish. A daily pinch goes a long way.",
    author: "Maamis Kitchen",
    createdAt: "2026-07-12",
    tags: ["Health", "Turmeric"],
    category: "Healthy Living",
  },
  {
    id: "how-to-store-masalas",
    title: "How to Store Your Masalas",
    excerpt:
      "Keep your spices fresh and aromatic longer with these simple storage tips.",
    content:
      "Whole spices stay fresh for up to two years, while ground masalas are best within six months. Store spices in airtight, opaque jars away from heat and direct sunlight. Grind whole spices in small batches to preserve aroma, and always use a dry spoon to keep moisture out and flavor in.",
    author: "Maamis Kitchen",
    createdAt: "2026-08-05",
    tags: ["Storage", "Tips"],
    category: "Kitchen Tips",
  },
  {
    id: "health-benefits-of-cumin",
    title: "Health Benefits of Cumin",
    excerpt:
      "This warming spice supports digestion, immunity, and everyday wellness.",
    content:
      "Cumin, or jeera, has long been a kitchen staple famous for aiding digestion. Rich in iron and antioxidants, it supports immunity and gut health. Whether toasted whole, ground into powder, or brewed as jeera water, cumin is an easy, delicious addition to a healthier daily routine.",
    author: "Maamis Kitchen",
    createdAt: "2026-08-22",
    tags: ["Health", "Cumin"],
    category: "Healthy Living",
  },
];

export function masterIngredientUnitFor(id: string): string {
  switch (id) {
    case "cardamom":
    case "cloves":
    case "cinnamon":
      return "pieces";
    case "bay-leaves":
    case "curry-leaves":
      return "leaves";
    case "mustard-seeds":
    case "cumin-seeds":
    case "black-pepper":
    case "dried-mint":
    case "fenugreek":
      return "tsp";
    case "asafoetida":
      return "pinch";
    default:
      return "tbsp";
  }
}

export const masterIngredients: MasterIngredient[] = products.map((product) => ({
  id: product.id,
  name: product.name,
  category: product.category,
  unit: masterIngredientUnitFor(product.id),
}));
