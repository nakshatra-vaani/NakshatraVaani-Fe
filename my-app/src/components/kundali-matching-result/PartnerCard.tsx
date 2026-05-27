"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface PartnerCardProps {
  partnerNumber: 1 | 2;
  name: string;
  manglikStatus: "present" | "non-manglik";
  delay?: number;
}

export default function PartnerCard({
  partnerNumber,
  name,
  manglikStatus,
  delay = 0,
}: PartnerCardProps) {
  const isManglik = manglikStatus === "present";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex-1"
    >
      <Card
        padding="lg"
        glassmorphism
        className="text-center h-full"
        style={{
          background: "rgba(42, 42, 44, 0.5)",
          backdropFilter: "blur(18px)",
        }}
      >
        <span
          className="text-[9px] uppercase tracking-[0.2em] text-[#768197] block mb-3"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Partner {partnerNumber === 1 ? "I" : "II"}
        </span>

        <h3
          className="text-xl md:text-2xl font-medium text-white mb-4"
          style={{
            fontFamily: "'Noto Serif', serif",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.1)",
          }}
        >
          {name}
        </h3>

        <div className="flex items-center justify-center gap-1.5">
          {isManglik ? (
            <>
              <AlertTriangle
                className="w-3.5 h-3.5 text-red-400"
                strokeWidth={2}
              />
              <span className="text-[10px] uppercase tracking-[0.12em] text-red-400 font-medium">
                Manglik Dosha Present
              </span>
            </>
          ) : (
            <>
              <CheckCircle2
                className="w-3.5 h-3.5 text-emerald-400"
                strokeWidth={2}
              />
              <span className="text-[10px] uppercase tracking-[0.12em] text-emerald-400 font-medium">
                Non-Manglik
              </span>
            </>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
