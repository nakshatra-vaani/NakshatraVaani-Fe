"use client";

import React from "react";

interface ArticleBodyProps {
  firstLetterDropCap?: string; // Letter to show as drop cap
  paragraphs: string[];
  blockquote?: {
    text: string;
    author: string;
  };
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({
  firstLetterDropCap = "A",
  paragraphs,
  blockquote,
}) => {
  return (
    <div style={{ padding: "48px 60px", maxWidth: "900px" }}>
      {/* First paragraph with drop cap */}
      {paragraphs.length > 0 && (
        <div style={{ marginBottom: "24px", display: "flex", gap: "12px" }}>
          {/* Drop cap */}
          <div
            style={{
              fontFamily: "'Noto Serif', 'Georgia', serif",
              fontSize: "72px",
              fontWeight: 700,
              color: "#e1c296",
              lineHeight: "0.8",
              marginTop: "-4px",
            }}
          >
            {firstLetterDropCap}
          </div>

          {/* First paragraph text */}
          <p
            style={{
              fontFamily: "'Noto Serif', 'Georgia', serif",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#e5e1e4",
              margin: 0,
              marginTop: "8px",
            }}
          >
            {paragraphs[0].substring(1)}
          </p>
        </div>
      )}

      {/* Blockquote */}
      {blockquote && (
        <div
          style={{
            borderLeft: "3px solid rgba(225,194,150,0.5)",
            paddingLeft: "28px",
            marginBottom: "32px",
            marginTop: "32px",
          }}
        >
          <p
            style={{
              fontFamily: "'Noto Serif', 'Georgia', serif",
              fontSize: "18px",
              fontStyle: "italic",
              lineHeight: "1.8",
              color: "#e1c296",
              margin: 0,
              marginBottom: "12px",
            }}
          >
            "{blockquote.text}"
          </p>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(188,199,222,0.6)",
              margin: 0,
            }}
          >
            – {blockquote.author}
          </p>
        </div>
      )}

      {/* Remaining paragraphs */}
      {paragraphs.slice(1).map((para, idx) => (
        <p
          key={idx}
          style={{
            fontFamily: "'Noto Serif', 'Georgia', serif",
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#e5e1e4",
            marginBottom: "24px",
            margin: 0
          }}
        >
          {para}
        </p>
      ))}
    </div>
  );
};