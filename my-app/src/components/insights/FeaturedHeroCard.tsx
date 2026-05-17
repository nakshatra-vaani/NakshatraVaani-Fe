"use client";

import React from "react";

interface FeaturedHeroCardProps {
  badge: string;
  title: string;
  excerpt: string;
  ctaLabel?: string;
  image: string; // CSS gradient or background
  onClick?: () => void;
  className?: string;
}

export const FeaturedHeroCard: React.FC<FeaturedHeroCardProps> = ({
  badge,
  title,
  excerpt,
  ctaLabel = "EXPLORE THE MYSTERY",
  image,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        background: image,
        minHeight: "360px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.005)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")
      }
    >
      {/* Gradient vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* Badge */}
        <div style={{ display: "inline-flex" }}>
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#e1c296",
              background: "rgba(20,18,10,0.85)",
              border: "1px solid rgba(225,194,150,0.3)",
              borderRadius: "9999px",
              padding: "5px 12px",
            }}
          >
            {badge}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Noto Serif', 'Georgia', serif",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "1.2",
            color: "#ffffff",
            margin: 0,
          }}
        >
          {title}
        </h2>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "13px",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.65)",
            margin: 0,
          }}
        >
          {excerpt}
        </p>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.75)",
            marginTop: "4px",
          }}
        >
          {ctaLabel}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </div>
  );
};