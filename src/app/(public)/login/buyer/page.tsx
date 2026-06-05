"use client";

import { LoginForm } from "@/features/auth/components/login-form";
import Image from "next/image";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function BuyerLoginPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full min-h-screen bg-white font-sans">
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[40%_60%] bg-white">
        {/* Left Side */}
        <div className="hidden lg:flex relative w-full h-full bg-white flex-col items-center justify-start pt-[120px] overflow-hidden">
          <Image 
            src="/buyer_login_bg.png"
            alt="Login Background"
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute bottom-0 right-0 pointer-events-none z-10"
            style={{
              width: "311px",
              height: "386px",
              background: "linear-gradient(-90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
            }}
          />
        </div>

        {/* Right Side */}
        <div className="w-full h-full flex flex-col justify-center items-center py-10 px-4 lg:px-6 xl:px-12 overflow-hidden">
          <div className="w-full max-w-[500px] flex flex-col gap-[40px] mt-4 lg:mt-0">
            <div className="w-full flex flex-col gap-[12px] text-center px-2">
              <h1 className="font-poppins font-medium text-[24px] min-[375px]:text-[28px] sm:text-[40px] leading-[1.2] text-[#1A1A1A] tracking-tight whitespace-nowrap mx-auto">
                <span className="text-[#FF6A16]">{t("login.buyerLog")}</span> {t("login.inHere")}
              </h1>
              <p className="font-poppins font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#4B4B4B] max-w-[680px] mx-auto">
                {t("login.pageDesc")}
              </p>
            </div>
            <LoginForm role="buyer" />
          </div>
        </div>
      </div>
    </main>
  );
}
