"use client";

import { useState } from "react";
import { Check, Minus, Package, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/types";
import ProductImageZoom from "@/components/products/ProductImageZoom";

interface ProductDetailProps {
  product: Product;
}

// Available pack sizes. Every product always gets 50g and 100g; the 200g
// option is only offered when that product is actually sold in 200g packs.
function buildSizes(baseGrams: number): number[] {
  const sizes = [50, 100];
  if (baseGrams === 200) {
    sizes.push(200);
  }
  return sizes;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const baseGrams = parseGrams(product.weight);
  const sizes = buildSizes(baseGrams);

  const defaultGrams = sizes.includes(baseGrams) ? baseGrams : 50;
  const [selectedGrams, setSelectedGrams] = useState(defaultGrams);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const perGram = baseGrams > 0 ? product.price / baseGrams : 0;
  const selectedPrice =
    perGram > 0 ? Math.round(perGram * selectedGrams) : product.price;
  const per100g = perGram > 0 ? (perGram * 100).toFixed(2) : null;

  const handleAddToCart = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:border-r lg:border-neutral-100">
          <ProductImageZoom product={product} />
        </div>

        <div className="flex flex-col p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-900 lg:text-4xl">
            {product.name}
          </h1>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
              Size
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {sizes.map((grams) => {
                const selected = grams === selectedGrams;
                return (
                  <button
                    key={grams}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSelectedGrams(grams)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                      selected
                        ? "border-primary-600 bg-primary-600 text-white shadow-md"
                        : "border-neutral-200 bg-white text-neutral-700 hover:border-primary-400 hover:text-primary-700"
                    }`}
                  >
                    {grams}g
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-end gap-x-4 gap-y-1">
            <p className="text-4xl font-bold text-primary-700">
              ₹{selectedPrice}
            </p>
            {per100g ? (
              <p className="mb-1.5 text-sm font-medium text-neutral-500">
                {formatPrice(Number(per100g))} / 100g
              </p>
            ) : null}
            {selectedGrams !== baseGrams && baseGrams > 0 ? (
              <span className="mb-1 text-xs font-medium text-neutral-400">
                {product.weight} pack &mdash; ₹{product.price}
              </span>
            ) : null}
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent-600">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-500" />
            In stock
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantityStepper quantity={quantity} onChange={setQuantity} />
            <button
              type="button"
              onClick={handleAddToCart}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {added ? (
                <>
                  <Check className="h-5 w-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </>
              )}
            </button>
          </div>

          <p className="mt-5 text-xs text-neutral-400">
            Inclusive of all taxes
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-100 px-7 py-10 sm:px-10 lg:px-12">
        <h2 className="text-xl font-bold text-neutral-900">Description</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          {product.description}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <InfoTile label="Category" value={product.category} />
          <InfoTile label="Net Weight" value={`${selectedGrams}g`} />
          <InfoTile
            label="Price per 100g"
            value={per100g ? formatPrice(Number(per100g)) : "—"}
          />
        </div>
      </div>
    </div>
  );
}

function parseGrams(weight: string): number {
  const match = weight.match(/(\d+(?:\.\d+)?)\s*g/i);
  return match ? Number(match[1]) : 0;
}

function formatPrice(value: number): string {
  return `₹${value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)}`;
}

interface QuantityStepperProps {
  quantity: number;
  onChange: (value: number) => void;
}

function QuantityStepper({ quantity, onChange }: QuantityStepperProps) {
  return (
    <div className="inline-flex items-center rounded-xl border border-neutral-200">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="px-4 py-3 text-neutral-600 transition-colors hover:bg-neutral-50"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-12 text-center font-semibold text-neutral-900">
        {quantity}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(10, quantity + 1))}
        className="px-4 py-3 text-neutral-600 transition-colors hover:bg-neutral-50"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-neutral-50 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
        {label}
      </p>
      <p className="mt-1 font-semibold text-neutral-900">{value}</p>
    </div>
  );
}