import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black font-semibold hover:bg-gray-100 active:bg-gray-200",
  secondary:
    "bg-[#1E1E2A] text-white border border-white/10 hover:bg-[#252535] active:bg-[#2A2A3A]",
  ghost:
    "bg-transparent text-white/70 hover:text-white hover:bg-white/5 active:bg-white/10",
  gold: "bg-gradient-to-r from-[#C9913A] to-[#E8B86D] text-black font-semibold hover:opacity-90 active:opacity-80",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-xs rounded-full",
  md: "px-6 py-2.5 text-sm rounded-full",
  lg: "px-8 py-3.5 text-base rounded-full",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 transition-all duration-200
        tracking-wide cursor-pointer select-none
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};