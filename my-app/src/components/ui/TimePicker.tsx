"use client";

import { useState, useRef, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimePickerProps {
  value: string;
  onChange: (v: string) => void;
}

export function TimePicker({ value, onChange }: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<"AM" | "PM">("AM");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function confirm() {
    onChange(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${period}`);
    setOpen(false);
  }

  const spinnerBtnStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#9CA3AF",
    fontSize: "18px",
    lineHeight: 1,
    padding: "2px 8px",
    display: "block",
  };

  const numStyle: React.CSSProperties = {
    color: "#fff",
    fontSize: "24px",
    fontFamily: "Georgia, serif",
    minWidth: "40px",
    textAlign: "center",
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      {/* Trigger */}
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          height: "44px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.03)",
          padding: "0 14px",
          cursor: "pointer",
        }}
      >
        <span style={{ flex: 1, color: value ? "#fff" : "#4B5563", fontSize: "13px" }}>
          {value || "--:-- --"}
        </span>
        <Clock style={{ width: "16px", height: "16px", color: "#6B7280", flexShrink: 0 }} />
      </div>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: 0,
          zIndex: 100,
          background: "#0d1424",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          minWidth: "220px",
        }}>
          <p style={{
            color: "#E8CC8B",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: "0 0 16px 0",
            textAlign: "center",
          }}>
            Time of Birth
          </p>

          {/* Spinners */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}>
            {/* Hour */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <button
                style={spinnerBtnStyle}
                onClick={() => setHour((h) => (h === 12 ? 1 : h + 1))}
              >▲</button>
              <span style={numStyle}>{String(hour).padStart(2, "0")}</span>
              <button
                style={spinnerBtnStyle}
                onClick={() => setHour((h) => (h === 1 ? 12 : h - 1))}
              >▼</button>
            </div>

            <span style={{ color: "#E8CC8B", fontSize: "24px", fontFamily: "Georgia, serif" }}>
              :
            </span>

            {/* Minute */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <button
                style={spinnerBtnStyle}
                onClick={() => setMinute((m) => (m + 5) % 60)}
              >▲</button>
              <span style={numStyle}>{String(minute).padStart(2, "0")}</span>
              <button
                style={spinnerBtnStyle}
                onClick={() => setMinute((m) => (m - 5 + 60) % 60)}
              >▼</button>
            </div>

            {/* AM / PM */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginLeft: "8px" }}>
              {(["AM", "PM"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: period === p ? "#E8CC8B" : "rgba(255,255,255,0.04)",
                    color: period === p ? "#1A2238" : "#9CA3AF",
                    fontSize: "12px",
                    fontWeight: period === p ? 700 : 400,
                    cursor: "pointer",
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Confirm */}
          <button
            onClick={confirm}
            style={{
              marginTop: "16px",
              width: "100%",
              height: "36px",
              borderRadius: "999px",
              background: "#D8DFF4",
              color: "#1C2335",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              border: "none",
              cursor: "pointer",
            }}
          >
            CONFIRM
          </button>
        </div>
      )}
    </div>
  );
}