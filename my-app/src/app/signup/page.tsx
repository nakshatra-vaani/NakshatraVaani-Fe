"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <>
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0px 1000px #0d1424 inset !important;
          box-shadow: 0 0 0px 1000px #0d1424 inset !important;
          -webkit-text-fill-color: #ffffff !important;
          caret-color: #ffffff;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        position: "relative",
        overflowX: "hidden",
      }}>
        {/* Background Glow */}
        <div style={{
          position: "fixed",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px", height: "600px",
          background: "rgba(59, 130, 246, 0.1)",
          filter: "blur(150px)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        {/* Main Card */}
        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "500px" }}>
          <div style={{
            borderRadius: "32px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(5, 8, 22, 0.95)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 0 60px rgba(59,130,246,0.12)",
            padding: "36px 36px 32px",
          }}>
            {/* Logo */}
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                <Sparkles style={{ width: "24px", height: "24px", color: "#E7C98A", fill: "#E7C98A" }} />
              </div>
              <h1 style={{
                fontSize: "36px", lineHeight: 1.2,
                fontFamily: "Georgia, serif",
                color: "#F3F4F6", margin: 0,
              }}>
                Nakshatra Vani
              </h1>
              <p style={{
                marginTop: "8px", fontSize: "10px",
                letterSpacing: "0.35em", color: "#6B7280",
                textTransform: "uppercase",
              }}>
                The Oracle of Celestial Alignments
              </p>
            </div>

            {/* Inner Form Card — SignupForm plugs in here */}
            <div style={{
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.05)",
              background: "#070B16",
              padding: "28px 28px 24px",
            }}>
              <h2 style={{
                fontSize: "26px", fontFamily: "Georgia, serif",
                color: "#E7C98A", margin: "0 0 6px 0", lineHeight: 1.2,
              }}>
                Create Your Astral Profile
              </h2>
              <p style={{ color: "#9CA3AF", fontSize: "13px", marginBottom: "24px" }}>
                Enter your birth details to synchronize with the cosmic clock.
              </p>

              {/* ✅ SignupForm owns all fields, state, validation, and submission */}
              <SignupForm />

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{
                  color: "#6B7280", fontSize: "11px",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                }}>
                  Already Have An Account?{" "}
                  <Link href="/login" style={{ color: "#E5E7EB", textDecoration: "none" }}>
                    Log In
                  </Link>
                </p>
              </div>
            </div>

            <div style={{
              marginTop: "20px", textAlign: "center",
              fontSize: "10px", color: "#4B5563", lineHeight: 1.6,
            }}>
              By continuing, you agree to our Terms of Service and Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </>
  );
}