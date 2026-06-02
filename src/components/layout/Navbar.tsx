"use client";

import React, { useState, useEffect } from "react";
import { 
  ChevronDown, 
  Menu, 
  Search,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState("");
  const [shortTime, setShortTime] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const longOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const shortOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleString("en-US", longOptions));
      setShortTime(now.toLocaleString("en-US", shortOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <header className="w-full flex flex-col z-50 relative bg-white font-sans">
      {/* ── 1. TOP UTILITY STRIP (Orange Banner) ── */}
      <div className="bg-[#fc661e] text-white py-2 text-[9.5px] min-[360px]:text-[11px] sm:text-[13px] font-medium whitespace-nowrap overflow-x-auto no-scrollbar">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-[42px] flex justify-between items-center gap-4">
          <div className="opacity-95 tabular-nums tracking-wide flex-shrink-0">
            <span className="inline sm:hidden">{shortTime || "28 May, 05:10 pm"}</span>
            <span className="hidden sm:inline">{currentTime || "Thursday, 28 May 2026 05:10 pm"}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3.5 opacity-95 text-[9.5px] min-[360px]:text-[11px] sm:text-[13px] flex-shrink-0">
            <a 
              href="tel:+928220874287" 
              className="hover:underline transition-colors font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-white fill-none stroke-[2.5]" />
              <span>92+ (8220)874287</span>
            </a>
            <span className="opacity-40">|</span>
            <button 
              className="hover:opacity-80 transition-opacity focus:outline-none flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 stroke-[2.5] text-white" />
            </button>
            <span className="opacity-40">|</span>
            <button 
              className="hover:opacity-85 transition-opacity focus:outline-none flex items-center gap-0.5 font-semibold"
            >
              <span className="underline">English</span>
              <ChevronDown className="w-3 h-3 text-white stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white font-sans" style={{ borderBottom: "1px solid #D6D6D6" }}>
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-[42px] py-3 flex justify-between items-center gap-3">
          {/* Left: Emblem + Title */}
          <div className="flex items-center gap-2 sm:gap-3.5 min-w-0">
            {/* UP Gov Emblem */}
            <div 
              className="w-[36px] h-[36px] sm:w-[52px] sm:h-[52px] md:w-[56px] md:h-[56px] rounded-full border-[2px] flex items-center justify-center bg-white flex-shrink-0"
              style={{ borderColor: "#fc661e" }}
            >
              <img 
                src="/upgovlogo.png" 
                alt="Government of Uttar Pradesh Logo" 
                className="w-[24px] h-[24px] sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px] object-contain" 
              />
            </div>

            <div className="flex flex-col min-w-0">
              <h2 className="font-bold text-[#202124] text-[10px] min-[360px]:text-[11.5px] min-[400px]:text-[13px] sm:text-[17px] md:text-[20px] leading-tight tracking-tight whitespace-nowrap">
                Directorate of Industries & Enterprise Promotion
              </h2>
              <p className="text-[6.5px] min-[360px]:text-[7.5px] min-[400px]:text-[8.5px] sm:text-[11px] font-bold text-[#5f6368] tracking-wider mt-0.5 uppercase whitespace-nowrap">
                GOVERNMENT OF UTTAR PRADESH — PLEDGE PORTAL
              </p>
            </div>
          </div>

          {/* Right: Partner logos (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <img 
              src="/makeinindialogo.png" 
              alt="Make in India" 
              className="h-[58px] object-contain mix-blend-multiply contrast-[1.8] brightness-[1.1]" 
            />
            <img 
              src="/investinuplogo.png" 
              alt="Invest UP" 
              className="h-[52px] object-contain mix-blend-multiply contrast-[1.5] brightness-[1.15]" 
            />
          </div>

          {/* Mobile hamburger */}
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-sm" className="text-gray-900" aria-label="Open navigation menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 bg-white flex flex-col gap-6">
                <SheetHeader>
                  <SheetTitle className="text-left font-bold text-[#202124]">PLEDGE PORTAL</SheetTitle>
                </SheetHeader>
                
                <div className="relative w-full">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search portal..."
                    className="w-full pl-9 pr-4 py-2 border rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <nav className="flex flex-col gap-4 text-sm font-medium text-[#424242]">
                  <a href="#" className="hover:text-[#fc661e] py-1 border-b border-gray-50">Home</a>
                  <a href="#" className="hover:text-[#fc661e] py-1 border-b border-gray-50">About</a>
                  
                  <div>
                    <button 
                      onClick={() => toggleDropdown("schemeInfo")}
                      className="w-full flex items-center justify-between hover:text-[#fc661e] py-1 border-b border-gray-50 text-left"
                    >
                      <span>Scheme Info</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "schemeInfo" ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === "schemeInfo" && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 text-xs text-gray-600">
                        <a href="#" className="hover:text-[#fc661e] py-1">Pledge Scheme Guidelines</a>
                        <a href="#" className="hover:text-[#fc661e] py-1">Benefits & Incentives</a>
                      </div>
                    )}
                  </div>

                  <div>
                    <button 
                      onClick={() => toggleDropdown("services")}
                      className="w-full flex items-center justify-between hover:text-[#fc661e] py-1 border-b border-gray-50 text-left"
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === "services" && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 text-xs text-gray-600">
                        <a href="#" className="hover:text-[#fc661e] py-1">Online Application</a>
                        <a href="#" className="hover:text-[#fc661e] py-1">Track Status</a>
                        <a href="#" className="hover:text-[#fc661e] py-1">Grievance Redressal</a>
                      </div>
                    )}
                  </div>

                  <div>
                    <button 
                      onClick={() => toggleDropdown("approvedParks")}
                      className="w-full flex items-center justify-between hover:text-[#fc661e] py-1 border-b border-gray-50 text-left"
                    >
                      <span>Approved Parks</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "approvedParks" ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === "approvedParks" && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 text-xs text-gray-600">
                        <a href="#" className="hover:text-[#fc661e] py-1">State Level Directory</a>
                        <a href="#" className="hover:text-[#fc661e] py-1">District Level Directory</a>
                      </div>
                    )}
                  </div>

                  <a href="#" className="hover:text-[#fc661e] py-1 border-b border-gray-50">FAQs</a>
                  <a href="#" className="hover:text-[#fc661e] py-1 border-b border-gray-50">Contact</a>
                </nav>

                <div className="mt-auto flex flex-col gap-3 pt-6 border-t">
                  <Button className="w-full bg-neutral-900 hover:bg-black text-white font-semibold rounded-xl shadow-lg">
                    New Registration
                  </Button>
                  <Button variant="outline" className="w-full font-semibold border-gray-300 text-gray-900 hover:bg-gray-50 rounded-xl shadow-sm">
                    Log In
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* ── 3. DESKTOP NAVIGATION BAR ── */}
      <div className="hidden lg:block bg-white border-b border-gray-200 shadow-xs">
        <div className="w-full px-4 md:px-6 lg:px-[42px] flex justify-between items-center h-[48px]">
          {/* Navigation Links */}
          <nav className="flex items-center gap-7 xl:gap-9 text-sm font-medium text-[#424242] h-full" aria-label="Main Navigation">
            <a 
              href="#" 
              className="py-2 hover:text-[#fc661e] transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
              aria-current="page"
            >
              Home
            </a>
            
            <a 
              href="#" 
              className="py-2 hover:text-[#fc661e] transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              About
            </a>

            <div className="relative group flex items-center h-full">
              <button 
                className="flex items-center gap-1.5 py-2 hover:text-[#fc661e] transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
                aria-expanded="false"
              >
                <span>Scheme Info</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-white border border-gray-200 rounded-lg shadow-md py-2 z-50">
                <a href="#" className="block px-4 py-2 text-xs font-medium text-[#424242] hover:bg-gray-50 hover:text-[#fc661e]">Pledge Scheme Guidelines</a>
                <a href="#" className="block px-4 py-2 text-xs font-medium text-[#424242] hover:bg-gray-50 hover:text-[#fc661e]">Benefits & Incentives</a>
              </div>
            </div>

            <div className="relative group flex items-center h-full">
              <button 
                className="flex items-center gap-1.5 py-2 hover:text-[#fc661e] transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
                aria-expanded="false"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-white border border-gray-200 rounded-lg shadow-md py-2 z-50">
                <a href="#" className="block px-4 py-2 text-xs font-medium text-[#424242] hover:bg-gray-50 hover:text-[#fc661e]">Online Application</a>
                <a href="#" className="block px-4 py-2 text-xs font-medium text-[#424242] hover:bg-gray-50 hover:text-[#fc661e]">Track Status</a>
                <a href="#" className="block px-4 py-2 text-xs font-medium text-[#424242] hover:bg-gray-50 hover:text-[#fc661e]">Grievance Redressal</a>
              </div>
            </div>

            <div className="relative group flex items-center h-full">
              <button 
                className="flex items-center gap-1.5 py-2 hover:text-[#fc661e] transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
                aria-expanded="false"
              >
                <span>Approved Parks</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-white border border-gray-200 rounded-lg shadow-md py-2 z-50">
                <a href="#" className="block px-4 py-2 text-xs font-medium text-[#424242] hover:bg-gray-50 hover:text-[#fc661e]">State Level Directory</a>
                <a href="#" className="block px-4 py-2 text-xs font-medium text-[#424242] hover:bg-gray-50 hover:text-[#fc661e]">District Level Directory</a>
              </div>
            </div>

            <a 
              href="#" 
              className="py-2 hover:text-[#fc661e] transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              FAQs
            </a>
            
            <a 
              href="#" 
              className="py-2 hover:text-[#fc661e] transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons — exact specs: h-[34px], gap-[6px], glossy black + white with shadows */}
          <div className="flex items-center gap-[6px]">
            <button 
              className="h-[34px] px-4 rounded-[10px] bg-gradient-to-b from-[#2d2d2d] to-[#0a0a0a] text-white text-[13px] font-medium cursor-pointer shadow-[0_2px_5px_rgba(0,0,0,0.35),inset_0_1px_0px_rgba(255,255,255,0.15)] hover:from-[#202020] hover:to-[#000000] active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              New Registration
            </button>
            <button 
              className="h-[34px] px-[16px] rounded-[10px] bg-white text-[#202124] text-[13px] font-medium cursor-pointer border border-[#d1d5db] shadow-[0_1px_4px_rgba(0,0,0,0.08)] hover:bg-gray-50 active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
