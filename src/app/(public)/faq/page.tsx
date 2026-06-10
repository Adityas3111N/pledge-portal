import React from "react";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqList } from "@/components/faq/FaqList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | PLEDGE",
  description: "Frequently Asked Questions about PLEDGE schema, registration, and more.",
};

export default function FaqPage() {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-x-hidden">
      <FaqHero />
      <FaqList />
      
      {/* Abstract Right-side orange shape overlay (from the mockup) */}
      <div className="absolute right-0 top-[350px] w-[79px] h-[327px] select-none pointer-events-none hidden lg:block z-40">
        <img
          src="/assets/decorations/orange_shape2.svg"
          alt=""
          className="w-full h-full object-contain object-right"
        />
      </div>
      
      {/* Abstract Left-side green shape overlay (from the mockup) */}
      <div className="absolute left-0 top-[550px] w-[79px] h-[327px] select-none pointer-events-none hidden lg:block z-40">
        <img
          src="/assets/decorations/green_shape2.svg"
          alt=""
          className="w-full h-full object-contain object-left"
        />
      </div>
    </div>
  );
}
