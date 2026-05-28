"use client";

import React, { useState } from "react";

interface ReportFeaturedCardProps {
  badge?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  ctaLabel?: string;
  onCta?: () => void;
}

export const ReportFeaturedCard: React.FC<ReportFeaturedCardProps> = ({
  badge = "Elite Prophecy",
  title = "Divine Soul",
  titleLine2 = "Partner Report",
  description = "A comprehensive karmic analysis of your twin flame connection, detailing the alignment of Venus and Mars across seven lifetimes.",
  ctaLabel = "Unveil Connection",
  onCta,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full rounded-[32px] overflow-hidden p-px"
      style={{
        background: "#1c1b1d",
        border: isHovered
          ? "1px solid rgba(225, 194, 150, 0.4)"
          : "1px solid rgba(225, 194, 150, 0.2)",
        boxShadow: isHovered
          ? "0px 0px 60px 0px rgba(225, 194, 150, 0.25)"
          : "0px 0px 50px 0px rgba(225, 194, 150, 0.15)",
        transform: isHovered ? "translateY(-4px)" : "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      {/* Mystical bg texture overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(225,194,150,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(100,60,180,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative flex flex-row items-center justify-between" style={{ padding: '48px', gap: '16px' }}>
        {/* Left: Badge + Title + Desc + CTA */}
        <div className="flex flex-col items-start z-10 w-3/5" style={{ gap: '16px' }}>
          {/* Badge */}
          <div
            className="rounded-full border border-[rgba(225,194,150,0.3)] flex items-center justify-center"
            style={{ padding: '5px 17px', background: "rgba(225,194,150,0.1)" }}
          >
            <span
              className="text-[#e1c296] text-[10px] tracking-[0.1em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
            >
              {badge}
            </span>
          </div>

          {/* Title */}
          <div className="text-left">
            <h2
              className="text-[#e1c296] text-[28px] leading-[1.25] text-left"
              style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontWeight: 400 }}
            >
              {title} {titleLine2}
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-[#c6c6cd] text-[14px] text-left leading-[1.6] max-w-[320px]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            {description}
          </p>

          {/* CTA Button */}
          <button
            onClick={onCta}
            className="mt-2 relative rounded-full text-[#402d0d] text-base font-bold cursor-pointer transition-opacity hover:opacity-90 active:opacity-75 flex items-center justify-center"
            style={{
              padding: '14px 32px',
              background: "linear-gradient(90deg, rgba(225,194,150,0.8) 0%, #e1c296 100%)",
              boxShadow: "0px 10px 15px -3px rgba(225,194,150,0.2), 0px 4px 6px -4px rgba(225,194,150,0.2)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {ctaLabel}
          </button>
        </div>

        {/* Right: Magic Wand illustration */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-[160px] h-[160px] z-10">
          {/* Background circle */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "rgba(25,25,27,0.6)",
              boxShadow: "inset 0 0 40px rgba(225,194,150,0.05)",
            }}
          />
          {/* Wand Icon */}
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="rotate-[-10deg]">
            <path
              d="M30 70 L65 35"
              stroke="#e1c296"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Wand handle separation */}
            <path
              d="M45 55 L55 45"
              stroke="#1c1b1d"
              strokeWidth="4"
            />
            {/* Wand tip glow */}
            <circle cx="70" cy="30" r="4" fill="#e1c296" />
            
            {/* Stars */}
            <path d="M75 15 Q80 15 80 10 Q80 15 85 15 Q80 15 80 20 Q80 15 75 15" fill="#e1c296" />
            <path d="M85 35 Q90 35 90 30 Q90 35 95 35 Q90 35 90 40 Q90 35 85 35" fill="#e1c296" />
            <path d="M20 40 Q25 40 25 35 Q25 40 30 40 Q25 40 25 45 Q25 40 20 40" fill="#e1c296" />
          </svg>
        </div>
      </div>
    </div>
  );
};