"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function FooterBottom() {
  const { t } = useTranslation();
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { label: t("navbar.home"), href: "#" },
    { label: t("navbar.services"), href: "#", isServices: true },
    { label: t("footer.blog"), href: "#" },
    { label: t("navbar.faqs"), href: "/faq" },
    { label: t("navbar.about"), href: "/about" },
  ];

  const renderLink = (link: typeof navLinks[0], className: string) => {
    const content = <span className="premium-underline">{link.label}</span>;
    if (link.href.startsWith("/")) {
      return (
        <Link href={link.href} className={className}>
          {content}
        </Link>
      );
    }
    return (
      <a href={link.href} className={className}>
        {content}
      </a>
    );
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[80px]">
        {/* Desktop bottom bar */}
        <div className="hidden lg:flex items-center justify-between border-t border-[#D9D9D9] w-full pt-8 pb-12 mt-4">
          {/* Left Side */}
          <div className="flex items-center gap-[48px] text-[13px] text-text-primary font-semibold">
            <span>{t("footer.copyright")}</span>
            <span>{t("footer.visitor")}</span>
          </div>

          {/* Right Side — Navigation with Services dropdown */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-[48px]">
              {navLinks.map((link) => {
                if (link.isServices) {
                  return (
                    <li key={link.label} className="relative group">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center gap-1 text-[13px] font-semibold text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        <span className="premium-underline">{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                      </button>
                      {/* Dropdown panel */}
                      <div
                        className={`absolute bottom-full left-0 mb-2 w-48 bg-bg-surface border border-border-medium rounded-lg shadow-md py-2 z-50 ${
                          servicesOpen ? "block" : "hidden group-hover:block"
                        }`}
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors"
                        >
                          {t("navbar.serviceApplication")}
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors"
                        >
                          {t("navbar.serviceTrack")}
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-xs font-medium text-text-muted hover:bg-bg-subtle hover:text-brand-primary transition-colors"
                        >
                          {t("navbar.serviceGrievance")}
                        </a>
                      </div>
                    </li>
                  );
                }
                return (
                  <li key={link.label}>
                    {renderLink(
                      link,
                      "text-[13px] font-semibold text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Mobile bottom bar */}
        <div className="flex lg:hidden flex-col items-center gap-6 py-6">
          {/* Copyright centered */}
          <p className="text-xs text-text-secondary font-normal text-center">
            {t("footer.copyright")}
          </p>

          {/* Nav links in a centered row */}
          <nav aria-label="Footer navigation mobile">
            <ul className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {renderLink(
                    link,
                    "text-[11px] sm:text-xs font-normal text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
