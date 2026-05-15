import React from "react";
import { CelestialHighlights } from "@/components/dashboard/CelestialHighlights";
import { DailyHoroscope } from "@/components/dashboard/DailyHoroscope";
import { SacredServices } from "@/components/dashboard/SacredServices";
import { DetailedReports } from "@/components/dashboard/DetailedReports";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0A0A10] pb-24">
      {/* Top Spacer / Safe area */}
      <div className="h-4" />

      {/* Sections */}
      <div className="flex flex-col gap-8">
        <CelestialHighlights />
        <DailyHoroscope />
        <SacredServices />
        <DetailedReports />
      </div>
    </main>
  );
}