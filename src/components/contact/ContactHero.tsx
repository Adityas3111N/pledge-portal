"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export function ContactHero() {
  const { t } = useTranslation();

  return (
    <section 
      className="w-full relative overflow-hidden bg-cover bg-center md:bg-white flex flex-col justify-center items-center font-sans h-[500px] md:h-[472px]"
      style={{ backgroundImage: "var(--mobile-bg, none)" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 767px) {
          section { --mobile-bg: url('/assets/backgrounds/contactus_mobile_bg.jpg'); }
        }
      `}} />

      {/* Handshake Background Image (Lowest Layer in DOM / z-0) */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-full pointer-events-none z-12">
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
            src="/assets/images/handshake_contactus.png"
            alt="Handshake Background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Gradient Overlay Layer (Sits above the handshake image) */}
      <div 
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{
          background: "linear-gradient(360deg, #FFFFFF 4.57%, var(--color-brand-orange-deep) 135.11%)"
        }}
      />

      {/* Decorative Ellipses (Overlaying gradient layer) */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-full pointer-events-none z-20">
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

        {/* Right-side Orange Ellipses (color var(--color-brand-orange-deep)14 equivalent to rgba(255, 82, 0, 0.08)) */}
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

      {/* Mobile Overlay (Figma spec: #F5540840) */}
      <div className="absolute inset-0 bg-[#F5540840] md:hidden z-10 pointer-events-none" />

      {/* Main Text Content (Highest Layer / z-30) */}
      <div className="relative z-30 w-full max-w-[840px] px-6 text-center flex flex-col items-center select-none font-sans mt-4 md:mt-0">
        {/* Main Title */}
        <h1 className="font-semibold text-[32px] sm:text-[44px] md:text-[54px] leading-tight tracking-tight">
          <span className="text-brand-orange-deep">{t("contactPage.heroTitle").split(" ")[0]}</span>{" "}
          <span className="text-white md:text-[#000000]">{t("contactPage.heroTitle").split(" ").slice(1).join(" ")}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] text-white/90 md:text-neutral-dark max-w-[760px] opacity-90">
          {t("contactPage.heroSubtitle")}
        </p>
      </div>
    </section>
  );
}
