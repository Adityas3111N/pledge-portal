"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/actions/button";
import { useTranslation } from "@/hooks/useTranslation";

export function AboutHero() {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-bg-surface relative overflow-hidden flex flex-col min-h-[600px] lg:h-[calc(100vh-144px)] lg:min-h-[550px]">
      {/* 1. Ellipse Layer */}
      <div
        className="absolute pointer-events-none z-0 rounded-[100%] left-1/2 -translate-x-1/2 top-[20px] lg:top-[30px] w-[150%] sm:w-[120%] lg:w-[900px] h-[400px] lg:h-[680px]"
        style={{
          background:
            "linear-gradient(180deg, #FFC4A8 0%, rgba(255, 255, 255, 0) 65%)",
        }}
      />

      {/* 2. Map Background Layer */}
      <div className="absolute pointer-events-none z-0 left-1/2 -translate-x-1/2 top-[446px] md:top-[280px] lg:top-[300px] w-[412px] max-w-full md:w-full lg:max-w-none lg:w-[1150px] h-[188px] md:h-[350px] lg:h-[380px] opacity-60 md:opacity-80 lg:opacity-100">
        <Image
          src="/assets/backgrounds/about_page_hero_bg.svg"
          alt="Map Background"
          fill
          className="object-contain object-top"
          priority
        />
      </div>

      {/* 3. Top Fading Gradient Layer (Desktop only) */}
      <div
        className="hidden lg:block absolute pointer-events-none z-10 left-1/2 -translate-x-1/2 w-[1440px] h-[250px] top-[180px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* 4. Bottom Fading Gradient Layer (Desktop only) */}
      <div
        className="hidden lg:block absolute pointer-events-none z-10 left-1/2 -translate-x-1/2 w-[1440px] h-[100px] bottom-0"
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)"
        }}
      />

      {/* 5. Main Text & Button Section */}
      <div className="relative lg:absolute z-20 flex flex-col items-center text-center left-1/2 -translate-x-1/2 lg:w-[960px] top-0 lg:top-[60px] gap-4 lg:gap-[16px] w-full max-w-[960px] px-4 lg:px-0 pt-[80px] lg:pt-0 pb-16 lg:pb-0">
        {/* Top Label */}
        <div className="flex items-center justify-center gap-2 px-3 py-1.5 bg-bg-surface rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-border-medium w-fit shrink-0">
          <div className="w-[3px] h-[14px] bg-brand-orange-bright rounded-full shrink-0" />
          <span className="text-[12px] leading-[100%] lg:text-[14px] font-medium text-[#000000] lg:text-neutral-dark text-center">
            {t("about.topLabel")}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="w-full max-w-[374px] lg:max-w-[1219px] h-auto font-medium text-[28px] lg:text-[46px] leading-tight lg:leading-[58px] tracking-normal text-center text-neutral-near-black break-words min-w-0">
          {t("about.titlePart1")} <br className="hidden lg:block" />
          {t("about.titlePart2")} <br />
          <span className="text-[#FA7B3F]">{t("about.titlePart3")}</span>
        </h1>

        {/* Subtitle */}
        <p className="w-full lg:max-w-[760px] font-normal text-[14px] lg:text-[15px] leading-relaxed tracking-normal text-center text-neutral-near-black opacity-70 break-words min-w-0 mt-1">
          {t("about.description")}
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-[10px] mt-4 lg:mt-2">
          <Button
            variant="brand-primary"
            size="form-lg"
            className="w-[155px] gap-[10px] whitespace-nowrap overflow-hidden text-ellipsis shrink-0"
          >
            {t("about.servicesBtn")}
          </Button>
          <Button
            variant="raised-outline"
            size="form-lg"
            className="w-[113px] gap-[10px] whitespace-nowrap overflow-hidden text-ellipsis shrink-0"
          >
            {t("about.learnMoreBtn")}
          </Button>
        </div>
      </div>
    </main>
  );
}
