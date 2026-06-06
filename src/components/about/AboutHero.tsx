"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export function AboutHero() {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-bg-surface relative overflow-x-hidden flex flex-col min-h-[700px] lg:block lg:min-h-[1000px]">
      {/* 1. Ellipse Layer */}
      <div
        className="absolute pointer-events-none z-0 rounded-[100%] left-1/2 -translate-x-1/2 top-[20px] lg:top-[40px] w-[150%] sm:w-[120%] lg:w-[957px] h-[400px] lg:h-[958px]"
        style={{
          background:
            "linear-gradient(180deg, #FFC4A8 0%, rgba(255, 255, 255, 0) 46.15%)",
        }}
      />

      {/* 2. Map Background Layer */}
      <div className="absolute pointer-events-none z-0 left-1/2 -translate-x-1/2 top-[446px] md:top-[280px] lg:top-[393px] w-[412px] max-w-full md:w-full lg:max-w-none lg:w-[1250px] h-[188px] md:h-[350px] lg:h-[500px] opacity-60 md:opacity-80 lg:opacity-100">
        <Image
          src="/about_page_hero_bg.svg"
          alt="Map Background"
          fill
          className="object-contain object-top"
          priority
        />
      </div>

      {/* 3. Top Fading Gradient Layer (Desktop only) */}
      <div
        className="hidden lg:block absolute pointer-events-none z-10 left-1/2 -translate-x-1/2 w-[1440px] h-[400px] top-[220px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* 4. Bottom Fading Gradient Layer (Desktop only) */}
      <div
        className="hidden lg:block absolute pointer-events-none z-10 left-1/2 -translate-x-1/2 w-[1440px] h-[129px] top-[830px]"
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%)"
        }}
      />

      {/* 5. Main Text & Button Section */}
      <div className="relative lg:absolute z-20 flex flex-col items-center text-center left-1/2 -translate-x-1/2 lg:w-[960px] lg:h-[442px] top-0 lg:top-[150px] gap-4 lg:gap-[20px] w-full max-w-[960px] px-4 lg:px-0 pt-[80px] lg:pt-0 pb-16 lg:pb-0">
        {/* Top Label */}
        <div className="flex items-center justify-center gap-2 px-3 py-1.5 bg-bg-surface rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-border-medium w-fit shrink-0">
          <div className="w-[3px] h-[14px] bg-[#FF6A16] rounded-full shrink-0" />
          <span className="text-[12px] leading-[100%] lg:text-[14px] font-medium text-[#000000] lg:text-[#1A1A1A] text-center">
            {t("about.topLabel")}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="w-full max-w-[374px] lg:max-w-[1219px] h-auto lg:min-h-[210px] font-medium text-[28px] lg:text-[56px] leading-[100%] lg:leading-[70px] tracking-normal text-center text-[#050505] break-words min-w-0">
          {t("about.titlePart1")} <br className="hidden lg:block" />
          {t("about.titlePart2")} <br />
          <span className="text-[#FA7B3F]">{t("about.titlePart3")}</span>
        </h1>

        {/* Subtitle */}
        <p className="w-full lg:max-w-[800px] lg:min-h-[90px] font-medium text-[14px] lg:text-[16px] leading-[100%] tracking-normal text-center text-[#050505] break-words min-w-0 mt-0 lg:mt-0">
          {t("about.description")}
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-[10px] mt-6 lg:mt-2">
          <Button
            className="w-[155px] h-[44px] gap-[10px] rounded-[8px] py-[10px] px-[12px] text-white font-medium text-[14px] lg:text-[16px] border border-transparent hover:opacity-90 whitespace-nowrap overflow-hidden text-ellipsis shrink-0"
            style={{
              background: "linear-gradient(180deg, #FA7B3F 0%, #FF590A 100%)",
              borderWidth: "1px"
            }}
          >
            {t("about.servicesBtn")}
          </Button>
          <Button
            variant="outline"
            className="w-[113px] h-[44px] gap-[10px] rounded-[8px] py-[10px] px-[12px] bg-white border border-[#CFCFCF] text-[#1A1A1A] font-medium text-[14px] lg:text-[16px] hover:bg-gray-50 whitespace-nowrap overflow-hidden text-ellipsis shrink-0"
            style={{ boxShadow: "inset 0px 4px 8px 0px rgba(185,185,185,0.25)", borderWidth: "1px" }}
          >
            {t("about.learnMoreBtn")}
          </Button>
        </div>
      </div>
    </main>
  );
}
