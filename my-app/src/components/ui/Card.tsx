import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
  hoverable = false,
  padding = "md",
  style,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-[#111118] border border-white/[0.06] rounded-2xl
        ${paddingStyles[padding]}
        ${hoverable ? "cursor-pointer transition-all duration-200 hover:border-white/10 hover:bg-[#141420] active:scale-[0.99]" : ""}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
};