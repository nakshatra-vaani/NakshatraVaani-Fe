"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import {TopAppBar} from "@/components/ui/TopAppBar";
import {BottomNavBar} from "@/components/ui/BottomNavBar";
import {SectionHeader} from "@/components/ui/SectionHeader";
import { Button }from "@/components/ui/HiTechButton";
import ScoreRing from "@/components/kundali-matching-result/ScoreRing";
import PartnerCard from "@/components/kundali-matching-result/PartnerCard";
import AshtaKutaCard, { type KutaMetric } from "@/components/kundali-matching-result/AshtaKutaCard";

const ashtaKutaData: KutaMetric[] = [
  { name: "Varna", score: "1", maxScore: "1", label: "Perfect" },
  { name: "Vashya", score: "2", maxScore: "2", label: "Harmonious" },
  { name: "Tara", score: "1.5", maxScore: "3", label: "Balanced" },
  { name: "Yoni", score: "4", maxScore: "4", label: "Soul-Linked" },
  { name: "Maitri", score: "5", maxScore: "5", label: "Exalted" },
  { name: "Gana", score: "1", maxScore: "6", label: "Caution" },
  { name: "Bhakut", score: "7", maxScore: "7", label: "Devine" },
  { name: "Nadi", score: "8", maxScore: "8", label: "Ancestral" },
];

export default function KundaliMatchingResults() {
  return (
    <main className="min-h-screen relative flex justify-center overflow-x-hidden">

      {/* Radial gradient overlay for depth */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(80, 50, 120, 0.15) 0%, transparent 50%)",
        }}
      />

      {/* Top fade gradient */}
      <div
        className="fixed top-0 left-0 right-0 h-[200px] pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, transparent 100%)",
        }}
      />

      {/* Bottom fade gradient */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[200px] pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(to top, #000000 0%, transparent 100%)",
        }}
      />

      {/* Content wrapper */}
      <div
        className="relative z-10 flex flex-col w-full"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "100px",
          paddingBottom: "140px",
          paddingLeft: "20px",
          paddingRight: "20px",
          gap: "40px",
        }}
      >
        {/* Score Section */}
        <section className="flex flex-col items-center text-center">
          <ScoreRing score={28} maxScore={36} size={240} strokeWidth={3} />

          {/* Verdict Title */}
          <motion.h1
            className="mt-10 text-3xl md:text-4xl font-medium italic text-gold gold-glow-text"
            style={{
              fontFamily: "'Cormorant Garamond', 'Noto Serif', serif",
              letterSpacing: "0.02em",
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            An Auspicious Union
          </motion.h1>

          {/* Verdict Description */}
          <motion.p
            className="mt-4 text-sm md:text-base text-[#c6c6cd] max-w-lg leading-relaxed"
            style={{ fontFamily: "'Manrope', sans-serif" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            The celestial alignment suggests a deep spiritual resonance. Your
            energies flow in a harmonious synchronicity, promising a foundation of
            shared wisdom and mutual growth.
          </motion.p>
        </section>

        {/* Partner Details Section */}
        <section className="w-full">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <PartnerCard
              partnerNumber={1}
              name="Aarav Sharma"
              manglikStatus="present"
              delay={0.7}
            />
            <PartnerCard
              partnerNumber={2}
              name="Ishani Verma"
              manglikStatus="non-manglik"
              delay={0.8}
            />
          </div>
        </section>

        {/* Ashta Kuta Breakdown Section */}
        <section className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <SectionHeader
              title="Ashta Kuta Breakdown"
              rightElement={
                <span className="text-[9px] uppercase tracking-[0.15em] text-[#768197]">
                  8 Sacred Metrics
                </span>
              }
              className="mb-6"
            />
          </motion.div>

          {/* Desktop: 4 columns, Tablet: 2 columns, Mobile: 2 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {ashtaKutaData.map((metric, index) => (
              <AshtaKutaCard key={metric.name} metric={metric} index={index} />
            ))}
          </div>
        </section>

        {/* CTA Button */}
        <motion.section
          className="w-full flex justify-center pt-4 pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Button
            variant="gold"
            size="lg"
            className="min-w-[260px] md:min-w-[300px] tracking-[0.15em]"
            style={{
              boxShadow:
                "0 0 20px rgba(201, 145, 58, 0.2), 0 4px 12px rgba(0, 0, 0, 0.3)",
            }}
            onClick={() => {
              /* Download report handler */
            }}
          >
            <Download className="w-4 h-4 mr-2" strokeWidth={2} />
            Download Detailed Report
          </Button>
        </motion.section>
      </div>

      {/* Navigation */}
      <TopAppBar />
      <BottomNavBar />
    </main>
  );
}
