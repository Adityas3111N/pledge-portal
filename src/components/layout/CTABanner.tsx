"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#FF5200] relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto relative flex flex-col md:block h-auto min-h-[500px] md:h-[260px] md:min-h-[300px]">
        {/* Connect With Us Card - Top Left */}
        <div className="md:absolute top-[22px] left-[19px] z-20 w-full md:w-[160px] rounded-[8px] p-4 md:p-3 flex flex-col gap-[10px]">
          <h3 className="text-white text-[13px] font-bold leading-[100%] font-sans">
            {t("ctaBanner.connectTitle")}
          </h3>
          <div className="flex flex-col gap-[2px] mt-1">
            <p className="text-white text-[11px] font-normal leading-[16px] font-sans flex items-center gap-1.5">
              <span className="text-[10px]">📞</span> {t("ctaBanner.phone")}
            </p>
            <p className="text-white text-[11px] font-normal leading-[16px] font-sans flex items-center gap-1.5">
              <span className="text-[10px]">🌐</span> {t("ctaBanner.website")}
            </p>
          </div>
        </div>

        {/* Ram Mandir Image - Bottom Left/Center */}
        <div className="absolute bottom-0 left-0 md:left-[5%] w-full md:w-[480px] h-[180px] md:h-[280px] pointer-events-none select-none z-0">
          <Image
            src="/ram_mandir_image.svg"
            alt="Ram Mandir"
            fill
            className="object-contain object-bottom"
            unoptimized
          />
        </div>

        {/* Right Content */}
        <div className="relative md:absolute top-0 right-0 h-auto md:h-full w-full md:w-[663px] z-10 flex flex-col justify-center items-center md:items-end gap-[12px] md:gap-[17px] px-6 md:px-0 md:pr-16 pt-4 pb-48 md:py-0 text-center md:text-right">
          <h2 className="font-sans leading-[1.15] md:leading-[1.2]">
            <span className="text-white text-[28px] md:text-[36px] font-medium">
              {t("ctaBanner.titlePart1")}{" "}
            </span>
            <span className="text-[#8B1A15] text-[28px] md:text-[36px] font-semibold">
              {t("ctaBanner.titlePart2")}
            </span>
            <span className="hidden md:inline"><br /></span>
            <span className="inline md:hidden">{" "}</span>
            <span className="text-white text-[28px] md:text-[36px] font-medium">
              {t("ctaBanner.titlePart3")}
            </span>
          </h2>
          <p className="text-white/90 text-[13px] md:text-[14px] font-normal leading-[20px] font-sans">
            {t("ctaBanner.description")}
          </p>
          <Button
            variant="gradient-dark"
            className="h-[38px] px-[12px] py-[10px] rounded-[8px] text-[13px] font-medium mt-1"
          >
            {t("ctaBanner.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
