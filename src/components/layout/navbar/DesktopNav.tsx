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
      <div className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-[42px] py-2 flex justify-between items-center h-[65px]">
        {/* Navigation Links */}
        <nav className="flex items-center justify-between w-[739px] h-[49px] py-3 text-[14px] font-medium text-text-muted" aria-label="Main Navigation">
          <Link 
            href="/" 
            className="relative px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none after:absolute after:bottom-[-2px] after:left-[10px] after:right-[10px] after:h-[2px] after:bg-brand-primary after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
            aria-current="page"
          >
            {t("navbar.home")}
          </Link>
          
          <Link 
            href="/about" 
            className="relative px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none after:absolute after:bottom-[-2px] after:left-[10px] after:right-[10px] after:h-[2px] after:bg-brand-primary after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            {t("navbar.about")}
          </Link>

          <div className="relative group flex items-center h-[25px]">
            <button 
              className="relative flex items-center gap-1 px-[10px] py-[2px] h-[25px] hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none cursor-pointer"
              aria-expanded="false"
            >
              <span>{t("navbar.schemeInfo")}</span>
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
              <span>{t("navbar.services")}</span>
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
              <span>{t("navbar.approvedParks")}</span>
              <ChevronDown className="w-[13px] h-[13px] opacity-60 group-hover:rotate-180 transition-transform duration-300 ease-out" />
            </button>
            <div className="absolute top-full left-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto w-52 bg-bg-surface border border-border-medium rounded-lg shadow-md py-2 z-50 transition-all duration-200 ease-out">
              <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors">{t("navbar.stateDirectory")}</a>
              <a href="#" className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors">{t("navbar.districtDirectory")}</a>
            </div>
          </div>

          <Link 
            href="/faq" 
            className="relative px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none after:absolute after:bottom-[-2px] after:left-[10px] after:right-[10px] after:h-[2px] after:bg-brand-primary after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            {t("navbar.faqs")}
          </Link>
          
          <Link 
            href="/contact" 
            className="relative px-[10px] py-[2px] h-[25px] flex items-center justify-center hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none after:absolute after:bottom-[-2px] after:left-[10px] after:right-[10px] after:h-[2px] after:bg-brand-primary after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            {t("navbar.contact")}
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-[6px] h-[38px]">
          <Button 
            asChild
            variant="gradient-dark"
            className="cursor-pointer h-[38px] px-[12px] py-[10px] rounded-[8px] text-[13px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Link href="/register">
              {t("navbar.newRegistration")}
            </Link>
          </Button>
          <div className="relative group flex items-center h-[38px]">
            <Button 
              variant="raised-outline"
              size="md"
              className="text-text-primary focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none flex items-center justify-center gap-1 font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {t("navbar.logIn")}
              <ChevronDown className="w-[14px] h-[14px] opacity-60 group-hover:rotate-180 transition-transform duration-300 ease-out" />
            </Button>
            <div className="absolute top-full right-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto w-48 z-50 transition-all duration-200 ease-out">
              <div className="bg-bg-surface border border-border-medium rounded-lg shadow-md py-2">
                <Link href="/login/buyer" className="block px-4 py-2.5 text-[13px] font-medium text-text-primary hover:bg-bg-subtle hover:text-brand-primary border-b border-border-medium/50 transition-colors">
                  Buyer Login
                </Link>
                <Link href="/login/promoter" className="block px-4 py-2.5 text-[13px] font-medium text-text-primary hover:bg-bg-subtle hover:text-brand-primary border-b border-border-medium/50 transition-colors">
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

