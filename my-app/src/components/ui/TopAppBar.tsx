"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface TopAppBarProps {
  showNotification?: boolean;
  profileImageSrc?: string;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  showNotification = true,
  profileImageSrc,
}) => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between backdrop-blur-[12px]"
      style={{
        padding: '16px 40px',
        background:
          "linear-gradient(180deg, #131315 0%, rgba(19,19,21,0) 100%), linear-gradient(90deg, rgba(19,19,21,0.8) 0%, rgba(19,19,21,0.8) 100%)",
        boxShadow: "0px 4px 30px 0px rgba(0,0,0,0.1)",
        maxWidth: "100%",
      }}
    >
      {/* Left: Avatar + Logo */}
      <div className="flex items-center gap-3">
        {/* Sparkle Icon */}
        <div className="flex items-center justify-center">
          <Sparkles style={{ width: "24px", height: "24px", color: "#F0D48C", fill: "#F0D48C" }} />
        </div>

        {/* Logo text */}
        <span
          className="text-[#e1c296] text-2xl tracking-[0.05em] leading-none"
          style={{
            fontFamily: "'Georgia', 'Palatino', serif",
            fontStyle: "italic",
            textShadow: "0px 0px 4px rgba(225,194,150,0.4)",
          }}
        >
          Nakshatra Vani
        </span>
      </div>

      {/* Right: Notification */}
      {showNotification && (
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(188,199,222,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          {/* Active dot */}
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#e1c296]" />
        </button>
      )}
    </header>
  );
};