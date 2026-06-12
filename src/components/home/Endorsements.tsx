"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageStore } from "@/store/language.store";

export default function Endorsements() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const isHindi = language === "hi";

  const officials = [
    {
      id: "modi",
      name: t("endorsements.officials.modi.name"),
      role: t("endorsements.officials.modi.role"),
      image: "/assets/images/narendramodi.png"
    },
    {
      id: "yogi",
      name: t("endorsements.officials.yogi.name"),
      role: t("endorsements.officials.yogi.role"),
      image: "/assets/images/yogiji.jpg"
    },
    {
      id: "patel",
      name: t("endorsements.officials.patel.name"),
      role: t("endorsements.officials.patel.role"),
      image: "/assets/images/anandibenpatel.jpg"
    },
    {
      id: "nandi",
      name: t("endorsements.officials.nandi.name"),
      role: t("endorsements.officials.nandi.role"),
      image: "/assets/images/nandgopalgupta.jpg"
    },
    {
      id: "saini",
      name: t("endorsements.officials.saini.name"),
      role: t("endorsements.officials.saini.role"),
      image: "/assets/images/jaswantsinghsaini.jpg"
    }
  ];

  // Repeat the array to ensure seamless infinite looping on wider viewports
  const repeatedOfficials = [
    ...officials,
    ...officials,
    ...officials,
    ...officials,
    ...officials,
    ...officials
  ];

  return (
    <section className="w-full bg-bg-surface overflow-hidden font-sans pt-16 pb-8 flex items-center">
      <style>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: marquee-ltr 75s linear infinite;
        }
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div 
        className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[80px] flex flex-col justify-center"
        style={{ minHeight: "378px" }}
      >
        {/* Section Heading */}
        <div className="text-center w-full flex flex-col items-center justify-center">
          <h2 
            className="text-center text-text-primary text-[24px] md:text-[32px] max-w-none w-full mx-auto font-sans"
            style={{ 
              fontWeight: 500,
              lineHeight: "100%",
            }}
          >
            {isHindi ? (
              <>
                <span className="text-brand-accent">{t("endorsements.brand")}</span>{" "}
                {t("endorsements.title")}
              </>
            ) : (
              <>
                {t("endorsements.title")}{" "}
                <span className="text-brand-accent">{t("endorsements.brand")}</span>
              </>
            )}
          </h2>
          <p className="text-sm md:text-base text-text-primary font-normal leading-relaxed mt-3 px-2 max-w-3xl mx-auto font-sans">
            {t("endorsements.description")}
          </p>
        </div>

        {/* Divider with Sun Icon — half-width, orange, fades at both ends */}
        <div className="relative flex items-center justify-center mt-4 md:mt-5 mb-[46px]">
          {/* Left fade arm */}
          <div
            className="h-px w-1/4"
            style={{ background: "linear-gradient(to left, var(--color-brand-primary), transparent)" }}
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
            className="h-px w-1/4"
            style={{ background: "linear-gradient(to right, var(--color-brand-primary), transparent)" }}
          />
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient fade overlays for sides */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-bg-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-bg-surface to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <div className="animate-marquee-ltr gap-x-8 md:gap-x-12">
            {repeatedOfficials.map((official, idx) => (
              <div
                key={`${official.id}-${idx}`}
                className="flex flex-col items-center justify-center text-center gap-4 py-4 px-6 md:px-8 border-r-[2px] border-dotted border-text-secondary last:border-0 shrink-0 w-[180px] md:w-[220px]"
              >
                {/* Circular Gradient Border Wrapper */}
                <div 
                  className="w-[104px] h-[104px] md:w-[114px] md:h-[114px] rounded-full flex items-center justify-center p-[1.5px] shadow-md shrink-0"
                  style={{
                    background: "linear-gradient(to bottom, var(--color-brand-primary) 0%, rgba(255, 110, 40, 0) 90%)"
                  }}
                >
                  {/* Inner white container ensuring a gap around the image */}
                  <div className="w-full h-full rounded-full bg-bg-surface flex items-center justify-center p-[2px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-bg-subtle">
                      <Image
                        src={official.image}
                        alt={official.name}
                        fill
                        sizes="114px"
                        className="object-cover select-none pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Text details */}
                <div className="flex flex-col items-center min-w-0">
                  <span className="text-sm md:text-base font-bold text-text-primary leading-tight font-sans">
                    {official.name}
                  </span>
                  <span className="text-xs md:text-sm font-normal text-text-secondary leading-tight mt-1 font-sans">
                    {official.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
