"use client";

import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

const faqKeys = [
  "faq.items.item1",
  "faq.items.item2",
  "faq.items.item3",
  "faq.items.item4",
];

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#F5F5F5] py-16 md:py-20">
      <div className="w-full max-w-[1184px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        {/* Left Title */}
        <div className="w-full md:min-w-[544px] md:max-w-[544px]">
          <h2 className="text-[28px] md:text-[44px] font-medium leading-[120%] md:leading-[56px] text-[#050505] font-sans">
            {t("faq.titleLine1")}
            <br />
            {t("faq.titleLine2")}{" "}
            <span className="text-[#F37021]">{t("faq.titleAccent")}</span>
          </h2>
        </div>

        {/* Right FAQ List */}
        <div className="w-full md:w-[640px] flex flex-col gap-3">
          {faqKeys.map((key, index) => (
            <button
              key={index}
              type="button"
              className="w-full h-[60px] flex items-center justify-between gap-[10px] px-5 py-4 bg-[#F5F5F5] rounded-[4px] cursor-pointer transition-colors duration-200 hover:bg-[#EBEBEB] group border-b border-[#E0E0E0]"
              aria-expanded="false"
            >
              <span className="text-[#050505] text-[15px] md:text-[18.6px] font-medium leading-[22px] md:leading-[28px] tracking-[-0.2px] font-sans text-left align-middle">
                {t(`${key}.question`)}
              </span>
              <span className="text-[#6C6C6C] text-[20px] font-light shrink-0 transition-transform duration-200 group-hover:text-[#F37021]">
                +
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
