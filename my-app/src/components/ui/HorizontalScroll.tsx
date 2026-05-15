import React from "react";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
}

const gapStyles = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5",
};

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = "",
  gap = "md",
}) => {
  return (
    <div
      className={`
        flex overflow-x-auto scrollbar-hide pb-1
        ${gapStyles[gap]}
        ${className}
      `}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {children}
    </div>
  );
};