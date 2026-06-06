"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export function AboutHero() {
  const { t } = useTranslation();

  return (
    <main
      className="w-full min-h-screen bg-white relative overflow-x-hidden"
      style={{ minHeight: "1000px" }}
    >
      {/* 1. Ellipse Layer */}
      <div
        className="absolute pointer-events-none z-0 rounded-full left-1/2 -translate-x-1/2"
        style={{
          width: "957px",
          height: "958px",
          top: "40px",
          background:
            "linear-gradient(180deg, #FFC4A8 0%, rgba(255, 255, 255, 0) 46.15%)",
        }}
      />

      {/* 2. Map Background Layer */}
      <div
        className="absolute pointer-events-none z-0 left-1/2 -translate-x-1/2"
        style={{
          width: "1250px",
          height: "500px",
          top: "393px",
          opacity: 1,
        }}
      >
        <Image
          src="/about_page_hero_bg.svg"
          alt="Map Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 3. Top Fading Gradient Layer */}
      <div
        className="absolute pointer-events-none z-10 left-1/2 -translate-x-1/2"
        style={{
          width: "1440px",
          height: "400px",
          top: "220px",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* 4. Bottom Fading Gradient Layer */}
      <div
        className="absolute pointer-events-none z-10 left-1/2 -translate-x-1/2"
        style={{
          width: "1440px",
          height: "129px",
          top: "830px",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%)"
        }}
      />

      {/* 5. Main Text & Button Section */}
      <div
        className="absolute z-20 flex flex-col items-center text-center left-1/2 -translate-x-1/2"
        style={{
          width: "960px",
          height: "442px",
          top: "150px",
          gap: "20px",
        }}
      >
        {/* Top Label */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#E5E5E5]">
          <div className="w-[3px] h-[14px] bg-[#FF6A16] rounded-full" />
          <span className="text-[14px] font-medium text-[#1A1A1A]">
            {t("about.topLabel")}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="w-full max-w-[1219px] min-h-[210px] font-medium text-[56px] leading-[70px] tracking-normal text-center text-[#050505] break-words">
          {t("about.titlePart1")} <br />
          {t("about.titlePart2")} <br />
          <span className="text-[#FA7B3F]">{t("about.titlePart3")}</span>
        </h1>

        {/* Subtitle */}
        <p className="w-full max-w-[800px] min-h-[90px] font-medium text-[16px] leading-[100%] tracking-normal text-center text-[#050505] break-words">
          {t("about.description")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Button
            className="w-[155px] h-[44px] gap-[10px] rounded-[8px] py-[10px] px-[12px] text-white font-medium text-[16px] border border-transparent hover:opacity-90 whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              background: "linear-gradient(180deg, #FA7B3F 0%, #FF590A 100%)",
            }}
          >
            {t("about.servicesBtn")}
          </Button>
          <Button
            variant="outline"
            className="w-[113px] h-[44px] gap-[10px] rounded-[8px] py-[10px] px-[12px] bg-white border border-[#CFCFCF] text-[#1A1A1A] font-medium text-[16px] hover:bg-gray-50 whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ boxShadow: "inset 0px 4px 8px 0px #B9B9B940" }}
          >
            {t("about.learnMoreBtn")}
          </Button>
        </div>
      </div>
    </main>
  );
}
