"use client";

import React, { useState, useEffect } from "react";
import { Search, Phone, Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navbar() {
  const { t, language, setLanguage } = useTranslation();
  const [currentTime, setCurrentTime] = useState("");
  const [shortTime, setShortTime] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <header className="w-full flex flex-col z-50 relative bg-bg-surface font-sans">
      {/* ── 1. TOP UTILITY STRIP (Orange Banner) ── */}
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

      <div className="bg-bg-surface font-sans border-b border-border-light">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[42px] py-3 flex justify-between items-center gap-3">
          {/* Left: Emblem + Title */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3.5 min-w-0 hover:opacity-90 transition-opacity">
            {/* UP Gov Emblem */}
            <div 
              className="w-[36px] h-[36px] sm:w-[52px] sm:h-[52px] md:w-[56px] md:h-[56px] rounded-full border-[1px] flex items-center justify-center bg-bg-surface flex-shrink-0"
              style={{ borderColor: "var(--color-brand-primary)" }}
            >
              <Image 
                src="/upgovlogo.png" 
                alt="Government of Uttar Pradesh Logo" 
                width={42}
                height={42}
                className="w-[24px] h-[24px] sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px] object-contain" 
              />
            </div>

            <div className="flex flex-col min-w-0">
              <h2 className="font-bold text-text-primary text-[10px] min-[360px]:text-[11.5px] min-[400px]:text-[13px] sm:text-[17px] md:text-[20px] leading-tight tracking-tight whitespace-nowrap">
                {t("navbar.title")}
              </h2>
              <p className="text-[6.5px] min-[360px]:text-[7.5px] min-[400px]:text-[8.5px] sm:text-[11px] font-bold text-text-secondary tracking-wider mt-0.5 uppercase whitespace-nowrap">
                {t("navbar.subtitle")}
              </p>
            </div>
          </Link>

          {/* Right: Partner logos (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <Image 
              src="/makeinindialogo.png" 
              alt="Make in India" 
              width={160}
              height={58}
              style={{ width: "auto" }}
              className="w-auto h-[58px] object-contain mix-blend-multiply contrast-[1.8] brightness-[1.1]" 
            />
            <Image 
              src="/investinuplogo.png" 
              alt="Invest UP" 
              width={160}
              height={52}
              style={{ width: "auto" }}
              className="w-auto h-[52px] object-contain mix-blend-multiply contrast-[1.5] brightness-[1.15]" 
            />
          </div>

          {/* Mobile hamburger */}
          <div className="block lg:hidden">
            <Sheet onOpenChange={(open) => { if (!open) setActiveDropdown(null); }}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-sm" className="text-text-primary" aria-label="Open navigation menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-5 bg-bg-surface flex flex-col gap-5 overflow-y-auto no-scrollbar">
                {/* Official Government Branding Header */}
                <Link href="/" className="flex items-center gap-2.5 pb-4 border-b border-border-medium hover:opacity-90 transition-opacity">
                  <div className="w-[34px] h-[34px] rounded-full border-[1.5px] border-[#FF6E28] flex items-center justify-center bg-bg-surface flex-shrink-0">
                    <Image 
                      src="/upgovlogo.png" 
                      alt="Government of Uttar Pradesh Emblem" 
                      width={22}
                      height={22}
                      className="w-[22px] h-[22px] object-contain" 
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-xs text-text-primary tracking-tight leading-none uppercase">UP PLEDGE PORTAL</span>
                    <span className="text-[8.5px] font-bold text-text-secondary uppercase mt-1 tracking-wider leading-none">Govt. of Uttar Pradesh</span>
                  </div>
                </Link>

                {/* Bilingual Language Switcher */}
                <div className="flex items-center justify-between bg-bg-subtle border border-border-medium p-2 rounded-xl">
                  <span className="text-[11px] font-bold text-text-secondary ml-1.5">{t("navbar.languageLabel")}</span>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => setLanguage("en")}
                      className={`px-2.5 py-1 text-[11px] rounded-lg font-bold transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none ${language === "en" ? "bg-brand-primary text-text-inverse" : "text-text-muted hover:bg-border-medium"}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => setLanguage("hi")}
                      className={`px-2.5 py-1 text-[11px] rounded-lg font-bold transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none ${language === "hi" ? "bg-brand-primary text-text-inverse" : "text-text-muted hover:bg-border-medium"}`}
                    >
                      हिन्दी
                    </button>
                  </div>
                </div>
                
                {/* Search Bar */}
                <div className="relative w-full">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-secondary" />
                  <input
                    type="text"
                    placeholder={t("navbar.searchPlaceholder")}
                    className="w-full pl-9 pr-4 py-2 border border-border-medium rounded-xl text-xs bg-bg-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent font-medium"
                  />
                </div>

                {/* Structured Scheme Navigation */}
                <nav className="flex flex-col gap-1 text-xs font-semibold text-text-muted" aria-label="Mobile Navigation Drawer">
                  <Link href="/" className="hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary active:bg-bg-subtle p-2.5 rounded-lg border-b border-border-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none">{t("navbar.home")}</Link>
                  <Link href="/about" className="hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary active:bg-bg-subtle p-2.5 rounded-lg border-b border-border-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none">{t("navbar.about")}</Link>
                  
                  <div className="border-b border-border-medium">
                    <button 
                      onClick={() => toggleDropdown("schemeInfo")}
                      aria-expanded={activeDropdown === "schemeInfo"}
                      className="w-full flex items-center justify-between hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary p-2.5 rounded-lg text-left transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
                    >
                      <span>{t("navbar.schemeInfo")}</span>
                      <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform ${activeDropdown === "schemeInfo" ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === "schemeInfo" && (
                      <div className="pl-6 pb-2.5 flex flex-col gap-1.5 text-[11px] text-text-secondary bg-bg-subtle rounded-lg mt-1 p-1.5">
                        <a href="#" className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.schemeGuidelines")}</a>
                        <a href="#" className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.schemeBenefits")}</a>
                      </div>
                    )}
                  </div>

                  <div className="border-b border-border-medium">
                    <button 
                      onClick={() => toggleDropdown("services")}
                      aria-expanded={activeDropdown === "services"}
                      className="w-full flex items-center justify-between hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary p-2.5 rounded-lg text-left transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
                    >
                      <span>{t("navbar.services")}</span>
                      <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === "services" && (
                      <div className="pl-6 pb-2.5 flex flex-col gap-1.5 text-[11px] text-text-secondary bg-bg-subtle rounded-lg mt-1 p-1.5">
                        <a href="#" className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.serviceApplication")}</a>
                        <a href="#" className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.serviceTrack")}</a>
                        <a href="#" className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.serviceGrievance")}</a>
                      </div>
                    )}
                  </div>

                  <div className="border-b border-border-medium">
                    <button 
                      onClick={() => toggleDropdown("approvedParks")}
                      aria-expanded={activeDropdown === "approvedParks"}
                      className="w-full flex items-center justify-between hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary p-2.5 rounded-lg text-left transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
                    >
                      <span>{t("navbar.approvedParks")}</span>
                      <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform ${activeDropdown === "approvedParks" ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === "approvedParks" && (
                      <div className="pl-6 pb-2.5 flex flex-col gap-1.5 text-[11px] text-text-secondary bg-bg-subtle rounded-lg mt-1 p-1.5">
                        <a href="#" className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.stateDirectory")}</a>
                        <a href="#" className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.districtDirectory")}</a>
                      </div>
                    )}
                  </div>

                  <a href="#" className="hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary p-2.5 rounded-lg border-b border-border-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none">{t("navbar.faqs")}</a>
                  <a href="#" className="hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary p-2.5 rounded-lg border-b border-border-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none">{t("navbar.contact")}</a>
                </nav>

                <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-border-medium">
                  {/* Helpdesk Callout */}
                  <a 
                    href="tel:+928220874287" 
                    className="flex items-center gap-2.5 p-2.5 bg-bg-subtle hover:bg-bg-subtle border border-border-medium rounded-xl transition-all focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
                    aria-label="Call Helpdesk at 92+ (8220)874287"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-subtle flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] text-brand-accent font-bold uppercase tracking-wider leading-none">{t("navbar.helpdesk")}</span>
                      <span className="text-xs font-bold text-text-primary leading-normal mt-0.5">92+ (8220)874287</span>
                    </div>
                  </a>

                  <div className="flex flex-col gap-2">
                    <Button asChild className="w-full bg-neutral-900 hover:bg-black text-white font-semibold rounded-xl py-2.5 shadow-sm text-sm">
                      <Link href="/register">
                        {t("navbar.newRegistration")}
                      </Link>
                    </Button>
                    <div className="w-full border border-border-medium rounded-xl bg-bg-surface overflow-hidden">
                      <button 
                        onClick={() => toggleDropdown("loginMobile")}
                        aria-expanded={activeDropdown === "loginMobile"}
                        className="w-full flex items-center justify-between hover:bg-bg-subtle active:bg-bg-subtle p-2.5 text-left transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
                      >
                        <span className="font-semibold text-sm text-text-primary">{t("navbar.logIn")}</span>
                        <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform ${activeDropdown === "loginMobile" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "loginMobile" && (
                        <div className="flex flex-col text-sm font-semibold bg-bg-subtle border-t border-border-medium">
                          <Link href="/login/buyer" className="px-4 py-2.5 hover:text-brand-primary transition-colors text-text-primary border-b border-border-medium/50">
                            Buyer Login
                          </Link>
                          <Link href="/login/promoter" className="px-4 py-2.5 hover:text-brand-primary transition-colors text-text-primary border-b border-border-medium/50">
                            Promoter Login
                          </Link>
                          <Link href="/login/department" className="px-4 py-2.5 hover:text-brand-primary transition-colors text-text-primary">
                            Department Login
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* ── 3. DESKTOP NAVIGATION BAR ── */}
      <div className="hidden lg:block bg-bg-surface border-b border-border-light shadow-xs">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-[42px] py-2 flex justify-between items-center h-[65px]">
          {/* Navigation Links */}
          <nav className="flex items-center justify-between w-[739px] h-[49px] py-3 text-[14px] font-medium text-text-muted" aria-label="Main Navigation">
            <Link 
              href="/" 
              className="px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
              aria-current="page"
            >
              {t("navbar.home")}
            </Link>
            
            <Link 
              href="/about" 
              className="px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
            >
              {t("navbar.about")}
            </Link>

            <div className="relative group flex items-center h-[25px]">
              <button 
                className="flex items-center gap-1 px-[10px] py-[2px] h-[25px] hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
                aria-expanded="false"
              >
                <span>{t("navbar.schemeInfo")}</span>
                <ChevronDown className="w-[13px] h-[13px] opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-bg-surface border border-border-medium rounded-lg shadow-md py-2 z-50">
                <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary">{t("navbar.schemeGuidelines")}</a>
                <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary">{t("navbar.schemeBenefits")}</a>
              </div>
            </div>

            <div className="relative group flex items-center h-[25px]">
              <button 
                className="flex items-center gap-1 px-[10px] py-[2px] h-[25px] hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
                aria-expanded="false"
              >
                <span>{t("navbar.services")}</span>
                <ChevronDown className="w-[13px] h-[13px] opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-bg-surface border border-border-medium rounded-lg shadow-md py-2 z-50">
                <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary">{t("navbar.serviceApplication")}</a>
                <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary">{t("navbar.serviceTrack")}</a>
                <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary">{t("navbar.serviceGrievance")}</a>
              </div>
            </div>

            <div className="relative group flex items-center h-[25px]">
              <button 
                className="flex items-center gap-1 px-[10px] py-[2px] h-[25px] hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
                aria-expanded="false"
              >
                <span>{t("navbar.approvedParks")}</span>
                <ChevronDown className="w-[13px] h-[13px] opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-bg-surface border border-border-medium rounded-lg shadow-md py-2 z-50">
                <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary">{t("navbar.stateDirectory")}</a>
                <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary">{t("navbar.districtDirectory")}</a>
              </div>
            </div>

            <a 
              href="#" 
              className="px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
            >
              {t("navbar.faqs")}
            </a>
            
            <a 
              href="#" 
              className="px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
            >
              {t("navbar.contact")}
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-[6px] h-[38px]">
            <Button 
              asChild
              variant="gradient-dark"
              className="cursor-pointer h-[38px] px-[12px] py-[10px] rounded-[8px] text-[13px] font-medium"
            >
              <Link href="/register">
                {t("navbar.newRegistration")}
              </Link>
            </Button>
            <div className="relative group flex items-center">
              <button 
                className="h-[38px] px-[12px] py-[10px] rounded-[8px] bg-bg-surface text-text-primary text-[13px] font-medium cursor-pointer border border-[#CFCFCF] shadow-[inset_0_4px_8px_rgba(185,185,185,0.25)] hover:bg-bg-subtle active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none flex items-center justify-center gap-1"
              >
                {t("navbar.logIn")}
                <ChevronDown className="w-[14px] h-[14px] opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full right-0 pt-2 hidden group-hover:block w-48 z-50">
                <div className="bg-bg-surface border border-border-medium rounded-lg shadow-md py-2">
                  <Link href="/login/buyer" className="block px-4 py-2.5 text-[13px] font-medium text-text-primary hover:bg-bg-subtle hover:text-brand-primary border-b border-border-medium/50">
                    Buyer Login
                  </Link>
                  <Link href="/login/promoter" className="block px-4 py-2.5 text-[13px] font-medium text-text-primary hover:bg-bg-subtle hover:text-brand-primary border-b border-border-medium/50">
                    Promoter Login
                  </Link>
                  <Link href="/login/department" className="block px-4 py-2.5 text-[13px] font-medium text-text-primary hover:bg-bg-subtle hover:text-brand-primary">
                    Department Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
