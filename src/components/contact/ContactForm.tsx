"use client";

import React, { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Input } from "@/components/ui/inputs/input";
import { Textarea } from "@/components/ui/inputs/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/inputs/select";
import { Button } from "@/components/ui/actions/button";
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
      icon: <User className="text-neutral-medium-gray" size={22} />,
    },
    {
      key: "regional",
      icon: <User className="text-neutral-medium-gray" size={22} />,
    },
    {
      key: "branch",
      icon: <User className="text-neutral-medium-gray" size={22} />,
    },
  ];

  return (
    <section className="relative w-full bg-white pt-12 pb-24 overflow-visible z-20 font-sans">
      {/* Decorative Green Shape (Left side) */}
      <div className="absolute left-0 top-[120px] w-[54px] lg:w-[74px] h-[315px] select-none pointer-events-none hidden lg:block z-20">
        <img
          src="/assets/decorations/green_shape2.svg"
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
          src="/assets/decorations/orange_shape2.svg"
          alt=""
          className="w-full h-full object-contain object-right"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[80px] flex flex-col items-center">
        {/* Form Container */}
        <div className="w-full max-w-[800px] flex flex-col items-center">
          {/* Section Heading */}
          <div className="flex flex-col items-center mb-8 md:mb-10 w-full text-center">
            <h2 className="text-neutral-near-black text-[28px] md:text-[44px] font-sans font-medium leading-tight">
              {t("contactPage.form.titlePart1")}{" "}
              <span className="text-brand-orange-deep">{t("contactPage.form.titlePart2")}</span>
            </h2>
            <p className="mt-3 md:mt-4 text-[#666666] text-[13px] md:text-[16px] leading-relaxed max-w-[550px] font-sans">
              Here are the key benefits you can anticipate experiencing in great detail, each one designed to enhance your overall satisfaction.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 md:gap-6">
            {/* Grid for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full">
              
              {/* Full Name */}
              <div className="flex flex-col gap-1.5 md:order-1 order-1">
                <label className="text-[13px] md:text-[14px] font-medium text-neutral-dark">
                  {t("contactPage.form.nameLabel")}
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("contactPage.form.namePlaceholder")}
                  className="h-11 bg-white border border-neutral-border-light rounded-lg px-3.5 focus:border-brand-orange-deep focus:ring-1 focus:ring-brand-orange-deep text-[13px] md:text-[14px]"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5 md:order-2 order-2">
                <label className="text-[13px] md:text-[14px] font-medium text-neutral-dark">
                  {t("contactPage.form.emailLabel")}
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("contactPage.form.emailPlaceholder")}
                  className="h-11 bg-white border border-neutral-border-light rounded-lg px-3.5 focus:border-brand-orange-deep focus:ring-1 focus:ring-brand-orange-deep text-[13px] md:text-[14px]"
                  required
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5 md:order-3 order-3">
                <label className="text-[13px] md:text-[14px] font-medium text-neutral-dark">
                  {t("contactPage.form.subjectLabel")}
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={(val) => setFormData({ ...formData, subject: val })}
                >
                  <SelectTrigger className="w-full h-11 bg-white border border-neutral-border-light text-text-secondary rounded-lg text-[13px] md:text-[14px]">
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

              {/* Contact Number */}
              <div className="flex flex-col gap-1.5 md:order-4 order-4">
                <label className="text-[13px] md:text-[14px] font-medium text-neutral-dark">
                  {t("contactPage.form.contactLabel")}
                </label>
                <div className="flex gap-2">
                  <Select
                    value={formData.countryCode}
                    onValueChange={(val) => setFormData({ ...formData, countryCode: val })}
                  >
                    <SelectTrigger className="w-[85px] h-11 bg-neutral-soft-bg md:bg-white border border-neutral-border-light text-text-primary rounded-lg text-[13px] md:text-[14px] shrink-0">
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
                    className="flex-1 h-11 bg-white border border-neutral-border-light rounded-lg px-3.5 focus:border-brand-orange-deep focus:ring-1 focus:ring-brand-orange-deep text-[13px] md:text-[14px]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[13px] md:text-[14px] font-medium text-neutral-dark">
                {t("contactPage.form.messageLabel")}
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t("contactPage.form.messagePlaceholder")}
                className="min-h-[120px] md:min-h-[140px] bg-white border border-neutral-border-light rounded-lg px-3.5 py-3 focus-visible:border-brand-orange-deep focus-visible:ring-1 focus-visible:ring-brand-orange-deep text-[13px] md:text-[14px]"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start md:justify-center mt-2">
              <Button
                type="submit"
                variant="brand-orange-deep"
                className="h-[42px] md:h-[46px] px-6 md:px-8 rounded-lg font-medium text-[14px] md:text-[16px] flex items-center justify-center gap-1.5 shadow-sm transition-colors duration-200"
              >
                {t("contactPage.form.submitButton")}
                <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
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
                  <h3 className="font-bold text-[16px] text-neutral-dark leading-tight uppercase">
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
                <div className="flex items-start gap-3 text-[14px] text-neutral-dark">
                  <Phone className="text-brand-orange-deep shrink-0 mt-0.5" size={16} />
                  <a
                    href={`tel:${t(`contactPage.offices.${office.key}.phone`)}`}
                    className="hover:text-brand-orange-deep transition-colors"
                  >
                    {t(`contactPage.offices.${office.key}.phone`)}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 text-[14px] text-neutral-dark">
                  <Mail className="text-brand-orange-deep shrink-0 mt-0.5" size={16} />
                  <a
                    href={`mailto:${t(`contactPage.offices.${office.key}.email`)}`}
                    className="hover:text-brand-orange-deep transition-colors break-all"
                  >
                    {t(`contactPage.offices.${office.key}.email`)}
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 text-[14px] text-neutral-dark leading-relaxed">
                  <MapPin className="text-brand-orange-deep shrink-0 mt-0.5" size={16} />
                  <span>{t(`contactPage.offices.${office.key}.address`)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Hours Bar */}
        <div className="w-full max-w-[1246px] mt-8 bg-[#FFF5F0] rounded-[8px] px-6 py-4.5 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] z-10">
          <span className="font-bold text-neutral-dark uppercase tracking-wider md:w-1/4">
            {t("contactPage.officeHours.title")}
          </span>
          <span className="font-semibold text-neutral-dark md:w-2/4 md:text-center">
            {t("contactPage.officeHours.timing")}
          </span>
          <span className="text-brand-orange-deep font-medium md:w-1/4 md:text-right">
            {t("contactPage.officeHours.note")}
          </span>
        </div>
      </div>
    </section>
  );
}
