"use client";

import React, { useState } from "react";

interface LocationInputProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const LocationInput: React.FC<LocationInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "Search city or coordinates",
}) => {
  const [isFocused, setIsFocused] = useState(false);

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
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            background: "rgba(42,42,44,0.4)",
            border: isFocused
              ? "1px solid rgba(225,194,150,0.3)"
              : "1px solid rgba(69,70,77,0.15)",
            borderRadius: "12px",
            padding: "14px 16px 14px 40px",
            color: "#c6c6cd",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "14px",
            width: "100%",
            transition: "border-color 0.2s",
          }}
          className="outline-none placeholder:text-[rgba(118,129,151,0.5)]"
        />
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(118,129,151,0.6)"
          strokeWidth="1.5"
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
    </div>
  );
};