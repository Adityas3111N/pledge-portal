"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/actions/button";
import { useTranslation } from "@/hooks/useTranslation";

export default function DesktopNav() {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:block bg-bg-surface border-b !border-[#CACACA] shadow-xs">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-[42px] py-1 flex justify-between items-center h-[48px]">
        {/* Navigation Links */}
        <nav className="flex items-center justify-between w-[739px] h-[36px] py-1 text-[13px] font-medium text-text-muted" aria-label="Main Navigation">
          <Link 
            href="/" 
            className="px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
            aria-current="page"
          >
            <span className="premium-underline">{t("navbar.home")}</span>
          </Link>
          
          <Link 
            href="/about" 
            className="px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
          >
            <span className="premium-underline">{t("navbar.about")}</span>
          </Link>

          <div className="relative group flex items-center h-[25px]">
            <button 
              className="relative flex items-center gap-1 px-[10px] py-[2px] h-[25px] hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none cursor-pointer"
              aria-expanded="false"
            >
              <span className="premium-underline">
                {t("navbar.schemeInfo")}
              </span>
              <ChevronDown className="w-[13px] h-[13px] opacity-60 group-hover:rotate-180 transition-transform duration-300 ease-out" />
            </button>
            <div className="absolute top-full left-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto w-52 bg-bg-surface border border-border-medium rounded-lg shadow-md py-2 z-50 transition-all duration-200 ease-out">
              <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors">{t("navbar.schemeGuidelines")}</a>
              <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors">{t("navbar.schemeBenefits")}</a>
            </div>
          </div>

          <div className="relative group flex items-center h-[25px]">
            <button 
              className="relative flex items-center gap-1 px-[10px] py-[2px] h-[25px] hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none cursor-pointer"
              aria-expanded="false"
            >
              <span className="premium-underline">
                {t("navbar.services")}
              </span>
              <ChevronDown className="w-[13px] h-[13px] opacity-60 group-hover:rotate-180 transition-transform duration-300 ease-out" />
            </button>
            <div className="absolute top-full left-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto w-52 bg-bg-surface border border-border-medium rounded-lg shadow-md py-2 z-50 transition-all duration-200 ease-out">
              <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors">{t("navbar.serviceApplication")}</a>
              <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors">{t("navbar.serviceTrack")}</a>
              <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors">{t("navbar.serviceGrievance")}</a>
            </div>
          </div>

          <div className="relative group flex items-center h-[25px]">
            <button 
              className="relative flex items-center gap-1 px-[10px] py-[2px] h-[25px] hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none cursor-pointer"
              aria-expanded="false"
            >
              <span className="premium-underline">
                {t("navbar.approvedParks")}
              </span>
              <ChevronDown className="w-[13px] h-[13px] opacity-60 group-hover:rotate-180 transition-transform duration-300 ease-out" />
            </button>
            <div className="absolute top-full left-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto w-52 bg-bg-surface border border-border-medium rounded-lg shadow-md py-2 z-50 transition-all duration-200 ease-out">
              <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors">{t("navbar.stateDirectory")}</a>
              <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors">{t("navbar.districtDirectory")}</a>
            </div>
          </div>

          <Link 
            href="/faq" 
            className="px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
          >
            <span className="premium-underline">{t("navbar.faqs")}</span>
          </Link>
          
          <Link 
            href="/contact" 
            className="px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
          >
            <span className="premium-underline">{t("navbar.contact")}</span>
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-[6px] h-[32px]">
          <Button 
            asChild
            variant="gradient-dark"
            className="cursor-pointer h-[32px] px-[12px] py-[6px] rounded-[6px] text-[12.5px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Link href="/register">
              {t("navbar.newRegistration")}
            </Link>
          </Button>
          <div className="relative group flex items-center h-[32px]">
            <Button 
              variant="raised-outline"
              size="sm"
              className="text-text-primary focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none flex items-center justify-center gap-1 font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-[32px] px-[10px] rounded-[6px] text-[12.5px]"
            >
              {t("navbar.logIn")}
              <ChevronDown className="w-[14px] h-[14px] opacity-60 group-hover:rotate-180 transition-transform duration-300 ease-out" />
            </Button>
            <div className="absolute top-full right-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto w-48 z-50 transition-all duration-200 ease-out">
              <div className="bg-bg-surface border border-border-medium rounded-lg shadow-md py-2">
                <Link href="/login/buyer" className="block px-4 py-2 text-[13px] font-medium text-text-primary hover:bg-bg-subtle hover:text-brand-primary border-b border-border-medium/50 transition-colors">
                  Buyer Login
                </Link>
                <Link href="/login/promoter" className="block px-4 py-2 text-[13px] font-medium text-text-primary hover:bg-bg-subtle hover:text-brand-primary border-b border-border-medium/50 transition-colors">
                  Promoter Login
                </Link>
                <Link href="/login/department" className="block px-4 py-2.5 text-[13px] font-medium text-text-primary hover:bg-bg-subtle hover:text-brand-primary transition-colors">
                  Department Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

