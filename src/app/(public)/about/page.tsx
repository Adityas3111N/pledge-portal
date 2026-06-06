import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { WhatIsPledge } from "@/components/about/WhatIsPledge";
import { AboutBanner } from "@/components/about/AboutBanner";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatIsPledge />
      <AboutBanner />
    </>
  );
}
