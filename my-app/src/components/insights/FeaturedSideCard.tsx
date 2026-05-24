"use client";

import React from "react";

interface FeaturedSideCardProps {
  category: string;
  title: string;
  image: string; // CSS background
  onClick?: () => void;
  className?: string;
}

export const FeaturedSideCard: React.FC<FeaturedSideCardProps> = ({
  category,
  title,
  image,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`h-[180px] md:h-full w-full ${className}`}
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        background: image,
        flex: 1,
        minHeight: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.01)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")
      }
    >
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#e1c296",
          }}
        >
          {category}
        </span>
        <h3
          style={{
            fontFamily: "'Noto Serif', 'Georgia', serif",
            fontSize: "17px",
            fontWeight: 600,
            lineHeight: "1.3",
            color: "#ffffff",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};