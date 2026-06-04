"use client";

import React from "react";

export default function PledgeWatermark() {
  return (
    <section className="w-full bg-white relative overflow-hidden flex items-center justify-center pt-10 md:pt-16 pb-6 md:pb-10">
      <div 
        className="font-sans font-medium leading-[0.85] select-none whitespace-nowrap text-center"
        style={{
          fontSize: "clamp(60px, 22.5vw, 450px)",
          background: "linear-gradient(180deg, #DBDBDB 0%, #FFFFFF 75.89%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent"
        }}
      >
        PLEDGE
      </div>
    </section>
  );
}
