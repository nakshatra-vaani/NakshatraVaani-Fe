"use client";

import React from "react";

type ReportLayout = "default" | "horizontal" | "horizontal-icon-left";

interface ReportTag {
  label: string;
}

interface ReportBentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  layout?: ReportLayout;
  tags?: ReportTag[];
  showArrow?: boolean;
  onClick?: () => void;
  className?: string;
}

const cardBase =
  "w-full rounded-[32px] border border-[rgba(69,70,77,0.1)] cursor-pointer transition-all duration-200 hover:border-[rgba(69,70,77,0.2)] hover:bg-[rgba(52,52,54,0.45)] active:scale-[0.99]";

const cardBg = "bg-[rgba(42,42,44,0.4)]";

export const ReportBentoCard: React.FC<ReportBentoCardProps> = ({
  title,
  description,
  icon,
  layout = "default",
  tags,
  showArrow = true,
  onClick,
  className = "",
}) => {
  const iconBoxClasses = "flex-shrink-0 flex items-center justify-center rounded-[20px] bg-[rgba(26,26,38,0.5)] border border-[rgba(255,255,255,0.05)]";

  if (layout === "horizontal") {
    // Career & Wealth style — icon on right
    return (
      <div
        className={`${cardBase} ${cardBg} flex items-center relative ${className}`}
        style={{ padding: '32px', gap: '24px' }}
        onClick={onClick}
      >
        {showArrow && (
          <div className="absolute top-[32px] right-[32px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1.5 12.5L12.5 1.5M12.5 1.5H4.5M12.5 1.5V9.5" stroke="rgba(188,199,222,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        {/* Text left */}
        <div className="flex-1 min-w-0 flex flex-col gap-[11px]">
          <h3
            className="text-[#e5e1e4] text-[24px] leading-[32px]"
            style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontWeight: 400 }}
          >
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
          <p
            className="text-[#c6c6cd] text-[14px] leading-[22.75px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {description}
          </p>
          {tags && tags.length > 0 && (
            <div className="flex gap-2 flex-wrap pt-3">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="rounded-full text-[#bcc7de] text-[10px] font-bold uppercase tracking-[-0.03em] flex items-center justify-center"
                  style={{
                    padding: '4px 12px',
                    background: "rgba(188,199,222,0.1)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Icon right */}
        <div className={`w-[60px] h-[60px] ${iconBoxClasses}`}>
          {icon}
        </div>
      </div>
    );
  }

  if (layout === "horizontal-icon-left") {
    // Health / Overall Life style — icon on left, text right
    return (
      <div
        className={`${cardBase} ${cardBg} flex flex-col relative ${className}`}
        style={{ padding: '32px', gap: '20px' }}
        onClick={onClick}
      >
        {showArrow && (
          <div className="absolute top-[32px] right-[32px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1.5 12.5L12.5 1.5M12.5 1.5H4.5M12.5 1.5V9.5" stroke="rgba(188,199,222,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        <div className="flex items-center" style={{ gap: '24px' }}>
          <div className={`w-[52px] h-[52px] ${iconBoxClasses}`}>
            {icon}
          </div>
          <h3
            className="text-[#e5e1e4] text-[24px] leading-[32px]"
            style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontWeight: 400 }}
          >
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
        </div>
        <p
          className="text-[#c6c6cd] text-[14px] leading-[22.75px]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {description}
        </p>
      </div>
    );
  }

  // Default layout — icon top-left, title below, desc below, arrow top-right
  return (
    <div
      className={`${cardBase} ${cardBg} flex flex-col ${className}`}
      style={{ padding: '32px', gap: '12px' }}
      onClick={onClick}
    >
      {/* Top row: icon + arrow */}
      <div className="flex items-start justify-between w-full">
        <div className={`w-[52px] h-[52px] ${iconBoxClasses}`}>
          {icon}
        </div>
        {showArrow && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 flex-shrink-0">
            <path d="M1.5 12.5L12.5 1.5M12.5 1.5H4.5M12.5 1.5V9.5" stroke="rgba(188,199,222,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>

      {/* Title */}
      <div className="pt-5">
        <h3
          className="text-[#e5e1e4] text-[24px] leading-[32px]"
          style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontWeight: 400 }}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="text-[#c6c6cd] text-[14px] leading-[22.75px]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
};