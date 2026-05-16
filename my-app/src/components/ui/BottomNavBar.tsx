"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
};

const HomeIcon = ({ active }: { active: boolean }) => (
  <svg width="19" height="23" viewBox="0 0 24 24" fill="none" stroke={active ? "#e1c296" : "rgba(188,199,222,0.5)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const ChatIcon = ({ active }: { active: boolean }) => (
  <svg width="19" height="23" viewBox="0 0 24 24" fill="none" stroke={active ? "#e1c296" : "rgba(188,199,222,0.5)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const KundaliIcon = ({ active }: { active: boolean }) => (
  <svg width="21" height="26" viewBox="0 0 24 24" fill="none" stroke={active ? "#e1c296" : "rgba(188,199,222,0.5)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a10 10 0 0 1 0 20" />
  </svg>
);

const ReportsIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#e1c296" : "rgba(188,199,222,0.5)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ProfileIcon = ({ active }: { active: boolean }) => (
  <svg width="19" height="23" viewBox="0 0 24 24" fill="none" stroke={active ? "#e1c296" : "rgba(188,199,222,0.5)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const navItems = [
  { label: "Home", href: "/dashboard", Icon: HomeIcon },
  { label: "Chat", href: "/chat", Icon: ChatIcon },
  { label: "Kundali", href: "/kundali", Icon: KundaliIcon },
  { label: "Reports", href: "/reports", Icon: ReportsIcon },
  { label: "Profile", href: "/profile", Icon: ProfileIcon },
];

export const BottomNavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 rounded-tl-[32px] rounded-tr-[32px] border-t border-[rgba(188,199,222,0.1)]"
      style={{
        height: '72px',
        background: "rgba(19,19,21,0.6)",
        backdropFilter: "blur(6px)",
        boxShadow: "0px -10px 40px 0px rgba(188,199,222,0.08)",
      }}
    >
      <div className="flex items-center justify-around h-full px-2">
        {navItems.map(({ label, href, Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-1 py-2 px-3 min-w-0"
            >
              <div
                className={active ? "drop-shadow-[0px_0px_5px_rgba(225,194,150,0.5)] scale-110" : ""}
                style={{ transition: "all 0.2s" }}
              >
                <Icon active={active} />
              </div>
              <span
                className="text-[10px] tracking-[0.16em] uppercase font-normal"
                style={{
                  color: active ? "#e1c296" : "rgba(188,199,222,0.5)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};