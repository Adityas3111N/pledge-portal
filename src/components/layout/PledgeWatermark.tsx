"use client";

import React from "react";

export default function PledgeWatermark() {
  return (
    <section className="w-full bg-white relative overflow-hidden flex items-start justify-center min-h-[150px] md:h-[400px] pt-12 md:pt-16">
      <div 
        className="font-sans font-medium leading-[100%] select-none whitespace-nowrap"
        style={{
          fontSize: "clamp(120px, 28vw, 400px)",
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
