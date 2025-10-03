// work/work.tsx
import React from "react";
import Image from "next/image";
import Footer from "../../components/footer/Footer";

const Work = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center px-6 md:px-12 py-16">
      {/* Heading */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          We elevate products and brands
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Redefining the Line Between Ideas & Design.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Row 1 */}
        <div className="w-full">
          <Image
            src="/images/2e48bc26c921329c539f864e0b2a0b29d7bb7be7.jpg"
            alt="Fanta design"
            width={1200}
            height={675}
            className="object-cover rounded-md w-full h-auto"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/spo-player1-plus--dorothy-basketball-shoes-low-top-wear-resistan.png"
            alt="Shoes basketball"
            width={540}
            height={810}
            className="object-cover rounded-md w-full h-auto"
          />
        </div>

        {/* Row 2 */}
        <div className="w-full bg-black flex items-center justify-center rounded-md">
          <Image
            src="/images/151a251437c11f7ddcec72e0ac0a7c47097238e7.jpg"
            alt="Uncave logo"
            width={600}
            height={740}
            className="object-contain"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/f2b7f02c1d31c0d01c40885697cf869151fa2d65.jpg"
            alt="Grand Prix design"
            width={900}
            height={675}
            className="object-cover rounded-md w-full h-auto"
          />
        </div>

        {/* Row 3 */}
        <div className="w-full">
          <Image
            src="/images/fec8848d476b0ab92988cf476de63ea79453f326.jpg"
            alt="Sustain branding"
            width={900}
            height={900}
            className="object-cover rounded-md w-full h-auto"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/94c107824fab2a7073f15fc082e5df74ccad8165.jpg"
            alt="Smiling person"
            width={540}
            height={810}
            className="object-cover rounded-md w-full h-auto"
          />
        </div>
      </div>

      {/* More Work button */}
      <div className="mt-16">
        <button
          className="flex items-center gap-2 hover:underline"
          style={{
            fontFamily: 'Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0',
            color: '#000'
          }}
        >
          More Work <span style={{ display: 'inline-block', width: 48, height: 48, fontSize: 48, lineHeight: '48px', transform: 'rotate(-19deg)', opacity: 1, textAlign: 'center' }}>↗</span>
        </button>
      </div>

      {/* Added section: LET'S GET REEL (dark hero) */}
    <section className="w-full bg-[#1e1e1e] text-white mt-12">
  <div className="max-w-7xl mx-auto px-6 py-20">
    {/* Top Row: Circle, Text, Line */}
    <div className="flex items-center gap-4 mb-12">
      <div className="w-4 h-4 rounded-full border border-white" />
      <span
        className="text-sm tracking-[0.2em] uppercase text-white/90"
        style={{
          fontFamily:
            'Poppins, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        ALL TOGETHER NOW
      </span>
      <div className="h-px bg-white/60 flex-1" />
    </div>

    {/* Main Heading */}
    <div className="space-y-2">
      <h3
        className="text-4xl md:text-5xl font-light"
        style={{
          fontFamily:
            'Poppins, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.01em',
        }}
      >
        LET’S
      </h3>
      <h2
        className="text-6xl md:text-8xl font-extrabold leading-none"
        style={{
          fontFamily:
            'Poppins, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.02em',
        }}
      >
        GET REEL
      </h2>
    </div>
  </div>
</section>

      </section>
  <Footer />
    </>
  );
};

export default Work;
