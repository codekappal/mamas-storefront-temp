"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Product } from "@/lib/types";

interface ProductImageZoomProps {
  product: Product;
}

export default function ProductImageZoom({ product }: ProductImageZoomProps) {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <>
      <div
        ref={containerRef}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMouseMove}
        onClick={() => setLightboxOpen(true)}
        className="relative aspect-square bg-accent-50 overflow-hidden cursor-zoom-in"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
          className={`object-cover transition-transform duration-200 ${
            zoom ? "scale-[1.75]" : "scale-100"
          }`}
          style={{ transformOrigin: `${position.x}% ${position.y}%` }}
        />
        {zoom && (
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full pointer-events-none">
            Click to enlarge
          </div>
        )}
      </div>

      {lightboxOpen && (
        <ImageLightbox
          product={product}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}

interface ImageLightboxProps {
  product: Product;
  onClose: () => void;
}

function ImageLightbox({ product, onClose }: ImageLightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 text-white hover:text-accent-300 transition-colors"
      >
        <CloseIcon />
      </button>
      <div className="relative max-w-4xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function CloseIcon() {
  return <X className="h-8 w-8" />;
}
