import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  style?: React.CSSProperties;
  glassmorphism?: boolean;
}

const paddingStyles = {
  none: "0px",
  sm: "16px",
  md: "20px",
  lg: "24px",
};

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
  hoverable = false,
  padding = "md",
  style,
  glassmorphism = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${glassmorphism ? "bg-white/[0.03] backdrop-blur-md" : "bg-[#111118]"} border border-white/[0.06] rounded-2xl
        ${hoverable ? "cursor-pointer transition-all duration-200 hover:border-white/10 hover:bg-[#141420] active:scale-[0.99]" : ""}
        ${className}
      `}
      style={{
        padding: paddingStyles[padding],
        ...style,
      }}
    >
      {children}
    </div>
  );
};