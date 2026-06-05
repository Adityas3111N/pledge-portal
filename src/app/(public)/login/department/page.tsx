"use client";

import { LoginForm } from "@/features/auth/components/login-form";
import Image from "next/image";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function DepartmentLoginPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full min-h-screen bg-white font-sans">
      <div className="w-full min-h-screen relative overflow-hidden bg-white">
        
        {/* Department Background Image Layer */}
        <div 
          className="absolute pointer-events-none z-0"
          style={{
            top: "245px",
            left: "-120px",
            width: "calc(100% + 120px)"
          }}
        >
          <Image 
            src="/department_login_bg.png" 
            alt="Department Login Background" 
            width={1570} 
            height={684} 
            className="w-full h-auto" 
            priority 
          />
        </div>

        {/* Main Grid Content */}
        <div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-[40%_60%]">
          
          {/* Left Side */}
          <div className="hidden lg:flex relative w-full h-full bg-transparent flex-col items-center justify-start pt-[110px] overflow-hidden">
            <div 
              className="relative z-20 flex flex-col items-center justify-start text-center w-full max-w-[423px] px-4"
              style={{
                gap: "33px",
                opacity: 1
              }}
            >
              <Image src="/upgovlogo.png" alt="UP Gov Logo" width={90} height={90} className="object-contain" />
              <div className="flex flex-col gap-4">
                <h2 
                  className="font-poppins font-semibold text-[22px] leading-[30px] text-[#1A1A1A]"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("login.directorateTitle")}
                </h2>
                <p className="font-poppins text-[14px] leading-[22px] text-[#4B4B4B] font-medium">
                  {t("login.directorateDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full h-full flex flex-col justify-center items-center py-10 px-4 lg:px-6 xl:px-12 overflow-hidden">
            <div className="w-full max-w-[491px] flex flex-col gap-[40px] mt-4 lg:mt-0">
              <div className="w-full flex flex-col gap-[12px] text-center px-2">
                <h1 className="font-poppins font-medium text-[24px] min-[375px]:text-[28px] sm:text-[40px] leading-[1.2] text-[#1A1A1A] tracking-tight whitespace-nowrap mx-auto">
                  <span className="text-[#FF6A16]">{t("login.departmentLog")}</span> {t("login.inHere")}
                </h1>
                <p className="font-poppins font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#4B4B4B] max-w-[680px] mx-auto">
                  {t("login.pageDesc")}
                </p>
              </div>
              <LoginForm role="department" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
