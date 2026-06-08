"use client";

import React, { useState } from "react";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "@/constants/faqData";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqList() {
  const [activeCategory, setActiveCategory] = useState<string>(FAQ_CATEGORIES[0]);
  const [expandedId, setExpandedId] = useState<number | null>(1); // Default open first

  const filteredItems = FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleItem = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 flex flex-col items-center font-sans relative z-30">
      {/* Dynamic Title based on selected category (optional, but mimicking the mockup "General Questions") */}
      <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1A1A1A] mb-8 text-center">
        {activeCategory === "General" ? "General" : activeCategory.replace("For ", "")} <span className="text-[#FF5200]">Questions</span>
      </h2>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-[800px]">
        {FAQ_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setExpandedId(null);
              }}
              className={cn(
                "px-5 py-2 rounded-full text-[14px] font-medium transition-colors border",
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-[#1A1A1A] border-[#EAEAEA] hover:border-gray-300 hover:bg-gray-50"
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
          <p className="text-center text-gray-500 py-8">No questions available for this category.</p>
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
                      isExpanded ? "text-[#FF5200]" : "text-[#1A1A1A]"
                    )}
                  >
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      "flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-transform duration-300",
                      isExpanded ? "bg-[#FF5200] rotate-180" : "bg-[#FF5200]"
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
