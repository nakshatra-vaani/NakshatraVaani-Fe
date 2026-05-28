import React from "react";
import Link from "next/link";

import { TopAppBar } from "@/components/ui/TopAppBar";
import { BottomNavBar } from "@/components/ui/BottomNavBar";

import { ReportFeaturedCard } from "@/components/reports/ReportFeaturedCard";
import { ReportBentoCard } from "@/components/reports/ReportBentoCard";

import {
  MarriageIcon,
  EducationIcon,
  LoyaltyIcon,
  CareerIcon,
  HealthIcon,
  OverallLifeIcon,
} from "@/components/reports/ReportIcons";

const reports = [
  {
    slug: "divine-soul-partner",
    title: "Divine Soul Partner Report",
    type: "featured",
  },

  {
    slug: "marriage-report",
    title: "Marriage Report",
    description:
      "In-depth Gun Milan analysis and manglik dosha mitigation strategies for eternal union.",
    icon: <MarriageIcon />,
    layout: "default",
  },

  {
    slug: "educational-report",
    title: "Educational Report",
    description:
      "Map your intellectual journey through Mercury's positioning and Jupiter's grace.",
    icon: <EducationIcon />,
    layout: "default",
  },

  {
    slug: "loyalty-report",
    title: "Loyalty Report",
    description:
      "Understand trust and shadows in your significant relationships.",
    icon: <LoyaltyIcon />,
    layout: "default",
  },

  {
    slug: "career-wealth-report",
    title: "Career & Wealth Report",
    description:
      "Saturn's discipline and the 10th House analysis to secure your material legacy.",
    icon: <CareerIcon />,
    layout: "horizontal",
    tags: [{ label: "Finance" }, { label: "Growth" }],
  },

  {
    slug: "health-report",
    title: "Health Report",
    description:
      "Ayurvedic planetary connections for holistic physical and spiritual well-being.",
    icon: <HealthIcon />,
    layout: "horizontal-icon-left",
  },

  {
    slug: "overall-life-report",
    title: "Overall Life Report",
    description:
      "The grand narrative of your incarnation—purpose, challenges, and ultimate liberation.",
    icon: <OverallLifeIcon />,
    layout: "horizontal-icon-left",
  },
];

export default function ReportsPage() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: "transparent" }}
    >
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

      {/* Top Bar */}
      <TopAppBar />

      {/* Main Container */}
      <div
        className="relative z-10 flex flex-col"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "100px",
          paddingBottom: "120px",
          paddingLeft: "40px",
          paddingRight: "40px",
          gap: "40px",
        }}
      >
        {/* Title */}
        <div className="flex flex-col" style={{ gap: "8px" }}>
          <h1
            className="text-[#bcc7de] text-[30px] leading-[36px] tracking-[-0.025em]"
            style={{
              fontFamily: "'Noto Serif', 'Georgia', serif",
              fontWeight: 700,
            }}
          >
            Celestial Reports
          </h1>

          <p
            className="text-[#768197] text-[14px] tracking-[0.23em] uppercase leading-[20px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            Deciphering your cosmic blueprint
          </p>
        </div>

        {/* Featured Card */}
        <Link
          href={`/reports/${reports[0].slug}`}
          style={{ textDecoration: "none" }}
        >
          <ReportFeaturedCard />
        </Link>

        {/* Bento Grid */}
        <div className="grid grid-cols-2" style={{ gap: "16px" }}>
          {/* Row 1 */}
          <Link
            href="/single-reports/marriage-report"
            style={{ textDecoration: "none" }}
          >
            <ReportBentoCard
              layout="default"
              icon={<MarriageIcon />}
              title="Marriage Report"
              description="In-depth Gun Milan analysis and manglik dosha mitigation strategies for eternal union."
              className="col-span-1 h-full"
            />
          </Link>

          <Link
            href="/single-reports/educational-report"
            style={{ textDecoration: "none" }}
          >
            <ReportBentoCard
              layout="default"
              icon={<EducationIcon />}
              title="Educational Report"
              description="Map your intellectual journey through Mercury's positioning and Jupiter's grace."
              className="col-span-1 h-full"
            />
          </Link>

          {/* Row 2 */}
          <div
            className="col-span-2 grid grid-cols-5"
            style={{ gap: "16px" }}
          >
            <Link
              href="/single-reports/loyalty-report"
              className="col-span-2"
              style={{ textDecoration: "none" }}
            >
              <ReportBentoCard
                layout="default"
                icon={<LoyaltyIcon />}
                title="Loyalty Report"
                description="Understand trust and shadows in your significant relationships."
                className="h-full"
              />
            </Link>

            <Link
              href="/single-reports/career-wealth-report"
              className="col-span-3"
              style={{ textDecoration: "none" }}
            >
              <ReportBentoCard
                layout="horizontal"
                icon={<CareerIcon />}
                title={"Career &\nWealth\nReport"}
                description="Saturn's discipline and the 10th House analysis to secure your material legacy."
                tags={[{ label: "Finance" }, { label: "Growth" }]}
                className="h-full"
              />
            </Link>
          </div>

          {/* Row 3 */}
          <Link
            href="/single-reports/health-report"
            style={{ textDecoration: "none" }}
          >
            <ReportBentoCard
              layout="horizontal-icon-left"
              icon={<HealthIcon />}
              title="Health Report"
              description="Ayurvedic planetary connections for holistic physical and spiritual well-being."
              className="col-span-1 h-full"
            />
          </Link>

          <Link
            href="/single-reports/overall-life-report"
            style={{ textDecoration: "none" }}
          >
            <ReportBentoCard
              layout="horizontal-icon-left"
              icon={<OverallLifeIcon />}
              title={"Overall Life\nReport"}
              description="The grand narrative of your incarnation—purpose, challenges, and ultimate liberation."
              className="col-span-1 h-full"
            />
          </Link>
        </div>

        {/* Mandala */}
        <div className="flex items-center justify-center opacity-10 pt-12">
          <svg width="94" height="89" viewBox="0 0 94 89" fill="none">
            <circle
              cx="47"
              cy="44.5"
              r="38"
              stroke="#e1c296"
              strokeWidth="0.8"
            />

            <circle
              cx="47"
              cy="44.5"
              r="26"
              stroke="#e1c296"
              strokeWidth="0.8"
            />

            <circle
              cx="47"
              cy="44.5"
              r="14"
              stroke="#e1c296"
              strokeWidth="0.8"
            />

            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
              (deg) => {
                const rad = (deg * Math.PI) / 180;

                const x1 = 47 + 14 * Math.cos(rad);
                const y1 = 44.5 + 14 * Math.sin(rad);

                const x2 = 47 + 38 * Math.cos(rad);
                const y2 = 44.5 + 38 * Math.sin(rad);

                return (
                  <line
                    key={deg}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#e1c296"
                    strokeWidth="0.6"
                  />
                );
              }
            )}

            {[0, 60, 120, 180, 240, 300].map((deg) => {
              const rad = (deg * Math.PI) / 180;

              const cx = 47 + 26 * Math.cos(rad);
              const cy = 44.5 + 26 * Math.sin(rad);

              return (
                <circle
                  key={deg}
                  cx={cx}
                  cy={cy}
                  r="2.5"
                  fill="#e1c296"
                />
              );
            })}

            <circle cx="47" cy="44.5" r="3.5" fill="#e1c296" />
          </svg>
        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNavBar />
    </main>
  );
}