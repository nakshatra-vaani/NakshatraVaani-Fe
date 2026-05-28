"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, User, Search } from "lucide-react";
import { ProfileMenu } from "@/components/ui/ProfileMenu";

interface TopAppBarProps {
  showNotification?: boolean;
  profileImageSrc?: string;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  showNotification = true,
  profileImageSrc,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        padding: '16px 40px',
        background: "rgba(28, 27, 29, 0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(225, 194, 150, 0.08)",
        boxShadow: "0px 4px 30px 0px rgba(0,0,0,0.15)",
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
          className="text-[#e1c296] text-[18px] leading-none uppercase hidden sm:block"
          style={{
            fontFamily: "'Georgia', 'Palatino', serif",
            letterSpacing: "0.15em",
            fontWeight: 600,
            textShadow: "0px 0px 4px rgba(225,194,150,0.4)",
          }}
        >
          Nakshatra Vani
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Search Widget */}
        <div className="hidden md:block w-[240px] lg:w-[320px] mr-2">
          <div className="relative flex items-center w-full">
            <div className="absolute left-4 flex items-center pointer-events-none">
              <Search 
                size={16} 
                color={isSearchFocused ? "#e1c296" : "rgba(188,199,222,0.5)"} 
                style={{ transition: "all 0.3s ease" }} 
              />
            </div>
            <input 
              type="text" 
              placeholder="Search horoscopes, signs, charts…" 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full rounded-full py-[12px] pr-4 text-[14px] text-[#e5e1e4] focus:outline-none transition-all duration-300 placeholder-[rgba(188,199,222,0.4)]"
              style={{ 
                background: isSearchFocused ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", 
                border: isSearchFocused ? "1px solid rgba(225,194,150,0.4)" : "1px solid rgba(255,255,255,0.08)",
                fontFamily: "'Manrope', sans-serif",
                boxShadow: isSearchFocused ? "0px 0px 20px rgba(201, 145, 58, 0.1)" : "inset 0px 2px 10px rgba(0,0,0,0.2)",
                paddingLeft: "44px"
              }}
            />
          </div>
        </div>
        {/* Notification */}
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

        {/* Avatar */}
        <ProfileMenu
         profileImageSrc={profileImageSrc}
          onLogout={() => {
          // Clear auth token/session here, then redirect if needed.
          window.location.href = "/login";
        }}
/>
      </div>
    </header>
  );
};