"use client";

import React, { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
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
    category: "Celestial Wisdom",
    title: "The Age of Aquarius: A New Paradigm",
    gradient: "from-[#1A0A00] via-[#3D1500] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 40% 50%, #FF6B00 0%, #FF3D00 30%, #8B0000 55%, #1A0066 75%, #000033 100%)",
  },
  {
    id: "2",
    category: "Vedic Practice",
    title: "Mercury Retrograde Rituals",
    gradient: "from-[#000D1A] via-[#001433] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 55% 45%, #4FC3F7 0%, #0277BD 30%, #01579B 55%, #1A0066 75%, #000033 100%)",
  },
  {
    id: "3",
    category: "Rituals",
    title: "Cleansing Rituals for the New Lunar Year",
    gradient: "from-[#0D0010] via-[#1A0030] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 50% 50%, #E1BEE7 0%, #9C27B0 30%, #6A1B9A 55%, #1A0066 75%, #000033 100%)",
  },
  {
    id: "4",
    category: "Celestial Wisdom",
    title: "Navigating the Void: A Guide to Eclipse Season",
    gradient: "from-[#001A0A] via-[#003314] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 45% 45%, #4CAF50 0%, #388E3C 30%, #1B5E20 55%, #1A0066 75%, #000033 100%)",
  },
  {
    id: "5",
    category: "Inner Wisdom",
    title: "Understanding Your Moon Sign",
    gradient: "from-[#1A000D] via-[#33001A] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 55% 55%, #F48FB1 0%, #E91E63 30%, #880E4F 55%, #1A0066 75%, #000033 100%)",
  },
  {
    id: "6",
    category: "Vedic Practice",
    title: "Saturn's Lesson: Building Solid Foundations",
    gradient: "from-[#0A1A1A] via-[#143333] to-[#0A0A1A]",
    orb: "radial-gradient(circle at 50% 40%, #B0BEC5 0%, #607D8B 30%, #263238 55%, #1A0066 75%, #000033 100%)",
  },
];

const getSlug = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("mercury") || t.includes("retrograde")) {
    return "navigating-mercury-retrograde";
  }
  return t
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const CelestialHighlights: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleCardClick = (title: string) => {
    router.push(`/blog/${getSlug(title)}`);
  };

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
          {Array.from({ length: highlights.length + 1 }).map((_, i) => (
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
            onClick={() => handleCardClick(card.title)}
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

        {/* ── Seventh element: Explore More / Redirect card ── */}
        <div
          onClick={() => router.push("/insights")}
          className="relative flex-shrink-0 rounded-[32px] overflow-hidden cursor-pointer transition-all duration-300 active:scale-[0.98] group flex flex-col justify-center items-center text-center p-8"
          style={{
            width: "320px",
            height: "420px",
            border: "1px dashed rgba(225,194,150,0.3)",
            background: "rgba(30, 28, 35, 0.3)",
            backdropFilter: "blur(12px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(225,194,150,0.6)";
            e.currentTarget.style.background = "rgba(42,42,48,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(225,194,150,0.3)";
            e.currentTarget.style.background = "rgba(30, 28, 35, 0.3)";
          }}
        >
          {/* Pulsing golden starlight background glow */}
          <div
            className="absolute inset-0 opacity-40 group-hover:opacity-75 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(201, 145, 58, 0.18) 0%, transparent 65%)",
            }}
          />

          {/* Floating animated sparkles icon wrapper */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
            style={{
              background: "rgba(225,194,150,0.06)",
              border: "1px solid rgba(225,194,150,0.2)",
              boxShadow: "0 0 15px rgba(225,194,150,0.05)",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e1c296"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse"
            >
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
          </div>

          <h3
            style={{
              fontFamily: "'Noto Serif', 'Georgia', serif",
              fontSize: "22px",
              fontWeight: 500,
              lineHeight: "1.3",
              color: "#e5e1e4",
              marginBottom: "12px",
              position: "relative",
              zIndex: 2,
            }}
          >
            Venture Deeper
          </h3>

          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "12px",
              lineHeight: "1.6",
              color: "rgba(188,199,222,0.6)",
              marginBottom: "28px",
              maxWidth: "240px",
              position: "relative",
              zIndex: 2,
            }}
          >
            Unlock the complete archive of cosmic revelations and seasonal rituals.
          </p>

          <button
            className="transition-all duration-300"
            style={{
              background: "linear-gradient(90deg, #c9913a 0%, #e1c296 100%)",
              color: "#131315",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "12px 30px",
              border: "none",
              borderRadius: "9999px",
              boxShadow: "0px 4px 20px rgba(201, 145, 58, 0.2)",
              cursor: "pointer",
              position: "relative",
              zIndex: 2,
            }}
          >
            EXPLORE ALL
          </button>
        </div>
      </HorizontalScroll>
    </section>
  );
};