"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LogOut, User } from "lucide-react";

interface ProfileMenuProps {
  profileImageSrc?: string;
  profileHref?: string;
  onLogout?: () => void;
}

/* ── Design tokens (shared with report-page & ProfileDetails) ── */
const tok = {
  gold:       "#C9A853",
  goldLight:  "#E2C97E",
  goldDim:    "rgba(201,168,83,0.18)",
  goldBorder: "rgba(201,168,83,0.35)",
  bgTrigger:  "rgba(28,25,20,0.72)",
  bgMenu:     "rgba(14,12,9,0.92)",
  borderCard: "rgba(255,255,255,0.08)",
  textBody:   "rgba(255,255,255,0.75)",
  textDim:    "rgba(255,255,255,0.35)",
};

export const ProfileMenu: React.FC<ProfileMenuProps> = ({
  profileImageSrc,
  profileHref = "/dashboard/profile",
  onLogout,
}) => {
  const [isOpen, setIsOpen]           = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [triggerHovered, setTriggerHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* Inject font once */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap');
        @keyframes oracle-menu-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes oracle-menu-out {
          from { opacity: 1; transform: translateY(0)    scale(1);    }
          to   { opacity: 0; transform: translateY(-6px) scale(0.97); }
        }
      `}</style>

      <div
        ref={menuRef}
        style={{ position: "relative", fontFamily: "'Jost', sans-serif" }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
      >
        {/* ── Trigger button ── */}
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((c) => !c)}
          onMouseEnter={() => setTriggerHovered(true)}
          onMouseLeave={() => setTriggerHovered(false)}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: `1.5px solid ${triggerHovered || isOpen ? tok.goldBorder : tok.borderCard}`,
            background: triggerHovered || isOpen
              ? `radial-gradient(circle at 38% 38%, rgba(232,162,42,0.82) 0%, rgba(140,85,15,0.65) 38%, rgba(15,12,6,0.95) 100%)`
              : tok.bgTrigger,
            boxShadow: triggerHovered || isOpen
              ? `0 0 0 3px rgba(201,168,83,0.12), 0 0 18px rgba(201,168,83,0.18)`
              : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            cursor: "pointer",
            transition: "border-color 0.22s, background 0.22s, box-shadow 0.22s",
            outline: "none",
            padding: 0,
          }}
        >
          {profileImageSrc ? (
            <img
              src={profileImageSrc}
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <User
              size={16}
              color={triggerHovered || isOpen ? tok.goldLight : "rgba(255,255,255,0.55)"}
              strokeWidth={1.8}
              style={{ transition: "color 0.22s" }}
            />
          )}
        </button>

        {/* ── Dropdown menu ── */}
        <div
          role="menu"
          aria-hidden={!isOpen}
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 10px)",
            zIndex: 50,
            width: 176,
            borderRadius: 12,
            border: `1px solid ${tok.goldDim}`,
            background: tok.bgMenu,
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: [
              "0 24px 60px rgba(0,0,0,0.55)",
              "0 0 0 0.5px rgba(255,255,255,0.05) inset",
              `0 0 32px rgba(201,168,83,0.06)`,
            ].join(", "),
            overflow: "hidden",
            /* CSS-driven animation */
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.97)",
            visibility: isOpen ? "visible" : "hidden",
            transition: "opacity 0.18s ease, transform 0.18s ease, visibility 0.18s",
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          {/* Gold top accent line */}
          <div style={{
            height: 1,
            background: `linear-gradient(90deg, transparent, ${tok.gold}, transparent)`,
            opacity: 0.5,
          }} />

          {/* ── Profile link ── */}
          <Link
            href={profileHref}
            role="menuitem"
            onClick={() => setIsOpen(false)}
            onMouseEnter={() => setHoveredItem("profile")}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "11px 16px",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: hoveredItem === "profile" ? tok.gold : tok.textBody,
              background: hoveredItem === "profile" ? "rgba(201,168,83,0.07)" : "transparent",
              textDecoration: "none",
              transition: "background 0.18s, color 0.18s",
              outline: "none",
            }}
          >
            <span style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: hoveredItem === "profile" ? "rgba(201,168,83,0.12)" : "rgba(255,255,255,0.05)",
              border: `1px solid ${hoveredItem === "profile" ? "rgba(201,168,83,0.30)" : "rgba(255,255,255,0.08)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.18s, border-color 0.18s",
              flexShrink: 0,
            }}>
              <User size={12} color={hoveredItem === "profile" ? tok.gold : "rgba(255,255,255,0.50)"} strokeWidth={1.8} />
            </span>
            Profile
          </Link>

          {/* Subtle separator */}
          <div style={{
            height: 1,
            background: "rgba(255,255,255,0.05)",
            margin: "0 14px",
          }} />

          {/* ── Log out button ── */}
          <button
            type="button"
            role="menuitem"
            onClick={() => { setIsOpen(false); onLogout?.(); }}
            onMouseEnter={() => setHoveredItem("logout")}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: 10,
              padding: "11px 16px",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: hoveredItem === "logout" ? tok.gold : tok.textBody,
              background: hoveredItem === "logout" ? "rgba(201,168,83,0.07)" : "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              transition: "background 0.18s, color 0.18s",
              outline: "none",
            }}
          >
            <span style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: hoveredItem === "logout" ? "rgba(201,168,83,0.12)" : "rgba(255,255,255,0.05)",
              border: `1px solid ${hoveredItem === "logout" ? "rgba(201,168,83,0.30)" : "rgba(255,255,255,0.08)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.18s, border-color 0.18s",
              flexShrink: 0,
            }}>
              <LogOut size={12} color={hoveredItem === "logout" ? tok.gold : "rgba(255,255,255,0.50)"} strokeWidth={1.8} />
            </span>
            Log out
          </button>

          {/* Gold bottom accent */}
          <div style={{
            height: 1,
            background: `linear-gradient(90deg, transparent, ${tok.gold}, transparent)`,
            opacity: 0.25,
          }} />
        </div>
      </div>
    </>
  );
};