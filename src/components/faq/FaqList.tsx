"use client";

import React, { useState } from "react";
import {
  FAQ_CATEGORIES_EN,
  FAQ_CATEGORIES_HI,
  FAQ_ITEMS_EN,
  FAQ_ITEMS_HI
} from "@/constants/faqData";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

export function FaqList() {
  const { language } = useTranslation();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories = language === "hi" ? FAQ_CATEGORIES_HI : FAQ_CATEGORIES_EN;
  const items = language === "hi" ? FAQ_ITEMS_HI : FAQ_ITEMS_EN;

  const activeCategory = categories[activeCategoryIndex];
  const filteredItems = items.filter((item) => item.category === activeCategory);

  // Automatically expand the first item in the selected category
  React.useEffect(() => {
    if (filteredItems.length > 0) {
      setExpandedId(filteredItems[0].id);
    } else {
      setExpandedId(null);
    }
  }, [activeCategoryIndex, language]);

  const toggleItem = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 flex flex-col items-center font-sans relative z-30">
      {/* Dynamic Title based on selected category */}
      <h2 className="text-[32px] md:text-[40px] font-semibold text-neutral-dark mb-8 text-center">
        {language === "hi" ? (
          <>
            {activeCategory} <span className="text-brand-orange-deep">प्रश्न</span>
          </>
        ) : (
          <>
            {activeCategory === "General" ? "General" : activeCategory.replace("For ", "")} <span className="text-brand-orange-deep">Questions</span>
          </>
        )}
      </h2>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-[800px]">
        {categories.map((category, idx) => {
          const isActive = activeCategoryIndex === idx;
          return (
            <button
              key={category}
              onClick={() => {
                setActiveCategoryIndex(idx);
              }}
              className={cn(
                "px-5 py-2 rounded-full text-[14px] font-medium transition-colors border",
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-dark border-[#EAEAEA] hover:border-gray-300 hover:bg-gray-50"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* FAQ Accordion List */}
      <div className="w-full max-w-[900px] flex flex-col gap-4">
        {filteredItems.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            {language === "hi" ? "इस श्रेणी के लिए कोई प्रश्न उपलब्ध नहीं है।" : "No questions available for this category."}
          </p>
        ) : (
          filteredItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="w-full bg-white border border-[#F0F0F0] rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                >
                  <span
                    className={cn(
                      "text-[15px] md:text-[16px] font-medium pr-4 transition-colors",
                      isExpanded ? "text-brand-orange-deep" : "text-neutral-dark"
                    )}
                  >
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      "flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-transform duration-300",
                      isExpanded ? "bg-brand-orange-deep rotate-180" : "bg-brand-orange-deep"
                    )}
                  >
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-white" strokeWidth={3} />
                    ) : (
                      <Plus className="w-4 h-4 text-white" strokeWidth={3} />
                    )}
                  </div>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="p-5 md:p-6 pt-0 text-[14px] leading-relaxed text-[#666666] border-t border-[#F5F5F5] mt-2">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
