"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PledgeWatermark from "../home/PledgeWatermark";
// import { exportPages } from "next/dist/export/worker";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/register";

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <PledgeWatermark/>
      <Footer />
    </>
  );
}

//  <>
//       {/* Navbar will NOT show on /register */}
//       {!isAuthPage && <Navbar />} 
      
//       <main className="flex-1">
//         {children}
//       </main>
      
//       <PledgeWatermark/>
      
//       {/* Footer will NOT show on /register */}
//       {!isAuthPage && <Footer />} 
//     </>