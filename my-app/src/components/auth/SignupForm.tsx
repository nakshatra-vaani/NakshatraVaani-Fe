"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, MapPin, Calendar, Clock } from "lucide-react";
import { signupUser } from "@/services/auth.service";
import { SignupPayload } from "@/types/auth.types";
import { CalendarPicker } from "@/components/ui/CalendarPicker";
import { TimePicker } from "@/components/ui/TimePicker";

// ✅ Named export
export function SignupForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<SignupPayload>({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  // ✅ Single source of truth for validation — called once in handleSubmit
  const validateForm = (): boolean => {
    const allFilled = Object.values(formData).every((v) => v.trim() !== "");
    if (!allFilled) {
      setError("Please fill in all fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email format");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // ✅ validateForm called once, not duplicated inline
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await signupUser(formData);
      localStorage.setItem("token", response.token);
      router.push("/dashboard");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Signup failed. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "44px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.03)",
    padding: "0 14px",
    outline: "none",
    color: "#fff",
    fontSize: "13px",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "10px",
    color: "#6B7280",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    marginBottom: "8px",
  };

  const fieldWrap: React.CSSProperties = { marginBottom: "16px" };

  const iconInputWrap: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    height: "44px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.03)",
    padding: "0 14px",
    overflow: "hidden",
  };

  const bareInput: React.CSSProperties = {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: "13px",
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Error Banner */}
      {error && (
        <div style={{
          padding: "12px",
          marginBottom: "16px",
          background: "rgba(239, 68, 68, 0.1)",
          border: "1px solid rgba(239, 68, 68, 0.3)",
          borderRadius: "8px",
          color: "#FCA5A5",
          fontSize: "13px",
        }}>
          {error}
        </div>
      )}

      {/* Full Name */}
      <div style={fieldWrap}>
        <label style={labelStyle}>FULL NAME</label>
        <input
          type="text" name="name"
          placeholder="Arjun Sharma"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Date of Birth — uses CalendarPicker widget */}
      <div style={fieldWrap}>
        <label style={labelStyle}>DATE OF BIRTH</label>
        <CalendarPicker
          value={formData.dateOfBirth}
          onChange={(v) => {
            setFormData((prev) => ({ ...prev, dateOfBirth: v }));
            setError("");
          }}
        />
      </div>

      {/* Time of Birth — uses TimePicker widget */}
      <div style={fieldWrap}>
        <label style={labelStyle}>TIME OF BIRTH</label>
        <TimePicker
          value={formData.timeOfBirth}
          onChange={(v) => {
            setFormData((prev) => ({ ...prev, timeOfBirth: v }));
            setError("");
          }}
        />
      </div>

      {/* Place of Birth */}
      <div style={fieldWrap}>
        <label style={labelStyle}>PLACE OF BIRTH</label>
        <div style={iconInputWrap}>
          <input
            type="text" name="placeOfBirth"
            placeholder="Varanasi, India"
            value={formData.placeOfBirth}
            onChange={handleChange}
            style={bareInput}
          />
          <MapPin style={{ width: "16px", height: "16px", color: "#6B7280", flexShrink: 0 }} />
        </div>
      </div>

      {/* Phone */}
      <div style={fieldWrap}>
        <label style={labelStyle}>PHONE NUMBER</label>
        <input
          type="tel" name="phone"
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Email */}
      <div style={fieldWrap}>
        <label style={labelStyle}>EMAIL ADDRESS</label>
        <input
          type="email" name="email"
          placeholder="guru@cosmic.com"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Password — ✅ Eye toggle restored */}
      <div style={fieldWrap}>
        <label style={labelStyle}>PASSWORD</label>
        <div style={iconInputWrap}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            style={bareInput}
          />
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
          >
            {showPassword
              ? <EyeOff style={{ width: "16px", height: "16px", color: "#6B7280" }} />
              : <Eye style={{ width: "16px", height: "16px", color: "#6B7280" }} />}
          </button>
        </div>
      </div>

      {/* Confirm Password — ✅ Eye toggle restored */}
      <div style={fieldWrap}>
        <label style={labelStyle}>CONFIRM PASSWORD</label>
        <div style={iconInputWrap}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={bareInput}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((p) => !p)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
          >
            {showConfirmPassword
              ? <EyeOff style={{ width: "16px", height: "16px", color: "#6B7280" }} />
              : <Eye style={{ width: "16px", height: "16px", color: "#6B7280" }} />}
          </button>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%", height: "44px",
          borderRadius: "999px",
          background: loading ? "#A1A5B8" : "#D8DFF4",
          color: "#1C2335",
          letterSpacing: "0.25em", fontSize: "12px",
          fontWeight: 600, border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1,
          marginTop: "4px",
          transition: "opacity 0.2s",
        }}
      >
        {loading ? "CREATING ACCOUNT..." : "BEGIN YOUR JOURNEY"}
      </button>
    </form>
  );
}