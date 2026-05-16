"use client";

import React from "react";

interface DailyHoroscopeProps {
  sign?: string;
  date?: string;
  horoscopeText?: string;
  highlightedPhrase?: string;
  luckScore?: string;
  rulingPlanet?: string;
}

export const DailyHoroscope: React.FC<DailyHoroscopeProps> = ({
  sign = "Aries",
  date = "Oct 24, 2023",
  horoscopeText = "Today, the North Node activates your House of Creativity. A forgotten passion resurfaces—listen to the cosmic whisper.",
  highlightedPhrase = "House of Creativity",
  luckScore = "88%",
  rulingPlanet = "Mars",
}) => {
  const renderHoroscopeText = () => {
    if (!highlightedPhrase) return <span>{horoscopeText}</span>;
    const parts = horoscopeText.split(highlightedPhrase);
    return (
      <>
        {parts[0]}
        <span style={{ color: "#e1c296", fontWeight: 500 }}>{highlightedPhrase}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="w-full">
      {/* Section label */}
      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(118,129,151,1)", fontWeight: 600, marginBottom: "8px" }}>
        YOUR CELESTIAL TRANSIT
      </p>

      {/* Title + Sign Row */}
      <div 
        className="flex items-end justify-between"
        style={{ marginBottom: "32px" }}
      >
        <h2
          style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontSize: "40px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.5px", color: "#e5e1e4" }}
        >
          Daily Horoscope
        </h2>
        <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(188,199,222,0.6)", fontWeight: 600 }}>
          {sign} • {date}
        </span>
      </div>

      {/* Main Card */}
      <div 
        className="w-full flex rounded-[32px] relative overflow-hidden" 
        style={{ 
          background: "#1c1b1d", 
          border: "1px solid rgba(225,194,150,0.08)",
          boxShadow: "0px 0px 100px 0px rgba(201, 145, 58, 0.15)",
          padding: "56px 64px" 
        }}
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start pr-12 z-10" style={{ maxWidth: '600px' }}>
          {/* Badge */}
          <div 
            className="flex items-center rounded-full" 
            style={{ 
              background: "rgba(225,194,150,0.1)", 
              border: "1px solid rgba(225,194,150,0.2)",
              padding: "6px 16px",
              gap: "6px",
              marginBottom: "32px"
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#e1c296"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", color: "#e1c296", textTransform: "uppercase" }}>
              FAVORABLE ALIGNMENT
            </span>
          </div>

          {/* Horoscope Text */}
          <h3 style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontSize: "32px", lineHeight: "1.3", color: "#e5e1e4", fontWeight: 500, marginBottom: "48px" }}>
            {renderHoroscopeText()}
          </h3>

          {/* Stats */}
          <div className="flex" style={{ gap: "64px" }}>
            <div className="flex flex-col" style={{ gap: "8px" }}>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(188,199,222,0.6)", fontWeight: 700 }}>
                LUCK SCORE
              </span>
              <span style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontSize: "28px", color: "#e1c296", fontWeight: 500, lineHeight: 1 }}>
                {luckScore}
              </span>
            </div>
            <div className="flex flex-col" style={{ gap: "8px" }}>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(188,199,222,0.6)", fontWeight: 700 }}>
                RULING PLANET
              </span>
              <span style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontSize: "28px", color: "#bcc7de", fontWeight: 500, lineHeight: 1 }}>
                {rulingPlanet}
              </span>
            </div>
          </div>
        </div>

        {/* Right Emblem */}
        <div className="absolute right-[64px] top-1/2 -translate-y-1/2 flex items-center justify-center opacity-80 pointer-events-none">
          <div className="rounded-full border border-[rgba(225,194,150,0.05)] flex items-center justify-center" style={{ width: '280px', height: '280px' }}>
            <div className="rounded-full border border-[rgba(225,194,150,0.1)] flex items-center justify-center" style={{ width: '200px', height: '200px' }}>
              {/* Lotus SVG */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e1c296" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                <path d="M12 22C12 22 19 18 19 12C19 6 12 2 12 2C12 2 5 6 5 12C5 18 12 22 12 22Z" />
                <path d="M12 22C12 22 22 15 22 9C22 3 12 2 12 2" />
                <path d="M12 22C12 22 2 15 2 9C2 3 12 2 12 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};