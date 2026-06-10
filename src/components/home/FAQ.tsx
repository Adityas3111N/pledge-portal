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
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F5F5F5] py-16 lg:py-20">
      <div className="w-full max-w-[1184px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-0">
        {/* Left Title */}
        <div className="w-full lg:min-w-[544px] lg:max-w-[544px]">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[120%] lg:leading-[56px] text-neutral-near-black font-sans">
            {t("faq.titleLine1")}
            <br />
            {t("faq.titleLine2")}{" "}
            <span className="text-brand-orange-accent">{t("faq.titleAccent")}</span>
          </h2>
        </div>

        {/* Right FAQ List */}
        <div className="w-full lg:w-[640px] flex flex-col gap-3">
          {faqKeys.map((key, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="w-full border-b border-[#E0E0E0]">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full min-h-[60px] h-auto flex items-center justify-between gap-[10px] px-5 py-4 bg-[#F5F5F5] rounded-[4px] cursor-pointer transition-colors duration-200 hover:bg-[#EBEBEB] group"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="text-neutral-near-black text-[15px] md:text-[18.6px] font-medium leading-[22px] md:leading-[28px] tracking-[-0.2px] font-sans text-left align-middle">
                    {t(`${key}.question`)}
                  </span>
                  <span className={`text-neutral-text-gray text-[20px] font-light shrink-0 transition-transform duration-300 group-hover:text-brand-orange-accent ${isOpen ? "rotate-45 text-brand-orange-accent" : ""}`}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100 pb-5 px-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-neutral-text-gray text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-normal font-sans">
                    {t(`${key}.answer`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
