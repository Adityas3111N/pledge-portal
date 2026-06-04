import Hero from "@/components/home/Hero";
import Endorsements from "@/components/home/Endorsements";
import dynamic from "next/dynamic";

const KeyInitiatives = dynamic(() => import("@/components/home/KeyInitiatives"));
const PledgeGlance = dynamic(() => import("@/components/home/PledgeGlance"));
const ApplicationFlow = dynamic(() => import("@/components/home/ApplicationFlow"));
const CoreOfferings = dynamic(() => import("@/components/home/CoreOfferings"));
const GovernmentOrders = dynamic(() => import("@/components/home/GovernmentOrders"));
const FAQ = dynamic(() => import("@/components/home/FAQ"));
const CTABanner = dynamic(() => import("@/components/home/CTABanner"));
const PledgeWatermark = dynamic(() => import("@/components/home/PledgeWatermark"));

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
