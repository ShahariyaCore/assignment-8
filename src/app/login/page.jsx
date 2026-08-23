"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";


export default function LoginPage() {
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Demo login logic (replace with Firebase/Auth later)
    if (email === "test@test.com" && password === "Test1234") {
      toast.success("Login successful!");
      window.location.href = "/"; // navigate to Home
    } else {
      toast.error("Invalid credentials");
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="max-w-md mx-auto mt-20 p-8 border rounded-xl shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">🔐 Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input type="email" name="email" placeholder="Email" required className="border p-3 rounded" />
        <input type="password" name="password" placeholder="Password" required className="border p-3 rounded" />
        <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Login</button>
        {error && <p className="text-red-600">{error}</p>}
      </form>

      <p className="mt-4 text-center">
        Don’t have an account? <a href="/register" className="text-indigo-600 font-semibold">Register</a>
      </p>

      {/* Social Login */}
      <button className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
        Continue with Google
      </button>
      </div>
    </>
  );
}
