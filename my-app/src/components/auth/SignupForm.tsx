"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupUser } from "@/services/auth.service";
import { SignupPayload } from "@/types/auth.types";

export default function SignupForm() {
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = (): boolean => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.dateOfBirth ||
      !formData.timeOfBirth ||
      !formData.placeOfBirth ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email format");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Empty fields validation
  if (
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.dateOfBirth ||
    !formData.timeOfBirth ||
    !formData.placeOfBirth ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    setError("Please fill in all fields");
    return;
  }

  // EMAIL VALIDATION
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    setError("Invalid email format");
    return;
  }

  // PASSWORD LENGTH VALIDATION
  if (formData.password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  // PASSWORD MATCH VALIDATION
  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const response = await axiosInstance.post(
      "/auth/signup",
      formData
    );

    // IMPORTANT
    localStorage.setItem(
      "token",
      response.data.token
    );

    router.push("/dashboard");
  } catch (error: any) {
    setError(
      error?.response?.data?.message ||
        "Signup failed. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div
          style={{
            padding: "12px",
            marginBottom: "16px",
            background: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            borderRadius: "8px",
            color: "#FCA5A5",
            fontSize: "13px",
          }}
        >
          {error}
        </div>
      )}

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "10px",
            color: "#6B7280",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          FULL NAME
        </label>
        <input
          type="text"
          name="name"
          placeholder="Arjun Sharma"
          value={formData.name}
          onChange={handleChange}
          style={{
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
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "10px",
            color: "#6B7280",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          name="email"
          placeholder="guru@cosmic.com"
          value={formData.email}
          onChange={handleChange}
          style={{
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
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "10px",
            color: "#6B7280",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          PHONE NUMBER
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={handleChange}
          style={{
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
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "10px",
            color: "#6B7280",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          DATE OF BIRTH
        </label>
        <input
          type="text"
          name="dateOfBirth"
          placeholder="dd/mm/yyyy"
          value={formData.dateOfBirth}
          onChange={handleChange}
          style={{
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
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "10px",
            color: "#6B7280",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          TIME OF BIRTH
        </label>
        <input
          type="text"
          name="timeOfBirth"
          placeholder="--:-- --"
          value={formData.timeOfBirth}
          onChange={handleChange}
          style={{
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
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "10px",
            color: "#6B7280",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          PLACE OF BIRTH
        </label>
        <input
          type="text"
          name="placeOfBirth"
          placeholder="City, Country"
          value={formData.placeOfBirth}
          onChange={handleChange}
          style={{
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
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "10px",
            color: "#6B7280",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          PASSWORD
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          style={{
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
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "10px",
            color: "#6B7280",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          CONFIRM PASSWORD
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{
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
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          height: "44px",
          borderRadius: "999px",
          background: loading ? "#A1A5B8" : "#D8DFF4",
          color: "#1C2335",
          letterSpacing: "0.25em",
          fontSize: "12px",
          fontWeight: 600,
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1,
          marginTop: "4px",
        }}
      >
        {loading ? "CREATING ACCOUNT..." : "BEGIN YOUR JOURNEY"}
      </button>
    </form>
  );
}