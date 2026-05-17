"use client";

import React from "react";

export type InsightCategory =
  | "ALL"
  | "NAKSHATRAS"
  | "RETROGRADES"
  | "RITUALS"
  | "ZODIAC SIGNS"
  | "LUNAR CYCLES";

const CATEGORIES: InsightCategory[] = [
  "ALL",
  "NAKSHATRAS",
  "RETROGRADES",
  "RITUALS",
  "ZODIAC SIGNS",
  "LUNAR CYCLES",
];

interface CategoryFilterTabsProps {
  active: InsightCategory;
  onChange: (cat: InsightCategory) => void;
}

export const CategoryFilterTabs: React.FC<CategoryFilterTabsProps> = ({
  active,
  onChange,
}) => {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1"
      style={{ scrollbarWidth: "none" }}
    >
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            style={{
              flexShrink: 0,
              padding: "8px 18px",
              borderRadius: "9999px",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              border: isActive
                ? "1px solid rgba(225,194,150,0.4)"
                : "1px solid rgba(69,70,77,0.25)",
              background: isActive
                ? "rgba(225,194,150,0.12)"
                : "rgba(42,42,44,0.4)",
              color: isActive ? "#e1c296" : "rgba(188,199,222,0.55)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};