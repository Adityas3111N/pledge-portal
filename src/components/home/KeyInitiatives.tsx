"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageStore } from "@/store/language.store";

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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:h-[423px] gap-8 lg:gap-6 xl:gap-0">
          
          {/* Left Column: Scheme at a Glance */}
          <div className="w-full lg:w-[52%] xl:w-[654px] lg:h-[416px] flex flex-col justify-between">
            <div>
              {/* Heading */}
              <h2
                className="text-text-primary text-[28px] md:text-[36px] font-sans font-medium mb-[31px]"
                style={{ lineHeight: "100%" }}
              >
                {t("keyInitiatives.leftTitle")}{" "}
                <span className="text-brand-accent">{t("keyInitiatives.leftTitleAccent")}</span>
              </h2>

              {/* Cards List */}
              <div className="flex flex-col gap-3 lg:h-[320px] lg:justify-between">
                {listItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 py-2.5 px-4 rounded-[12px] bg-[#FAFAFA] border border-border-medium shadow-[0_2px_6px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.06)] transition-all duration-300 items-center min-h-[64px]"
                  >
                    <div className="flex items-center justify-center shrink-0 w-6 h-6 relative">
                      <Image
                        src="/assets/icons/sun.svg"
                        alt="Sun icon"
                        width={24}
                        height={24}
                        className="w-6 h-6 shrink-0 object-contain"
                      />
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
          <div className="w-full lg:w-[45%] xl:w-[591px] lg:h-[423px] flex mt-6 lg:mt-0">
            <div className="w-[calc(100%+2rem)] md:w-full bg-brand-orange-deep rounded-none -ml-4 md:ml-0 pl-[48px] pr-[48px] py-10 flex flex-col justify-between items-start text-text-inverse relative overflow-hidden shadow-lg h-full gap-[10px]">

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
