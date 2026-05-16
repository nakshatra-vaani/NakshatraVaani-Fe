"use client";

import React, { useState, useRef, useCallback } from "react";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";

interface HighlightCard {
  id: string;
  category: string;
  title: string;
  gradient: string;
  orb: string;
}

const highlights: HighlightCard[] = [
  {
    id: "1",
    category: "Weekly Energy",
    title: "Aura of the Week",
    gradient: "from-[#1A0A00] via-[#3D1500] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 40% 50%, #FF6B00 0%, #FF3D00 30%, #8B0000 55%, #1A0066 75%, #000033 100%)",
  },
  {
    id: "2",
    category: "Transit Alert",
    title: "Mercury Transit Guide",
    gradient: "from-[#000D1A] via-[#001433] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 55% 45%, #4FC3F7 0%, #0277BD 30%, #01579B 55%, #1A0066 75%, #000033 100%)",
  },
  {
    id: "3",
    category: "Lunar Cycle",
    title: "Full Moon Ritual",
    gradient: "from-[#0D0010] via-[#1A0030] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 50% 50%, #E1BEE7 0%, #9C27B0 30%, #6A1B9A 55%, #1A0066 75%, #000033 100%)",
  },
  {
    id: "4",
    category: "Cosmic Event",
    title: "Jupiter in Taurus",
    gradient: "from-[#001A0A] via-[#003314] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 45% 45%, #4CAF50 0%, #388E3C 30%, #1B5E20 55%, #1A0066 75%, #000033 100%)",
  },
  {
    id: "5",
    category: "Relationship Focus",
    title: "Venus Retrograde",
    gradient: "from-[#1A000D] via-[#33001A] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 55% 55%, #F48FB1 0%, #E91E63 30%, #880E4F 55%, #1A0066 75%, #000033 100%)",
  },
  {
    id: "6",
    category: "Career Alignment",
    title: "Saturn's Influence",
    gradient: "from-[#0A1A1A] via-[#143333] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 50% 40%, #B0BEC5 0%, #607D8B 30%, #263238 55%, #1A0066 75%, #000033 100%)",
  },
];

export const CelestialHighlights: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    // card width (320px) + gap-md (16px) = 336px approx
    const cardWidth = 336;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < highlights.length) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex]);

  const scrollTo = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 336;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontWeight: 500, fontSize: "28px", color: "#e5e1e4" }}>
          Celestial Highlights
        </h2>
        
        {/* Functional Scroll Indicators */}
        <div className="flex items-center" style={{ gap: "8px" }}>
          {highlights.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              style={{
                width: i === activeIndex ? "6px" : "4px",
                height: i === activeIndex ? "6px" : "4px",
                borderRadius: "50%",
                background: i === activeIndex ? "#e1c296" : "rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                padding: 0,
                border: "none",
                cursor: "pointer"
              }}
              aria-label={`Scroll to highlight ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <HorizontalScroll 
        ref={scrollContainerRef}
        className="px-0" 
        gap="md"
        onScroll={handleScroll}
      >
        {highlights.map((card) => (
          <div
            key={card.id}
            className="relative flex-shrink-0 rounded-[32px] overflow-hidden cursor-pointer transition-transform duration-300 active:scale-[0.98] group"
            style={{ width: "320px", height: "420px", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            {/* Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />

            {/* Orb glow */}
            <div
              className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: card.orb }}
            />

            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: "150px 150px",
              }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A10] via-[#0A0A10]/40 to-transparent" />

            {/* Content Container positioned at the bottom */}
            <div 
              className="absolute inset-x-0 bottom-0 z-10 w-full box-border"
              style={{ 
                padding: '36px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start' 
              }}
            >
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#e1c296", fontWeight: 700, marginBottom: "8px" }}>
                {card.category}
              </span>

              <h3 style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontSize: "26px", fontWeight: 500, lineHeight: "1.2", color: "#fff", marginBottom: "24px" }}>
                {card.title}
              </h3>

              <button 
                className="transition-colors hover:bg-[#3A3A42]"
                style={{ 
                  background: '#2A2A33', 
                  color: '#fff', 
                  fontWeight: 700, 
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '12px 28px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '9999px',
                  cursor: 'pointer'
                }}
              >
                EXPLORE
              </button>
            </div>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
};