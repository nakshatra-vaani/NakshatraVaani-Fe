"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { Button } from "@/components/ui/Button";

interface HighlightCard {
  id: string;
  category: string;
  title: string;
  gradient: string;
  orb: string;
  hasExplore?: boolean;
}

const highlights: HighlightCard[] = [
  {
    id: "1",
    category: "Weekly Energy",
    title: "Aura of the Week",
    gradient: "from-[#1A0A00] via-[#3D1500] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 40% 50%, #FF6B00 0%, #FF3D00 30%, #8B0000 55%, #1A0066 75%, #000033 100%)",
    hasExplore: true,
  },
  {
    id: "2",
    category: "Transit Alert",
    title: "Mercury Retrograde",
    gradient: "from-[#000D1A] via-[#001433] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 55% 45%, #4FC3F7 0%, #0277BD 30%, #01579B 55%, #1A0066 75%, #000033 100%)",
    hasExplore: false,
  },
  {
    id: "3",
    category: "Moon Phase",
    title: "Full Moon in Aries",
    gradient: "from-[#0D0010] via-[#1A0030] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 50% 50%, #E1BEE7 0%, #9C27B0 30%, #6A1B9A 55%, #1A0066 75%, #000033 100%)",
    hasExplore: false,
  },
];

export const CelestialHighlights: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="flex items-center justify-between mb-4 px-5">
        <SectionHeader title="Celestial Highlights" />
        <div className="flex gap-1.5 mt-0.5">
          {highlights.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-5 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>

      <HorizontalScroll className="px-5" gap="md">
        {highlights.map((card, index) => (
          <div
            key={card.id}
            onClick={() => setActiveIndex(index)}
            className={`
              relative flex-shrink-0 w-[260px] h-[190px] rounded-2xl overflow-hidden cursor-pointer
              transition-all duration-300
              ${index === activeIndex ? "ring-1 ring-white/20" : "opacity-80"}
            `}
          >
            {/* Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />

            {/* Orb glow */}
            <div
              className="absolute inset-0 opacity-90"
              style={{ background: card.orb }}
            />

            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: "150px 150px",
              }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <span className="text-white/50 text-[10px] tracking-widest uppercase font-medium">
                {card.category}
              </span>

              <div className="space-y-3">
                <h3 className="text-white text-xl font-bold leading-tight">
                  {card.title}
                </h3>
                {card.hasExplore && (
                  <Button variant="secondary" size="sm" className="self-start">
                    Explore
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
};