import React from "react";

interface StatItemProps {
  label: string;
  value: string;
  className?: string;
}

export const StatItem: React.FC<StatItemProps> = ({ label, value, className = "" }) => {
  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      <span className="text-white/35 text-[10px] tracking-widest uppercase font-medium">
        {label}
      </span>
      <span className="text-white text-2xl font-bold tracking-tight leading-none">
        {value}
      </span>
    </div>
  );
};