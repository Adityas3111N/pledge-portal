"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export function ContactHero() {
  const { t } = useTranslation();

  return (
    <section 
      className="w-full relative overflow-hidden bg-white flex flex-col justify-center items-center font-sans"
      style={{ height: "472px" }}
    >
      {/* Handshake Background Image (Lowest Layer in DOM / z-0) */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-full pointer-events-none z-12">
        <div 
          className="absolute"
          style={{
            width: "1200px",
            height: "600px",
            top: "14px",
            left: "120px",
            transform: "scaleX(-1)",
            opacity: 0.2
          }}
        >
          <Image
            src="/handshake_contactus.png"
            alt="Handshake Background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Gradient Overlay Layer (Sits above the handshake image) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{
          background: "linear-gradient(360deg, #FFFFFF 4.57%, #FF5200 135.11%)"
        }}
      />

      {/* Decorative Ellipses (Overlaying gradient layer) */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-full pointer-events-none z-20">
        {/* Left-side White Ellipses (20% opacity) */}
        {/* Ellipse 1: width: 326px; height: 326px; top: 222px; left: -163px; */}
        <div 
          className="absolute rounded-full bg-white/20"
          style={{
            width: "326px",
            height: "326px",
            top: "222px",
            left: "-163px"
          }}
        />
        {/* Ellipse 2: width: 184px; height: 184px; top: 277px; left: 55px; */}
        <div 
          className="absolute rounded-full bg-white/20"
          style={{
            width: "184px",
            height: "184px",
            top: "277px",
            left: "55px"
          }}
        />

        {/* Right-side Orange Ellipses (color #FF520014 equivalent to rgba(255, 82, 0, 0.08)) */}
        {/* Ellipse 3: width: 326px; height: 326px; top: -155px; left: 1265px; */}
        <div 
          className="absolute rounded-full"
          style={{
            width: "326px",
            height: "326px",
            top: "-155px",
            left: "1265px",
            background: "rgba(255, 82, 0, 0.08)"
          }}
        />
        {/* Ellipse 4: width: 184px; height: 184px; top: 65px; left: 1363px; */}
        <div 
          className="absolute rounded-full"
          style={{
            width: "184px",
            height: "184px",
            top: "65px",
            left: "1363px",
            background: "rgba(255, 82, 0, 0.08)"
          }}
        />
      </div>

      {/* Main Text Content (Highest Layer / z-30) */}
      <div className="relative z-30 w-full max-w-[840px] px-6 text-center flex flex-col items-center select-none font-sans">
        {/* Main Title */}
        <h1 className="font-semibold text-[32px] sm:text-[44px] md:text-[54px] leading-tight text-[#000000] tracking-tight">
          {t("contactPage.heroTitle")}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] text-[#1A1A1A] max-w-[760px] opacity-90">
          {t("contactPage.heroSubtitle")}
        </p>
      </div>
    </section>
  );
}
