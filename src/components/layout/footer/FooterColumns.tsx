"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function FooterColumns() {
  const { t } = useTranslation();

  const sharedLinks = [
    { label: t("footer.aboutScheme"), href: "#" },
    { label: t("footer.benefits"), href: "#" },
    { label: t("footer.eligibilityCriteria"), href: "#" },
    { label: t("footer.loanCalculator"), href: "#" },
  ];

  const linkColumns = [
    {
      title: t("footer.quickLinks"),
      ariaLabel: "Quick links",
      minWidthClass: "min-w-[160px]",
      links: sharedLinks,
    },
    {
      title: t("footer.govResources"),
      ariaLabel: "Government resources",
      minWidthClass: "min-w-[200px]",
      links: sharedLinks,
    },
  ];

  return (
    <>
      {/* Quick Links & Government Resources Columns (DRY) */}
      {linkColumns.map((col) => (
        <div key={col.title} className={`flex flex-col gap-4 ${col.minWidthClass}`}>
          <h3 className="text-xs font-bold text-text-primary uppercase tracking-[0.08em]">
            {col.title}
          </h3>
          <nav aria-label={col.ariaLabel}>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
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
      ))}

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
