"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function FooterColumns() {
  const { t } = useTranslation();

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
    <>
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
                  <span className="premium-underline">{link.label}</span>
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
                  <span className="premium-underline">{link.label}</span>
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
              <span className="premium-underline">{t("footer.email")}</span>
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
    </>
  );
}
