"use client";

import Link from "next/link";
import { Mail, Lock, Sparkles } from "lucide-react";

export default function LoginPage() {
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

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* Background Glow */}
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background: "rgba(37, 99, 235, 0.18)",
            filter: "blur(120px)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Main Card */}
        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "500px" }}>
          <div
            style={{
              borderRadius: "32px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              background: "rgba(5, 8, 22, 0.95)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 0 80px rgba(37, 99, 235, 0.2)",
              padding: "36px 36px 32px",
            }}
          >
            {/* Logo */}
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                <Sparkles style={{ width: "24px", height: "24px", color: "#F0D48C", fill: "#F0D48C" }} />
              </div>
              <h1
                style={{
                  fontSize: "36px",
                  lineHeight: 1.2,
                  fontFamily: "Georgia, serif",
                  letterSpacing: "0.18em",
                  color: "#E8CC8B",
                  margin: 0,
                }}
              >
                NAKSHATRA
                <br />
                VANI
              </h1>
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "10px",
                  letterSpacing: "0.45em",
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                }}
              >
                The Celestial Observer
              </p>
            </div>

            {/* Inner Form Container */}
            <div
              style={{
                marginTop: "24px",
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(10, 16, 32, 0.8)",
                padding: "28px 28px 24px",
              }}
            >
              {/* Welcome */}
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <h2
                  style={{
                    fontSize: "28px",
                    fontFamily: "Georgia, serif",
                    color: "#fff",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Welcome Back
                </h2>
                <p style={{ marginTop: "8px", color: "#9CA3AF", fontSize: "13px" }}>
                  Align your spirit with the cosmic flow
                </p>
              </div>

              {/* Email */}
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D5B97A",
                  }}
                >
                  Email or Phone
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "0 14px",
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter your celestial ID"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#fff",
                      fontSize: "13px",
                    }}
                  />
                  <Mail style={{ width: "16px", height: "16px", color: "#6B7280", flexShrink: 0 }} />
                </div>
              </div>

              {/* Password */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <label
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "#D5B97A",
                    }}
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    style={{
                      fontSize: "12px",
                      color: "#9CA3AF",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Forgot Password?
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "0 14px",
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="password"
                    placeholder="••••••••"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#fff",
                      fontSize: "13px",
                    }}
                  />
                  <Lock style={{ width: "16px", height: "16px", color: "#6B7280", flexShrink: 0 }} />
                </div>
              </div>

              {/* Login Button */}
              <button
                style={{
                  width: "100%",
                  height: "44px",
                  borderRadius: "999px",
                  background: "#DCE3F7",
                  color: "#1A2238",
                  fontWeight: 600,
                  letterSpacing: "0.35em",
                  fontSize: "13px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                LOG IN
              </button>

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "20px 0 16px" }}>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
                <span style={{ fontSize: "10px", letterSpacing: "0.25em", color: "#6B7280", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  Or Connect Via
                </span>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
              </div>

              {/* Social Buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <button
                  style={{
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#E5E7EB",
                    fontSize: "13px",
                    letterSpacing: "0.2em",
                    cursor: "pointer",
                  }}
                >
                  GOOGLE
                </button>
                <button
                  style={{
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#E5E7EB",
                    fontSize: "13px",
                    letterSpacing: "0.2em",
                    cursor: "pointer",
                  }}
                >
                  APPLE
                </button>
              </div>
            </div>

            {/* Sign Up */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{ color: "#9CA3AF", fontSize: "13px" }}>
                Don&apos;t have an account?{" "}
                <Link href="/signup" style={{ color: "#E8CC8B", textDecoration: "none" }}>
                  Sign Up
                </Link>
              </p>
            </div>

            {/* Footer */}
            <div
              style={{
                marginTop: "16px",
                textAlign: "center",
                fontSize: "10px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#4B5563",
              }}
            >
              © 2026 Nakshatra Vani • Wisdom From The Infinite
            </div>
          </div>
        </div>
      </div>
    </>
  );
}