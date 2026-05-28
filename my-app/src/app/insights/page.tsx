"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TopAppBar } from "@/components/ui/TopAppBar";
import { BottomNavBar } from "@/components/ui/BottomNavBar";
import {
  CategoryFilterTabs,
  InsightCategory,
} from "@/components/insights/CategoryFilterTabs";
import { FeaturedHeroCard } from "@/components/insights/FeaturedHeroCard";
import { FeaturedSideCard } from "@/components/insights/FeaturedSideCard";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { TextArticleCard } from "@/components/insights/TextArticleCard";
import { ImageOnlyCard } from "@/components/insights/ImageOnlyCard";

// ─── Image placeholders as CSS gradients matching screenshot colours ───────────
const IMAGES = {
  // Large featured: orange-red nebula
  ageOfAquarius:
    "radial-gradient(ellipse at 40% 40%, #c2440c 0%, #8b1a00 30%, #3a0a00 55%, #0d0510 80%, #080310 100%)",

  // Top-right: moon / blue night sky
  moonSign:
    "radial-gradient(ellipse at 70% 30%, #1a2a4a 0%, #0d1a30 40%, #060e20 70%, #020810 100%)",

  // Bottom-right: coloured swirl / vortex
  mercuryRetrograde:
    "radial-gradient(ellipse at 50% 50%, #7a5500 0%, #4a3200 30%, #2a1a00 55%, #0d0a00 80%, #080600 100%)",

  // Solar eclipse
  eclipse:
    "radial-gradient(circle at 50% 50%, #ffffff 0%, #ffe4a0 5%, #f59e0b 12%, #92400e 25%, #1c0f00 45%, #050200 70%, #020100 100%)",

  // Armillary sphere
  armillary:
    "radial-gradient(ellipse at 50% 60%, #7a2a00 0%, #4a1a00 30%, #2a0e00 55%, #0d0500 80%, #050200 100%)",

  // Blue spiral / galaxy
  spiral:
    "radial-gradient(ellipse at 50% 50%, #00aaff 0%, #0066cc 20%, #003388 40%, #001155 60%, #000522 80%, #000210 100%)",

  // Moon with smoke / full moon
  fullMoon:
    "radial-gradient(ellipse at 40% 30%, #3a4a6a 0%, #1a2a4a 35%, #0d1525 60%, #050a15 80%, #020508 100%)",

  // Ancient map / gold on paper
  ancientMap:
    "radial-gradient(ellipse at 50% 50%, #a0820a 0%, #7a6200 25%, #4a3c00 50%, #1a1500 75%, #0a0800 100%)",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const ARTICLES = [
  {
    id: 1,
    category: "CELESTIAL WISDOM",
    title: "Navigating the Void: A Guide to Eclipse Season",
    image: IMAGES.eclipse,
    authorInitials: "AV",
    authorName: "Dr. Amara Veda",
    readTime: "5 MIN READ",
    tags: ["NAKSHATRAS", "LUNAR CYCLES"],
  },
  {
    id: 2,
    category: "VEDIC PRACTICE",
    title: "Saturn's Lesson: Building Solid Foundations",
    image: IMAGES.armillary,
    authorInitials: "RH",
    authorName: "Rishi Hridaya",
    readTime: "8 MIN READ",
    tags: ["RETROGRADES"],
  },
  {
    id: 3,
    category: "ZODIAC FORECAST",
    title: "Mars in Scorpio: Intensity and Transformation",
    image: IMAGES.spiral,
    authorInitials: "LM",
    authorName: "Luna Mystica",
    readTime: "4 MIN READ",
    tags: ["ZODIAC SIGNS"],
  },
];

const TEXT_ARTICLE = {
  category: "THE MYSTIC LABORATORY",
  title: "Cleansing Rituals for the New Lunar Year",
  excerpt:
    "Discover the ancient art of space clearing using element-aligned incense, sacred geometry, and intentional frequency to...",
  tags: ["RITUALS"],
};

const BOTTOM_ARTICLES = [
  {
    id: 4,
    category: "THE NAKSHATRAS",
    title: "Ashwini: The Celestial Healer",
    image: IMAGES.ancientMap,
    authorInitials: "SV",
    authorName: "Sage Vayu",
    readTime: "6 MIN READ",
    tags: ["NAKSHATRAS"],
  },
];

// Helper to build a safe url slug matching our dynamic router setup
const getSlug = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("mercury") || t.includes("retrograde")) {
    return "navigating-mercury-retrograde";
  }
  return t
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function NakshatraInsightsPage() {
  const [activeCategory, setActiveCategory] = useState<InsightCategory>("ALL");
  const router = useRouter();

  const handleCardClick = (title: string) => {
    router.push(`/blog/${getSlug(title)}`);
  };

  // Filter logic
  const filterArticle = (tags: string[]) =>
    activeCategory === "ALL" || tags.includes(activeCategory);

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
            "linear-gradient(180deg, #131315 0%, rgba(19,19,21,0) 20%, rgba(19,19,21,0) 80%, #131315 100%)",
        }}
      />

      {/* ── Top App Bar ─────────────────────────────────── */}
      <TopAppBar />

      {/* ── Page Content ────────────────────────────────── */}
      <div
        className="relative z-10 mx-auto w-full max-w-[1200px]"
        style={{ paddingTop: "96px", paddingBottom: "110px" }}
      >
        {/* ════════════════════════════════════════════════
            SECTION 1 — Featured Chronicles
        ════════════════════════════════════════════════ */}
        <div style={{ padding: "0 20px 36px" }}>
          {/* Section heading */}
          <div className="flex flex-col items-center text-center" style={{ marginBottom: "32px" }}>
            <h1
              style={{
                fontFamily: "'Noto Serif', 'Georgia', serif",
                fontSize: "36px",
                fontWeight: 700,
                color: "#bcc7de",
                lineHeight: "1.1",
                letterSpacing: "-0.4px",
                margin: 0,
              }}
            >
              Featured Chronicles
            </h1>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#e1c296",
                fontWeight: 600,
                marginTop: "8px",
              }}
            >
              Major Astrological Events
            </p>
            <div
              style={{
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent 0%, #e1c296 50%, transparent 100%)",
                marginTop: "16px",
                width: "140px",
              }}
            />
          </div>

          {/* Hero grid — large card left, two small stacked right */}
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_0.55fr] h-auto md:h-[360px]"
            style={{
              gap: "12px",
            }}
          >
            {/* Large hero */}
            <FeaturedHeroCard
              badge="The Great Transition"
              title="The Age of Aquarius: A New Paradigm"
              excerpt="How the movement of Pluto into Aquarius signals a twenty-year cycle of radical innovation and collective growth."
              image={IMAGES.ageOfAquarius}
              onClick={() => handleCardClick("The Age of Aquarius: A New Paradigm")}
            />

            {/* Right column — two stacked */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <FeaturedSideCard
                category="Inner Wisdom"
                title="Understanding Your Moon Sign"
                image={IMAGES.moonSign}
                onClick={() => handleCardClick("Understanding Your Moon Sign")}
              />
              <FeaturedSideCard
                category="Vedic Insights"
                title="Mercury Retrograde Rituals"
                image={IMAGES.mercuryRetrograde}
                onClick={() => handleCardClick("Mercury Retrograde Rituals")}
              />
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 2 — Category Filter Tabs
        ════════════════════════════════════════════════ */}
        <div className="flex justify-center w-full" style={{ padding: "0 20px 28px" }}>
          <CategoryFilterTabs
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 3 — Standard Article Grid (3-col)
        ════════════════════════════════════════════════ */}
        <div style={{ padding: "0 20px" }}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            style={{
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            {ARTICLES.filter((a) => filterArticle(a.tags)).map((article) => (
              <ArticleCard
                key={article.id}
                category={article.category}
                title={article.title}
                image={article.image}
                authorInitials={article.authorInitials}
                authorName={article.authorName}
                readTime={article.readTime}
                onClick={() => handleCardClick(article.title)}
              />
            ))}
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 4 — Mixed row: image | text | image
          ════════════════════════════════════════════════ */}
          {filterArticle(["RITUALS"]) && (
            <div
              className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr_0.9fr]"
              style={{
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              {/* Full-moon image card */}
              <ImageOnlyCard image={IMAGES.fullMoon} height={280} />

              {/* Text article */}
              <TextArticleCard
                category={TEXT_ARTICLE.category}
                title={TEXT_ARTICLE.title}
                excerpt={TEXT_ARTICLE.excerpt}
                onClick={() => handleCardClick(TEXT_ARTICLE.title)}
              />

              {/* Ancient map image card */}
              <ImageOnlyCard image={IMAGES.ancientMap} height={280} />
            </div>
          )}

          {/* ════════════════════════════════════════════════
              SECTION 5 — Bottom partial row (Nakshatras)
          ════════════════════════════════════════════════ */}
          {BOTTOM_ARTICLES.filter((a) => filterArticle(a.tags)).length > 0 && (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              style={{
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              {BOTTOM_ARTICLES.filter((a) => filterArticle(a.tags)).map(
                (article) => (
                  <ArticleCard
                    key={article.id}
                    category={article.category}
                    title={article.title}
                    image={article.image}
                    authorInitials={article.authorInitials}
                    authorName={article.authorName}
                    readTime={article.readTime}
                    onClick={() => handleCardClick(article.title)}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom Nav Bar ───────────────────────────────── */}
      <BottomNavBar />
    </main>
  );
}