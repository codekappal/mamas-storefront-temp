"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import DesktopNav, { type MegaKind } from "@/components/layout/DesktopNav";
import MobileDrawer from "@/components/layout/MobileDrawer";
import ProductsMegaMenu from "@/components/layout/ProductsMegaMenu";
import RecipesMegaMenu from "@/components/layout/RecipesMegaMenu";
import SearchButton from "@/components/layout/SearchButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaKind, setMegaKind] = useState<MegaKind | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!megaKind) {
      return;
    }
    const onMouseDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMegaKind(null);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMegaKind(null);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [megaKind]);

  const closeMega = () => setMegaKind(null);

  const transparent = isHome && !scrolled && megaKind === null;
  const solid = !transparent;
  const positionClass = isHome
    ? "fixed inset-x-0 top-0 z-50"
    : "sticky top-0 z-50";
  const surfaceClass = solid
    ? "border-b border-neutral-200 bg-white/95 backdrop-blur"
    : "border-b border-transparent";

  return (
    <header
      ref={headerRef}
      onMouseLeave={closeMega}
      className={`${positionClass} ${surfaceClass} transition-colors duration-300`}
    >
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 py-4 sm:px-8 ${
          transparent ? "text-white" : "text-neutral-800"
        }`}
      >
        <Link href="/" className="flex flex-shrink-0 items-center" aria-label="Maamis home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/website-iso-logo.png"
            alt="Maamis"
            className={`h-11 w-auto ${transparent ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]" : ""}`}
          />
        </Link>

        <DesktopNav
          pathname={pathname}
          transparent={transparent}
          megaKind={megaKind}
          onOpenMega={setMegaKind}
          onCloseMega={closeMega}
        />

        <div className="flex items-center gap-2">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-700"
          >
            <ShoppingBag className="h-4 w-4" />
            Shop
          </Link>
          <SearchButton transparent={transparent} />
        </div>

        <MobileMenuToggle
          menuOpen={menuOpen}
          transparent={transparent}
          onToggle={() => setMenuOpen((current) => !current)}
        />
      </div>

      <ProductsMegaMenu
        open={megaKind === "products"}
        onClose={closeMega}
        onNavigate={closeMega}
      />
      <RecipesMegaMenu
        open={megaKind === "recipes"}
        onClose={closeMega}
        onNavigate={closeMega}
      />

      {menuOpen && (
        <MobileDrawer pathname={pathname} onClose={() => setMenuOpen(false)} />
      )}
    </header>
  );
}

function MobileMenuToggle({
  menuOpen,
  transparent,
  onToggle,
}: {
  menuOpen: boolean;
  transparent: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      className={`inline-flex items-center justify-center rounded-full p-2 md:hidden ${
        transparent ? "text-white" : "text-neutral-800"
      }`}
    >
      {menuOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  );
}
