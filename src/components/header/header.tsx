"use client";


import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white relative">
      {/* Gradient border on top */}
      <div className="absolute top-0 left-0 w-full h-[8px] bg-[linear-gradient(90deg,#000000_20.01%,#DD1816_46.07%,#000000_72.76%,#1178EE_98.64%)]"></div>

      <div className="flex items-center justify-between px-12 py-6">
        {/* Logo */}

        <div className="flex items-center" style={{ width: 148, height: 35 }}>
          <span
            className="font-[AKONY] font-bold text-[32px] leading-[1] text-transparent bg-clip-text select-none"
            style={{
              fontFamily: 'AKONY',
              fontWeight: 700,
              fontStyle: 'bold',
              letterSpacing: 0,
              opacity: 1,
              background: 'linear-gradient(90deg, #000000 0%, #0A4588 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AURI
          </span>
        </div>

        {/* Nav Links */}
        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-24"
          style={{ display: "flex", columnGap: "6rem", rowGap: 0 }}
        >
          <Link
            href="/work"
            className="font-[Geist] text-[25px] font-normal text-black leading-none hover:text-gray-700 transition no-underline"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Work
          </Link>
          <Link
            href="/services"
            className="font-[Geist] text-[25px] font-normal text-black leading-none hover:text-gray-700 transition no-underline"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="font-[Geist] text-[25px] font-normal text-black leading-none hover:text-gray-700 transition no-underline"
            style={{ textDecoration: "none", color: "#000" }}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="font-[Geist] text-[25px] font-normal text-black leading-none hover:text-gray-700 transition no-underline"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Blog
          </Link>
        </nav>

        {/* Buttons */}
        <div
          className="flex items-center gap-6"
          style={{ display: "flex", columnGap: "1.5rem" }}
        >
          <button className="px-7 py-2 border border-black rounded-full font-sans text-[18px] font-normal bg-white hover:bg-gray-100 transition">
            Subscribe
          </button>
          <button className="px-8 py-2 bg-black text-white rounded-full font-sans text-[18px] flex items-center gap-2 hover:bg-gray-900 transition">
            Contact <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </header>
  );
}
