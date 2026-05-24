"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TopAppBar } from "@/components/ui/TopAppBar";
import { BottomNavBar } from "@/components/ui/BottomNavBar";
import { PartnerDetails } from "@/components/kundali/PartnerDetails";
import { Sparkles } from "lucide-react";

interface PartnerData {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

export default function KundaliMatchingPage() {
  const router = useRouter();
  const [malePartner, setMalePartner] = useState<PartnerData>({
    fullName: "Aarav Sharma",
    dateOfBirth: "15/08/1995",
    timeOfBirth: "12:00 PM",
    placeOfBirth: "New Delhi, Delhi, India",
  });

  const [femalePartner, setFemalePartner] = useState<PartnerData>({
    fullName: "Ishani Verma",
    dateOfBirth: "23/11/1997",
    timeOfBirth: "02:30 PM",
    placeOfBirth: "Mumbai, Maharashtra, India",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleMaleChange = (field: keyof PartnerData, value: string) => {
    setMalePartner((prev) => ({ ...prev, [field]: value }));
  };

  const handleFemaleChange = (field: keyof PartnerData, value: string) => {
    setFemalePartner((prev) => ({ ...prev, [field]: value }));
  };

  const handleCalculateGunaMilan = () => {
    setIsLoading(true);
    router.push("/kundali-matching-result");
  };

  const isFormValid =
    malePartner.fullName &&
    malePartner.dateOfBirth &&
    malePartner.timeOfBirth &&
    malePartner.placeOfBirth &&
    femalePartner.fullName &&
    femalePartner.dateOfBirth &&
    femalePartner.timeOfBirth &&
    femalePartner.placeOfBirth;

  return (
    <main className="min-h-screen relative flex flex-col items-center" style={{ background: "#131315" }}>
      {/* Background effects matching Dashboard */}
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
            "linear-gradient(180deg, #131315 0%, rgba(19,19,21,0) 15%, rgba(19,19,21,0) 85%, #131315 100%)",
        }}
      />

      {/* Top App Bar */}
      <TopAppBar />

      {/* Main Content */}
      <div 
        className="relative z-10 flex flex-col w-full flex-1 justify-center"
        style={{ width: '100%', maxWidth: '1100px', paddingTop: '100px', paddingBottom: '140px', paddingLeft: '40px', paddingRight: '40px' }}
      >
        {/* Page Header */}
        <div className="flex flex-col items-center gap-2 mb-16 text-center">
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "13px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#c9913a",
              fontWeight: 600,
            }}
          >
            Divine Synchronicity
          </p>
          <h1
            style={{
              fontFamily: "'Noto Serif', 'Georgia', serif",
              fontSize: "64px",
              fontWeight: 700,
              color: "#bcc7de",
              lineHeight: "1",
              letterSpacing: "-1px",
            }}
          >
            Kundali Matching
          </h1>
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, #c9913a 50%, transparent 100%)",
              marginTop: "24px",
              width: "200px",
            }}
          />
        </div>

        {/* Partner Details Form */}
        <div className="flex flex-col gap-8">
          {/* Male & Female Partners Side by Side */}
          <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-4 lg:gap-8">
            {/* Male Partner Section */}
            <div
              className="flex-1"
              style={{
                background: "rgba(42, 42, 44, 0.4)",
                border: "1px solid rgba(69, 70, 77, 0.1)",
                borderRadius: "32px",
                padding: "48px",
                boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.2)"
              }}
            >
              <PartnerDetails
                title="Male Partner Details"
                type="male"
                data={malePartner}
                onChange={handleMaleChange}
              />
            </div>

            {/* Sparkles Separator */}
            <div className="hidden md:flex items-center justify-center px-4">
              <div 
                style={{
                  background: 'rgba(201, 145, 58, 0.05)',
                  padding: '12px',
                  borderRadius: '50%',
                  border: '1px solid rgba(201, 145, 58, 0.1)',
                  boxShadow: '0px 0px 30px rgba(201, 145, 58, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Sparkles size={24} color="#e1c296" opacity={0.8} />
              </div>
            </div>

            {/* Female Partner Section */}
            <div
              className="flex-1"
              style={{
                background: "rgba(42, 42, 44, 0.4)",
                border: "1px solid rgba(69, 70, 77, 0.1)",
                borderRadius: "32px",
                padding: "48px",
                boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.2)"
              }}
            >
              <PartnerDetails
                title="Female Partner Details"
                type="female"
                data={femalePartner}
                onChange={handleFemaleChange}
              />
            </div>
          </div>

          {/* Mobile Sparkles Separator */}
          <div className="md:hidden flex justify-center">
            <div 
              style={{
                background: 'rgba(201, 145, 58, 0.05)',
                padding: '12px',
                borderRadius: '50%',
                border: '1px solid rgba(201, 145, 58, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Sparkles size={24} color="#e1c296" opacity={0.8} />
            </div>
          </div>

          {/* Calculate Button */}
          <div className="flex flex-col items-center gap-6 pt-12">
            <button
              style={{
                background: "linear-gradient(90deg, #e1c296 0%, #c9913a 100%)",
                color: "#1c1208",
                fontSize: "16px",
                fontWeight: 700,
                padding: "16px 48px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                opacity: 1,
                boxShadow: "0px 10px 40px -10px rgba(201, 145, 58, 0.5)",
                transition: "all 0.3s ease",
                fontFamily: "'Manrope', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                letterSpacing: "0.02em"
              }}
              onClick={handleCalculateGunaMilan}
              disabled={isLoading}
              className="hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? "Calculating Alignment..." : "Calculate Guna Milan"}
              <Sparkles size={18} />
            </button>

            {/* Disclaimer text */}
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "12px",
                color: "rgba(188, 199, 222, 0.4)",
                textAlign: "center",
                lineHeight: "1.6",
                maxWidth: "500px",
                fontStyle: "italic",
                marginTop: "8px"
              }}
            >
              By proceeding, our AI Vedic engine will analyze 36 Gunas based on
              Ashta Kuta parameters to determine spiritual and cosmic alignment.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNavBar />
    </main>
  );
}