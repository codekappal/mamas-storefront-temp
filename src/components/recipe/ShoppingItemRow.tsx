"use client";

import Image from "next/image";
import type { ShopIngredient } from "@/components/recipe/ShopIngredientsModal";

interface ShoppingItemRowProps {
  ingredient: ShopIngredient;
  quantity: number;
  isSelected: boolean;
  onToggle: () => void;
  onQuantityChange: (delta: number) => void;
}

export default function ShoppingItemRow({
  ingredient,
  quantity,
  isSelected,
  onToggle,
  onQuantityChange,
}: ShoppingItemRowProps) {
  return (
    <li
      className={`flex items-center gap-3 rounded-xl border p-3 transition-opacity ${
        isSelected ? "border-neutral-200" : "border-neutral-200 opacity-50"
      }`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onToggle}
        aria-label={`Select ${ingredient.productName}`}
        className="h-4 w-4 flex-shrink-0 accent-primary-700"
      />
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src={ingredient.productImage}
          alt={ingredient.productName}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-neutral-900">
          {ingredient.productName}
        </p>
        <p className="text-xs text-neutral-500">
          {ingredient.productWeight} &middot; {ingredient.quantity}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <QuantityStepper
          quantity={quantity}
          disabled={!isSelected}
          onDecrease={() => onQuantityChange(-1)}
          onIncrease={() => onQuantityChange(1)}
        />
        <span className="text-sm font-semibold text-primary-700">
          ₹{ingredient.productPrice * quantity}
        </span>
      </div>
    </li>
  );
}

function QuantityStepper({
  quantity,
  disabled,
  onDecrease,
  onIncrease,
}: {
  quantity: number;
  disabled: boolean;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  const buttonClass =
    "flex h-7 w-7 items-center justify-center rounded border border-neutral-300 text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40";
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={onDecrease}
        aria-label="Decrease quantity"
        disabled={disabled}
        className={buttonClass}
      >
        −
      </button>
      <span className="w-7 text-center text-sm font-semibold text-neutral-900">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        aria-label="Increase quantity"
        disabled={disabled}
        className={buttonClass}
      >
        +
      </button>
    </div>
  );
}
