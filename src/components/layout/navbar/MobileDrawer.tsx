"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/actions/button";
import { SheetContent } from "@/components/ui/navigation/sheet";
import { useTranslation } from "@/hooks/useTranslation";

interface MobileDrawerProps {
  onClose: () => void;
}

export default function MobileDrawer({ onClose }: MobileDrawerProps) {
  const { t, language, setLanguage } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    onClose();
  };

  return (
    <SheetContent side="right" className="w-[300px] sm:w-[350px] p-5 bg-bg-surface flex flex-col gap-5 overflow-y-auto no-scrollbar">
      {/* Official Government Branding Header */}
      <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2.5 pb-4 border-b border-border-medium hover:opacity-90 transition-opacity">
        <div className="w-[34px] h-[34px] rounded-full border-[1.5px] border-[#FF6E28] flex items-center justify-center bg-bg-surface flex-shrink-0">
          <Image 
            src="/assets/logos/upgovlogo.png" 
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
        <Link href="/" onClick={handleLinkClick} className="hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary active:bg-bg-subtle p-2.5 rounded-lg border-b border-border-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none">{t("navbar.home")}</Link>
        <Link href="/about" onClick={handleLinkClick} className="hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary active:bg-bg-subtle p-2.5 rounded-lg border-b border-border-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none">{t("navbar.about")}</Link>
        
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
              <a href="#" onClick={handleLinkClick} className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.schemeGuidelines")}</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.schemeBenefits")}</a>
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
              <a href="#" onClick={handleLinkClick} className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.serviceApplication")}</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.serviceTrack")}</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.serviceGrievance")}</a>
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
              <a href="#" onClick={handleLinkClick} className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.stateDirectory")}</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-brand-primary py-1 px-2 rounded hover:bg-bg-subtle transition-colors">{t("navbar.districtDirectory")}</a>
            </div>
          )}
        </div>

        <Link href="/faq" onClick={handleLinkClick} className="hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary p-2.5 rounded-lg border-b border-border-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none">{t("navbar.faqs")}</Link>
        <Link href="/contact" onClick={handleLinkClick} className="hover:text-brand-primary hover:bg-bg-subtle active:text-brand-primary p-2.5 rounded-lg border-b border-border-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none">{t("navbar.contact")}</Link>
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
          <Button asChild onClick={handleLinkClick} variant="dark" className="w-full font-semibold rounded-xl py-2.5 shadow-sm text-sm">
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
                <Link href="/login/buyer" onClick={handleLinkClick} className="px-4 py-2.5 hover:text-brand-primary transition-colors text-text-primary border-b border-border-medium/50">
                  Buyer Login
                </Link>
                <Link href="/login/promoter" onClick={handleLinkClick} className="px-4 py-2.5 hover:text-brand-primary transition-colors text-text-primary border-b border-border-medium/50">
                  Promoter Login
                </Link>
                <Link href="/login/department" onClick={handleLinkClick} className="px-4 py-2.5 hover:text-brand-primary transition-colors text-text-primary">
                  Department Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </SheetContent>
  );
}
