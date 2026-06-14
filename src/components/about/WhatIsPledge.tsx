"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function WhatIsPledge() {
  const { t } = useTranslation();

  return (
    <section className="relative z-50 w-full bg-transparent pt-12 lg:pt-16 pb-16 md:pb-20 overflow-visible">
      {" "}
      {/* Orange Shape on the left */}
      <div className="absolute left-0 top-0 w-[79px] sm:w-[49px] md:w-[69px] lg:w-[79px] pointer-events-none hidden lg:flex justify-start z-50 mt-[-20px]">
        <Image
          src="/assets/decorations/orange_shape.svg"
          alt="Decorative orange shape"
          width={79}
          height={327}
          className="object-contain object-left h-auto max-h-[80%] w-auto"
        />
      </div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[80px] flex flex-col items-center justify-center">
        {/* Content Container based on Figma specs */}
        <div
          className="flex flex-col items-center justify-center max-w-[1246px] w-full"
          style={{ gap: "16px" }}
        >
          <h2
            className="text-neutral-near-black text-[32px] sm:text-[44px] font-medium leading-[100%] text-center break-words w-full"
            style={{ fontWeight: 500 }}
          >
            {t("whatIsPledge.titleBlack1")}
            <span style={{ color: "var(--color-brand-primary)" }}>
              {t("whatIsPledge.titleOrange")}
            </span>
            {t("whatIsPledge.titleBlack2")}
          </h2>

          <div className="flex flex-col items-center text-center mt-2 gap-1 sm:gap-2 max-w-[1100px]">
            <p className="text-neutral-text-gray text-[15px] sm:text-[18px] font-normal leading-relaxed sm:leading-[27px]">
              {t("whatIsPledge.p1")}
            </p>
            <p className="text-neutral-text-gray text-[15px] sm:text-[18px] font-normal leading-relaxed sm:leading-[27px]">
              {t("whatIsPledge.p2")}
            </p>
            <p className="text-neutral-text-gray text-[15px] sm:text-[18px] font-normal leading-relaxed sm:leading-[27px]">
              {t("whatIsPledge.p3")}
            </p>
          </div>
        </div>

        {/* Divider with Sun Icon */}
        <div className="relative flex items-center justify-center mt-10 md:mt-12 w-full max-w-[800px]">
          {/* Left fade arm */}
          <div
            className="h-px w-1/2"
            style={{
              background:
                "linear-gradient(to left, var(--color-brand-primary), transparent)",
            }}
          />
          {/* Sun icon */}
          <div className="flex items-center justify-center px-4 shrink-0">
            <Image
              src="/assets/icons/sun.svg"
              alt="Sun emblem"
              width={24}
              height={24}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] object-contain select-none hover:rotate-[360deg] transition-transform duration-1000 ease-in-out cursor-pointer"
            />
          </div>
          {/* Right fade arm */}
          <div
            className="h-px w-1/2"
            style={{
              background:
                "linear-gradient(to right, var(--color-brand-primary), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
