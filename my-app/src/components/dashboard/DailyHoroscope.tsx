"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StatItem } from "@/components/ui/StatItem";

interface DailyHoroscopeProps {
  sign?: string;
  date?: string;
  alignment?: "favorable" | "warning" | "neutral";
  alignmentLabel?: string;
  horoscopeText?: string;
  highlightedPhrase?: string;
  luckScore?: string;
  rulingPlanet?: string;
}

export const DailyHoroscope: React.FC<DailyHoroscopeProps> = ({
  sign = "Aries",
  date = "Oct 24, 2023",
  alignment = "favorable",
  alignmentLabel = "Favorable Alignment",
  horoscopeText = "Today, the North Node activates your House of Creativity. A forgotten passion resurfaces— listen to the cosmic whisper.",
  highlightedPhrase = "House of Creativity",
  luckScore = "88%",
  rulingPlanet = "Mars",
}) => {
  // Build text with highlighted phrase
  const renderHoroscopeText = () => {
    if (!highlightedPhrase) return <span>{horoscopeText}</span>;
    const parts = horoscopeText.split(highlightedPhrase);
    return (
      <>
        {parts[0]}
        <span className="text-[#E8934A] font-medium">{highlightedPhrase}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="px-5">
      {/* Section label */}
      <p className="text-white/35 text-[10px] tracking-widest uppercase font-semibold mb-1">
        Your Celestial Transit
      </p>

      {/* Title + Sign Row */}
      <div className="flex items-end justify-between mb-4">
        <h2
          className="text-white font-bold leading-none"
          style={{ fontSize: "clamp(2rem, 8vw, 2.5rem)" }}
        >
          Daily Horoscope
        </h2>
        <span className="text-white/35 text-xs tracking-wide mb-1 text-right">
          {sign.toUpperCase()} • {date}
        </span>
      </div>

      {/* Main Card */}
      <Card padding="lg" className="space-y-5">
        {/* Badge */}
        <Badge variant={alignment} icon="★">
          {alignmentLabel}
        </Badge>

        {/* Horoscope Text */}
        <p className="text-white/85 text-base leading-relaxed font-light tracking-wide">
          {renderHoroscopeText()}
        </p>

        {/* Divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* Stats */}
        <div className="flex gap-8">
          <StatItem label="Luck Score" value={luckScore} />
          <StatItem label="Ruling Planet" value={rulingPlanet} />
        </div>
      </Card>
    </section>
  );
};