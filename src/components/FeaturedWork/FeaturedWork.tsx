"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FeaturedWork() {
  return (
    <section className="w-full bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative">
          {/* Vertical WORK label on the left */}
          <div className="absolute left-0 top-8 transform -translate-x-12 rotate-90 text-4xl font-extralight tracking-widest opacity-90">
            WORK
          </div>

          {/* Right large title */}
          <div className="text-right">
            <div className="text-sm tracking-widest text-gray-300">o FEATURED</div>
            <h2 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">COMES<br/>FIRST</h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left column: intro & small image */}
          <div className="md:col-span-5">
            <h3 className="text-3xl font-medium">Featured Projects</h3>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">The work we create lives at the intersection of clarity and consumer-delight and positions brands in culture through aesthetics that inspire trust and desire.</p>

            <div className="mt-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/spo-player1-plus--dorothy-basketball-shoes-low-top-wear-resistan.png"
                  alt="Featured left"
                  width={800}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column: stacked cards */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <div className="rounded-2xl overflow-hidden bg-neutral-900">
              <Image
                src="/images/94c107824fab2a7073f15fc082e5df74ccad8165.jpg"
                alt="Featured large"
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-2xl font-bold">AKIBA</div>
                <div className="mt-2 text-sm text-gray-300">Change the way you money</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/fec8848d476b0ab92988cf476de63ea79453f326.jpg"
                  alt="Project 1"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="mt-3 text-sm text-gray-300">Aroma Café — Change the way you money</div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/66c7c5afaba5117f57da243a5ccd884a-1.png"
                  alt="Project 2"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="mt-3 text-sm text-gray-300">Ndesah Creation — be new everyday</div>
              </div>
            </div>

            <div className="mt-4 text-gray-300 text-base leading-relaxed">
              Now more than ever, we believe that digital should be at the core of every forward-thinking brand.
              We connect the physical with the digital through online platforms, mobile and e-commerce solutions that stand out through captivating visuals, branded interactivity and cutting-edge performance.
            </div>

            <div className="mt-6 self-start">
              <Button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-3">
                <span className="font-medium">More Work</span>
                <Image src="/images/arrow-right.svg" alt="arrow" width={20} height={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
