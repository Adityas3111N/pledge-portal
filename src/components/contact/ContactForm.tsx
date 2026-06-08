"use client";

import React, { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Input } from "@/components/ui/inputFields/input/input";
import { Textarea } from "@/components/ui/inputFields/textarea/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/inputFields/select/select";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, User, ChevronRight } from "lucide-react";

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    countryCode: "91",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic
  };

  const officesList = [
    {
      key: "head",
      icon: <User className="text-[#8E8E8E]" size={22} />,
    },
    {
      key: "regional",
      icon: <User className="text-[#8E8E8E]" size={22} />,
    },
    {
      key: "branch",
      icon: <User className="text-[#8E8E8E]" size={22} />,
    },
  ];

  return (
    <section className="relative w-full bg-white pt-12 pb-24 overflow-visible z-20 font-sans">
      {/* Decorative Green Shape (Left side) */}
      <div className="absolute left-0 top-[120px] w-[54px] lg:w-[74px] h-[315px] select-none pointer-events-none hidden lg:block z-20">
        <img
          src="/green_shape2.svg"
          alt=""
          className="w-full h-full object-contain object-left"
        />
      </div>

      {/* Decorative Orange Shape (Right side) */}
      <div 
        className="absolute top-[-80px] w-[79px] h-[327px] select-none pointer-events-none hidden lg:block z-20"
        style={{ right: "calc(-1 * var(--removed-body-scroll-bar-size, 0px))" }}
      >
        <img
          src="/orange_shape2.svg"
          alt=""
          className="w-full h-full object-contain object-right"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[80px] flex flex-col items-center">
        {/* Form Container */}
        <div className="w-full max-w-[800px] flex flex-col items-center">
          {/* Section Heading */}
          <h2 className="text-[#050505] text-[28px] md:text-[44px] font-sans font-medium text-center leading-tight mb-8">
            {t("contactPage.form.titlePart1")}{" "}
            <span className="text-[#FF5200]">{t("contactPage.form.titlePart2")}</span>
          </h2>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            {/* Grid for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#1A1A1A]">
                  {t("contactPage.form.emailLabel")}
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("contactPage.form.emailPlaceholder")}
                  className="h-11 bg-white border border-[#E5E5E5] rounded-lg px-3.5 focus:border-[#FF5200] focus:ring-1 focus:ring-[#FF5200]"
                  required
                />
              </div>

              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#1A1A1A]">
                  {t("contactPage.form.nameLabel")}
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("contactPage.form.namePlaceholder")}
                  className="h-11 bg-white border border-[#E5E5E5] rounded-lg px-3.5 focus:border-[#FF5200] focus:ring-1 focus:ring-[#FF5200]"
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#1A1A1A]">
                  {t("contactPage.form.contactLabel")}
                </label>
                <div className="flex gap-2">
                  <Select
                    value={formData.countryCode}
                    onValueChange={(val) => setFormData({ ...formData, countryCode: val })}
                  >
                    <SelectTrigger className="w-[85px] h-11 bg-white border border-[#E5E5E5] text-text-primary rounded-lg">
                      <SelectValue placeholder="91+" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="91">91+</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="44">44+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t("contactPage.form.contactPlaceholder")}
                    className="flex-1 h-11 bg-white border border-[#E5E5E5] rounded-lg px-3.5 focus:border-[#FF5200] focus:ring-1 focus:ring-[#FF5200]"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#1A1A1A]">
                  {t("contactPage.form.subjectLabel")}
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={(val) => setFormData({ ...formData, subject: val })}
                >
                  <SelectTrigger className="w-full h-11 bg-white border border-[#E5E5E5] text-text-secondary rounded-lg">
                    <SelectValue placeholder={t("contactPage.form.subjectPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="general">{t("contactPage.form.subjects.general")}</SelectItem>
                    <SelectItem value="feedback">{t("contactPage.form.subjects.feedback")}</SelectItem>
                    <SelectItem value="support">{t("contactPage.form.subjects.support")}</SelectItem>
                    <SelectItem value="technical">{t("contactPage.form.subjects.technical")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[14px] font-medium text-[#1A1A1A]">
                {t("contactPage.form.messageLabel")}
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t("contactPage.form.messagePlaceholder")}
                className="min-h-[140px] bg-white border border-[#E5E5E5] rounded-lg px-3.5 py-3 focus-visible:border-[#FF5200] focus-visible:ring-1 focus-visible:ring-[#FF5200]"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-2">
              <Button
                type="submit"
                className="h-[46px] bg-[#FF5200] hover:bg-[#E04800] text-white px-8 rounded-lg font-medium text-[16px] flex items-center justify-center gap-1.5 shadow-sm transition-colors duration-200"
              >
                {t("contactPage.form.submitButton")}
                <ChevronRight size={18} />
              </Button>
            </div>
          </form>
        </div>

        {/* Office Address Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1246px] mt-20 z-10">
          {officesList.map((office) => (
            <div
              key={office.key}
              className="flex flex-col p-6 bg-white border border-[#EAEAEA] rounded-[8px] hover:shadow-md transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 border-b border-[#F5F5F5] pb-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-dashed border-[#CCCCCC] flex items-center justify-center bg-white shrink-0">
                  {office.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-[16px] text-[#1A1A1A] leading-tight uppercase">
                    {t(`contactPage.offices.${office.key}.title`)}
                  </h3>
                  <span className="text-[13px] font-medium text-[#00954D] leading-tight mt-0.5">
                    {t(`contactPage.offices.${office.key}.subtitle`)}
                  </span>
                </div>
              </div>

              {/* Card Content Details */}
              <div className="flex flex-col gap-3.5">
                {/* Phone */}
                <div className="flex items-start gap-3 text-[14px] text-[#1A1A1A]">
                  <Phone className="text-[#FF5200] shrink-0 mt-0.5" size={16} />
                  <a
                    href={`tel:${t(`contactPage.offices.${office.key}.phone`)}`}
                    className="hover:text-[#FF5200] transition-colors"
                  >
                    {t(`contactPage.offices.${office.key}.phone`)}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 text-[14px] text-[#1A1A1A]">
                  <Mail className="text-[#FF5200] shrink-0 mt-0.5" size={16} />
                  <a
                    href={`mailto:${t(`contactPage.offices.${office.key}.email`)}`}
                    className="hover:text-[#FF5200] transition-colors break-all"
                  >
                    {t(`contactPage.offices.${office.key}.email`)}
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 text-[14px] text-[#1A1A1A] leading-relaxed">
                  <MapPin className="text-[#FF5200] shrink-0 mt-0.5" size={16} />
                  <span>{t(`contactPage.offices.${office.key}.address`)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Hours Bar */}
        <div className="w-full max-w-[1246px] mt-8 bg-[#FFF5F0] rounded-[8px] px-6 py-4.5 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] z-10">
          <span className="font-bold text-[#1A1A1A] uppercase tracking-wider md:w-1/4">
            {t("contactPage.officeHours.title")}
          </span>
          <span className="font-semibold text-[#1A1A1A] md:w-2/4 md:text-center">
            {t("contactPage.officeHours.timing")}
          </span>
          <span className="text-[#FF5200] font-medium md:w-1/4 md:text-right">
            {t("contactPage.officeHours.note")}
          </span>
        </div>
      </div>
    </section>
  );
}
