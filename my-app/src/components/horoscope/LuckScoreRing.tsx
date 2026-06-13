"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LuckScoreRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

export default function LuckScoreRing({
  score,
  size = 110,
  strokeWidth = 4,
}: LuckScoreRingProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - score / 100);

  useEffect(() => {
    const duration = 1500;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(eased * score));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const timer = setTimeout(() => requestAnimationFrame(animate), 400);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <motion.div
      className="relative flex items-center justify-center flex-shrink-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(225, 194, 150, 0.08)"
          strokeWidth={strokeWidth}
        />

        {/* Progress arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#luckGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          style={{
            filter: "drop-shadow(0 0 4px rgba(225, 194, 150, 0.3))",
          }}
        />

        <defs>
          <linearGradient id="luckGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9913A" />
            <stop offset="100%" stopColor="#E8B86D" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center score */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-2xl md:text-3xl font-semibold text-[#e1c296]"
          style={{
            fontFamily: "'Cormorant Garamond', 'Noto Serif', serif",
            textShadow: "0 0 8px rgba(225, 194, 150, 0.3)",
          }}
        >
          {animatedScore}%
        </span>
        <span
          className="text-[8px] uppercase tracking-[0.15em] text-[#768197] mt-0.5"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Luck Score
        </span>
      </div>
    </motion.div>
  );
}
