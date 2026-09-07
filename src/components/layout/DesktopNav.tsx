"use client";

import Link from "next/link";
import { ChevronIcon } from "@/components/layout/SearchButton";

export type MegaKind = "products" | "recipes";

const NAV_LINKS: { href: string; label: string; mega?: MegaKind }[] = [
  { href: "/products", label: "Products", mega: "products" },
  { href: "/recipes", label: "Recipes", mega: "recipes" },
  { href: "/about", label: "About" },
  { href: "/about", label: "Contact" },
];

interface DesktopNavProps {
  pathname: string;
  transparent: boolean;
  megaKind: MegaKind | null;
  onOpenMega: (kind: MegaKind) => void;
  onCloseMega: () => void;
}

export default function DesktopNav({
  pathname,
  transparent,
  megaKind,
  onOpenMega,
  onCloseMega,
}: DesktopNavProps) {
  return (
    <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        if (link.mega) {
          const isOpen = megaKind === link.mega;
          return (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => onOpenMega(link.mega as MegaKind)}
              aria-expanded={isOpen}
              aria-haspopup="true"
              className={navItemClass(transparent, isOpen)}
            >
              {link.label}
              <ChevronIcon open={isOpen} />
            </Link>
          );
        }
        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={onCloseMega}
            className={`${navItemClass(transparent, false)} ${
              isActive ? activeClass(transparent) : ""
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

function navItemClass(transparent: boolean, isOpen: boolean): string {
  const base =
    "inline-flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors";
  const idle = transparent
    ? "text-white/90 hover:text-white"
    : "text-neutral-700 hover:text-primary-700";
  const open = transparent ? "text-white" : "text-primary-700";
  return `${base} ${isOpen ? open : idle}`;
}

function activeClass(transparent: boolean): string {
  return transparent
    ? "text-white underline underline-offset-8 decoration-accent-500"
    : "text-primary-700 underline underline-offset-8 decoration-accent-500";
}
