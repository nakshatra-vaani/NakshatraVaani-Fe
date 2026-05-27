import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  onViewAll?: () => void;
  rightElement?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  onViewAll,
  rightElement,
  className = "",
}) => {
  return (
    <div className={`flex items-start justify-between ${className}`}>
      <div>
        <h2 className="text-white font-semibold text-xl tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/40 text-xs mt-0.5 tracking-wide">{subtitle}</p>
        )}
      </div>
      {rightElement && rightElement}
      {onViewAll && !rightElement && (
        <button
          onClick={onViewAll}
          className="text-white/40 text-xs tracking-widest uppercase hover:text-white/70 transition-colors duration-200 mt-1"
        >
          View All
        </button>
      )}
    </div>
  );
};