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

      {/* Stats Section */}
      <section id="stats" className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-primary-foreground/80">Applications Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">75</div>
              <div className="text-primary-foreground/80">Districts Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">48hrs</div>
              <div className="text-primary-foreground/80">Average Review Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="text-primary">Efficiency</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive tools for promoters, district officials, state
            administrators, and citizens
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Online Applications</h4>
              <p className="text-sm text-muted-foreground">
                Submit and track pledge applications digitally with real-time
                status updates
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Multi-Level Review</h4>
              <p className="text-sm text-muted-foreground">
                Coordinated review process across district and state committees
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Secure & Transparent</h4>
              <p className="text-sm text-muted-foreground">
                Role-based access control with complete audit trail and
                transparency
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">District Coverage</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive coverage across all districts of Uttar Pradesh
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Flow */}
      <section id="process" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Application <span className="text-primary">Flow</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Simple, transparent process from submission to approval
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    1
                  </div>
                  <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Submit Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Promoter submits pledge application with required documents
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    2
                  </div>
                  <Clock className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">District Review</h4>
                  <p className="text-sm text-muted-foreground">
                    District committee conducts inspection and initial review
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    3
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Final Approval</h4>
                  <p className="text-sm text-muted-foreground">
                    State committee reviews and approves the application
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
