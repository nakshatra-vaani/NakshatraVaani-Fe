"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MarriageIcon,
  EducationIcon,
  LoyaltyIcon,
  CareerIcon,
  HealthIcon,
  OverallLifeIcon,
} from "@/components/reports/ReportIcons";

interface Report {
  id: string;
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const reports: Report[] = [
  {
    id: "marriage",
    slug: "marriage-report",
    icon: <MarriageIcon />,
    title: "Marriage Report",
    description: "Timeline & marital bliss analysis.",
  },
  {
    id: "education",
    slug: "educational-report",
    icon: <EducationIcon />,
    title: "Educational Report",
    description: "Academic path & competitive exams.",
  },
  {
    id: "loyalty",
    slug: "loyalty-report",
    icon: <LoyaltyIcon />,
    title: "Loyalty Report",
    description: "Deep trust & partnership honesty.",
  },
  {
    id: "career",
    slug: "career-wealth-report",
    icon: <CareerIcon />,
    title: "Career & Wealth",
    description: "Financial destiny & promotion peaks.",
  },
  {
    id: "health",
    slug: "health-report",
    icon: <HealthIcon />,
    title: "Health",
    description: "Vitality trends & ayurvedic balance.",
  },
  {
    id: "overall",
    slug: "overall-life-report",
    icon: <OverallLifeIcon />,
    title: "Overall Life",
    description: "360° view of your karmic timeline.",
  },
];

interface DetailedReportsProps {
  onGetAccess?: () => void;
}

export const DetailedReports: React.FC<DetailedReportsProps> = ({
  onGetAccess,
}) => {
  const router = useRouter();
  const [hoveredReportId, setHoveredReportId] = useState<string | null>(null);

  return (
    <section className="w-full">
      <div className="mb-8">
        <h2 style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontWeight: 500, fontSize: "28px", color: "#e5e1e4", marginBottom: "8px" }}>
          Detailed Reports
        </h2>
        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", color: "rgba(188,199,222,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
          Comprehensive astrological blueprints generated for your specific transit.
        </p>
      </div>

      {/* Grid of Reports */}
      <div className="grid grid-cols-3" style={{ gap: '24px', marginBottom: '24px' }}>
        {reports.map((report) => (
          <div
            key={report.id}
            onMouseEnter={() => setHoveredReportId(report.id)}
            onMouseLeave={() => setHoveredReportId(null)}
            onClick={() => router.push(`/single-reports/${report.slug}`)}
            className="flex items-center rounded-2xl cursor-pointer transition-all duration-200 active:scale-[0.98] hover:border-white/10"
            style={{
              padding: '24px',
              gap: '16px',
              background: '#1c1b1d',
              border: hoveredReportId === report.id
                ? '1px solid rgba(225, 194, 150, 0.25)'
                : '1px solid rgba(69,70,77,0.1)',
              boxShadow: hoveredReportId === report.id
                ? '0 0 25px rgba(225, 194, 150, 0.12), inset 0 0 15px rgba(225, 194, 150, 0.02)'
                : 'none',
              transform: hoveredReportId === report.id ? 'translateY(-4px)' : 'none',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Icon Box */}
            <div 
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{ width: '52px', height: '52px', background: '#1A1A26', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div style={{ transform: 'scale(0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {report.icon}
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h3 style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontSize: "16px", fontWeight: 500, color: "#fff", lineHeight: "1.2", marginBottom: "6px" }}>
                {report.title}
              </h3>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", color: "#c6c6cd", lineHeight: "1.4", fontWeight: 300 }}>
                {report.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divine Soul Partner Report CTA */}
      <div 
        onClick={() => router.push('/single-reports/divine-soul-partner')}
        className="relative rounded-3xl overflow-hidden w-full cursor-pointer transition-transform active:scale-[0.99]"
        style={{
          padding: '32px 40px',
          background: 'linear-gradient(135deg, rgba(28,18,8,0.9) 0%, rgba(36,26,10,0.8) 40%, rgba(14,14,26,0.9) 100%)',
          border: '1px solid rgba(201,145,58,0.15)'
        }}
      >
        <div className="flex items-center justify-between relative z-10 w-full">
          <div className="flex items-center" style={{ gap: '24px' }}>
            {/* Gem icon */}
            <div 
              className="rounded-full flex items-center justify-center flex-shrink-0"
              style={{ width: '72px', height: '72px', background: 'rgba(201,145,58,0.1)', border: '1px solid rgba(201,145,58,0.2)' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#e1c296">
                <path d="M6 3L2 9L12 21L22 9L18 3H6ZM5.4 5H18.6L20.2 7.4L12 17.6L3.8 7.4L5.4 5ZM10 5H14V8H10V5ZM7.5 5H8.5V8H4.5L7.5 5ZM15.5 5H16.5L19.5 8H15.5V5ZM11 9.5V14.5L7.5 9.5H11ZM13 9.5H16.5L13 14.5V9.5Z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <h3 style={{ fontFamily: "'Noto Serif', 'Georgia', serif", fontSize: "26px", fontWeight: 500, color: "#fff", lineHeight: "1.2", marginBottom: "8px" }}>
                Divine Soul Partner Report
              </h3>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", fontWeight: 300 }}>
                The ultimate blueprint of your cosmic twin flame.
              </p>
            </div>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push('/single-reports/divine-soul-partner');
            }}
            className="rounded-full transition-transform active:scale-95 hover:bg-[#bcc7de]/90"
            style={{ 
              background: '#bcc7de', 
              color: '#0A0A10', 
              fontWeight: 700, 
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '16px 36px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Get Access
          </button>
        </div>
      </div>
    </section>
  );
};