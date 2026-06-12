"use client";

import React, { useState, useEffect } from "react";
import { Phone, Search, ChevronDown } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function UtilityStrip() {
  const { t, language, setLanguage } = useTranslation();
  const [currentTime, setCurrentTime] = useState("");
  const [shortTime, setShortTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const longOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const shortOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const locale = language === "hi" ? "hi-IN" : "en-US";
      setCurrentTime(now.toLocaleString(locale, longOptions));
      setShortTime(now.toLocaleString(locale, shortOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="bg-brand-primary text-text-inverse py-2 text-[11px] lg:text-[14px] font-medium whitespace-nowrap overflow-x-auto no-scrollbar">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[42px] flex justify-between items-center gap-4">
        <div className="opacity-95 tabular-nums tracking-wide flex-shrink-0 font-medium">
          <span className="inline sm:hidden">{shortTime || t("navbar.dateFallback")}</span>
          <span className="hidden sm:inline">{currentTime || t("navbar.dateFallback")}</span>
        </div>

        <div className="flex items-center gap-1 lg:gap-1.5 opacity-95 text-[11px] lg:text-[14px] flex-shrink-0">
          <a 
            href="tel:+928220874287" 
            className="hover:underline transition-colors font-medium flex items-center gap-1"
          >
            <Phone className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-text-inverse fill-none stroke-[2.5]" />
            <span>92+ (8220)874287</span>
          </a>
          <span className="opacity-40 px-1">|</span>
          <button 
            className="hover:opacity-80 transition-opacity focus:outline-none flex items-center justify-center"
            aria-label="Search"
          >
            <Search className="w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[2.5] text-text-inverse" />
          </button>
          <span className="opacity-40 px-1">|</span>
          <button 
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="hover:opacity-85 transition-opacity focus:outline-none flex items-center gap-0.5 font-semibold"
            aria-label="Switch Language / भाषा बदलें"
          >
            <span className="underline">{language === "en" ? "हिन्दी" : "English"}</span>
            <ChevronDown className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-text-inverse stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
