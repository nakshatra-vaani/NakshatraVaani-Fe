"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupUser } from "@/services/auth.service";

export default function SignupForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await signupUser(formData);

      localStorage.setItem("token", response.token);

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white p-3 rounded"
      >
        {loading ? "Loading..." : "Signup"}
      </button>
    </form>
  );
}