import React, { useState, useEffect, useRef } from "react";
import { Menu, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/actions/button";
import { Sheet, SheetTrigger } from "@/components/ui/navigation/sheet";
import { useTranslation } from "@/hooks/useTranslation";

import UtilityStrip from "./navbar/UtilityStrip";
import DesktopNav from "./navbar/DesktopNav";
import MobileDrawer from "./navbar/MobileDrawer";

export default function Navbar() {
  const { t, language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMicroHeader, setShowMicroHeader] = useState(false);
  const [yOffset, setYOffset] = useState(0);
  const lastScrollY = useRef(0);
  const yOffsetRef = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;

      setScrollPercent(percent);

      // Show scroll-to-top button after 15% scrolled
      if (percent > 15) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Handle sticky state (add shadow/blur when scrolled)
      if (currentScrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 160;

      // Scrolling logic for navbar
      const diff = currentScrollY - lastScrollY.current;
      let newOffset = yOffsetRef.current;

      if (currentScrollY <= 0) {
        newOffset = 0;
      } else if (diff > 0) {
        // Scrolling down: half-pace parallax
        newOffset = newOffset - diff / 2;
      } else if (diff < 0) {
        // Scrolling up (bottom to top): 1:1 speed
        newOffset = newOffset - diff;
      }

      const clampedOffset = Math.min(0, Math.max(-headerHeight, newOffset));
      yOffsetRef.current = clampedOffset;
      setYOffset(clampedOffset);

      // Show micro-header when main navbar is scrolled out of view
      if (currentScrollY > headerHeight && clampedOffset <= -headerHeight + 20) {
        setShowMicroHeader(true);
      } else {
        setShowMicroHeader(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header 
        ref={headerRef}
        style={{
          transform: `translateY(${yOffset}px)`,
          transition: "transform 0s linear, background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
        }}
        className={`w-full flex flex-col z-[100] sticky top-0 font-sans ${
          isSticky 
            ? "bg-bg-surface/90 backdrop-blur-md shadow-md" 
            : "bg-bg-surface"
        }`}
      >
        {/* 1. TOP UTILITY STRIP (Orange Banner) */}
        <UtilityStrip />

        {/* 2. MIDDLE BRAND HEADER */}
        <div className="bg-bg-surface font-sans border-b border-[#CACACA]">
          <div className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[42px] py-1.5 flex justify-between items-center gap-3">
            {/* Left: Emblem + Title */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3.5 min-w-0 hover:opacity-90 transition-opacity">
              {/* UP Gov Emblem */}
              <div 
                className="w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] md:w-[48px] md:h-[48px] rounded-full border-[1px] flex items-center justify-center bg-bg-surface flex-shrink-0"
                style={{ borderColor: "var(--color-brand-primary)" }}
              >
                <Image 
                  src="/assets/logos/upgovlogo.png" 
                  alt="Government of Uttar Pradesh Logo" 
                  width={36}
                  height={36}
                  className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] object-contain" 
                />
              </div>

              <div className="flex flex-col min-w-0">
                <h2 className="font-bold text-text-primary text-[10px] min-[360px]:text-[11.5px] min-[400px]:text-[13px] sm:text-[16px] md:text-[18px] leading-tight tracking-tight whitespace-nowrap">
                  {t("navbar.title")}
                </h2>
                <p className="text-[6.5px] min-[360px]:text-[7.5px] min-[400px]:text-[8.5px] sm:text-[10px] font-bold text-text-secondary tracking-wider mt-0.5 uppercase whitespace-nowrap">
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
                height={40}
                style={{ width: "auto" }}
                className="w-auto h-[40px] object-contain mix-blend-multiply contrast-[1.8] brightness-[1.1]" 
              />
              <Image 
                src="/assets/logos/investinuplogo.png" 
                alt="Invest UP" 
                width={160}
                height={36}
                style={{ width: "auto" }}
                className="w-auto h-[36px] object-contain mix-blend-multiply contrast-[1.5] brightness-[1.15]" 
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

      {/* Sticky Micro-Header (visible only on scroll down after headerHeight) */}
      <div 
        className={`fixed top-0 left-0 right-0 z-[100] bg-brand-primary border-b border-brand-accent/30 shadow-md transition-all duration-300 transform ${
          showMicroHeader 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[42px] h-[52px] flex justify-between items-center gap-3">
          {/* Left: Round Emblem + Two-line Brand Text */}
          <div className="flex items-center gap-2.5 min-w-0">
            {/* UP Gov Emblem with white background */}
            <div 
              className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full border-2 border-white/35 flex items-center justify-center bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.25)]"
            >
              <Image 
                src="/assets/logos/upgovlogo.png" 
                alt="Government of Uttar Pradesh Logo" 
                width={30}
                height={30}
                className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] object-contain" 
              />
            </div>

            <div className="flex flex-col min-w-0">
              <h2 className="font-bold text-white text-[10.5px] sm:text-[13px] leading-tight truncate">
                {t("navbar.title")}
              </h2>
              <p className="text-white/80 font-bold text-[6.5px] sm:text-[8px] tracking-wider mt-0.5 uppercase truncate">
                {t("navbar.subtitle")}
              </p>
            </div>
          </div>

          {/* Right: Language Switcher, Login and Registration CTAs */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Mini Segmented Language Switcher */}
            <div className="flex bg-white/10 p-0.5 rounded border border-white/20 h-[30px] items-center">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold transition-all cursor-pointer h-[24px] ${
                  language === "en" 
                    ? "bg-white text-brand-primary shadow-xs" 
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold transition-all cursor-pointer h-[24px] ${
                  language === "hi" 
                    ? "bg-white text-brand-primary shadow-xs" 
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                हिं
              </button>
            </div>

            <Button 
              asChild
              variant="ghost"
              className="h-[30px] px-2.5 sm:px-3.5 rounded-[6px] text-[11px] sm:text-[12px] font-semibold text-white border border-white/30 hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              <Link href="/login">
                {t("navbar.logIn")}
              </Link>
            </Button>
            <Button 
              asChild
              variant="gradient-dark"
              className="h-[30px] px-2.5 sm:px-3.5 rounded-[6px] text-[11px] sm:text-[12px] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Link href="/register">
                {t("navbar.newRegistration")}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Scroll-To-Top Circular Progress Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer transition-all duration-500 group border border-neutral-200/50 hover:-translate-y-1 hover:shadow-xl ${
          showScrollTop 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-10 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-neutral-100 fill-none"
            strokeWidth="3"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-brand-orange-accent fill-none"
            style={{
              transition: "stroke-dashoffset 60ms cubic-bezier(0.1, 0.8, 0.25, 1)",
            }}
            strokeWidth="3"
            strokeDasharray={125.66}
            strokeDashoffset={125.66 - (scrollPercent / 100) * 125.66}
            strokeLinecap="round"
          />
        </svg>
        <ArrowUp className="w-5 h-5 text-brand-orange-accent group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10" />
      </button>
    </>
  );
}
