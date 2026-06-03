"use client";

import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageStore } from "@/store/language.store";

// Inline Icons representing Ruler & Pencil, Users, Wrench/Spanner, and Smiley face
const RulerPencilIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-brand-primary)"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 shrink-0"
  >
    {/* Pencil Body */}
    <path d="M4 8v12h5V8Z" />
    {/* Pencil Tip */}
    <path d="M4 8l2.5-5 2.5 5" />
    {/* Pencil lead tip inner line / body center line */}
    <path d="M6.5 8v12" />
    
    {/* Ruler Body */}
    <path d="M14 3v18h5V3Z" />
    {/* Ruler Ticks */}
    <path d="M14 8h2.5" />
    <path d="M14 12h2.5" />
    <path d="M14 16h2.5" />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-brand-primary)"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 shrink-0"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const WrenchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-brand-primary)"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 shrink-0"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const SmileyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-brand-primary)"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9" y2="9" />
    <line x1="15" y1="9" x2="15" y2="9" />
  </svg>
);

export default function PledgeGlance() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const isHindi = language === "hi";

  const statsItems = [
    {
      icon: <RulerPencilIcon />,
      value: t("pledgeGlance.stats.item1.value"),
      label: t("pledgeGlance.stats.item1.label"),
    },
    {
      icon: <UsersIcon />,
      value: t("pledgeGlance.stats.item2.value"),
      label: t("pledgeGlance.stats.item2.label"),
    },
    {
      icon: <WrenchIcon />,
      value: t("pledgeGlance.stats.item3.value"),
      label: t("pledgeGlance.stats.item3.label"),
    },
    {
      icon: <SmileyIcon />,
      value: t("pledgeGlance.stats.item4.value"),
      label: t("pledgeGlance.stats.item4.label"),
    },
  ];

  return (
    <section className="w-full bg-bg-surface font-sans pt-8 md:pt-0 pb-16 md:pb-24 relative overflow-visible flex items-center mt-0 md:-mt-4">
      
      {/* Decorative Green Organic Leaf Shape on the Left */}
      <div className="absolute left-0 top-[20px] w-[74px] h-[418px] select-none pointer-events-none hidden lg:block">
        <img
          src="/green_shape.png"
          alt="Green decorative shape"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full max-w-[1088px] mx-auto px-6 md:px-12 relative lg:h-[557px] flex flex-col lg:flex-row justify-between items-end gap-6 lg:gap-8">
        
        {/* Left Column: Text & Stats */}
        <div className="w-full lg:w-[48%] xl:w-[530px] lg:h-[450px] flex flex-col justify-between z-10 lg:pt-2">
          <div>
            {/* Heading */}
            <h2
              className="text-text-primary text-[6.5vw] min-[450px]:text-[28px] md:text-[32px] font-sans font-medium mb-3 leading-[100%] md:leading-[110%] whitespace-nowrap tracking-tight md:tracking-normal"
            >
              <span className="text-brand-accent">{t("pledgeGlance.titlePart1")}</span>{" "}
              {t("pledgeGlance.titlePart2")}
            </h2>

            {/* Sub-description */}
            <p className="text-[16px] md:text-sm text-text-secondary leading-[27px] md:leading-relaxed mb-6 font-sans font-normal">
              {t("pledgeGlance.description")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {statsItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-3 md:p-5 rounded-[12px] bg-bg-surface border border-border-medium shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 min-h-[100px] md:min-h-[125px] w-full"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="scale-75 md:scale-100 origin-left">
                      {item.icon}
                    </div>
                    <span className="text-lg md:text-2xl font-bold text-text-primary leading-none">
                      {item.value}
                    </span>
                  </div>
                  <div className="text-[9px] md:text-xs font-semibold text-text-secondary tracking-wider leading-snug uppercase mt-2 md:mt-3 max-w-[90px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: UP Map */}
        <div className="w-full lg:w-[48%] xl:w-[520px] lg:h-[460px] relative mt-8 lg:mt-0 flex justify-center items-end">
          <div className="relative w-full h-full flex items-end justify-center">
            {/* Map Image */}
            <img
              src="/upmap.png"
              alt="Uttar Pradesh Map"
              className="h-full w-auto object-contain select-none pointer-events-none drop-shadow-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
