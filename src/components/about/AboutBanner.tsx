"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function AboutBanner() {
  const { t } = useTranslation();

  return (
    <section className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[80px] flex justify-center -mt-4 md:-mt-8 mb-16">
      <div
        className="relative w-full max-w-[1246px] h-auto md:h-[318px] rounded-[12px] flex flex-col md:flex-row items-center overflow-hidden"
        style={{ background: "linear-gradient(90deg, #F4DCD0 0%, #FEC47B 100%)" }}
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

        {/* Left Image Section (Mobile) */}
        <div className="block md:hidden relative w-full h-[220px] shrink-0 pointer-events-none z-0">
          <Image
            src="/bg_image_sec3_about.jpg"
            alt="Building"
            fill
            className="object-cover object-center"
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        {/* Right Text Section */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:pr-6 lg:pr-8 xl:pr-16 py-6 md:py-0 w-full flex-1 md:ml-[50%]">
          <h2
            className="w-full md:max-w-[520px] text-[20px] md:text-[18px] lg:text-[22px] xl:text-[28px] font-normal leading-[1.3] md:leading-[46px] text-text-primary"
            style={{ fontFamily: "var(--font-gotu), sans-serif" }}
          >
            {t("aboutBanner.heading")}
          </h2>
          <p
            className="w-full md:max-w-[473px] mt-3 md:mt-[12px] text-[14px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-normal leading-[1.4] md:leading-[25px] text-text-primary opacity-40"
          >
            {t("aboutBanner.subtext")}
          </p>
        </div>
      </div>
    </section>
  );
}
