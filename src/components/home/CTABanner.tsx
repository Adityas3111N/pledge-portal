"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#FF5200] relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto relative flex flex-col lg:block h-auto min-h-[500px] lg:h-[260px] lg:min-h-[300px]">
        {/* Connect With Us Card - Top Left */}
        <div className="lg:absolute top-[22px] left-[19px] z-20 w-full lg:w-[160px] rounded-[8px] p-4 lg:p-3 flex flex-col gap-[10px]">
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
        <div className="absolute bottom-0 left-0 lg:left-[5%] w-full lg:w-[480px] h-[180px] lg:h-[280px] pointer-events-none select-none z-0">
          <Image
            src="/ram_mandir_image.svg"
            alt="Ram Mandir"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-contain object-bottom"
            unoptimized
          />
        </div>

        {/* Right Content */}
        <div className="relative lg:absolute top-0 right-0 h-auto lg:h-full w-full lg:w-[663px] z-10 flex flex-col justify-center items-center lg:items-end gap-[12px] lg:gap-[17px] px-6 lg:px-0 lg:pr-16 pt-4 pb-48 lg:py-0 text-center lg:text-right">
          <h2 className="font-sans leading-[1.15] lg:leading-[1.2]">
            <span className="text-white text-[28px] lg:text-[36px] font-medium">
              {t("ctaBanner.titlePart1")}{" "}
            </span>
            <span className="text-[#8B1A15] text-[28px] lg:text-[36px] font-semibold">
              {t("ctaBanner.titlePart2")}
            </span>
            <span className="hidden lg:inline"><br /></span>
            <span className="inline lg:hidden">{" "}</span>
            <span className="text-white text-[28px] lg:text-[36px] font-medium">
              {t("ctaBanner.titlePart3")}
            </span>
          </h2>
          <p className="text-white/90 text-[13px] lg:text-[14px] font-normal leading-[20px] font-sans">
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
