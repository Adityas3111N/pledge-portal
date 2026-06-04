"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  const { t, language } = useTranslation();

  const titlePart1 = t("hero.titlePart1");
  const titlePart2 = t("hero.titlePart2");
  const isEn = language === "en";

  // Desktop title rendering (with "for" in the first line for English)
  const renderDesktopTitle = () => {
    if (isEn) {
      const parts = titlePart2.split(" ");
      const firstLineWhite = parts[0] || "";
      const secondLine = parts.slice(1).join(" ");
      return (
        <h1 
          className="text-[32px] lg:text-[40px] xl:text-[64px] 2xl:text-[72px] tracking-normal font-sans"
          style={{
            fontWeight: 500,
            lineHeight: "100%",
          }}
        >
          <span className="text-black">{titlePart1}</span>{" "}
          <span className="text-white">{firstLineWhite}</span>
          <span className="text-white block mt-2">{secondLine}</span>
        </h1>
      );
    } else {
      return (
        <h1 
          className="text-[32px] lg:text-[40px] xl:text-[64px] 2xl:text-[72px] tracking-normal font-sans"
          style={{
            fontWeight: 500,
            lineHeight: "100%",
          }}
        >
          <span className="text-black">{titlePart1}</span>
          <span className="text-white block mt-2">{titlePart2}</span>
        </h1>
      );
    }
  };

  // Mobile title rendering matching mockup breaks and colors
  const renderMobileTitle = () => {
    if (isEn) {
      const parts = titlePart2.split(" ");
      const firstLineWhite = parts[0] || "";
      return (
        <h1 
          className="text-[36px] sm:text-[44px] tracking-normal font-medium leading-[100%] font-sans"
        >
          <span className="text-black">{titlePart1}</span>{" "}
          <span className="text-white">{firstLineWhite}</span>
          {parts.slice(1).map((part, index) => (
            <span key={index} className="text-white block mt-2">
              {part}
            </span>
          ))}
        </h1>
      );
    } else {
      return (
        <h1 
          className="text-[36px] sm:text-[44px] tracking-normal font-medium leading-[100%] font-sans"
        >
          <span className="text-black">{titlePart1}</span>
          <span className="text-white block mt-2">निर्बाध</span>
          <span className="text-white block mt-2">सरकारी समीक्षा</span>
          <span className="text-white block mt-2">के लिए</span>
        </h1>
      );
    }
  };

  return (
    <section className="w-full bg-[#FF6E28] relative border-b-[4px] border-white">
      {/* Desktop & Tablet Layout (lg and above) */}
      <div className="hidden lg:block relative w-full h-[calc(100vh-140px)] min-h-[600px] max-h-[750px] overflow-hidden">
        {/* 1. Hero Image (Right Side - Bound to screen boundaries to keep people visible) */}
        <div 
          className="absolute top-[3px] h-[99%] z-0"
          style={{
            left: "calc(50% - 200px)",
            right: "0px",
          }}
        >
          <Image 
            src="/hero-image.jpg" 
            alt="Official government review session group" 
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-[52%_center]"
          />
        </div>

        <div 
          className="absolute top-0 h-full z-20 pointer-events-none select-none lg:w-[710px] 2xl:w-[900px]"
          style={{
            left: "calc(50% - 720px)",
          }}
        >
          <Image 
            src="/hero-layer.png" 
            alt="" 
            fill
            priority
            sizes="(max-width: 1536px) 710px, 900px"
            className="object-cover object-right"
          />
        </div>

        {/* Centered Content Wrapper (1440px grid align) */}
        <div className="relative w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto h-full pointer-events-none">
          {/* 3. Text & Content Overlaid on the Left Orange Layer */}
          <div 
            className="absolute z-30 flex flex-col justify-start pointer-events-auto lg:left-[40px] xl:left-[73px] 2xl:left-[100px] lg:top-[171px] lg:w-[400px] xl:w-[480px] 2xl:w-[560px] h-[407px]"
          >
            {renderDesktopTitle()}
            
            <p className="text-white/95 text-xs lg:text-sm xl:text-base leading-relaxed mt-6 font-medium max-w-[440px]">
              {t("hero.description")}
            </p>

            <div className="mt-8">
              <button className="h-[46px] px-6 rounded-[10px] bg-white hover:bg-gray-50 active:scale-[0.98] transition-all text-black text-sm font-semibold cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-transparent focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                {t("hero.checkEligibility")}
              </button>
            </div>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="absolute bottom-6 right-6 lg:right-12 z-30 flex items-center gap-2 pointer-events-auto">
            <button 
              className="w-10 h-10 rounded-full border border-white/20 bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#fc661e] cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button 
              className="w-10 h-10 rounded-full border border-white/20 bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#fc661e] cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Layout (below lg) */}
      <div className="block lg:hidden w-full flex flex-col bg-white overflow-hidden">
        {/* Upper Orange Content Area with Jagged Background Overlay */}
        <div className="relative w-full pt-16 pb-32 px-6 sm:px-12 flex flex-col z-20">
          {/* Mobile Jagged Mask as the background container extending below */}
          <div className="absolute top-0 left-0 w-full h-[calc(100%+70px)] z-10 pointer-events-none select-none">
            <Image 
              src="/hero-layer-mobile.png" 
              alt="" 
              fill
              priority
              sizes="100vw"
              className="object-fill"
            />
          </div>

          {/* Text and Button content on top of the background image */}
          <div className="relative z-20 flex flex-col gap-6 text-left">
            {renderMobileTitle()}
            
            <p className="text-white/95 text-sm sm:text-base leading-relaxed font-medium max-w-[480px]">
              {t("hero.description")}
            </p>

            <div>
              <button className="h-[46px] px-6 rounded-[10px] bg-white hover:bg-gray-50 active:scale-[0.98] transition-all text-black text-sm font-semibold cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                {t("hero.checkEligibility")}
              </button>
            </div>
          </div>
        </div>

        {/* Lower Photo Area */}
        <div className="w-full aspect-[0.95] relative overflow-hidden z-10 mt-[-5px]">
          <Image 
            src="/hero-image.jpg" 
            alt="Official government review session group" 
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-[48%_center]"
          />

          {/* Carousel Navigation Arrows centered at the bottom of the photo */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-24">
            <button 
              className="w-12 h-12 rounded-full bg-[#FF6E28] hover:bg-[#e25c1b] text-white flex items-center justify-center cursor-pointer transition-all shadow-[0_4px_12px_rgba(0,0,0,0.15)] active:scale-[0.95]"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button 
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-all shadow-[0_4px_12px_rgba(0,0,0,0.15)] active:scale-[0.95]"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
