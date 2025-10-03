import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer bg-white relative z-50" style={{ paddingTop: 24 }}>
      {/* Top thin divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-300 mt-6" />

        {/* Three-column area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 text-left">
          <div>
            <h4 className="text-xs tracking-widest font-semibold text-gray-800">
              LOCATION
            </h4>
          </div>

          <div>
            <h4 className="text-xs tracking-widest font-semibold text-gray-800">
              QUICK LINKS
            </h4>
            <nav className="mt-6 flex flex-col gap-3">
              <a href="/work" className="text-base text-gray-800">
                Work
              </a>
              <a href="/services" className="text-base text-gray-800">
                Services
              </a>
              <a href="/about" className="text-base text-gray-800">
                About
              </a>
              <a href="/blog" className="text-base text-gray-800">
                Blog
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-xs tracking-widest font-semibold text-gray-800">
              SOCIAS
            </h4>
            <div className="mt-6 flex flex-col gap-3">
              <a href="https://instagram.com" className="text-base text-gray-800">
                Instagram
              </a>
              <a href="https://tiktok.com" className="text-base text-gray-800">
                Tiktok
              </a>
              <a href="https://linkedin.com" className="text-base text-gray-800">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-transparent">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          {/* Left Logo */}
          <div className="flex items-center">
            <div className="flex items-center" style={{ width: 148, height: 35 }}>
              <span className="logo-auri select-none">AURI</span>
            </div>
          </div>

          {/* Center COPYRIGHTS */}
          <div className="text-xs tracking-widest text-gray-800 uppercase">
            COPYRIGHTS {new Date().getFullYear()}
          </div>

          {/* Right MADE IN MOMBASA WITH */}
          <div className="text-xs tracking-widest text-gray-800 uppercase flex gap-10">
            <span>MADE IN MOMBASA</span>
            <span>WITH</span>
          </div>
        </div>

        {/* Gradient strip */}
        <div
          style={{
            background:
              "linear-gradient(90deg,#000000 20.01%,#DD1816 46.07%,#000000 72.76%,#1178EE 98.64%)",
          }}
          className="h-2 w-full"
        />
      </div>
    </footer>
  );
}
