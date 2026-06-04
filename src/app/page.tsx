import Hero from "@/components/layout/Hero";
import Endorsements from "@/components/layout/Endorsements";
import dynamic from "next/dynamic";

const KeyInitiatives = dynamic(() => import("@/components/layout/KeyInitiatives"));
const PledgeGlance = dynamic(() => import("@/components/layout/PledgeGlance"));
const ApplicationFlow = dynamic(() => import("@/components/layout/ApplicationFlow"));
const CoreOfferings = dynamic(() => import("@/components/layout/CoreOfferings"));
const GovernmentOrders = dynamic(() => import("@/components/layout/GovernmentOrders"));
const FAQ = dynamic(() => import("@/components/layout/FAQ"));
const CTABanner = dynamic(() => import("@/components/layout/CTABanner"));
const PledgeWatermark = dynamic(() => import("@/components/layout/PledgeWatermark"));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Endorsements Section */}
      <Endorsements />

      {/* Key Initiatives / Scheme at a Glance */}
      <KeyInitiatives />

      {/* PLEDGE Scheme at a Glance (Map & Stats) */}
      <PledgeGlance />

      {/* Application Flow */}
      <ApplicationFlow />

      {/* Core Offerings */}
      <CoreOfferings />

      {/* Government Orders (Shasanadesh) */}
      <GovernmentOrders />

      {/* FAQ */}
      <FAQ />

      {/* CTA Banner */}
      <CTABanner />

      {/* PLEDGE Watermark Footer Text */}
      <PledgeWatermark />
    </div>
  );
}
