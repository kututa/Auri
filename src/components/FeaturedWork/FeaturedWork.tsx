"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeaturedWork() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Main container relative so children use % positioning */}
      <div className="relative w-full max-w-[1512px] mx-auto min-h-[3400px] px-[2%]">

        {/* Featured text */}
        <div className="absolute top-[7%] left-[58%] font-medium text-xl tracking-[4.4px]">
          FEATURED
        </div>

        {/* Circle + line */}
        <div className="absolute top-[7.5%] left-[56%] w-[1.5%] aspect-square rounded-full border border-white" />
        <div className="absolute top-[8%] left-[68%] w-[28%] h-px bg-white" />

        {/* THE WORK vertical */}
        <div className="absolute top-[18%] left-[6%] rotate-90 font-bold text-xl tracking-[4.4px]">
          THE
        </div>
        <div className="absolute top-[12%] left-[-10%] w-[30%] rotate-90 font-light text-9xl leading-none">
          WORK
        </div>

        {/* COMES FIRST */}
        <div className="absolute top-[11%] right-[5%] text-7xl md:text-9xl font-bold text-right leading-[1.2]">
          COMES <br /> FIRST
        </div>

        {/* Featured Projects */}
        <div className="absolute top-[25%] left-[2%] font-medium text-4xl md:text-5xl">
          Featured Projects
        </div>

        <div className="absolute top-[27%] left-[2%] w-[52%] font-medium text-xl md:text-2xl leading-normal">
          The work we create lives at the intersection of clarity and
          consumer-delight and positions <br />
          brands in culture through aesthetics that <br />
          inspire trust and desire.
        </div>

        {/* Project Images */}
        <div className="absolute top-[16%] right-[5%] w-[45%]">
          <Image
            src="/images/94c107824fab2a7073f15fc082e5df74ccad8165.jpg"
            alt="Download"
            width={661}
            height={994}
            className="w-full h-auto rounded-t-3xl object-cover"
          />
        </div>

        <div className="absolute top-[18%] right-[20%] w-[5%]">
          <Image
            src="/images/94c107824fab2a7073f15fc082e5df74ccad8165.jpg"
            alt="Polygon copy"
            width={64}
            height={53}
            className="w-full h-auto"
          />
        </div>

        {/* AKIBA Card */}
        <Card className="absolute top-[42%] right-[5%] w-[45%]">
          <CardContent className="p-0">
            <div className="w-full h-[95px] bg-gradient-to-b from-neutral-800 to-black rounded-lg relative">
              <div className="absolute top-[25%] left-[5%] font-bold text-3xl md:text-4xl">
                AKIBA
              </div>
              <div className="absolute top-[35%] left-[38%] font-normal text-lg md:text-2xl">
                Change the way you money
              </div>
              <div className="absolute bottom-[25%] left-[27%] w-10 h-px bg-white" />
            </div>
          </CardContent>
        </Card>

        <div className="absolute top-[38%] left-[5%] w-[45%]">
          <Image
            src="/images/spo-player1-plus--dorothy-basketball-shoes-low-top-wear-resistan.png"
            alt="Spo plus"
            width={665}
            height={997}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Download image */}
      <div className="absolute top-[100%] left-[50%] -translate-x-1/2 w-[45%]">
        <Image
          src="/images/fec8848d476b0ab92988cf476de63ea79453f326.jpg"
          alt="Download"
          width={661}
          height={716}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="absolute top-[120%] left-[5%] w-[40%]">
        <Image
          src="/images/66c7c5afaba5117f57da243a5ccd884a-1.png"
          alt="Img"
          width={628}
          height={856}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="absolute top-[125%] right-[5%] w-[55%] font-medium text-xl md:text-2xl leading-normal">
        Now more than ever, we believe that digital should be <br />
        at the core of every forward-thinking brand. <br />
        <br />
        We connect the physical with the digital through online <br />
        platforms, mobile and e-commerce solutions that stand <br />
        out through captivating visuals, branded interactivity <br />
        and cutting-edge performance
      </div>

      {/* More Work Button */}
      <div className="absolute top-[140%] right-[10%]">
        <Button className="bg-white text-black px-10 py-4 rounded-lg flex items-center gap-4">
          <span className="font-medium text-2xl md:text-3xl">More Work</span>
          <Image
            src="/images/arrow-right.svg"
            alt="Arrow up right"
            width={61}
            height={61}
          />
        </Button>
      </div>

      {/* At the intersection section */}
      <section className="absolute top-[155%] left-[5%] w-[90%]">
        <h2 className="text-4xl md:text-6xl font-medium text-black bg-white inline-block px-4 py-2 rounded-lg mb-8">
          At the intersection of <br /> product and brand
        </h2>

        <p className="max-w-4xl text-lg md:text-2xl text-black leading-relaxed">
          With over 15 years of experience in the industry, our offerings have
          evolved into a set of services that complement each other and allow us
          to design, develop, implement, maintain, and extend a consistent
          experience across all touchpoints.
        </p>
      </section>
    </section>
  );
}
