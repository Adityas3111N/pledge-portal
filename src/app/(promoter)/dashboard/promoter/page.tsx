"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search, 
  Bell, 
  ChevronDown, 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  Settings, 
  LogOut, 
  Copy, 
  Check, 
  Trash2, 
  Edit3, 
  HelpCircle,
  TrendingUp,
  AlertCircle
} from "lucide-react";

export default function PromoterDashboard() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const registrationId = "PLEDGE/2026/PRO/LKO/1024";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(registrationId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const activities = [
    {
      id: "PLEDGE/UP/2026/929",
      projectName: "Deen Dayal Upadhyay PLEDGE Park",
      district: "Varanasi",
      status: "PENDING MAP UPLOAD",
      badgeType: "blue"
    },
    {
      id: "PLEDGE/UP/2026/929",
      projectName: "Deen Dayal Upadhyay PLEDGE Park",
      district: "Bangalore",
      status: "PENDING MAP UPLOAD",
      badgeType: "blue"
    },
    {
      id: "PLEDGE/UP/2026/929",
      projectName: "Deen Dayal Upadhyay PLEDGE Park",
      district: "Lucknow",
      status: "Pending DLC",
      badgeType: "purple"
    }
  ];

  return (
    <div className="w-full flex justify-center bg-[#FAFAFA] min-h-screen font-sans items-start overflow-x-hidden md:overflow-hidden">
      {/* Container Box (Layout base) */}
      <div 
        className="relative bg-[#FAFAFA] overflow-x-hidden select-none flex flex-col w-full max-w-[1440px] min-h-screen md:h-screen md:max-h-[943px]"
      >
        {/* Top Header Row (Logo + Navigation Utilities) - Height 66px */}
        <div className="w-full h-[66px] flex items-center border-b border-[#E9E9E9] bg-white z-20 flex-shrink-0">
          
          {/* Mobile Hamburg menu icon */}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden ml-4 p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo Brand Frame - Width: 316px (desktop), Height: 66px */}
          <div 
            className="hidden md:flex w-[316px] h-full items-center gap-[8px] px-[24px] border-r border-[#E9E9E9] flex-shrink-0 bg-white"
          >
            <div className="w-[34px] h-[34px] rounded-full border border-[#FF5200] flex items-center justify-center bg-white flex-shrink-0">
              <Image 
                src="/assets/logos/upgovlogo.png" 
                alt="UP Government Logo" 
                width={26}
                height={26}
                className="object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#1A1A1A] text-[15px] leading-tight tracking-tight">
                PLEDGE Portal
              </span>
              <span className="text-[9.5px] font-medium text-gray-500 tracking-wide">
                Govt. of Uttar Pradesh
              </span>
            </div>
          </div>

          {/* Top Right Utilities Header section - Width remaining, height: 66px */}
          <div 
            className="flex-1 h-full flex items-center justify-between px-3 md:px-[24px] bg-white"
          >
            {/* Search bar */}
            <div className="relative w-full max-w-[240px] md:max-w-[340px] flex items-center ml-2 md:ml-0">
              <Search className="absolute left-3 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full h-[36px] pl-10 pr-4 rounded-lg bg-[#F8F9FA] border border-gray-200 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#FF5200] transition-colors"
              />
            </div>

            {/* Right Actions: Notifications and Profile */}
            <div className="flex items-center gap-2.5 md:gap-[18px]">
              {/* Notification Bell */}
              <button className="relative w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                <Bell className="w-[18px] h-[18px]" />
                <span className="absolute top-[8px] right-[8px] w-2 h-2 rounded-full bg-red-500"></span>
              </button>

              {/* Profile Info */}
              <div className="flex items-center gap-2 md:gap-3 border-l border-gray-100 pl-2 md:pl-4">
                <div className="relative w-[34px] h-[34px] md:w-[36px] md:h-[36px] rounded-full overflow-hidden border border-gray-100 bg-[#E5E7EB] flex items-center justify-center font-bold text-white bg-[#1E293B] text-[12px] md:text-[13px] flex-shrink-0">
                  RK
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[13px] md:text-[14px] text-[#1A1A1A] leading-tight">
                      Ramesh Kumar Singh
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                  <span className="text-[10px] md:text-[11px] font-medium text-[#10B981] leading-none mt-0.5">
                    System Online
                  </span>
                </div>
                {/* Micro caret for mobile profile */}
                <ChevronDown className="sm:hidden w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Workspace Body Area - Height 876px on desktop */}
        <div className="w-full flex-1 flex overflow-hidden relative">
          
          {/* Mobile Sidebar overlay backdrop */}
          {sidebarOpen && (
            <div 
              className="absolute inset-0 bg-black/40 z-30 md:hidden transition-opacity"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Left Bottom Sidebar Frame - Width: 316px, Height: 876px */}
          <div 
            className={`absolute md:relative top-0 bottom-0 left-0 w-[280px] md:w-[316px] h-full flex flex-col justify-between p-[24px] bg-white border-r border-[#EBEBEB] flex-shrink-0 z-40 transition-transform duration-300 md:translate-x-0 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Menu Items */}
            <div className="flex flex-col gap-[8px] w-full">
              {/* Mobile Branding Header inside drawer */}
              <div className="md:hidden flex items-center gap-[8px] pb-4 mb-4 border-b border-gray-100">
                <div className="w-[30px] h-[30px] rounded-full border border-[#FF5200] flex items-center justify-center bg-white flex-shrink-0">
                  <Image 
                    src="/assets/logos/upgovlogo.png" 
                    alt="UP Government Logo" 
                    width={22}
                    height={22}
                    className="object-contain" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#1A1A1A] text-[14px] leading-tight">
                    PLEDGE Portal
                  </span>
                  <span className="text-[9px] font-medium text-gray-500">
                    Govt. of Uttar Pradesh
                  </span>
                </div>
              </div>

              <button 
                onClick={() => { setActiveTab("dashboard"); setSidebarOpen(false); }}
                className={`w-full h-[46px] rounded-lg px-4 flex items-center gap-3 transition-colors ${
                  activeTab === "dashboard" 
                    ? "bg-[#FF5200] text-white font-medium shadow-md shadow-[#FF5200]/25" 
                    : "text-[#4B5563] hover:bg-gray-50"
                }`}
              >
                <LayoutDashboard className="w-[18px] h-[18px]" />
                <span className="text-[14px]">Dashboard</span>
              </button>

              <button 
                onClick={() => { setActiveTab("enclosure"); setSidebarOpen(false); }}
                className={`w-full h-[46px] rounded-lg px-4 flex items-center gap-3 transition-colors ${
                  activeTab === "enclosure" 
                    ? "bg-[#FF5200] text-white font-medium" 
                    : "text-[#4B5563] hover:bg-gray-50"
                }`}
              >
                <FileText className="w-[18px] h-[18px]" />
                <span className="text-[14px]">Enclosure</span>
              </button>

              <button 
                onClick={() => { setActiveTab("applications"); setSidebarOpen(false); }}
                className={`w-full h-[46px] rounded-lg px-4 flex items-center gap-3 transition-colors ${
                  activeTab === "applications" 
                    ? "bg-[#FF5200] text-white font-medium" 
                    : "text-[#4B5563] hover:bg-gray-50"
                }`}
              >
                <FolderOpen className="w-[18px] h-[18px]" />
                <span className="text-[14px]">My Applications</span>
              </button>
            </div>

            {/* Bottom Settings and Log Out */}
            <div className="flex flex-col gap-[8px] w-full border-t border-gray-100 pt-4">
              <button className="w-full h-[42px] px-4 flex items-center gap-3 text-[#4B5563] hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-[18px] h-[18px]" />
                <span className="text-[14px] font-medium">Settings</span>
              </button>

              <button className="w-full h-[42px] px-4 flex items-center gap-3 bg-red-50 text-[#EF4444] hover:bg-red-100 rounded-lg transition-colors">
                <LogOut className="w-[18px] h-[18px]" />
                <span className="text-[14px] font-semibold">Log Out</span>
              </button>
            </div>
          </div>

          {/* Right Main Content Workspace */}
          <div 
            className="flex-1 flex flex-col gap-[16px] md:gap-[20px] p-[16px] md:p-[36px] overflow-y-auto w-full"
          >
            {/* Orange Welcome Section - Height auto on mobile, 106px on desktop */}
            <div 
              className="w-full flex flex-col md:flex-row md:items-center justify-between p-5 md:p-[24px] overflow-hidden relative flex-shrink-0 gap-4"
              style={{
                borderRadius: "12px",
                background: "linear-gradient(113.1deg, #FF5200 0%, #EA9924 102.64%)"
              }}
            >
              {/* Faint Background Wave */}
              <div className="absolute right-0 bottom-0 top-0 w-[40%] pointer-events-none opacity-20">
                <svg viewBox="0 0 400 106" fill="none" className="w-full h-full object-cover">
                  <path d="M0,106 C120,40 280,120 400,20 L400,106 Z" fill="white" />
                </svg>
              </div>

              {/* Welcome Text */}
              <div className="relative z-10 flex flex-col justify-center">
                <span className="text-[12px] md:text-[13px] font-medium text-white/90 uppercase tracking-wider">
                  Welcome back!
                </span>
                <span className="text-[22px] md:text-[26px] font-bold text-white leading-tight mt-0.5">
                  Ramesh Kumar Singh
                </span>
                <span className="text-[12px] font-light text-white/85 mt-1.5">
                  Complete enclosure checklist before applying for PLEDGE park.
                </span>
              </div>

              {/* Registration ID Badge */}
              <div className="relative z-10 flex flex-col items-start md:items-end gap-1">
                <span className="text-[11px] font-semibold text-white/95 tracking-wide uppercase">
                  Registration ID
                </span>
                <div className="flex items-center gap-2 bg-white rounded-lg px-[14px] py-[8px] shadow-sm border border-white/10 w-full md:w-auto">
                  <span className="font-mono font-bold text-[12.5px] text-[#1E293B] flex-1">
                    {registrationId}
                  </span>
                  <button 
                    onClick={handleCopy}
                    className="text-gray-400 hover:text-[#FF5200] transition-colors p-1"
                    title="Copy Registration ID"
                  >
                    {copied ? <Check className="w-[15px] h-[15px] text-green-600" /> : <Copy className="w-[15px] h-[15px]" />}
                  </button>
                </div>
                <span className="text-[10.5px] text-white/80 font-light mt-0.5">
                  Use this ID for all correspondence
                </span>
              </div>
            </div>

            {/* Overview Title */}
            <div className="flex items-center justify-between flex-shrink-0">
              <h2 className="text-[18px] font-bold text-[#1E293B]">Overview</h2>
            </div>

            {/* Row of Stat Cards - Stacks on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full flex-shrink-0">
              {/* Card 1: Total Applications */}
              <div className="bg-white rounded-xl p-[20px] border border-gray-100 flex items-center justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                    <FolderOpen className="w-3.5 h-3.5 text-gray-400" /> Total Applications
                  </span>
                  <span className="text-[32px] font-extrabold text-[#1E293B] mt-2">03</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-0.5 text-[#FF5200]/85 bg-[#FF5200]/5 p-2 rounded-lg">
                  <div className="text-[14px] font-bold flex items-center gap-0.5 leading-none">
                    <span>-</span>
                    <span>&times;</span>
                  </div>
                  <div className="text-[14px] font-bold flex items-center gap-0.5 leading-none">
                    <span>+</span>
                    <span>=</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Enclosure Status */}
              <div className="bg-white rounded-xl p-[20px] border border-gray-100 flex items-center justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-gray-400" /> Enclosure Status
                  </span>
                  <span className="text-[32px] font-extrabold text-[#1E293B] mt-2">-</span>
                </div>
                <div className="text-[#FF5200] bg-[#FF5200]/5 p-2.5 rounded-lg">
                  <TrendingUp className="w-[24px] h-[24px]" />
                </div>
              </div>

              {/* Card 3: Enclosure Readiness - spans full width on smaller layouts */}
              <div className="bg-white rounded-xl p-[20px] border border-gray-100 flex items-center justify-between shadow-sm relative overflow-hidden sm:col-span-2 lg:col-span-1 group hover:shadow-md transition-shadow">
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-gray-400" /> Enclosure Readiness
                  </span>
                  <span className="text-[32px] font-extrabold text-[#1E293B] mt-2">3/9</span>
                </div>
                <div className="flex items-center gap-1 bg-[#FF5200]/5 px-2.5 py-3 rounded-lg text-[#FF5200] font-bold text-[18px]">
                  <div className="w-[6px] h-[18px] bg-[#FF5200] rounded-xs"></div>
                  <div className="w-[6px] h-[14px] bg-[#EA9924] rounded-xs"></div>
                  <div className="w-[6px] h-[20px] bg-[#FF5200] rounded-xs"></div>
                </div>
              </div>
            </div>

            {/* Amber Action Banner - Stacks on mobile */}
            <div className="w-full rounded-xl bg-[#FFF8F2] border border-[#FFE5D3] p-5 flex flex-col sm:flex-row sm:items-center justify-between flex-shrink-0 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFE5D3] flex items-center justify-center text-[#FF5200] flex-shrink-0">
                  <AlertCircle className="w-[20px] h-[20px]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-[15px] text-[#A35200]">
                    Kashi PLEDGE Industrial Park
                  </span>
                  <span className="text-[13px] text-[#C27834] mt-0.5">
                    SLC Approval granted. Please upload the site map for Town Planner review.
                  </span>
                </div>
              </div>
              <button className="h-[44px] sm:h-[40px] w-full sm:w-auto px-5 rounded-lg bg-[#FF5200] text-white text-[13.5px] font-bold hover:bg-[#E04800] transition-colors shadow-sm flex items-center justify-center gap-1 flex-shrink-0">
                Upload site map
                <span className="text-[16px]">&rsaquo;</span>
              </button>
            </div>

            {/* Recent Activity Section - Fits exactly in remaining flex space */}
            <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm flex-1 flex flex-col p-4 overflow-hidden min-h-[260px] md:min-h-[200px]">
              {/* Header row */}
              <div className="flex items-center justify-between mb-2.5 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <h3 className="text-[15px] font-bold text-[#1E293B]">Recent activity</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-600 text-[11px] font-semibold">
                    10 users
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>

              {/* Table wrapper - Flow normally with horizontal overflow protection */}
              <div className="w-full flex-1 overflow-x-auto min-h-0">
                <table className="w-full text-left border-collapse min-w-[500px] md:min-w-0">
                  <thead>
                    <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-500 uppercase tracking-wider sticky top-0 bg-white z-10">
                      <th className="py-2.5 px-4 flex items-center gap-1">
                        Application ID <span className="text-[10px] text-gray-400 font-normal">ⓘ</span>
                      </th>
                      <th className="py-2.5 px-4">Project Name</th>
                      <th className="py-2.5 px-4 hidden md:table-cell">District</th>
                      <th className="py-2.5 px-4 hidden sm:table-cell">Status</th>
                      <th className="py-2.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-[13px]">
                    {activities.map((act, index) => (
                      <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-2.5 px-4 font-semibold text-[#1E293B]">
                          {act.id}
                        </td>
                        <td className="py-2.5 px-4 text-[#4B5563] truncate max-w-[150px] md:max-w-none">
                          {act.projectName}
                        </td>
                        <td className="py-2.5 px-4 text-[#4B5563] hidden md:table-cell">
                          {act.district}
                        </td>
                        <td className="py-2.5 px-4 hidden sm:table-cell">
                          <div className="flex items-center gap-2">
                            <span 
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                act.badgeType === "blue" 
                                  ? "bg-blue-50 text-blue-600" 
                                  : "bg-purple-50 text-purple-600"
                              }`}
                            >
                              {act.status}
                            </span>
                            <span className="text-gray-400 text-[10px] font-medium">+3</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-3 text-gray-400">
                            <button className="hover:text-red-500 transition-colors">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                            <button className="hover:text-blue-500 transition-colors">
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-1.5 flex-shrink-0">
                <button className="h-[32px] px-2.5 md:px-3 rounded-lg border border-gray-200 text-[12px] font-semibold text-[#4B5563] hover:bg-gray-50 transition-colors flex items-center gap-1">
                  &larr; <span className="hidden sm:inline">Previous</span>
                </button>
                
                <div className="flex items-center gap-1">
                  <button className="w-7 h-7 rounded-lg bg-gray-100 text-[#1E293B] text-[12px] font-bold">1</button>
                  <button className="w-7 h-7 rounded-lg hover:bg-gray-50 text-gray-600 text-[12px]">2</button>
                  <span className="text-gray-400 px-0.5 text-[11px] sm:text-[12px]">...</span>
                  <button className="hidden sm:inline-block w-7 h-7 rounded-lg hover:bg-gray-50 text-gray-600 text-[12px]">8</button>
                  <button className="w-7 h-7 rounded-lg hover:bg-gray-50 text-gray-600 text-[12px]">9</button>
                  <button className="w-7 h-7 rounded-lg hover:bg-gray-50 text-gray-600 text-[12px]">10</button>
                </div>

                <button className="h-[32px] px-2.5 md:px-3 rounded-lg border border-gray-200 text-[12px] font-semibold text-[#4B5563] hover:bg-gray-50 transition-colors flex items-center gap-1">
                  <span className="hidden sm:inline">Next</span> &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
