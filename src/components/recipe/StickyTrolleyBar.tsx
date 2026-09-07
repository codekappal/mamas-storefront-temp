"use client";

interface StickyTrolleyBarProps {
  availableCount: number;
  ingredientsCount: number;
  onOpenModal: () => void;
}

export default function StickyTrolleyBar({
  availableCount,
  ingredientsCount,
  onOpenModal,
}: StickyTrolleyBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-neutral-200 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-neutral-900">
            Buy ingredients from this recipe
          </p>
          <p className="text-xs text-neutral-500">
            {availableCount}/{ingredientsCount} available from Maamis
          </p>
        </div>
        <button
          onClick={onOpenModal}
          className="flex-shrink-0 bg-accent-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-700"
        >
          Add to trolley
        </button>
      </div>
    </div>
  );
}
