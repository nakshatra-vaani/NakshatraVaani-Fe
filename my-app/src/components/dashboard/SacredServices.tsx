"use client";

import React, { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { BookOpen, Brain, Heart, Infinity as InfinityIcon } from "lucide-react";

interface SacredServicesProps {
  onViewAll?: () => void;
}

const services = [
  {
    id: "horoscope",
    title: "Personalized Horoscope",
    description: "Deep dive into your birth chart transits for the week ahead.",
    icon: <BookOpen width="24" height="24" color="#60a5fa" />,
    iconBg: "rgba(96, 165, 250, 0.08)",
  },
  {
    id: "ai",
    title: "AI Astrologer",
    description: "Ask anything about your life path, career, or spiritual journey.",
    icon: <Brain width="24" height="24" color="#fbbf24" />,
    iconBg: "rgba(251, 191, 36, 0.08)",
  },
  {
    id: "kundali",
    title: "Kundali Matching",
    description: "Explore the Gun-Milan and Dosha compatibility for your union.",
    icon: <Heart width="24" height="24" color="#93c5fd" />,
    iconBg: "rgba(147, 197, 253, 0.08)",
  },
  {
    id: "soulmate",
    title: "Soulmate Connection",
    description: "Predictive analysis of your partner's characteristics.",
    icon: <InfinityIcon width="24" height="24" color="#fcd34d" />,
    iconBg: "rgba(252, 211, 77, 0.08)",
  },
];

export const SacredServices: React.FC<SacredServicesProps> = ({ onViewAll }) => {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    // card width (300px) + gap-md (16px) = 316px approx
    const cardWidth = 316;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < services.length) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex]);

  const scrollTo = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 316;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontSize: "28px", color: "#e5e1e4", fontWeight: 500 }}>
          Sacred Services
        </h2>
        <div className="flex items-center gap-6">
          {/* Functional Scroll Indicators */}
          <div className="flex items-center" style={{ gap: "8px" }}>
            {services.map((_, i) => (
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
                aria-label={`Scroll to service ${i + 1}`}
              />
            ))}
          </div>
          {onViewAll && (
            <button 
              onClick={onViewAll} 
              style={{ 
                fontFamily: "'Manrope', sans-serif", fontSize: "10px", letterSpacing: "0.15em", 
                textTransform: "uppercase", color: "#e1c296", fontWeight: 700,
                background: "none", border: "none", cursor: "pointer",
                paddingBottom: "4px", borderBottom: "1px solid rgba(225,194,150,0.3)"
              }}
            >
              VIEW ALL
            </button>
          )}
        </div>
      </div>
 
      <HorizontalScroll 
        ref={scrollContainerRef}
        className="px-0" 
        gap="md"
        onScroll={handleScroll}
      >
        {services.map((service) => (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => {
              if (service.id === "kundali") {
                router.push("/kundali");
              } else if (service.id === "horoscope") {
                router.push("/horoscope");
              }
            }}
            className="flex-shrink-0 flex flex-col relative group cursor-pointer"
            style={{
              width: "300px",
              minHeight: "320px",
              background: "#1c1b1d",
              borderRadius: "32px",
              padding: "36px",
              border: hoveredId === service.id 
                ? "1px solid rgba(225, 194, 150, 0.25)" 
                : "1px solid rgba(225, 194, 150, 0.05)",
              boxShadow: hoveredId === service.id
                ? "0 0 25px rgba(225, 194, 150, 0.12), inset 0 0 15px rgba(225, 194, 150, 0.02)"
                : "none",
              transform: hoveredId === service.id ? "translateY(-4px)" : "none",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            {/* Icon */}
            <div
              className="flex items-center justify-center rounded-2xl mb-8"
              style={{ width: "64px", height: "64px", background: service.iconBg }}
            >
              {service.icon}
            </div>

            {/* Text */}
            <h3 style={{ fontFamily: "'Noto Serif', 'Georgia', serif", color: "#fff", fontSize: "20px", fontWeight: 500, lineHeight: "1.3", marginBottom: "12px" }}>
              {service.title}
            </h3>
            <p style={{ fontFamily: "'Manrope', sans-serif", color: "#c6c6cd", fontSize: "14px", lineHeight: 1.6, fontWeight: 300 }}>
              {service.description}
            </p>

            {/* Arrow bottom right */}
            <div className="absolute bottom-[36px] right-[36px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#e1c296] opacity-50 group-hover:opacity-100 transition-opacity">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
};