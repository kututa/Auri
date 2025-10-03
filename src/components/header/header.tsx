"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      const target = e.target as Node | null;
      if (
        servicesOpen &&
        target &&
        !servicesButtonRef.current?.contains(target) &&
        !servicesMenuRef.current?.contains(target)
      ) {
        setServicesOpen(false);
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }

    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  function toggleServices() {
    setServicesOpen((s) => !s);
  }

  function onServicesKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleServices();
    }
  }

  return (
    <header className="w-full bg-white relative">
      {/* Gradient border on top */}
      <div className="absolute top-0 left-0 w-full h-[8px] bg-[linear-gradient(90deg,#000000_20.01%,#DD1816_46.07%,#000000_72.76%,#1178EE_98.64%)]"></div>

      <div className="flex items-center justify-between px-12 py-6">
        {/* Logo */}

        <div className="flex items-center" style={{ width: 148, height: 35 }}>
          <span className="logo-auri select-none">AURI</span>
        </div>

        {/* Nav Links */}
        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-12"
          style={{ display: "flex", columnGap: "2rem", rowGap: 0 }}
        >
          <Link
            href="/work"
            className="font-[Geist] text-[25px] font-normal text-black leading-none hover:text-gray-700 transition no-underline"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Work
          </Link>

          <div className="relative">
            <button
              ref={servicesButtonRef}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={toggleServices}
              onKeyDown={onServicesKey}
              className="font-[Geist] text-[25px] font-normal text-black leading-none hover:text-gray-700 transition no-underline flex items-center"
              style={{ background: "transparent", border: 0 }}
            >
              <span>Services</span>
              <span className="ml-2 text-[18px] leading-none" aria-hidden>
                ▾
              </span>
            </button>

            {/* Dropdown menu */}
            {servicesOpen && (
              <div
                id="services-menu"
                ref={servicesMenuRef}
                role="menu"
                aria-label="Services"
                className="absolute left-0 mt-3 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50"
              >
                <ul className="py-2">
                  <li role="none">
                    <Link
                      href="/product"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                      onClick={() => setServicesOpen(false)}
                    >
                      Product Design
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/ui-ux-design"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                      onClick={() => setServicesOpen(false)}
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/services/graphic-design"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                      onClick={() => setServicesOpen(false)}
                    >
                      Graphic Design
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="font-[Geist] text-[25px] font-normal text-black leading-none hover:text-gray-700 transition no-underline"
            style={{ textDecoration: "none", color: "#000" }}
          >
            About
          </Link>
        </nav>

        {/* Buttons */}
        <div
          className="flex items-center gap-6"
          style={{ display: "flex", columnGap: "1.5rem" }}
        >
          <Link href="/subscribe" className="px-7 py-2 border border-black rounded-full font-sans text-[18px] font-normal bg-white hover:bg-gray-100 transition no-underline text-black">
            Subscribe
          </Link>
          <ContactButton />
        </div>
      </div>
    </header>
  );
}

function ContactButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/contact')}
      className="px-8 py-2 bg-black text-white rounded-full font-sans text-[18px] flex items-center gap-2 hover:bg-gray-900 transition"
    >
      Contact <span aria-hidden>→</span>
    </button>
  );
}
