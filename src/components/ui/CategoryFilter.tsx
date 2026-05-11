"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={cn(
            "px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300",
            activeCategory === cat
              ? "bg-neon-green text-black shadow-[0_0_20px_rgba(57,255,20,0.3)]"
              : "glass text-gray-300 hover:text-white hover:border-white/20"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
