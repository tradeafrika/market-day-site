"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { formLink } from "./utils/form-link";

export default function TitlebarMarketDay() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center bg-[#038149] text-white px-6 md:px-12 w-full h-[72px]">
      {/* Desktop Nav */}
      <nav className="hidden md:flex font-bold space-x-6 text-sm absolute left-6">
        <Link href="/">HOME</Link>
        <Link href="#partners">PARTNERS</Link>
        <Link href="#features">FEATURES</Link>
      </nav>

      {/* Logo (centered) */}
      <div className="font-bold text-xl">TradeAfrika</div>

      {/* Join Button (absolute right) */}
      <div className="absolute right-6 flex items-center gap-3">
        <Link
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl hover:text-white hover:bg-orange-400 transition text-[#038149] bg-white px-4 py-2 font-medium"
        >
          Join
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#038149] flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link href="#partners" onClick={() => setMenuOpen(false)}>
            PARTNERS
          </Link>
          <Link href="#features" onClick={() => setMenuOpen(false)}>
            FEATURES
          </Link>
        </div>
      )}
    </div>
  );
}
