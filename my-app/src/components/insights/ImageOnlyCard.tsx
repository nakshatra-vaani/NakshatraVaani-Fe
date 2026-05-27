"use client";

import React from "react";

interface ImageOnlyCardProps {
  image: string;
  height?: number;
  onClick?: () => void;
  className?: string;
}

export const ImageOnlyCard: React.FC<ImageOnlyCardProps> = ({
  image,
  height = 260,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        background: image,
        height: `${height}px`,
        border: "1px solid rgba(69,70,77,0.12)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.01)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")
      }
    />
  );
};