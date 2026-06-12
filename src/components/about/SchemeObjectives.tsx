"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import enTranslations from "@/core/i18n/en/common.json";
import hiTranslations from "@/core/i18n/hi/common.json";

interface ObjectiveItem {
  title: string;
  description: string;
}

export default function SchemeObjectives() {
  const { t, language } = useTranslation();

  // Load items safely with type safety
  const activeDict = language === "hi" ? hiTranslations : enTranslations;
  const itemsList = activeDict.schemeObjectives.items as ObjectiveItem[];

  if (!itemsList || itemsList.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full py-20 md:py-28 overflow-visible bg-white z-10 px-0">
      
      {/* Decorative Orange Shape (Left edge, absolute to monitor, top: 3142px => relative top: 617px) */}
      <img
        src="/assets/decorations/orange_shape.svg"
        alt="Orange decorative shape"
        className="absolute left-0 top-[617px] w-[57px] h-[242px] select-none pointer-events-none z-0 hidden lg:block"
        style={{ transform: "rotate(0deg)" }}
      />

      {/* Decorative Green Shape (Right edge, absolute to monitor, top: 2936px => relative top: 411px, z-20 to sit over image) */}
      <img
        src="/assets/decorations/green-shape-coreoffering_section.svg"
        alt="Green decorative shape"
        className="absolute -scale-x-100 -scale-y-100 right-0 top-[500px] w-[54px] h-[406px] select-none pointer-events-none z-20 hidden lg:block"
        style={{ transform: "rotate(180deg)" }}
      />

      {/* Centered Heading Wrapper */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[80px] z-10">
        <div className="container mx-auto">
          {/* Section Heading & Subheading */}
          <div className="text-center mb-12 flex flex-col items-center">
            <h3 className="mb-3 text-neutral-near-black text-[28px] md:text-[44px] font-sans font-medium leading-tight">
              {t("schemeObjectives.titlePart1")}{" "}
              <span className="text-brand-orange-deep">{t("schemeObjectives.titlePart2")}</span>
            </h3>
            <p className="text-neutral-near-black text-[16px] md:text-[18px] font-normal leading-[27px] max-w-[650px] mx-auto font-sans opacity-60">
              {t("schemeObjectives.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Row Container (Left: Centered aligned grid, Right: Spans to screen edge, on 2xl: centers and caps right) */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start mt-10 pl-4 md:pl-10 lg:pl-[calc(max(80px,(100vw-1440px)/2+80px))] pr-4 md:pr-10 lg:pr-0 2xl:pr-[calc(max(80px,(100vw-1440px)/2+80px))] relative z-10">
        
        {/* Left Columns: 6 Objectives in 3x2 grid (704px width) */}
        <div className="w-full lg:w-[704px] shrink-0 grid grid-cols-1 md:grid-cols-2 gap-x-[36px] gap-y-[64px]">
          {itemsList.map((item, idx) => (
            <div key={idx} className="group flex flex-col justify-start">
              
              {/* Title & Icon Header */}
              <div className="flex items-center gap-2.5 mb-1.5">
                {/* Sun Icon */}
                <img
                  src="/assets/icons/sun.svg"
                  alt="Sun icon"
                  className="w-[18px] h-[18px] shrink-0 select-none group-hover:rotate-[30deg] transition-transform duration-500 ease-out"
                />
                
                {/* Title */}
                <h4 className="font-sans font-medium text-[16px] md:text-[18px] text-neutral-near-black">
                  {item.title}
                </h4>
              </div>

              {/* Horizontal gradient dashed separator line */}
              <div 
                className="w-full mb-2.5"
                style={{
                  height: "1px",
                  backgroundImage: "linear-gradient(to right, var(--color-brand-orange-deep) 60%, transparent 40%)",
                  backgroundSize: "8px 1px",
                  backgroundRepeat: "repeat-x",
                  WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                  maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)"
                }}
              />

              {/* Description */}
              <p className="font-sans font-normal text-[14px] md:text-[15px] leading-[22px] text-neutral-near-black opacity-70">
                {item.description}
              </p>

            </div>
          ))}
        </div>

        {/* Right Column: Photos (Mobile vs Desktop) */}
        <div className="w-full lg:flex-1 mt-10 lg:mt-0 lg:ml-10">
          
          {/* Mobile version: visible only on mobile/tablet (below lg) */}
          <div className="block lg:hidden w-full h-[450px] relative rounded-[16px] overflow-hidden shadow-md">
            <Image
              src="/assets/images/section_4_about_mobile_img.jpg"
              alt="UP Vidhan Sabha"
              fill
              className="object-cover rounded-[16px]"
              priority
            />
          </div>

          {/* Desktop version: visible on lg and up */}
          <div className="hidden lg:block w-full h-[380px] relative rounded-[16px] overflow-hidden shadow-md">
            <Image
              src="/assets/images/aboutpage_section_4_sideimage.jpg"
              alt="UP Government Officials"
              fill
              className="object-cover rounded-[16px]"
              priority
            />
          </div>

        </div>

      </div>

    </section>
  );
}
