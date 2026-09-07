"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { productService } from "@/services";

interface ProductsMegaMenuProps {
  open: boolean;
  onClose: () => void;
  onNavigate?: () => void;
}

export default function ProductsMegaMenu({
  open,
  onClose,
  onNavigate,
}: ProductsMegaMenuProps) {
  const close = onNavigate ?? onClose;
  const categories = productService.listCategories();

  if (!open) {
    return null;
  }

  return (
    <div className="absolute inset-x-0 top-full z-50 border-t border-neutral-200 bg-white shadow-[0_24px_50px_-12px_rgba(0,0,0,0.25)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-10 gap-y-10 px-5 py-8 sm:px-8 md:grid-cols-3 xl:grid-cols-5">
        {categories.map((category) => {
          const products = productService.listByCategory(category);
          return (
            <div key={category}>
              <Link
                href={`/products#${category}`}
                onClick={close}
                className="inline-flex items-center gap-2 border-b-2 border-primary-100 pb-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-primary-800 transition-colors hover:text-accent-700"
              >
                {category}
              </Link>
              <ul className="mt-3 space-y-1.5">
                {products.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/products/${product.id}`}
                      onClick={close}
                      className="block text-sm text-neutral-600 transition-colors hover:text-accent-700"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ProductsAccordion({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const categories = productService.listCategories();

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
      >
        <span>Products</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="mt-1 space-y-4 border-l-2 border-primary-100 pl-4">
          {categories.map((category) => {
            const products = productService.listByCategory(category);
            return (
              <div key={category}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-800">
                  {category}
                </p>
                <ul className="mt-1 space-y-1">
                  {products.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/products/${product.id}`}
                        onClick={onNavigate}
                        className="block rounded px-2 py-1 text-sm text-neutral-600 hover:text-accent-700"
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <ChevronDown
      className={`h-3.5 w-3.5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      strokeWidth={2.5}
    />
  );
}
