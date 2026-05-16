import React, { forwardRef } from "react";

interface HorizontalScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg";
}

const gapStyles = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5",
};

export const HorizontalScroll = forwardRef<HTMLDivElement, HorizontalScrollProps>(
  ({ children, className = "", gap = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`
          flex overflow-x-auto scrollbar-hide pb-1
          ${gapStyles[gap]}
          ${className}
        `}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
      >
        {children}
      </div>
    );
  }
);
HorizontalScroll.displayName = "HorizontalScroll";