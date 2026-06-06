"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import enTranslations from "@/core/i18n/en/common.json";
import hiTranslations from "@/core/i18n/hi/common.json";

interface TabItem {
  id: string;
  label: string;
  title: string;
  description: string;
}

export default function KeyStakeholders() {
  const { t, language } = useTranslation();
  const [activeTabId, setActiveTabId] = useState<string>("promoter");

  // Load tabs from translation files directly with type safety
  const activeDict = language === "hi" ? hiTranslations : enTranslations;
  const tabsList = activeDict.keyStakeholders.tabs as TabItem[];

  const activeTab = tabsList.find((tab) => tab.id === activeTabId) || tabsList[0];

  if (!tabsList || tabsList.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full pb-20 md:pb-28 overflow-visible bg-[#F9FAFC] z-20 px-0">
      
      {/* Decorative Green Shape (Left monitor edge, z-0 to sit behind content) */}
      <img
        src="/green-shape-coreoffering_section.svg"
        alt="Green decorative shape"
        className="absolute  -scale-y-100 left-0 top-[352px] w-[94px] h-[532px] select-none pointer-events-none z-0 hidden lg:block"
        style={{ transform: "rotate(180deg)" }}
      />

      {/* Decorative Orange Shape (Right monitor edge, z-0 to sit behind content) */}
      <img
        src="/orange_shape.svg"
        alt="Orange decorative shape"
        className="absolute right-0 top-[-93px] w-[79px] h-[327px] select-none pointer-events-none z-0 hidden lg:block"
        style={{ transform: "rotate(180deg)" }}
      />

      {/* Centered content wrapper (1440px constraints, z-10 sits on top of shapes) */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[80px] z-10 overflow-visible">
        <div className="container mx-auto">
          
          {/* Title and Subtitle */}
          <div className="text-center mb-10 flex flex-col items-center">
            <h3 className="mb-2 text-[#050505] text-[28px] md:text-[44px] font-sans font-medium leading-tight">
              {t("keyStakeholders.titlePart1")}{" "}
              <span className="text-[#FF5200]">{t("keyStakeholders.titlePart2")}</span>
            </h3>
            <p className="text-[#050505] text-[16px] md:text-[18px] font-normal leading-[27px] max-w-[650px] mx-auto font-sans opacity-60">
              {t("keyStakeholders.description")}
            </p>

            {/* Divider line with Sun Icon */}
            <div className="flex items-center justify-center my-6 w-full max-w-[650px] mx-auto">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#FF5200]/30 to-[#FF5200]/50" />
              <div className="mx-4 w-[20px] h-[20px] relative shrink-0">
                <Image src="/sun.svg" alt="Sun icon" fill className="object-contain" />
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#FF5200]/30 to-[#FF5200]/50" />
            </div>
          </div>

          {/* Interactive Layout (Tabs on Left, Card on Right) */}
          <div className="w-full max-w-[1138px] mx-auto flex flex-col md:flex-row gap-[40px] md:gap-[73px] items-stretch min-h-[350px] md:min-h-[334px] mt-10">
            
            {/* Left Tabs List */}
            <div className="w-full md:w-[280px] shrink-0 flex flex-col justify-between gap-2 md:gap-0 relative z-20">
              {tabsList.map((tab, idx) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`w-full text-left border-b pb-[12px] pt-[12px] transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#FF5200] border-[#FF5200]"
                        : "text-[#050505] border-[#E5E5E5] hover:text-[#FF5200] hover:border-[#FF5200]"
                    }`}
                  >
                    <span className="block w-full max-w-[231px] min-h-[25px] font-sans font-medium text-[16px] md:text-[20px] leading-tight uppercase tracking-normal">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Content Card */}
            <div className="flex-1 bg-white border border-[#EAEAEA] rounded-none p-6 md:p-8 flex flex-col justify-between relative shadow-sm z-10">
              
              {/* Content Top */}
              <div className="relative z-10">
                {/* Circular Building Icon */}
                <div className="w-[48px] h-[48px] md:w-[54px] md:h-[54px] rounded-full bg-[#FF5200] flex items-center justify-center text-white relative z-10 shadow-md">
                  <svg className="w-[22px] h-[22px] md:w-[26px] md:h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>

                {/* Title */}
                <h4 className="text-[#FF5200] text-[18px] md:text-[22px] font-sans font-bold mt-4">
                  {activeTab.title}
                </h4>

                {/* Description */}
                <p className="text-[#050505] text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] font-sans mt-2 font-normal opacity-70">
                  {activeTab.description}
                </p>
              </div>

              {/* Content Bottom ("See more" link) */}
              <div className="relative z-10 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-[#00A859] font-sans font-bold text-[14px] md:text-[16px] inline-flex items-center gap-1 hover:underline transition-colors"
                >
                  {t("keyStakeholders.seeMore")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
