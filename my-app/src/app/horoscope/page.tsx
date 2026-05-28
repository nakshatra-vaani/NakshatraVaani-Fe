"use client";

import { motion } from "framer-motion";
import { Heart, Briefcase, Leaf, ArrowRight, Sparkles, Orbit } from "lucide-react";
import { useRouter } from "next/navigation";
import {TopAppBar} from "@/components/ui/TopAppBar";
import {BottomNavBar} from "@/components/ui/BottomNavBar";
import {Badge} from "@/components/ui/Badge";
import LuckScoreRing from "@/components/horoscope/LuckScoreRing";
import CategoryInsightCard, { type CategoryInsight } from "@/components/horoscope/CategoryInsightCard";

const categoryInsights: CategoryInsight[] = [
  {
    icon: <Heart className="w-4 h-4 text-red-400" strokeWidth={2} />,
    iconBg: "rgba(239, 68, 68, 0.12)",
    title: "Love",
    description:
      "Harmony is within reach. Existing connections deepen through vulnerability. A surprise message from a past soulmate might arrive after sunset.",
    status: "Favorable",
  },
  {
    icon: <Briefcase className="w-4 h-4 text-blue-400" strokeWidth={2} />,
    iconBg: "rgba(96, 165, 250, 0.12)",
    title: "Career",
    description:
      "A new professional opportunity aligns with your core values. Focus on collaborative efforts; your leadership is being observed by mentors.",
    status: "High Energy",
  },
  {
    icon: <Leaf className="w-4 h-4 text-emerald-400" strokeWidth={2} />,
    iconBg: "rgba(52, 211, 153, 0.12)",
    title: "Health",
    description:
      "Vitality is stable, but mental fatigue may creep in. Prioritize hydration and ground yourself with a few moments of silent meditation.",
    status: "Balanced",
  },
];

export default function PersonalizedHoroscope() {
  const router = useRouter();

  return (
    <main className="min-h-screen relative flex justify-center overflow-x-hidden bg-black">
      {/* Fixed cosmic nebula background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/cosmic-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          opacity: 0.45,
        }}
      />

      {/* Ambient radial glow behind hero */}
      <div
        className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(80, 50, 120, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Top fade */}
      <div
        className="fixed top-0 left-0 right-0 h-[200px] pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, transparent 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[200px] pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(to top, #000000 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col w-full"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingTop: "100px",
          paddingBottom: "140px",
          paddingLeft: "20px",
          paddingRight: "20px",
          gap: "48px",
        }}
      >
        {/* ===== HERO SECTION ===== */}
        <section className="flex flex-col items-center text-center pt-6 md:pt-10">
          {/* Decorative corner elements */}
          <motion.div
            className="absolute top-[120px] left-[15%] w-2 h-2 border border-[#768197]/20 rotate-45 hidden md:block"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 45 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.div
            className="absolute top-[140px] right-[18%] w-2 h-2 border border-[#768197]/20 rotate-45 hidden md:block"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 45 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.span
            className="text-[9px] uppercase tracking-[0.25em] text-[#768197] mb-4"
            style={{ fontFamily: "'Manrope', sans-serif" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Today&apos;s Alignment
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', 'Noto Serif', serif",
              letterSpacing: "-0.01em",
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Venus in Transit
          </motion.h1>

          <motion.p
            className="mt-4 text-sm md:text-base text-[#c6c6cd] italic max-w-sm"
            style={{
              fontFamily: "'Noto Serif', serif",
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            &ldquo;A moment of profound clarity emerges from the void.&rdquo;
          </motion.p>
        </section>

        {/* ===== DAILY OVERVIEW SECTION ===== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div
            className="rounded-2xl border border-white/[0.06]"
            style={{
              background: "rgba(28, 27, 29, 0.6)",
              backdropFilter: "blur(14px)",
              padding: "24px",
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
              {/* Luck Score Ring */}
              <LuckScoreRing score={88} size={120} strokeWidth={4} />

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-3 mb-3">
                  <h2
                    className="text-xl md:text-2xl font-medium text-white"
                    style={{ fontFamily: "'Noto Serif', serif" }}
                  >
                    Daily Overview
                  </h2>
                  <Badge variant="gold">Mercury Dominant</Badge>
                </div>
                <p
                  className="text-sm text-[#c6c6cd] leading-relaxed"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Your cosmic energy today favors intellectual pursuits and digital
                  communication. A subtle alignment between Mercury and Saturn
                  suggests that long-standing projects may finally find their
                  resolution. Trust the rhythm of the stars.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===== CATEGORY INSIGHTS SECTION ===== */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryInsights.map((insight, index) => (
              <CategoryInsightCard
                key={insight.title}
                insight={insight}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* ===== MOON PHASE SECTION ===== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{
              background: "rgba(28, 27, 29, 0.5)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
              style={{ padding: "24px" }}
            >
              {/* Moon Image */}
              <motion.div
                className="relative flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div
                  className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden"
                  style={{
                    boxShadow:
                      "0 0 40px rgba(225, 194, 150, 0.15), inset 0 0 20px rgba(0,0,0,0.5)",
                  }}
                >
                  <img
                    src="/waxing-crescent.png"
                    alt="Waxing Crescent Moon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Moon Phase Text */}
              <div className="flex-1 text-center md:text-left">
                <h2
                  className="text-2xl md:text-3xl font-medium text-white mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif', serif" }}
                >
                  Waxing Crescent
                </h2>
                <span
                  className="text-[9px] uppercase tracking-[0.2em] text-[#768197] block mb-4"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Phase Influence: Manifestation
                </span>
                <p
                  className="text-sm text-[#c6c6cd] italic leading-relaxed mb-5"
                  style={{
                    fontFamily: "'Noto Serif', serif",
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;The seeds of intention planted during the New Moon are now
                  beginning to stir. This is a time to nourish your dreams with
                  consistent action.&rdquo;
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] text-[10px] uppercase tracking-[0.15em] text-[#c6c6cd] font-medium hover:border-[#e1c296]/30 hover:text-[#e1c296] hover:bg-white/[0.03] transition-all duration-300"
                  style={{ fontFamily: "'Manrope', sans-serif", padding: "10px 20px" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Rituals
                  <ArrowRight className="w-3 h-3" strokeWidth={2} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===== DEEPER GUIDANCE SECTION ===== */}
        <motion.section
          className="flex flex-col items-center text-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2
            className="text-xl md:text-2xl font-medium text-white mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', 'Noto Serif', serif",
              textShadow: "0 0 8px rgba(255, 255, 255, 0.08)",
            }}
          >
            Need Deeper Guidance?
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <motion.button
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.08] text-sm text-[#c6c6cd] hover:border-[#e1c296]/20 hover:bg-white/[0.03] transition-all duration-300"
              style={{
                fontFamily: "'Manrope', sans-serif",
                background: "rgba(28, 27, 29, 0.6)",
                backdropFilter: "blur(10px)",
                padding: "12px 24px",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/chat")}
            >
              <Sparkles
                className="w-4 h-4 text-[#e1c296]"
                strokeWidth={1.5}
              />
              Talk to AI Astrologer
            </motion.button>

            <motion.button
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.08] text-sm text-[#c6c6cd] hover:border-[#e1c296]/20 hover:bg-white/[0.03] transition-all duration-300"
              style={{
                fontFamily: "'Manrope', sans-serif",
                background: "rgba(28, 27, 29, 0.6)",
                backdropFilter: "blur(10px)",
                padding: "12px 24px",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Orbit
                className="w-4 h-4 text-[#e1c296]"
                strokeWidth={1.5}
              />
              Generate Birth Chart
            </motion.button>
          </div>
        </motion.section>
      </div>

      <TopAppBar />
      <BottomNavBar />
    </main>
  );
}
