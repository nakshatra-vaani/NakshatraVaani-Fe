"use client";

import React, { useState } from "react";

interface TextArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  bookmarked?: boolean;
  onClick?: () => void;
  className?: string;
}

export const TextArticleCard: React.FC<TextArticleCardProps> = ({
  category,
  title,
  excerpt,
  bookmarked = false,
  onClick,
  className = "",
}) => {
  const [saved, setSaved] = useState(bookmarked);

  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: "#1c1b1d",
        border: "1px solid rgba(69,70,77,0.12)",
        borderRadius: "16px",
        padding: "20px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "border-color 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(225,194,150,0.15)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(69,70,77,0.12)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Category label */}
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

      {/* Title + Bookmark */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }}>
        <h3
          style={{
            fontFamily: "'Noto Serif', 'Georgia', serif",
            fontSize: "22px",
            fontWeight: 600,
            lineHeight: "1.3",
            color: "#e5e1e4",
            margin: 0,
            flex: 1,
          }}
        >
          {title}
        </h3>
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
            flexShrink: 0,
            marginTop: "2px",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      {/* Excerpt */}
      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "13px",
          lineHeight: "1.6",
          color: "#768197",
          margin: 0,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {excerpt}
      </p>
    </div>
  );
};