"use client";

import React from "react";

interface ArticleHeroSectionProps {
  badge: string;
  title: string;
  titleHighlight?: string; // Part of title to highlight in gold
  excerpt: string;
  imageUrl?: string; // Database-fetched hero image URL
  backgroundImage?: string; // CSS gradient or background
  alt?: string;
}

export const ArticleHeroSection: React.FC<ArticleHeroSectionProps> = ({
  badge,
  title,
  titleHighlight,
  excerpt,
  imageUrl,
  backgroundImage,
  alt = "Article hero image",
}) => {
  const titleParts = titleHighlight
    ? title.split(titleHighlight)
    : [title];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingBottom: "60px",
        paddingLeft: "40px",
        overflow: "hidden",
      }}
    >
      {/* Hero Image Background */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={alt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 1,
          }}
        />
      )}

      {/* CSS Background Gradient */}
      {!imageUrl && backgroundImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            background: backgroundImage,
            zIndex: 1,
          }}
        />
      )}

      {/* Vignette Overlay - Dark gradient from bottom to top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,10,16,0.95) 0%, rgba(10,10,16,0.85) 25%, rgba(10,10,16,0.6) 50%, rgba(10,10,16,0.3) 75%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3, maxWidth: "600px" }}>
        {/* Badge */}
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#bcc7de",
            marginBottom: "16px",
            display: "inline-block",
          }}
        >
          {badge}
        </span>

        {/* Title with highlight */}
        <h1
          style={{
            fontFamily: "'Noto Serif', 'Georgia', serif",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "1.15",
            color: "#ffffff",
            margin: 0,
            marginBottom: "16px",
            letterSpacing: "-0.5px",
          }}
        >
          {titleHighlight ? (
            <>
              {titleParts[0]}
              <span style={{ color: "#e1c296" }}>{titleHighlight}</span>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h1>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "15px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.65)",
            margin: 0,
            maxWidth: "500px",
          }}
        >
          {excerpt}
        </p>
      </div>
    </div>
  );
};