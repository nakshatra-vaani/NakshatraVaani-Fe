"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScoreRingProps {
  score: number;
  maxScore: number;
  size?: number;
  strokeWidth?: number;
}

export default function ScoreRing({
  score,
  maxScore,
  size = 220,
  strokeWidth = 3,
}: ScoreRingProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const percentage = score / maxScore;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage);

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
    const timer = setTimeout(() => requestAnimationFrame(animate), 300);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Outer decorative ring (subtle) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius + 8}
          fill="none"
          stroke="rgba(225, 194, 150, 0.05)"
          strokeWidth={1}
        />

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
          stroke="url(#goldGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          style={{
            filter: "drop-shadow(0 0 6px rgba(225, 194, 150, 0.4))",
          }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9913A" />
            <stop offset="50%" stopColor="#e1c296" />
            <stop offset="100%" stopColor="#E8B86D" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          className="flex items-baseline gap-0.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span
            className="text-5xl md:text-6xl font-light text-white"
            style={{
              fontFamily: "'Cormorant Garamond', 'Noto Serif', serif",
              textShadow: "0 0 20px rgba(225, 194, 150, 0.3)",
            }}
          >
            {animatedScore}
          </span>
          <span
            className="text-xl md:text-2xl text-[#768197] font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            /{maxScore}
          </span>
        </motion.div>
        <motion.span
          className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#768197]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Guna Milan Score
        </motion.span>
      </div>
    </motion.div>
  );
}
