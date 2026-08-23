"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";


export default function RegisterPage() {
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Demo register logic (replace with Firebase/Auth later)
    if (name && email && password.length >= 8) {
      toast.success("Registration successful!");
      alert("Registered successfully!");
      window.location.href = "/login"; // navigate to login page
    } else {
      toast.error("Registration failed");
      setError("Registration failed. Please check your inputs.");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="max-w-md mx-auto mt-20 p-8 border rounded-xl shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">📝 Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Name" required className="border p-3 rounded" />
        <input type="email" name="email" placeholder="Email" required className="border p-3 rounded" />
        <input type="text" name="photo" placeholder="Photo URL" required className="border p-3 rounded" />
        <input type="password" name="password" placeholder="Password" required className="border p-3 rounded" />
        <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Register</button>
        {error && <p className="text-red-600">{error}</p>}
      </form>

      <p className="mt-4 text-center">
        Already have an account? <a href="/login" className="text-indigo-600 font-semibold">Login</a>
      </p>

      {/* Social Login */}
      <button className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
        Continue with Google
      </button>
      </div>
    </>
  );
}
