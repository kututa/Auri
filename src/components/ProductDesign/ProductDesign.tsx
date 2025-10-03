
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductDesign() {
  return (
    <>
    <section className="w-full flex justify-center items-center py-10 px-4">
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden bg-black h-[360px] md:h-[520px]">
        {/* Background Image */}
        <Image
          src="/images/e68593f605f4373fe6e530152f82e8a4264831f8.jpg"
          alt="Product design background"
          fill
          className="object-cover"
          priority
        />

        {/* subtle dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/60" aria-hidden />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
          {/* Centered Title */}
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-white text-center tracking-tight">
              Product Design
            </h1>
          </div>

          {/* Bottom row: left paragraph, right CTA */}
          <div className="flex items-end justify-between gap-6">
            <p className="max-w-2xl text-sm md:text-base text-gray-200">
              Aura delivers research-driven UX design, combining usability,
              interaction, and visual design to craft engaging, accessible
              digital experiences that users love.
            </p>

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
  className="group bg-black text-white border-white hover:bg-white hover:text-black hover:border-black transition"
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
    </section>
    </>
  )
}
