"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
const locations = [
  { width: 201, height: 201, top: 600, left: 817.31, textPos: "right" },
  { width: 131, height: 131, top: 520, left: 307.31, textPos: "bottom" },
  { width: 114, height: 114, top: 400, left: 544.31, textPos: "bottom" },
  { width: 96, height: 96, top: 250, left: 1039.31, textPos: "bottom" },
  { width: 80, height: 80, top: 170, left: 769, textPos: "bottom" },
  { width: 68, height: 68, top: 150, left: 438, textPos: "bottom" },
  { width: 61, height: 61, top: 40, left: 567.31, textPos: "right" },
  { width: 51, height: 51, top: 40, left: 322, textPos: "top" },
  { width: 32, height: 32, top: 50, left: 119.31, textPos: "top" },
];

export default function ApplicationFlow() {
  const { t } = useTranslation();

  return (
    <section id="process" className="relative bg-white pt-0 md:pt-0 pb-4 md:pb-6 overflow-hidden">
      {/* Orange Shape Decoration */}
      <div className="absolute right-0 top-0 md:top-10 w-[62px] h-[257px] select-none pointer-events-none hidden md:block rotate-180">
        <img
          src="/orange_shape.png"
          alt="Orange decorative shape"
          className="w-full h-full object-contain"
          style={{ transform: 'rotate(-180deg)' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <h3 
            className="mb-2 text-[#050505] text-[7vw] min-[400px]:text-[28px] md:text-[44px] font-medium leading-[100%] md:leading-[56px] w-full max-w-[424px] font-sans whitespace-nowrap"
          >
            {t("applicationFlow.titlePart1")} <span className="text-[#F37021]">{t("applicationFlow.titlePart2")}</span>
          </h3>
          <p 
            className="text-[#050505] text-[16px] md:text-[18px] font-normal leading-[27px] md:leading-[23.4px] max-w-[650px] mx-auto font-sans"
          >
            {t("applicationFlow.description")}
          </p>
        </div>
      </div>

      {/* Flow Path View */}
      <div 
        className="relative w-full max-w-[1440px] mx-auto aspect-[1440/931] z-10"
        style={{ containerType: 'inline-size' }}
      >
          <Image
            src="/path.png"
            alt="Path"
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
          {locations.map((loc, index) => (
            <div
              key={index}
              className="absolute group"
              style={{
                width: `${(loc.width / 1440) * 100}%`,
                height: `${(loc.height / 931) * 100}%`,
                top: `${(loc.top / 931) * 100}%`,
                left: `${(loc.left / 1440) * 100}%`,
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/location.png"
                  alt={`Location ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain hover:scale-110 transition-transform cursor-pointer drop-shadow-md"
                />
                
                {/* Text next to icon */}
                <div 
                  className={`absolute z-10 pointer-events-none ${
                    loc.textPos === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 text-center' :
                    loc.textPos === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 text-center' :
                    loc.textPos === 'left' ? 'right-full top-1/2 -translate-y-1/2 text-right' :
                    'left-full top-1/2 -translate-y-1/2 text-left'
                  }`}
                  style={{ 
                    width: '12.5cqw',
                    marginBottom: loc.textPos === 'top' ? '0.5cqw' : '0',
                    marginTop: loc.textPos === 'bottom' ? '0.5cqw' : '0',
                    marginRight: loc.textPos === 'left' ? '0.8cqw' : '0',
                    marginLeft: loc.textPos === 'right' ? '0.8cqw' : '0',
                  }}
                >
                  <h4 className="font-bold text-[#050505] font-sans leading-tight" style={{ fontSize: '0.97cqw', marginBottom: '0.2cqw' }}>{9 - index}. {t("applicationFlow.step.title")}</h4>
                  <p className="text-[#666666] leading-tight font-sans" style={{ fontSize: '0.76cqw' }}>
                    {t("applicationFlow.step.description")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
