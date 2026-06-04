"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/register";

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
