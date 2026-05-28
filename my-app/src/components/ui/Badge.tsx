import React from "react";

type BadgeVariant = "favorable" | "warning" | "neutral" | "gold";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles: Record<BadgeVariant, string> = {
  favorable: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
  warning: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
  neutral: "bg-white/10 text-white/70 border border-white/10",
  gold: "bg-[#C9913A]/15 text-[#E8B86D] border border-[#C9913A]/20",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "neutral",
  children,
  icon,
  className = "",
  style,
}) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase
        ${variantStyles[variant]}
        ${className}
      `}
      style={{
        padding: "4px 12px",
        ...style,
      }}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {children}
    </span>
  );
};