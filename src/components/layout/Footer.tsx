"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

const socialLinks = [
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const [servicesOpen, setServicesOpen] = useState(false);

  const quickLinks = [
    { label: t("footer.aboutScheme"), href: "#" },
    { label: t("footer.benefits"), href: "#" },
    { label: t("footer.eligibilityCriteria"), href: "#" },
    { label: t("footer.loanCalculator"), href: "#" },
  ];

  const govResources = [
    { label: t("footer.aboutScheme"), href: "#" },
    { label: t("footer.benefits"), href: "#" },
    { label: t("footer.eligibilityCriteria"), href: "#" },
    { label: t("footer.loanCalculator"), href: "#" },
  ];

  return (
    <footer className="w-full bg-bg-surface mt-auto font-sans">
      {/* ── MAIN FOOTER CONTENT — Figma: 1440w, padding 48/80, gap 33 ── */}
      <div
        className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[80px] py-8 lg:py-[48px] flex flex-col"
        style={{ gap: "33px" }}
      >
        {/* Top section — Figma: 1280w, h-208, gap 48 */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-[48px] overflow-hidden w-full">
          {/* Column 1: Branding & Social */}
          <div className="flex flex-col gap-5 lg:max-w-[300px] shrink-0">
            {/* Logo + Title */}
            <div className="flex items-center gap-2.5">
              <div className="w-[36px] h-[36px] rounded-full border-[1px] flex items-center justify-center bg-bg-surface flex-shrink-0" style={{ borderColor: "var(--color-brand-primary)" }}>
                <Image
                  src="/upgovlogo.png"
                  alt="Government of Uttar Pradesh emblem"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[13px] sm:text-sm font-bold text-text-primary leading-tight tracking-tight">
                  {t("navbar.title")}
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-text-secondary tracking-wider uppercase leading-tight mt-0.5">
                  {t("navbar.subtitle")}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[13px] text-text-secondary leading-relaxed font-normal">
              {t("footer.description")}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-text-muted hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Store Badges Placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-[72px] h-[24px] bg-border-medium rounded-[4px]" />
              <div className="w-[72px] h-[24px] bg-border-medium rounded-[4px]" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 min-w-[160px]">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-[0.08em]">
              {t("footer.quickLinks")}
            </h3>
            <nav aria-label="Quick links">
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[11px] text-text-secondary hover:text-brand-primary transition-colors font-medium focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Government Resources */}
          <div className="flex flex-col gap-4 min-w-[200px]">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-[0.08em]">
              {t("footer.govResources")}
            </h3>
            <nav aria-label="Government resources">
              <ul className="flex flex-col gap-3">
                {govResources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[11px] text-text-secondary hover:text-brand-primary transition-colors font-medium focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-[0.08em]">
              {t("footer.contactUs")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="text-[11px] text-text-muted font-medium">{t("footer.phone")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a
                  href="mailto:pledge.up@gov.in"
                  className="text-[11px] text-text-muted font-medium hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                >
                  {t("footer.email")}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="text-[11px] text-text-muted font-medium">{t("footer.tollFree")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div className="flex flex-col text-[11px] text-text-muted font-medium leading-relaxed break-words">
                  {t("footer.address").split('\n').map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
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
                <li>
                  <a
                    href="#"
                    className="text-[13px] font-semibold text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                  >
                    {t("navbar.home")}
                  </a>
                </li>

                {/* Services with dropdown */}
                <li className="relative group">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1 text-[13px] font-semibold text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    <span>{t("navbar.services")}</span>
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

                <li>
                  <a
                    href="#"
                    className="text-[13px] font-semibold text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                  >
                    {t("footer.blog")}
                  </a>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-[13px] font-semibold text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                  >
                    {t("navbar.faqs")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-[13px] font-semibold text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm"
                  >
                    {t("navbar.about")}
                  </Link>
                </li>
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
                <li>
                  <a href="#" className="text-[11px] sm:text-xs font-normal text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm">
                    {t("navbar.home")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[11px] sm:text-xs font-normal text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm">
                    {t("navbar.services")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[11px] sm:text-xs font-normal text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm">
                    {t("footer.blog")}
                  </a>
                </li>
                <li>
                  <Link href="/faq" className="text-[11px] sm:text-xs font-normal text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm">
                    {t("navbar.faqs")}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[11px] sm:text-xs font-normal text-text-primary hover:text-brand-primary transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none rounded-sm">
                    {t("navbar.about")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
