"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";

interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  iconBg: string;
}

const services: ServiceCard[] = [
  {
    id: "1",
    icon: "📖",
    title: "Personalized Horoscope",
    description: "Deep dive into your birth chart transits for the week ahead.",
    iconBg: "bg-[#1A1A2E]",
  },
  {
    id: "2",
    icon: "🤖",
    title: "AI Astrologer",
    description: "Ask anything about your career, love, and life path.",
    iconBg: "bg-[#1A2A1A]",
  },
  {
    id: "3",
    icon: "🔮",
    title: "Birth Chart Reading",
    description: "Complete natal chart analysis with planetary positions.",
    iconBg: "bg-[#2A1A1A]",
  },
  {
    id: "4",
    icon: "✨",
    title: "Compatibility Match",
    description: "Discover your cosmic compatibility with any sign.",
    iconBg: "bg-[#2A2A1A]",
  },
];

interface SacredServicesProps {
  onViewAll?: () => void;
}

export const SacredServices: React.FC<SacredServicesProps> = ({ onViewAll }) => {
  return (
    <section>
      <div className="px-5 mb-4">
        <SectionHeader title="Sacred Services" onViewAll={onViewAll} />
      </div>

      <HorizontalScroll className="px-5" gap="md">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex-shrink-0 w-[180px] bg-[#111118] border border-white/[0.06] rounded-2xl p-5 cursor-pointer group hover:border-white/10 hover:bg-[#141420] transition-all duration-200 active:scale-[0.98]"
          >
            {/* Icon */}
            <div
              className={`
                w-11 h-11 ${service.iconBg} rounded-xl flex items-center justify-center
                text-xl mb-4 border border-white/[0.06]
              `}
            >
              {service.icon}
            </div>

            {/* Text */}
            <h3 className="text-white font-semibold text-sm leading-tight mb-2">
              {service.title}
            </h3>
            <p className="text-white/40 text-xs leading-relaxed line-clamp-3">
              {service.description}
            </p>

            {/* Arrow */}
            <div className="mt-4 flex justify-end">
              <span className="text-white/25 group-hover:text-white/60 transition-colors duration-200 text-lg">
                →
              </span>
            </div>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
};