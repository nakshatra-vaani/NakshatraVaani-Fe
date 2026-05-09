"use client";

import Link from "next/link";
import { MapPin, Sparkles, Calendar, Clock, ChevronLeft, ChevronRight, Lock, Eye, EyeOff } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// ---------- Calendar Picker ----------
function CalendarPicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear() - 25);
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();

  function selectDate(day: number) {
    const d = `${String(day).padStart(2, "0")}/${String(viewMonth + 1).padStart(2, "0")}/${viewYear}`;
    onChange(d);
    setOpen(false);
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  const selectedParts = value ? value.split("/") : null;
  const selectedDay = selectedParts ? parseInt(selectedParts[0]) : null;
  const selectedMonth = selectedParts ? parseInt(selectedParts[1]) - 1 : null;
  const selectedYear = selectedParts ? parseInt(selectedParts[2]) : null;

  const spinnerStyle = { background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: "4px" } as React.CSSProperties;

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div onClick={() => setOpen(o => !o)} style={{ display: "flex", alignItems: "center", height: "44px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "0 14px", cursor: "pointer" }}>
        <span style={{ flex: 1, color: value ? "#fff" : "#4B5563", fontSize: "13px" }}>{value || "dd/mm/yyyy"}</span>
        <Calendar style={{ width: "16px", height: "16px", color: "#6B7280", flexShrink: 0 }} />
      </div>
      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0, zIndex: 100, background: "#0d1424", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <button onClick={prevMonth} style={spinnerStyle}><ChevronLeft style={{ width: "16px", height: "16px" }} /></button>
            <span style={{ color: "#E8CC8B", fontSize: "13px", fontFamily: "Georgia, serif" }}>{months[viewMonth]} {viewYear}</span>
            <button onClick={nextMonth} style={spinnerStyle}><ChevronRight style={{ width: "16px", height: "16px" }} /></button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", marginBottom: "6px" }}>
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => (
              <div key={d} style={{ textAlign: "center", fontSize: "10px", color: "#6B7280", padding: "4px 0" }}>{d}</div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
            {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const isSelected = day === selectedDay && viewMonth === selectedMonth && viewYear === selectedYear;
              return (
                <button key={day} onClick={() => selectDate(day)}
                  style={{ height: "30px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "12px", background: isSelected ? "#E8CC8B" : "transparent", color: isSelected ? "#1A2238" : "#D1D5DB", fontWeight: isSelected ? 700 : 400 }}
                  onMouseEnter={e => { if (!isSelected) (e.target as HTMLButtonElement).style.background = "rgba(232,204,139,0.15)"; }}
                  onMouseLeave={e => { if (!isSelected) (e.target as HTMLButtonElement).style.background = "transparent"; }}
                >{day}</button>
              );
            })}
          </div>
          <div style={{ marginTop: "12px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "10px", color: "#6B7280", letterSpacing: "0.1em" }}>YEAR</span>
            <input type="number" value={viewYear} onChange={e => setViewYear(Number(e.target.value))}
              style={{ width: "72px", height: "28px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: "12px", textAlign: "center", outline: "none", padding: "0 6px" }} />
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Time Picker ----------
function TimePicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<"AM" | "PM">("AM");

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function confirm() {
    onChange(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${period}`);
    setOpen(false);
  }

  const spinnerStyle = { background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", fontSize: "18px", lineHeight: 1, padding: "2px 8px", display: "block" } as React.CSSProperties;
  const numStyle = { color: "#fff", fontSize: "24px", fontFamily: "Georgia, serif", minWidth: "40px", textAlign: "center" as const };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div onClick={() => setOpen(o => !o)} style={{ display: "flex", alignItems: "center", height: "44px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "0 14px", cursor: "pointer" }}>
        <span style={{ flex: 1, color: value ? "#fff" : "#4B5563", fontSize: "13px" }}>{value || "--:-- --"}</span>
        <Clock style={{ width: "16px", height: "16px", color: "#6B7280", flexShrink: 0 }} />
      </div>
      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, zIndex: 100, background: "#0d1424", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.6)", minWidth: "220px" }}>
          <p style={{ color: "#E8CC8B", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 16px 0", textAlign: "center" }}>Time of Birth</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <button style={spinnerStyle} onClick={() => setHour(h => h === 12 ? 1 : h + 1)}>▲</button>
              <span style={numStyle}>{String(hour).padStart(2, "0")}</span>
              <button style={spinnerStyle} onClick={() => setHour(h => h === 1 ? 12 : h - 1)}>▼</button>
            </div>
            <span style={{ color: "#E8CC8B", fontSize: "24px", fontFamily: "Georgia, serif" }}>:</span>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <button style={spinnerStyle} onClick={() => setMinute(m => (m + 5) % 60)}>▲</button>
              <span style={numStyle}>{String(minute).padStart(2, "0")}</span>
              <button style={spinnerStyle} onClick={() => setMinute(m => (m - 5 + 60) % 60)}>▼</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginLeft: "8px" }}>
              {(["AM", "PM"] as const).map(p => (
                <button key={p} onClick={() => setPeriod(p)}
                  style={{ padding: "6px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: period === p ? "#E8CC8B" : "rgba(255,255,255,0.04)", color: period === p ? "#1A2238" : "#9CA3AF", fontSize: "12px", fontWeight: period === p ? 700 : 400, cursor: "pointer" }}
                >{p}</button>
              ))}
            </div>
          </div>
          <button onClick={confirm} style={{ marginTop: "16px", width: "100%", height: "36px", borderRadius: "999px", background: "#D8DFF4", color: "#1C2335", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", border: "none", cursor: "pointer" }}>
            CONFIRM
          </button>
        </div>
      )}
    </div>
  );
}

// ---------- Main Page ----------
export default function SignupPage() {
  const [dob, setDob] = useState("");
  const [time, setTime] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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

      <div style={{ minHeight: "100vh", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px", position: "relative", overflowX: "hidden" }}>
        {/* Background Glow */}
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "rgba(59, 130, 246, 0.1)", filter: "blur(150px)", borderRadius: "50%", pointerEvents: "none", zIndex: 0 }} />

        {/* Main Card */}
        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "500px" }}>
          <div style={{ borderRadius: "32px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(5, 8, 22, 0.95)", backdropFilter: "blur(24px)", boxShadow: "0 0 60px rgba(59,130,246,0.12)", padding: "36px 36px 32px" }}>

            {/* Logo */}
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                <Sparkles style={{ width: "24px", height: "24px", color: "#E7C98A", fill: "#E7C98A" }} />
              </div>
              <h1 style={{ fontSize: "36px", lineHeight: 1.2, fontFamily: "Georgia, serif", color: "#F3F4F6", margin: 0 }}>Nakshatra Vani</h1>
              <p style={{ marginTop: "8px", fontSize: "10px", letterSpacing: "0.35em", color: "#6B7280", textTransform: "uppercase" }}>The Oracle of Celestial Alignments</p>
            </div>

            {/* Inner Form Card */}
            <div style={{ borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)", background: "#070B16", padding: "28px 28px 24px" }}>
              <h2 style={{ fontSize: "26px", fontFamily: "Georgia, serif", color: "#E7C98A", margin: "0 0 6px 0", lineHeight: 1.2 }}>Create Your Astral Profile</h2>
              <p style={{ color: "#9CA3AF", fontSize: "13px", marginBottom: "24px" }}>Enter your birth details to synchronize with the cosmic clock.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Field label="FULL NAME" placeholder="Arjun Sharma" />

                {/* Date of Birth */}
                <div>
                  <label style={{ display: "block", fontSize: "10px", color: "#6B7280", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>DATE OF BIRTH</label>
                  <CalendarPicker value={dob} onChange={setDob} />
                </div>

                {/* Time of Birth */}
                <div>
                  <label style={{ display: "block", fontSize: "10px", color: "#6B7280", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>TIME OF BIRTH</label>
                  <TimePicker value={time} onChange={setTime} />
                </div>

                {/* Place of Birth */}
                <div>
                  <label style={{ display: "block", fontSize: "10px", color: "#6B7280", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>PLACE OF BIRTH</label>
                  <div style={{ display: "flex", alignItems: "center", height: "44px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "0 14px", overflow: "hidden" }}>
                    <input type="text" placeholder="Varanasi, India" style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: "13px" }} />
                    <MapPin style={{ width: "16px", height: "16px", color: "#6B7280", flexShrink: 0 }} />
                  </div>
                </div>

                <Field label="PHONE NUMBER" placeholder="+91 98765 43210" />
                <Field label="EMAIL ADDRESS" placeholder="guru@cosmic.com" />

                {/* Password */}
                <div>
                  <label style={{ display: "block", fontSize: "10px", color: "#6B7280", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>PASSWORD</label>
                  <div style={{ display: "flex", alignItems: "center", height: "44px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "0 14px", overflow: "hidden" }}>
                    <input type={showPassword ? "text" : "password"} placeholder="••••••••" style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: "13px" }} />
                    <button type="button" onClick={() => setShowPassword(p => !p)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
                      {showPassword
                        ? <EyeOff style={{ width: "16px", height: "16px", color: "#6B7280" }} />
                        : <Eye style={{ width: "16px", height: "16px", color: "#6B7280" }} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label style={{ display: "block", fontSize: "10px", color: "#6B7280", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>CONFIRM PASSWORD</label>
                  <div style={{ display: "flex", alignItems: "center", height: "44px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "0 14px", overflow: "hidden" }}>
                    <input type={showConfirm ? "text" : "password"} placeholder="••••••••" style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: "13px" }} />
                    <button type="button" onClick={() => setShowConfirm(p => !p)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
                      {showConfirm
                        ? <EyeOff style={{ width: "16px", height: "16px", color: "#6B7280" }} />
                        : <Eye style={{ width: "16px", height: "16px", color: "#6B7280" }} />}
                    </button>
                  </div>
                </div>

                <button type="button" style={{ width: "100%", height: "44px", borderRadius: "999px", background: "#D8DFF4", color: "#1C2335", letterSpacing: "0.25em", fontSize: "12px", fontWeight: 600, border: "none", cursor: "pointer", marginTop: "4px" }}>
                  BEGIN YOUR JOURNEY
                </button>
              </div>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{ color: "#6B7280", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Already Have An Account?{" "}
                  <Link href="/login" style={{ color: "#E5E7EB", textDecoration: "none" }}>Log In</Link>
                </p>
              </div>
            </div>

            <div style={{ marginTop: "20px", textAlign: "center", fontSize: "10px", color: "#4B5563", lineHeight: 1.6 }}>
              By continuing, you agree to our Terms of Service and Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "10px", color: "#6B7280", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>{label}</label>
      <input type="text" placeholder={placeholder}
        style={{ width: "100%", height: "44px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "0 14px", outline: "none", color: "#fff", fontSize: "13px", boxSizing: "border-box" }} />
    </div>
  );
}