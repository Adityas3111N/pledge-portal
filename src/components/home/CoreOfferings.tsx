"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

const offerings = [
  {
    image: "/assets/images/image1.jpg",
    titleKey: "coreOfferings.items.item1.title",
    descriptionKey: "coreOfferings.items.item1.description",
    icon: (
      <svg className="w-5 h-5 text-brand-orange-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    image: "/assets/images/image2.jpg",
    titleKey: "coreOfferings.items.item2.title",
    descriptionKey: "coreOfferings.items.item2.description",
    icon: (
      <svg className="w-5 h-5 text-brand-orange-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
  },
  {
    image: "/assets/images/image3.jpg",
    titleKey: "coreOfferings.items.item3.title",
    descriptionKey: "coreOfferings.items.item3.description",
    icon: (
      <svg className="w-5 h-5 text-brand-orange-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    image: "/assets/images/image4.jpg",
    titleKey: "coreOfferings.items.item4.title",
    descriptionKey: "coreOfferings.items.item4.description",
    icon: (
      <svg className="w-5 h-5 text-brand-orange-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function CoreOfferings() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white pt-4 pb-16 md:pb-24 relative">
      {/* Green Shape Decoration - positioned to overlap into the section below */}
      <div className="absolute right-0 bottom-0 translate-y-1/2 w-[54px] h-[315px] select-none pointer-events-none hidden md:block z-20">
        <img
          src="/assets/decorations/green-shape-coreoffering_section.svg"
          alt="Green decorative shape"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full max-w-[1293px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center gap-[46px] relative z-10">
        {/* Heading Block */}
        <div className="w-full max-w-[840px] flex flex-col items-center gap-3 text-center">
          <h2 className="text-[7vw] min-[450px]:text-[28px] md:text-[44px] font-medium leading-[100%] md:leading-[56px] text-neutral-near-black font-sans whitespace-nowrap">
            {t("coreOfferings.titlePart1")}{" "}
            <span className="text-brand-orange-accent">
              {t("coreOfferings.titlePart2")}
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] font-normal leading-[27px] md:leading-[23.4px] text-neutral-text-gray font-sans max-w-[650px]">
            {t("coreOfferings.description")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="relative w-full aspect-[315/347] rounded-[12px] overflow-hidden group cursor-default flex flex-col items-center justify-center shadow-md hover:shadow-2xl border border-white/5 hover:border-brand-orange-accent/30 transition-all duration-500 ease-in-out"
            >
              {/* Background Image */}
              <Image
                src={offering.image}
                alt={t(offering.titleKey)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/60 transition-opacity duration-500 group-hover:opacity-85" />

              {/* Glassmorphic sliding bottom drawer */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col items-center select-none bg-black/40 backdrop-blur-[8px] border-t border-white/10 transition-all duration-500 ease-in-out h-[98px] group-hover:h-[185px] justify-start text-center">
                {/* Icon Container */}
                <div className="absolute -top-[24px] w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center shadow-md border border-brand-orange-accent/15 transition-transform duration-500 group-hover:scale-110">
                  {offering.icon}
                </div>

                <div className="mt-7 flex flex-col items-center w-full">
                  <h3 className="text-white text-[15px] md:text-[16px] font-semibold leading-[22px] font-sans transition-colors duration-300">
                    {t(offering.titleKey)}
                  </h3>
                  <p className="text-white/90 text-[12px] font-normal leading-[17px] font-sans mt-2 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[85px] overflow-hidden transition-all duration-500 ease-in-out">
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
