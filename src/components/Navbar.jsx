"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // Replace with real auth logic later

  return (
    <header className="border-b bg-white shadow-sm">
      <nav className="flex justify-between items-center py-3 px-4 max-w-7xl mx-auto w-full">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="SkillSphere logo"
            width={45}
            height={45}
            priority
            className="object-cover"
          />
          <h3 className="font-extrabold text-xl text-gray-800">SkillSphere</h3>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/profile">My Profile</Link></li>
        </ul>

        {/* Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Image
                src="/avatar.png"
                alt="User avatar"
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
              <button className="text-sm font-semibold text-gray-700 hover:text-red-600 transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium hover:text-blue-600 transition">Login</Link>
              <Link href="/register" className="text-sm font-medium bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <ul className="flex flex-col items-center gap-3 py-3 text-sm font-medium text-gray-700">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
            {isLoggedIn ? (
              <li><button className="text-red-600">Logout</button></li>
            ) : (
              <>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
