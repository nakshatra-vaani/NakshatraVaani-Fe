"use client";

import React from "react";

interface TimeInputProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const TimeInput: React.FC<TimeInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "--:--",
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#bcc7de",
            fontWeight: 500,
          }}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="time"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          style={{
            background: "rgba(42,42,44,0.4)",
            border: "1px solid rgba(69,70,77,0.15)",
            borderRadius: "12px",
            padding: "14px 16px",
            color: "#c6c6cd",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "14px",
            width: "100%",
          }}
          className="outline-none transition-colors duration-200 focus:border-[rgba(225,194,150,0.3)]"
        />
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(118,129,151,0.6)"
          strokeWidth="1.5"
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
    </div>
  );
};