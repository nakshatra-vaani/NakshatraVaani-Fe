"use client";

import React, { useState } from "react";

interface ArticleCardProps {
  category: string;
  title: string;
  image: string; // CSS gradient string used as background
  authorInitials: string;
  authorName: string;
  readTime: string;
  bookmarked?: boolean;
  onClick?: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  category,
  title,
  image,
  authorInitials,
  authorName,
  readTime,
  bookmarked = false,
  onClick,
}) => {
  const [saved, setSaved] = useState(bookmarked);

  return (
    <div
      onClick={onClick}
      style={{
        background: "#1c1b1d",
        border: "1px solid rgba(69,70,77,0.12)",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.2s, transform 0.2s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(225,194,150,0.15)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(69,70,77,0.12)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image area */}
      <div
        style={{
          height: "160px",
          background: image,
          flexShrink: 0,
          position: "relative",
        }}
      >
        {/* Top vignette for image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
        {/* Category + Bookmark Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSaved(!saved);
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
              color: saved ? "#e1c296" : "rgba(188,199,222,0.35)",
              transition: "color 0.2s",
              lineHeight: 1,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Noto Serif', 'Georgia', serif",
            fontSize: "15px",
            fontWeight: 600,
            lineHeight: "1.35",
            color: "#e5e1e4",
            margin: 0,
          }}
        >
          {title}
        </h3>

        {/* Author Row */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
          {/* Avatar */}
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(80,50,120,0.8), rgba(40,60,100,0.8))",
              border: "1px solid rgba(225,194,150,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "8px",
                fontWeight: 700,
                color: "#e1c296",
              }}
            >
              {authorInitials}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                color: "#c6c6cd",
              }}
            >
              {authorName}
            </span>
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "9px",
                color: "rgba(118,129,151,0.7)",
              }}
            >
              {readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};