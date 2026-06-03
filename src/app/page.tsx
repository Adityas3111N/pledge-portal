import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  FileCheck,
  Users,
  Shield,
  MapPin,
  CheckCircle2,
  Clock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Hero from "@/components/layout/Hero";
import Endorsements from "@/components/layout/Endorsements";
import KeyInitiatives from "@/components/layout/KeyInitiatives";
import PledgeGlance from "@/components/layout/PledgeGlance";
import ApplicationFlow from "@/components/layout/ApplicationFlow";

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

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Card className="bg-gradient-to-r from-primary to-orange-600 text-white border-0">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of promoters using our streamlined digital platform
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              Create Account <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
