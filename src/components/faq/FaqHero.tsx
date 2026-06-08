import React from "react";
import Image from "next/image";

export function FaqHero() {
  return (
    <section 
      className="w-full relative overflow-hidden font-sans"
      style={{ 
        height: "403px",
        background: "linear-gradient(360deg, #FFFFFF 0%, #FF5200 161.66%)"
      }}
    >
      {/* 1440px Centered Wrapper for Absolute Positioning of Office Buildings */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1440px] h-full pointer-events-none z-10">
        {/* Left Office Building */}
        <div 
          className="absolute"
          style={{
            width: "478px",
            height: "529px",
            top: "7px",
            left: "-50px",
            opacity: 0.4,
          }}
        >
          <Image
            src="/office_building_faq.png"
            alt="Office Building Left"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Office Building */}
        <div 
          className="absolute"
          style={{
            width: "444px",
            height: "492px",
            top: "36px",
            left: "1050px",
            opacity: 0.4,
          }}
        >
          <Image
            src="/office_building_faq.png"
            alt="Office Building Right"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-[900px] mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[32px] sm:text-[44px] md:text-[54px] leading-tight text-[#1A1A1A]">
          Frequently Asked <span className="text-[#FF5200]">Questions</span>
        </h1>
        <p className="mt-4 md:mt-6 font-medium text-[14px] sm:text-[16px] leading-relaxed text-[#1A1A1A] max-w-[700px] opacity-90">
          Get in touch with our team for any questions or support you need. Get in touch with the
          PLEDGE Cell or your District Industries Office for assistance.
        </p>
      </div>
    </section>
  );
}
