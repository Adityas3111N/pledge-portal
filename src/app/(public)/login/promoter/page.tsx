"use client";

import { LoginForm } from "@/features/auth/components/login-form";
import Image from "next/image";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function PromoterLoginPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full min-h-screen bg-white font-sans">
      <div className="w-full min-h-screen relative overflow-hidden bg-white">
        
        {/* Faint Map Background Layer (Spans full viewport) */}
        <div 
          className="absolute pointer-events-none z-0 left-1/2 -translate-x-1/2"
          style={{
            width: "1440px",
            height: "586px",
            top: "339px",
            opacity: 0.17
          }}
        >
          <Image src="/white_bg_img_promoter_login.png" alt="Promoter Login Faint Map" fill className="object-cover" priority />
        </div>

        {/* Main Grid Content */}
        <div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-[40%_60%]">
          
          {/* Left Side */}
          <div className="hidden lg:flex relative w-full h-full bg-transparent flex-col items-center justify-start pt-[120px]">
            <div 
              className="absolute pointer-events-none z-20"
              style={{
                width: "600px",
                height: "500px",
                top: "136px",
                left: "0px"
              }}
            >
              <Image src="/upmap.png" alt="UP Map" fill className="object-contain" priority />
            </div>
          </div>

        {/* Right Side */}
        <div className="w-full h-full flex flex-col justify-center items-center py-10 px-4 lg:px-6 xl:px-12 overflow-hidden">
          <div className="w-full max-w-[500px] flex flex-col gap-[40px] mt-4 lg:mt-0 relative z-30">
            <div className="w-full flex flex-col gap-[12px] text-center px-2">
              <h1 className="font-poppins font-medium text-[24px] min-[375px]:text-[28px] sm:text-[40px] leading-[1.2] text-[#1A1A1A] tracking-tight whitespace-nowrap mx-auto">
                <span className="text-[#FF6A16]">{t("login.promoterLog")}</span> {t("login.inHere")}
              </h1>
              <p className="font-poppins font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#4B4B4B] max-w-[680px] mx-auto">
                {t("login.pageDesc")}
              </p>
            </div>
            <LoginForm role="promoter" />
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
