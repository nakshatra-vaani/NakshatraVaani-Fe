"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import { loginUser } from "@/services/auth.service";
import { LoginPayload } from "@/types/auth.types";

// ✅ Named export so page.tsx can import as { LoginForm }
export function LoginForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginPayload>({
    emailOrPhone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.emailOrPhone || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await loginUser(formData);
      localStorage.setItem("token", response.token);
      router.push("/dashboard");
    } catch (err: unknown) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
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

      {/* Email or Phone */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{
          display: "block", marginBottom: "8px",
          fontSize: "10px", letterSpacing: "0.3em",
          textTransform: "uppercase", color: "#D5B97A",
        }}>
          Email or Phone
        </label>
        <div style={{
          display: "flex", alignItems: "center",
          height: "44px", borderRadius: "12px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "0 14px", overflow: "hidden",
        }}>
          <input
            type="text"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            placeholder="Enter your celestial ID"
            style={{
              flex: 1, background: "transparent",
              border: "none", outline: "none",
              color: "#fff", fontSize: "13px",
            }}
          />
          <Mail style={{ width: "16px", height: "16px", color: "#6B7280", flexShrink: 0 }} />
        </div>
      </div>

      {/* Password */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <label style={{
            fontSize: "10px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#D5B97A",
          }}>
            Password
          </label>
          <button
            type="button"
            style={{ fontSize: "12px", color: "#9CA3AF", background: "none", border: "none", cursor: "pointer" }}
          >
            Forgot Password?
          </button>
        </div>
        <div style={{
          display: "flex", alignItems: "center",
          height: "44px", borderRadius: "12px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "0 14px", overflow: "hidden",
        }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            style={{
              flex: 1, background: "transparent",
              border: "none", outline: "none",
              color: "#fff", fontSize: "13px",
            }}
          />
          {/* ✅ Toggle password visibility */}
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
          >
            <Lock style={{ width: "16px", height: "16px", color: "#6B7280" }} />
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
          background: loading ? "#A1A5B8" : "#DCE3F7",
          color: "#1A2238", fontWeight: 600,
          letterSpacing: "0.35em", fontSize: "13px",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1,
          transition: "opacity 0.2s",
        }}
      >
        {loading ? "LOGGING IN..." : "LOG IN"}
      </button>
    </form>
  );
}