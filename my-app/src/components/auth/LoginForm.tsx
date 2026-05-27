"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import { loginUser, loginWithGoogle } from "@/services/auth.service";
import { LoginPayload } from "@/types/auth.types";
import { SocialButton } from "@/components/ui/SocialButton";

export function LoginForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginPayload>({
    emailOrPhone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
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
      await loginUser(formData);
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google login handler
  const handleGoogleLogin = async () => {
    setError("");
    try {
      setGoogleLoading(true);
      await loginWithGoogle();
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Google login failed. Please try again."
      );
    } finally {
      setGoogleLoading(false);
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
        disabled={loading || googleLoading}
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

      {/* Divider */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "20px 0 16px" }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
        <span style={{ fontSize: "10px", letterSpacing: "0.25em", color: "#6B7280", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          Or Connect Via
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
      </div>

      {/* ✅ Social Buttons now wired up */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <SocialButton
          provider="GOOGLE"
          onClick={handleGoogleLogin}
          disabled={loading || googleLoading}
        />
        <SocialButton
          provider="APPLE"
          onClick={() => {}}   
          disabled={true}
        />
      </div>
    </form>
  );
}