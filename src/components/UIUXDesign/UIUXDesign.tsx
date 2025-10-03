// UIUXDesign hero component
"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function UIUXDesign() {
  return (
    <section className="w-full px-6 py-10">
      <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-md">
        {/* Background image (fill) */}
        <div className="relative w-full h-[420px] md:h-[520px] lg:h-[560px]">
          <Image
            src="/images/ui&ux.jpg"
            alt="UI/UX Design background"
            fill
            className="object-cover"
            priority
          />

          {/* Subtle gradient overlay to improve contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/20 to-transparent"></div>

          {/* Centered title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-center px-6">
              UI/UX&nbsp;Design
            </h1>
          </div>

          {/* Bottom bar: description left, CTA right */}
          <div className="absolute left-0 right-0 bottom-6 px-6 md:px-12 flex items-end justify-between gap-6">
            <p className="text-white text-sm md:text-base max-w-2xl leading-relaxed drop-shadow-md">
              Aura delivers research-driven UX design, combining usability,
              interaction, and visual design to craft engaging, accessible digital
              experiences that users love.
            </p>

            <div className="flex-shrink-0">
              <Link
  href="/contact"
  aria-label="Contact us"
  style={{
    width: 219,
    height: 65,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 38,
    opacity: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    position: "relative",
  }}
  className="group bg-transparent text-white border-white hover:bg-white hover:text-black hover:border-black transition"
>
  <span
    className="text-white group-hover:text-black"
    style={{
      fontFamily:
        "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 28,
      lineHeight: "100%",
      letterSpacing: "0%",
    }}
  >
    Let’s talk
  </span>
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
