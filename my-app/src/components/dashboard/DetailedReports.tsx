"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/HiTechButton";

interface Report {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const reports: Report[] = [
  {
    id: "marriage",
    icon: "💞",
    title: "Marriage Report",
    description: "Timeline & marital bliss analysis.",
  },
  {
    id: "education",
    icon: "🎓",
    title: "Educational Report",
    description: "Academic path & competitive exams.",
  },
  {
    id: "loyalty",
    icon: "🛡️",
    title: "Loyalty Report",
    description: "Deep trust & partnership honesty.",
  },
  {
    id: "career",
    icon: "💰",
    title: "Career & Wealth",
    description: "Financial destiny & promotion peaks.",
  },
  {
    id: "health",
    icon: "🌿",
    title: "Health",
    description: "Vitality trends & ayurvedic balance.",
  },
  {
    id: "overall",
    icon: "〰️",
    title: "Overall Life",
    description: "360° view of your karmic timeline.",
  },
];

interface ReportRowProps extends Report {
  isLast?: boolean;
}

const ReportRow: React.FC<ReportRowProps> = ({
  icon,
  title,
  description,
  isLast = false,
}) => (
  <div
    className={`
      flex items-center gap-4 py-4 cursor-pointer group
      hover:bg-white/[0.02] rounded-xl px-1 -mx-1
      transition-colors duration-150
      ${!isLast ? "border-b border-white/[0.05]" : ""}
    `}
  >
    {/* Icon container */}
    <div className="w-10 h-10 bg-[#1A1A26] border border-white/[0.06] rounded-xl flex items-center justify-center text-lg flex-shrink-0">
      {icon}
    </div>

    {/* Text */}
    <div className="flex-1 min-w-0">
      <p className="text-white text-sm font-medium leading-tight">{title}</p>
      <p className="text-white/35 text-xs mt-0.5 leading-tight truncate">
        {description}
      </p>
    </div>

    {/* Arrow */}
    <span className="text-white/20 group-hover:text-white/50 transition-colors duration-200 text-base flex-shrink-0">
      ›
    </span>
  </div>
);

interface DetailedReportsProps {
  onGetAccess?: () => void;
}

export const DetailedReports: React.FC<DetailedReportsProps> = ({
  onGetAccess,
}) => {
  return (
    <section className="px-5">
      <div className="mb-4">
        <SectionHeader
          title="Detailed Reports"
          subtitle="Comprehensive astrological blueprints generated for your specific transit."
        />
      </div>

      {/* Reports List Card */}
      <Card padding="none" className="px-4 py-2 mb-4">
        {reports.map((report, index) => (
          <ReportRow
            key={report.id}
            {...report}
            isLast={index === reports.length - 1}
          />
        ))}
      </Card>

      {/* Divine Soul Partner Report CTA */}
      <div
        className="
          relative rounded-2xl overflow-hidden p-5
          bg-gradient-to-br from-[#1C1208] via-[#241A0A] to-[#0E0E1A]
          border border-[#C9913A]/20
        "
      >
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9913A]/10 rounded-full blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />

        <div className="flex gap-4 items-start relative z-10">
          {/* Gem icon */}
          <div className="w-12 h-12 rounded-xl bg-[#C9913A]/15 border border-[#C9913A]/25 flex items-center justify-center text-2xl flex-shrink-0">
            💎
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-white font-semibold text-base leading-tight">
                Divine Soul Partner Report
              </h3>
              <p className="text-white/45 text-xs mt-1.5 leading-relaxed">
                The ultimate blueprint of your cosmic twin flame.
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="border-[#C9913A]/30 hover:border-[#C9913A]/50"
              onClick={onGetAccess}
            >
              Get Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};