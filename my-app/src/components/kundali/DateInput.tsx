"use client";

import React from "react";

interface DateInputProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "dd-mm-yyyy",
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
          type="date"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
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
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      </div>
    </div>
  );
};