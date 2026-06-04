"use client";

import { RegistrationForm } from "@/features/auth/components/registration-form";
import Image from "next/image";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function RegisterPage() {
  const { t } = useTranslation();
  return (
    <main className="w-full min-h-screen bg-white font-sans">
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[35%_65%] xl:grid-cols-[45%_55%] bg-white">
         
         {/* Left Side - Image & Branding */}
         <div className="hidden lg:block relative w-full h-full bg-[#1A1A1A]">
            <Image 
               src="/register_bg.png"
               alt="Registration Background"
               fill
               className="object-cover opacity-60"
               priority
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-start items-center pt-[143px] px-[60px] gap-[33px]">
               <Image 
                  src="/upgovlogo.png"
                  alt="UP Government Logo"
                  width={150}
                  height={150}
                  className="object-contain"
               />
               <div className="text-center text-white flex flex-col gap-2">
                  <h2 className="font-sans font-medium text-[22px] leading-[26px]">
                     {t("navbar.title")}
                  </h2>
                  <p className="font-sans font-medium text-[16px] leading-[26px] text-gray-200 mt-4 max-w-[488px]">
                     {t("hero.description")}
                  </p>
               </div>
            </div>
         </div>

         {/* Right Side - Form Container */}
         <div className="w-full h-full flex flex-col justify-center items-center py-10 px-4 lg:px-6 xl:px-12 overflow-hidden">
           <div className="w-full max-w-[745px] flex flex-col gap-[54px] mt-4 lg:mt-0">
           
           {/* Heading */}
           <div className="w-full flex flex-col gap-[12px] text-center px-2">
              <h1 className="font-poppins font-medium text-[40px] leading-[1.2] text-[#1A1A1A] tracking-tight whitespace-nowrap">
                 <span className="text-[#FF6A16]">{t("registration.pageTitle")}</span> {t("registration.pageSubtitle")}
              </h1>
              <p className="font-poppins font-normal text-[16px] leading-[26px] text-[#4B4B4B] max-w-[680px] mx-auto">
                 {t("registration.pageDesc")}
              </p>
           </div>
           
           <RegistrationForm />
        </div>
      </div>
      </div>
    </main>
  );
}
