"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export interface KutaMetric {
  name: string;
  score: string;
  maxScore: string;
  label: string;
}

interface AshtaKutaCardProps {
  metric: KutaMetric;
  index: number;
}

export default function AshtaKutaCard({ metric, index }: AshtaKutaCardProps) {
  const numericScore = parseFloat(metric.score);
  const numericMax = parseFloat(metric.maxScore);
  const percentage = numericMax > 0 ? (numericScore / numericMax) * 100 : 0;

  const getBarColor = () => {
    if (percentage >= 80) return "from-[#C9913A] to-[#E8B86D]";
    if (percentage >= 50) return "from-[#e1c296] to-[#E8CC8B]";
    if (percentage >= 30) return "from-[#768197] to-[#bcc7de]";
    return "from-red-400 to-red-300";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
    >
      <Card
        padding="md"
        className="h-full"
        style={{
          background: "rgba(28, 27, 29, 0.85)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[9px] uppercase tracking-[0.15em] text-[#768197]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {metric.name}
          </span>
          <span
            className="text-sm font-semibold text-[#e1c296]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {metric.score}/{metric.maxScore}
          </span>
        </div>

        <h4
          className="text-base md:text-lg font-medium text-white mb-3"
          style={{
            fontFamily: "'Noto Serif', serif",
            textShadow: "0 0 6px rgba(255, 255, 255, 0.08)",
          }}
        >
          {metric.label}
        </h4>

        {/* Progress bar */}
        <div className="w-full h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${getBarColor()}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.8, delay: 0.2 + 0.1 * index, ease: "easeOut" }}
            style={{
              boxShadow: `0 0 8px ${percentage >= 50 ? "rgba(225, 194, 150, 0.3)" : "rgba(255, 255, 255, 0.1)"}`,
            }}
          />
        </div>
      </Card>
    </motion.div>
  );
}
