import React from "react";
import { TopAppBar } from "@/components/ui/TopAppBar";
import { BottomNavBar } from "@/components/ui/BottomNavBar";
import { CelestialHighlights } from "@/components/dashboard/CelestialHighlights";
import { DailyHoroscope } from "@/components/dashboard/DailyHoroscope";
import { SacredServices } from "@/components/dashboard/SacredServices";
import { DetailedReports } from "@/components/dashboard/DetailedReports";
import { Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen relative flex justify-center" style={{ background: "transparent" }}>
      {/* Background: Deep space nebula matching Reports page */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-screen opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(80,50,120,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(40,60,100,0.2) 0%, transparent 50%)",
        }}
      />
      {/* Gradient fade */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #131315 0%, rgba(19,19,21,0) 15%, rgba(19,19,21,0) 85%, #131315 100%)",
        }}
      />

      {/* Top App Bar */}
      <TopAppBar />

      {/* Page Content */}
      <div 
        className="relative z-10 flex flex-col w-full"
        style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', paddingTop: '100px', paddingBottom: '120px', paddingLeft: '40px', paddingRight: '40px', gap: '40px' }}
      >
        <CelestialHighlights />
        <DailyHoroscope />
        <SacredServices />
        <DetailedReports />
      </div>

      {/* Chatbot FAB */}
      <button
        className="fixed z-50 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        style={{
          bottom: "100px", 
          right: "40px",
          width: "60px",
          height: "60px",
          background: "linear-gradient(135deg, #e1c296 0%, #c9913a 100%)",
          border: "none",
          cursor: "pointer",
          boxShadow: "0px 8px 32px rgba(201, 145, 58, 0.4)",
        }}
        aria-label="Open Chatbot"
      >
        <Sparkles size={28} color="#131315" strokeWidth={2.5} />
      </button>

      {/* Bottom Nav */}
      <BottomNavBar />
    </main>
  );
}