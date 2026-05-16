"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarPickerProps {
  value: string;
  onChange: (v: string) => void;
}

export function CalendarPicker({ value, onChange }: CalendarPickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear() - 25);
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December",
  ];

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();

  const selectedParts = value ? value.split("/") : null;
  const selectedDay = selectedParts ? parseInt(selectedParts[0]) : null;
  const selectedMonth = selectedParts ? parseInt(selectedParts[1]) - 1 : null;
  const selectedYear = selectedParts ? parseInt(selectedParts[2]) : null;

  function selectDate(day: number) {
    const d = `${String(day).padStart(2, "0")}/${String(viewMonth + 1).padStart(2, "0")}/${viewYear}`;
    onChange(d);
    setOpen(false);
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  }

  const navBtnStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#9CA3AF",
    padding: "4px",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      {/* Trigger */}
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          height: "50px",
          borderRadius: "12px",
          border: "1px solid rgba(69,70,77,0.15)",
          background: "rgba(42,42,44,0.4)",
          padding: "0 16px",
          cursor: "pointer",
        }}
      >
        <span style={{ flex: 1, color: value ? "#c6c6cd" : "rgba(118,129,151,0.5)", fontSize: "14px", fontFamily: "'Manrope', sans-serif" }}>
          {value || "dd/mm/yyyy"}
        </span>
        <Calendar style={{ width: "18px", height: "18px", color: "rgba(118,129,151,0.6)", flexShrink: 0 }} />
      </div>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: 0, right: 0,
          zIndex: 100,
          background: "#131315",
          border: "1px solid rgba(69,70,77,0.2)",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
        }}>
          {/* Month/Year Navigation */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}>
            <button onClick={prevMonth} style={navBtnStyle}>
              <ChevronLeft style={{ width: "16px", height: "16px" }} />
            </button>
            <span style={{ color: "#E8CC8B", fontSize: "13px", fontFamily: "Georgia, serif" }}>
              {months[viewMonth]} {viewYear}
            </span>
            <button onClick={nextMonth} style={navBtnStyle}>
              <ChevronRight style={{ width: "16px", height: "16px" }} />
            </button>
          </div>

          {/* Day Headers */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "2px",
            marginBottom: "6px",
          }}>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div key={d} style={{
                textAlign: "center",
                fontSize: "10px",
                color: "#6B7280",
                padding: "4px 0",
              }}>
                {d}
              </div>
            ))}
          </div>

          {/* Day Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
            {/* Empty cells for offset */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const isSelected =
                day === selectedDay &&
                viewMonth === selectedMonth &&
                viewYear === selectedYear;

              return (
                <button
                  key={day}
                  onClick={() => selectDate(day)}
                  style={{
                    height: "30px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "12px",
                    background: isSelected ? "#E8CC8B" : "transparent",
                    color: isSelected ? "#1A2238" : "#D1D5DB",
                    fontWeight: isSelected ? 700 : 400,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected)
                      (e.currentTarget).style.background = "rgba(232,204,139,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected)
                      (e.currentTarget).style.background = "transparent";
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Year Input */}
          <div style={{
            marginTop: "12px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            <span style={{ fontSize: "10px", color: "#6B7280", letterSpacing: "0.1em" }}>
              YEAR
            </span>
            <input
              type="number"
              value={viewYear}
              onChange={(e) => setViewYear(Number(e.target.value))}
              style={{
                width: "72px",
                height: "28px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                fontSize: "12px",
                textAlign: "center",
                outline: "none",
                padding: "0 6px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}