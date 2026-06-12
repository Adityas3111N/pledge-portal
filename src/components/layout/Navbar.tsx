"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/actions/button";
import { Sheet, SheetTrigger } from "@/components/ui/navigation/sheet";
import { useTranslation } from "@/hooks/useTranslation";

import UtilityStrip from "./navbar/UtilityStrip";
import DesktopNav from "./navbar/DesktopNav";
import MobileDrawer from "./navbar/MobileDrawer";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex flex-col z-50 relative bg-bg-surface font-sans">
      {/* 1. TOP UTILITY STRIP (Orange Banner) */}
      <UtilityStrip />

      {/* 2. MIDDLE BRAND HEADER */}
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
                src="/assets/logos/upgovlogo.png" 
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
              src="/assets/logos/makeinindialogo.png" 
              alt="Make in India" 
              width={160}
              height={58}
              style={{ width: "auto" }}
              className="w-auto h-[58px] object-contain mix-blend-multiply contrast-[1.8] brightness-[1.1]" 
            />
            <Image 
              src="/assets/logos/investinuplogo.png" 
              alt="Invest UP" 
              width={160}
              height={52}
              style={{ width: "auto" }}
              className="w-auto h-[52px] object-contain mix-blend-multiply contrast-[1.5] brightness-[1.15]" 
            />
          </div>

          {/* Mobile hamburger */}
          <div className="block lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-sm" className="text-text-primary" aria-label="Open navigation menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <MobileDrawer onClose={() => setIsOpen(false)} />
            </Sheet>
          </div>
        </div>
      </div>

      {/* 3. DESKTOP NAVIGATION BAR */}
      <DesktopNav />
    </header>
  );
}
