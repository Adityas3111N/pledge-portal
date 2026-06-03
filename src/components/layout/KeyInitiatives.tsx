"use client";

import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageStore } from "@/store/language.store";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-brand-primary)"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 shrink-0"
    style={{ transform: "rotate(15deg)" }}
  >
    <circle cx="12" cy="12" r="4" fill="var(--color-brand-primary)" fillOpacity="0.1" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export default function KeyInitiatives() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const isHindi = language === "hi";

  const listItems = [
    {
      title: t("keyInitiatives.items.item1.title"),
      description: t("keyInitiatives.items.item1.description"),
    },
    {
      title: t("keyInitiatives.items.item2.title"),
      description: t("keyInitiatives.items.item2.description"),
    },
    {
      title: t("keyInitiatives.items.item3.title"),
      description: t("keyInitiatives.items.item3.description"),
    },
    {
      title: t("keyInitiatives.items.item4.title"),
      description: t("keyInitiatives.items.item4.description"),
    },
  ];

  return (
    <section className="w-full bg-bg-surface font-sans pt-16 pb-4 md:pb-8 flex items-center border-t border-border-light">
      <div className="w-full max-w-[1293px] mx-auto px-4 md:px-8 xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:h-[423px] gap-8 lg:gap-12">
          
          {/* Left Column: Scheme at a Glance */}
          <div className="w-full lg:w-[58%] flex flex-col justify-between h-full">
            <div>
              {/* Heading */}
              <h2
                className="text-text-primary text-[28px] md:text-[36px] font-sans font-medium mb-5"
                style={{ lineHeight: "100%" }}
              >
                {t("keyInitiatives.leftTitle")}{" "}
                <span className="text-brand-accent">{t("keyInitiatives.leftTitleAccent")}</span>
              </h2>

              {/* Cards List - justify-between on desktop */}
              <div className="flex flex-col gap-3 lg:h-[340px] lg:justify-between">
                {listItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 py-2.5 px-4 rounded-[12px] bg-bg-surface border border-border-medium shadow-[0_2px_6px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.06)] transition-all duration-300 items-center min-h-[64px]"
                  >
                    <div className="p-1.5 rounded-full bg-brand-light/10 flex items-center justify-center shrink-0">
                      <SunIcon />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-sm md:text-base font-semibold text-text-primary leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Initiatives Block */}
          <div className="w-full lg:w-[38%] flex h-full mt-6 lg:mt-0">
            <div className="w-[calc(100%+2rem)] md:w-full bg-brand-primary rounded-none md:rounded-[16px] -ml-4 md:ml-0 px-6 py-10 md:p-10 flex flex-col justify-between items-start text-text-inverse relative overflow-hidden shadow-lg h-full">

              
              {/* Subtle design pattern background overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none" />

              <div className="w-full z-10">
                {/* Heading */}
                <h2
                  className="text-text-inverse text-[28px] md:text-[34px] font-sans font-bold tracking-wide uppercase mb-6"
                  style={{ lineHeight: "115%" }}
                >
                  {t("keyInitiatives.rightTitle")}
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base text-text-inverse/90 font-normal leading-relaxed mb-8 md:mb-12">
                  {t("keyInitiatives.rightDescription")}
                </p>
              </div>

              {/* Action Button */}
              <a
                href="#about"
                className="z-10 bg-bg-surface text-brand-accent px-6 py-3 rounded-[8px] font-medium text-sm md:text-base hover:bg-brand-hover hover:text-text-inverse active:scale-[0.98] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-text-inverse focus-visible:outline-none shadow-md"
              >
                {t("keyInitiatives.ctaButton")}
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
