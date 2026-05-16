"use client";

import React from "react";

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder = "Enter name",
  value,
  onChange,
  className = "",
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
      <input
        type="text"
        placeholder={placeholder}
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
        }}
        className={`outline-none transition-colors duration-200 placeholder:text-[rgba(118,129,151,0.5)] focus:border-[rgba(225,194,150,0.3)] ${className}`}
      />
    </div>
  );
};