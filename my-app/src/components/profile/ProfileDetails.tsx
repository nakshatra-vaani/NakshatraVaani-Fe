"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Trash2,
  User,
  Sparkles,
} from "lucide-react";

import { TopAppBar } from "@/components/ui/TopAppBar";
import { BottomNavBar } from "@/components/ui/BottomNavBar";

type ProfileData = {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
};

const emptyProfile: ProfileData = {
  name: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  timeOfBirth: "",
  placeOfBirth: "",
};

const storageKeys = ["user", "profile", "signupData"] as const;

function readStoredProfile(): ProfileData {
  for (const key of storageKeys) {
    const value = localStorage.getItem(key);

    if (!value) continue;

    try {
      const parsed = JSON.parse(value) as Partial<ProfileData>;

      return {
        ...emptyProfile,
        ...parsed,
      };
    } catch {
      continue;
    }
  }

  return emptyProfile;
}

function clearAuthStorage() {
  localStorage.removeItem("token");

  storageKeys.forEach((key) => localStorage.removeItem(key));
}

/* ────────────────────────────────────────────── */
/* Design Tokens */
/* ────────────────────────────────────────────── */

const tok = {
  gold: "#C9A853",
  goldLight: "#E2C97E",
  goldDim: "rgba(201,168,83,0.18)",
  cream: "#E8D9B5",
  bgCard: "rgba(28,25,20,0.75)",
  bgCardHov: "rgba(40,35,26,0.88)",
  borderCard: "rgba(255,255,255,0.08)",
  borderGold: "rgba(201,168,83,0.22)",
  textBody: "rgba(255,255,255,0.62)",
  textDim: "rgba(255,255,255,0.32)",
  textLabel: "rgba(255,255,255,0.32)",
};

export function ProfileDetails() {
  const router = useRouter();

  const [profile, setProfile] = useState<ProfileData>(emptyProfile);

  const [isDeleting, setIsDeleting] = useState(false);

  const [hoveredField, setHoveredField] = useState<string | null>(null);

  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  useEffect(() => {
    setProfile(readStoredProfile());
  }, []);

  const fields = useMemo(
    () => [
      {
        label: "Full Name",
        value: profile.name,
        icon: User,
      },
      {
        label: "Date of Birth",
        value: profile.dateOfBirth,
        icon: Calendar,
      },
      {
        label: "Time of Birth",
        value: profile.timeOfBirth,
        icon: Clock,
      },
      {
        label: "Place of Birth",
        value: profile.placeOfBirth,
        icon: MapPin,
      },
      {
        label: "Phone Number",
        value: profile.phone,
        icon: Phone,
      },
      {
        label: "Email Address",
        value: profile.email,
        icon: Mail,
      },
    ],
    [profile]
  );

  const handleLogout = () => {
    clearAuthStorage();

    router.replace("/login");
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmed) return;

    try {
      setIsDeleting(true);

      clearAuthStorage();

      router.replace("/signup");
    } finally {
      setIsDeleting(false);
    }
  };

  /* ────────────────────────────────────────────── */
  /* Initials Avatar */
  /* ────────────────────────────────────────────── */

  const initials = profile.name
    ? profile.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>

      {/* ────────────────────────────────────────────── */}
      {/* ROOT PAGE */}
      {/* ────────────────────────────────────────────── */}

      <main
        style={{
          minHeight: "100vh",
          position: "relative",
          background: "#131315",
          overflowX: "hidden",
        }}
      >
        {/* ────────────────────────────────────────────── */}
        {/* Cosmic Background */}
        {/* ────────────────────────────────────────────── */}

        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            background: [
              "radial-gradient(1.2px 1.2px at 8% 12%, rgba(255,255,255,0.52) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 23% 67%, rgba(255,255,255,0.38) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 55% 8%, rgba(255,255,255,0.48) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 72% 45%, rgba(255,255,255,0.28) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 38% 88%, rgba(255,255,255,0.40) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 90% 22%, rgba(255,255,255,0.33) 0%, transparent 100%)",
              "radial-gradient(ellipse 55% 90% at 108% 68%, rgba(155,95,25,0.50) 0%, rgba(75,42,8,0.28) 40%, transparent 68%)",
              "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(95,60,12,0.16) 0%, transparent 55%)",
              "#07070C",
            ].join(", "),
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(180deg, #131315 0%, rgba(19,19,21,0) 15%, rgba(19,19,21,0) 85%, #131315 100%)",
          }}
        />

        {/* Planet Glow */}
        <div
          style={{
            position: "fixed",
            right: "-20vw",
            top: "8vh",
            width: "62vw",
            height: "92vh",
            borderRadius: "50%",
            background: [
              "radial-gradient(ellipse 52% 62% at 28% 32%, rgba(195,135,45,0.20) 0%, transparent 52%)",
              "radial-gradient(ellipse 80% 80% at 50% 50%, #2a1e0d 0%, #191208 40%, #0c0a07 100%)",
            ].join(", "),
            boxShadow:
              "inset -50px -25px 90px rgba(0,0,0,0.82), 0 0 130px rgba(130,85,18,0.16)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* ────────────────────────────────────────────── */}
        {/* Top Navbar */}
        {/* ────────────────────────────────────────────── */}

        <TopAppBar />

        {/* ────────────────────────────────────────────── */}
        {/* PAGE CONTENT */}
        {/* ────────────────────────────────────────────── */}

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            paddingTop: "110px",
            paddingBottom: "140px",
            paddingLeft: "24px",
            paddingRight: "24px",
            fontFamily: "'Jost', sans-serif",
            color: "white",
          }}
        >
          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
            }}
          >
            {/* ────────────────────────────────────────────── */}
            {/* Heading */}
            {/* ────────────────────────────────────────────── */}

            <div
              style={{
                textAlign: "center",
                marginBottom: 40,
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: tok.gold,
                  marginBottom: 12,
                }}
              >
                Account
              </p>

              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(26px, 3.5vw, 36px)",
                  fontWeight: 400,
                  letterSpacing: "0.03em",
                  color: "white",
                  marginBottom: 10,
                }}
              >
                Profile Details
              </h1>

              <div
                style={{
                  width: 44,
                  height: 1.5,
                  background: tok.gold,
                  margin: "0 auto 14px",
                  opacity: 0.75,
                }}
              />

              <p
                style={{
                  fontSize: 13,
                  color: tok.textBody,
                  fontWeight: 300,
                  maxWidth: 400,
                  margin: "0 auto",
                  lineHeight: 1.65,
                }}
              >
                Your saved birth and contact details are shown here.
              </p>
            </div>

            {/* ────────────────────────────────────────────── */}
            {/* Avatar */}
            {/* ────────────────────────────────────────────── */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 36,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 35% 38%, rgba(232,162,42,0.90) 0%, rgba(140,85,15,0.70) 40%, rgba(15,12,6,0.95) 100%)",
                  boxShadow: `0 0 0 1.5px ${tok.goldDim}, 0 0 28px rgba(201,168,83,0.22)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 24,
                  fontWeight: 400,
                  color: tok.goldLight,
                  letterSpacing: "0.05em",
                }}
              >
                {initials}
              </div>
            </div>

            {/* ────────────────────────────────────────────── */}
            {/* Profile Cards */}
            {/* ────────────────────────────────────────────── */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 12,
                marginBottom: 16,
              }}
            >
              {fields.map(({ label, value, icon: Icon }) => {
                const hovered = hoveredField === label;

                return (
                  <div
                    key={label}
                    onMouseEnter={() => setHoveredField(label)}
                    onMouseLeave={() => setHoveredField(null)}
                    style={{
                      borderRadius: 14,
                      border: `1px solid ${
                        hovered ? tok.borderGold : tok.borderCard
                      }`,
                      background: hovered
                        ? tok.bgCardHov
                        : tok.bgCard,
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      padding: "18px 20px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      transition:
                        "background 0.25s, border-color 0.22s",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)",
                        border: `1px solid ${
                          hovered
                            ? "rgba(201,168,83,0.28)"
                            : "rgba(255,255,255,0.09)"
                        }`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: hovered
                          ? tok.gold
                          : "rgba(255,255,255,0.55)",
                      }}
                    >
                      <Icon size={15} />
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: 9,
                          fontWeight: 600,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: tok.textLabel,
                          marginBottom: 6,
                        }}
                      >
                        {label}
                      </p>

                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: value ? 400 : 300,
                          color: value
                            ? "rgba(255,255,255,0.88)"
                            : tok.textDim,
                          wordBreak: "break-word",
                          lineHeight: 1.4,
                          fontStyle: value ? "normal" : "italic",
                        }}
                      >
                        {value || "Not provided"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: "rgba(255,255,255,0.07)",
                margin: "28px 0",
              }}
            />

            {/* ────────────────────────────────────────────── */}
            {/* Buttons */}
            {/* ────────────────────────────────────────────── */}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "flex-end",
              }}
            >
              {/* Logout */}

              <button
                type="button"
                onClick={handleLogout}
                onMouseEnter={() => setHoveredBtn("logout")}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 42,
                  padding: "0 24px",
                  borderRadius: 999,
                  border: `1px solid ${
                    hoveredBtn === "logout"
                      ? "rgba(201,168,83,0.45)"
                      : "rgba(255,255,255,0.10)"
                  }`,
                  background:
                    hoveredBtn === "logout"
                      ? "rgba(201,168,83,0.08)"
                      : "rgba(255,255,255,0.04)",
                  color:
                    hoveredBtn === "logout"
                      ? tok.gold
                      : "rgba(255,255,255,0.75)",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                <LogOut size={14} />
                Log Out
              </button>

              {/* Delete */}

              <button
                type="button"
                onClick={handleDeleteAccount}
                disabled={isDeleting}
                onMouseEnter={() => setHoveredBtn("delete")}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 42,
                  padding: "0 24px",
                  borderRadius: 999,
                  border: `1px solid ${
                    hoveredBtn === "delete"
                      ? "rgba(248,113,113,0.45)"
                      : "rgba(248,113,113,0.22)"
                  }`,
                  background:
                    hoveredBtn === "delete"
                      ? "rgba(239,68,68,0.14)"
                      : "rgba(239,68,68,0.08)",
                  color:
                    hoveredBtn === "delete"
                      ? "#fca5a5"
                      : "#fca5a5cc",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  cursor: isDeleting ? "not-allowed" : "pointer",
                  opacity: isDeleting ? 0.55 : 1,
                }}
              >
                <Trash2 size={14} />
                {isDeleting ? "Deleting…" : "Delete Account"}
              </button>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────── */}
        {/* AI Floating Button */}
        {/* ────────────────────────────────────────────── */}

        <button
          style={{
            position: "fixed",
            zIndex: 50,
            bottom: "100px",
            right: "40px",
            width: "60px",
            height: "60px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, #e1c296 0%, #c9913a 100%)",
            boxShadow: "0px 8px 32px rgba(201, 145, 58, 0.4)",
          }}
          aria-label="Open AI Assistant"
        >
          <Sparkles
            size={28}
            color="#131315"
            strokeWidth={2.5}
          />
        </button>

        {/* ────────────────────────────────────────────── */}
        {/* Bottom Navigation */}
        {/* ────────────────────────────────────────────── */}

        <BottomNavBar />
      </main>
    </>
  );
}