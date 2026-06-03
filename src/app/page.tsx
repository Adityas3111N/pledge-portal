import Hero from "@/components/layout/Hero";
import Endorsements from "@/components/layout/Endorsements";
import KeyInitiatives from "@/components/layout/KeyInitiatives";
import PledgeGlance from "@/components/layout/PledgeGlance";
import ApplicationFlow from "@/components/layout/ApplicationFlow";
import CoreOfferings from "@/components/layout/CoreOfferings";
import GovernmentOrders from "@/components/layout/GovernmentOrders";

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
    </div>
  );
}
