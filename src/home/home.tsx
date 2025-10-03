"use client";

import Image from "next/image";
import Union from "../../public/images/union.svg";
import RealismSection from "../components/RealismSection/RealismSection";
import FeaturedWork from "../components/FeaturedWork/FeaturedWork";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full h-screen bg-white overflow-hidden flex items-center">
      {/* Left text block */}
      <div className="hero-left-block">
        <h1 className="hero-title">
          Product &amp; brand design <br /> agency
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-lg">
          Redefining the Line Between Ideas &amp; Design.
        </p>
      </div>

      {/* Union SVG shape (full, uncropped) */}
      <div className="union-wrap" style={{ top: "30%", left: "5%", width: "90%", height: "50%" }}>
        <Image
          src={Union}
          alt="Union shape"
          fill
          className="union-image"
          priority
        />
      </div>

      {/* Bottom-right text */}
      <div className="bottom-right-text" style={{ bottom: "12%", right: "8%" }}>
        <p className="text-base text-black">Tomorrow brands,</p>
        <p className="text-3xl font-extrabold tracking-tight">TODAY.</p>
      </div>

      {/* Vertical gradient line + rotated text */}
      <div className="absolute right-6 top-0 h-full flex flex-col items-center justify-center">
        <div className="vertical-gradient" style={{ width: 8, height: "85%" }}></div>
        <p className="-rotate-90 mt-6 text-xs text-black tracking-tight origin-center">
          Don’t. Build Growth.
        </p>
      </div>
      </section>
      <RealismSection />
      <FeaturedWork />
    </>
  );
}