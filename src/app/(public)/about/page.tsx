import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { WhatIsPledge } from "@/components/about/WhatIsPledge";
import { AboutBanner } from "@/components/about/AboutBanner";
import KeyStakeholders from "@/components/about/KeyStakeholders";
import SchemeObjectives from "@/components/about/SchemeObjectives";
import GovernmentOrders from "@/components/home/GovernmentOrders";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatIsPledge />
      <AboutBanner />
      <KeyStakeholders />
      <SchemeObjectives />
      <GovernmentOrders showBgImage={false} />
    </>
  );
}
