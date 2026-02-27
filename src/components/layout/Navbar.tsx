"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Sun, Moon, Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pets", label: "Adopt" },
  { href: "/foster", label: "Foster" },
  { href: "/stories", label: "Success Stories" },
  { href: "/how-it-works", label: "How It Works" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-[80px] bg-lavender/40 backdrop-blur-sm shadow-nav z-50">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left – Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">🐾</span>
          <span className="text-2xl font-bold text-gradient">Pawdopt</span>
        </Link>

        {/* Center – Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right – Actions */}
        <div className="flex items-center gap-4">
          {/* Saved Pets */}
          <button className="relative p-2 rounded-full hover:bg-coral/10 transition-colors">
            <Heart className="w-5 h-5 text-coral" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-coral text-white text-[10px] flex items-center justify-center font-bold">
              3
            </span>
          </button>

          {/* CTA */}
          <Link href="/pets" className="btn-primary hidden sm:flex">
            Adopt Now
          </Link>

          {/* Avatar */}
          <button className="w-10 h-10 rounded-full bg-mint flex items-center justify-center font-bold text-green-700 ring-2 ring-white">
            S
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-lavender/30 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-lavender" />
            ) : (
              <Sun className="w-5 h-5 text-warning" />
            )}
          </button>

          {/* Mobile menu */}
          <button className="md:hidden p-2 rounded-full hover:bg-lavender/30 transition-colors">
            <Menu className="w-5 h-5 text-textPrimary" />
          </button>
        </div>
      </div>
    </header>
  );
}
