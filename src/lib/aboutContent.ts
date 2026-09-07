import type { Benefit } from "@/lib/types";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const aboutHeaderContent = {
  eyebrow: "Our Story",
  title: "The Soul of Indian Cooking, in Every Jar",
  subtitle:
    "Maamis was born from a simple belief, that the best food starts with the best spices.",
};

export const aboutIntroContent = {
  title: "Who We Are",
  paragraphs: [
    "We are a family run brand that started in a small home kitchen, grinding spices the way our grandmothers always did, slowly, by hand, with love. Today, we bring that same tradition to kitchens across the country.",
  ],
};

export const aboutValues: Benefit[] = [
  {
    icon: "🌱",
    title: "Purity",
    description: "100% natural spices, no fillers, no artificial colors.",
  },
  {
    icon: "🔥",
    title: "Tradition",
    description: "Traditional grinding preserves authentic aroma.",
  },
  {
    icon: "🤝",
    title: "Fairness",
    description: "We source directly from farmers and pay them fairly.",
  },
];

export const aboutProcess: ProcessStep[] = [
  {
    step: "1",
    title: "Sourced Fresh",
    description: "Spices are hand picked from trusted farms across India.",
  },
  {
    step: "2",
    title: "Sun Dried",
    description: "Naturally sun dried to lock in flavor and nutrients.",
  },
  {
    step: "3",
    title: "Sealed Fresh",
    description: "Packed airtight at the peak of freshness for your kitchen.",
  },
];
