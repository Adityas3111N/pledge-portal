import React from "react";
import FooterBrand from "./footer/FooterBrand";
import FooterColumns from "./footer/FooterColumns";
import FooterBottom from "./footer/FooterBottom";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-surface mt-auto font-sans">
      {/* ── MAIN FOOTER CONTENT — Figma: 1440w, padding 48/80, gap 33 ── */}
      <div
        className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[80px] py-8 lg:py-[48px] flex flex-col"
        style={{ gap: "33px" }}
      >
        {/* Top section — Figma: 1280w, h-208, gap 48 */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-[48px] overflow-hidden w-full">
          <FooterBrand />
          <FooterColumns />
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <FooterBottom />
    </footer>
  );
}
