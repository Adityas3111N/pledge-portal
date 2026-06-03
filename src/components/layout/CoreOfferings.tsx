"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

const offerings = [
  {
    image: "/image1.jpg",
    titleKey: "coreOfferings.items.item1.title",
    descriptionKey: "coreOfferings.items.item1.description",
  },
  {
    image: "/image2.jpg",
    titleKey: "coreOfferings.items.item2.title",
    descriptionKey: "coreOfferings.items.item2.description",
  },
  {
    image: "/image3.jpg",
    titleKey: "coreOfferings.items.item3.title",
    descriptionKey: "coreOfferings.items.item3.description",
  },
  {
    image: "/image4.jpg",
    titleKey: "coreOfferings.items.item4.title",
    descriptionKey: "coreOfferings.items.item4.description",
  },
];

export default function CoreOfferings() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white pt-4 pb-16 md:pb-24 overflow-hidden relative">
      {/* Green Shape Decoration */}
      <div className="absolute right-0 top-4/5 -translate-y-1/2 w-[54px] h-[315px] select-none pointer-events-none hidden md:block rotate-180">
        <img
          src="/green-shape-coreoffering_section.svg"
          alt="Green decorative shape"
          className="w-full h-full object-contain"
          style={{ transform: 'rotate(-180deg)' }}
        />
      </div>

      <div className="w-full max-w-[1293px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center gap-[46px] relative z-10">
        {/* Heading Block */}
        <div className="w-full max-w-[840px] flex flex-col items-center gap-3 text-center">
          <h2 className="text-[7vw] min-[450px]:text-[28px] md:text-[44px] font-medium leading-[100%] md:leading-[56px] text-[#050505] font-sans whitespace-nowrap">
            {t("coreOfferings.titlePart1")}{" "}
            <span className="text-[#F37021]">
              {t("coreOfferings.titlePart2")}
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] font-normal leading-[27px] md:leading-[23.4px] text-[#6C6C6C] font-sans max-w-[650px]">
            {t("coreOfferings.description")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="relative w-full aspect-[315/347] rounded-[12px] overflow-hidden group cursor-pointer flex flex-col items-center justify-center p-6 text-center"
            >
              {/* Background Image */}
              <Image
                src={offering.image}
                alt={t(offering.titleKey)}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Legibility (Keeps the top half bright and original) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/65 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Content Container - Confined to top 60% of the card */}
              <div className="absolute top-0 left-0 right-0 h-[60%] z-10 flex flex-col items-center justify-center px-4">
                {/* Bridge Icon with Double Rings (Outer White, Inner Orange, Inner-most White solid) */}
                <div className="w-[64px] h-[64px] rounded-full border border-white flex items-center justify-center p-[3px] transition-transform duration-300 group-hover:scale-105 overflow-hidden transform translate-z-0 mb-4">
                  <div className="w-full h-full rounded-full bg-[#F37021] flex items-center justify-center p-[2.5px] overflow-hidden">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                      <Image
                        src="/bridge.svg"
                        alt="Bridge icon"
                        width={48}
                        height={48}
                        className="w-[24px] h-[24px] object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                {/* Text Centered */}
                <div className="flex flex-col gap-1.5 max-w-[273px]">
                  <h3 className="text-white text-[16px] font-normal leading-[22px] font-sans">
                    {t(offering.titleKey)}
                  </h3>
                  <p className="text-white/80 text-[12px] font-light leading-[16px] font-sans">
                    {t(offering.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
