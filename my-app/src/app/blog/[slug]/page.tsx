"use client";

import React from "react";
import { TopAppBar } from "@/components/ui/TopAppBar";
import { BottomNavBar } from "@/components/ui/BottomNavBar";
import { ArticleHeroSection } from "@/components/blog/ArticleHeroSection";
import { ArticleBody } from "@/components/blog/ArticleBody";

export default function BlogPostPage() {
  const articleData = {
    badge: "CELESTIAL INSIGHTS",
    title: "Navigating Mercury Retrograde",
    titleHighlight: "Retrograde",
    excerpt:
      "A profound exploration of the cosmic shift through the lens of Vedic wisdom, uncovering growth in the shadows of communication.",
    
    blockquote: {
      text: "Mercury Retrograde is not a period of cosmic chaos, but a sacred pause. It is the universe's way of inviting us to re-read the chapters of our lives we skipped in our haste.",
      author: "MASTER ASTROLOGER V. SHARMA",
    },
    
    bodyParagraphs: [
      "As the swift messenger planet appears to reverse its course across the velvet tapestry of the night sky, we enter a period of profound introspection. In Vedic astrology, Budha (Mercury) governs the intellect, commerce, and our connection to the mundane world.",
      
      "The phenomenon of retrograde motion is an astronomical illusion, yet its psychological and spiritual impact is deeply felt. During these three weeks, the analytical mind tends to wander, messages go astray, and technical glitches abound. However, the Vedic perspective offers a unique remedy: the activation of the 'Viveka'—the power of discernment.",
      
      "This period invites us to revisit unfinished conversations, renegotiate contracts, and most importantly, refine our understanding of how we communicate with ourselves and others. Rather than seeing Mercury retrograde as a cosmic saboteur, the ancients understood it as the universe's gracious invitation to pause and reflect.",
    ],


  };

  return (
    <main className="min-h-screen relative flex flex-col items-center w-full" style={{ background: "transparent" }}>
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-screen opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(80,50,120,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(40,60,100,0.2) 0%, transparent 50%)",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(19,19,21,0.6) 0%, rgba(19,19,21,0) 20%, rgba(19,19,21,0) 80%, rgba(19,19,21,0.6) 100%)",
        }}
      />

      {/* ── Top App Bar ─────────────────────────────────── */}
      <TopAppBar />

      {/* ── Hero Section ────────────────────────────────── */}
      <div className="w-full max-w-[1200px] px-6 md:px-10 pt-28 pb-4 flex justify-center">
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[rgba(69,70,77,0.15)]">
          <ArticleHeroSection
            badge={articleData.badge}
            title={articleData.title}
            titleHighlight={articleData.titleHighlight}
            excerpt={articleData.excerpt}
            backgroundImage="radial-gradient(ellipse at 45% 35%, #a8643a 0%, #5a3a2a 20%, #3a2a2a 40%, #1a0a1a 65%, #0a0a10 85%, #050508 100%)"
          />
        </div>
      </div>

      {/* ── Centered Page Content Column ────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-[900px] flex flex-col items-stretch">
        {/* ── Article Body ────────────────────────────────── */}
        <ArticleBody
          firstLetterDropCap="A"
          paragraphs={articleData.bodyParagraphs}
          blockquote={articleData.blockquote}
        />
      </div>

      {/* ── Bottom padding for nav ──────────────────────── */}
      <div style={{ height: "88px" }} />

      {/* ── Bottom Nav Bar ───────────────────────────────── */}
      <BottomNavBar />
    </main>
  );
}