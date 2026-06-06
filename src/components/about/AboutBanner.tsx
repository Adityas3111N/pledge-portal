"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function AboutBanner() {
  const { t } = useTranslation();

  return (
    <section className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[80px] flex justify-center -mt-4 md:-mt-8 mb-16">
      <div
        className="relative w-full max-w-[374px] md:max-w-[1246px] h-[514px] md:h-[318px] rounded-[12px] flex flex-col md:flex-row items-center overflow-hidden bg-gradient-to-b md:bg-gradient-to-r from-[#F4DCD0] to-[#FEC47B] opacity-100"
      >
        {/* Left Image Section (Desktop) */}
        <div className="hidden md:block absolute left-0 top-0 w-[50%] h-[318px] shrink-0 pointer-events-none z-0">
          <Image
            src="/bg_image_sec3_about.jpg"
            alt="Building"
            fill
            className="object-cover object-left"
            style={{
              maskImage: "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        {/* Right Text Section (Top on Mobile) */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left justify-center px-6 h-[329px] md:h-full md:pr-6 lg:pr-8 xl:pr-16 w-full md:ml-[50%]">
          <h2
            className="w-full md:max-w-[520px] text-[28px] md:text-[18px] lg:text-[22px] xl:text-[28px] font-normal leading-[36px] md:leading-[46px] text-text-primary"
            style={{ fontFamily: "var(--font-gotu), sans-serif" }}
          >
            {t("aboutBanner.heading")}
          </h2>
          <p
            className="w-full max-w-[300px] md:max-w-[473px] mt-4 md:mt-[12px] text-[16px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-normal leading-[24px] md:leading-[25px] text-text-primary opacity-60"
          >
            {t("aboutBanner.subtext")}
          </p>
        </div>

        {/* Bottom Image Section (Mobile) */}
        <div className="block md:hidden absolute left-0 top-[329px] w-full h-[185px] shrink-0 pointer-events-none z-0">
          <Image
            src="/bg_image_sec3_about_mobile_screen.png"
            alt="Red Fort"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
