"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface CategoryInsight {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  status: string;
}

interface CategoryInsightCardProps {
  insight: CategoryInsight;
  index: number;
}

export default function CategoryInsightCard({
  insight,
  index,
}: CategoryInsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      className="group cursor-pointer"
    >
      <div
        className="rounded-2xl border border-white/[0.06] h-full transition-all duration-300 flex flex-col justify-between"
        style={{
          background: "rgba(28, 27, 29, 0.6)",
          backdropFilter: "blur(12px)",
          padding: "24px",
        }}
      >
        <div>
          {/* Icon and Title */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: insight.iconBg }}
            >
              {insight.icon}
            </div>
            <h3
              className="text-base font-medium text-white"
              style={{ fontFamily: "'Noto Serif', serif" }}
            >
              {insight.title}
            </h3>
          </div>

          {/* Description */}
          <p
            className="text-sm text-[#c6c6cd] leading-relaxed mb-5"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {insight.description}
          </p>
        </div>

        {/* Status Tag */}
        <div className="flex items-center justify-between">
          <span
            className="text-[9px] uppercase tracking-[0.15em] text-[#e1c296] font-medium"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {insight.status}
          </span>
          <ArrowRight
            className="w-4 h-4 text-[#768197] group-hover:text-[#e1c296] group-hover:translate-x-1 transition-all duration-200"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </motion.div>
  );
}
