// components/RealismSection.tsx
import Image from "next/image";

export default function RealismSection() {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/the-key-to-realism-in-blender--or-3d--1.png" // <- put your uploaded image in /public
        alt="Realism background"
        fill
        className="object-cover rounded-lg"
        priority
      />

      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

      {/* Text */}
      <h1 className="relative z-10 text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
        Realism
      </h1>
    </section>
  );
}
