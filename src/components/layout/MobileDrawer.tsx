"use client";

import Link from "next/link";
import { ProductsAccordion } from "@/components/layout/ProductsMegaMenu";
import { RecipesAccordion } from "@/components/layout/RecipesMegaMenu";
import SearchButton from "@/components/layout/SearchButton";

const MOBILE_LINKS: { href: string; label: string; mega?: "products" | "recipes" }[] = [
  { href: "/products", label: "Products", mega: "products" },
  { href: "/recipes", label: "Recipes", mega: "recipes" },
  { href: "/about", label: "About" },
  { href: "/about", label: "Contact" },
];

interface MobileDrawerProps {
  pathname: string;
  onClose: () => void;
}

export default function MobileDrawer({
  pathname,
  onClose,
}: MobileDrawerProps) {
  return (
    <div className="md:hidden">
      <nav
        className="flex flex-col gap-1 border-t border-neutral-100 bg-white px-5 py-4"
        aria-label="Mobile"
      >
        {MOBILE_LINKS.map((link) => {
          if (link.mega === "products") {
            return <ProductsAccordion key={link.label} onNavigate={onClose} />;
          }
          if (link.mega === "recipes") {
            return <RecipesAccordion key={link.label} onNavigate={onClose} />;
          }
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className={`rounded-lg px-4 py-3 text-sm font-medium ${
                isActive ? "bg-primary-50 text-primary-800" : "text-neutral-700 hover:bg-neutral-50"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="mt-3 border-t border-neutral-100 pt-3">
          <SearchButton transparent={false} fullWidth />
        </div>
      </nav>
    </div>
  );
}
