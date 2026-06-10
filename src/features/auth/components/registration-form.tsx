"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, RegistrationFormValues } from "../schemas/auth.schema";
import { useFormPersist } from "@/hooks/useFormPersist";
import { EntityTypes, Districts } from "@/constants/enums";
import { User, FileText, LayoutGrid, ChevronRight } from "lucide-react";

import { Input } from "@/components/ui/inputFields/input/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/inputFields/select/select";
import { Button } from "@/components/ui/button";

import { useTranslation } from "@/hooks/useTranslation";

export function RegistrationForm() {
  const { t } = useTranslation();
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      aadharCard: "",
      entityType: "" as any,
      companyName: "",
      cinNumber: "",
      panNumber: "",
      gstNumber: "",
      email: "",
      district: "" as any,
      contactNumber: "",
    }
  });

  // Enable auto-save to localStorage, excluding sensitive Aadhar and PAN data
  useFormPersist(form, {
    storageKey: "pledge-registration-form",
    exclude: ["aadharCard", "panNumber"]
  });

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, watch } = form;

  const onSubmit = async (data: RegistrationFormValues) => {
    console.log("Form Submitted Successfully:", data);
    // TODO: Send OTP logic & backend API integration
    localStorage.removeItem("pledge-registration-form");
  };

  const handleReset = () => {
    form.reset();
    localStorage.removeItem("pledge-registration-form");
  };

  const handleSaveDraft = () => {
    // Form is auto-saved, but this acts as an explicit user action
    alert("Draft saved securely in your browser!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-[32px]">
      
      {/* 1. Authorized Signatory Details */}
      <div className="w-full flex flex-col rounded-[8px] border border-neutral-border-light bg-white overflow-hidden">
        <div className="flex items-center gap-4 px-5 py-4 lg:px-7 lg:py-5 bg-neutral-soft-bg border-b border-neutral-border-light">
           <div className="w-[48px] h-[48px] rounded-full border border-neutral-border-light flex items-center justify-center border-dashed bg-white shrink-0">
             <User className="text-text-secondary" size={24} />
           </div>
           <div className="flex flex-col">
             <h3 className="font-poppins font-medium text-[16px] leading-[26px] text-neutral-dark">{t("registration.authSignatory")}</h3>
             <p className="font-poppins font-normal text-[12px] text-neutral-medium-gray">{t("registration.authSignatoryDesc")}</p>
           </div>
        </div>
        
        <div className="p-5 lg:p-7 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-gray-700">{t("registration.fullName")}</label>
            <Input 
              {...register("fullName")} 
              placeholder={t("placeholders.fullName")}
              className={`h-[44px] ${errors.fullName ? "border-red-500" : ""}`} 
            />
            {errors.fullName && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.fullName.message}`)}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-gray-700">{t("registration.aadharCard")}</label>
            <div className="flex gap-2">
               <Input 
                 {...register("aadharCard")} 
                 placeholder={t("placeholders.aadharCard")} 
                 className={`h-[44px] flex-1 bg-neutral-soft-bg ${errors.aadharCard ? "border-red-500" : ""}`} 
               />
               <Button type="button" className="h-[44px] bg-neutral-dark text-white hover:bg-black px-6 rounded-md">{t("registration.verifyBtn")}</Button>
            </div>
            {errors.aadharCard && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.aadharCard.message}`)}</span>}
          </div>
        </div>
      </div>

      {/* 2. Entity Information */}
      <div className="w-full flex flex-col rounded-[8px] border border-neutral-border-light bg-white overflow-hidden">
        <div className="flex items-center gap-4 px-5 py-4 lg:px-7 lg:py-5 bg-neutral-soft-bg border-b border-neutral-border-light">
           <div className="w-[48px] h-[48px] rounded-full border border-neutral-border-light flex items-center justify-center border-dashed bg-white shrink-0">
             <FileText className="text-text-secondary" size={24} />
           </div>
           <div className="flex flex-col">
             <h3 className="font-poppins font-medium text-[16px] leading-[26px] text-neutral-dark">{t("registration.entityInfo")}</h3>
             <p className="font-poppins font-normal text-[12px] text-neutral-medium-gray">{t("registration.entityInfoDesc")}</p>
           </div>
        </div>
        
        <div className="p-5 lg:p-7 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-gray-700">{t("registration.entityType")}</label>
            <Select onValueChange={(val) => setValue("entityType", val as any, { shouldValidate: true })} value={watch("entityType") || ""}>
              <SelectTrigger className={`h-[44px] bg-white ${errors.entityType ? "border-red-500" : ""}`}>
                <SelectValue placeholder={t("registration.selectEntityType") as string} />
              </SelectTrigger>
              <SelectContent position="popper" className="max-h-[300px]">
                {EntityTypes.map(type => <SelectItem key={type} value={type}>{t(`entities.${type}`)}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.entityType && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.entityType.message}`)}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-gray-700">{t("registration.companyName")}</label>
            <Input {...register("companyName")} placeholder={t("placeholders.companyName")} className={`h-[44px] bg-white ${errors.companyName ? "border-red-500" : ""}`} />
            {errors.companyName && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.companyName.message}`)}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-gray-700">{t("registration.cinNumber")}</label>
            <Input {...register("cinNumber")} placeholder={t("placeholders.cinNumber")} className={`h-[44px] bg-white ${errors.cinNumber ? "border-red-500" : ""}`} />
            {errors.cinNumber && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.cinNumber.message}`)}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-gray-700">{t("registration.panNumber")}</label>
            <Input {...register("panNumber")} placeholder={t("placeholders.panNumber")} className={`h-[44px] bg-white ${errors.panNumber ? "border-red-500" : ""}`} />
            {errors.panNumber && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.panNumber.message}`)}</span>}
          </div>
          <div className="flex flex-col gap-1.5 md:col-span-1">
            <label className="text-[14px] font-medium text-gray-700">{t("registration.gstNumber")}</label>
            <Input {...register("gstNumber")} placeholder={t("placeholders.gstNumber")} className={`h-[44px] bg-white ${errors.gstNumber ? "border-red-500" : ""}`} />
            {errors.gstNumber && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.gstNumber.message}`)}</span>}
          </div>
        </div>
      </div>

      {/* 3. Contact Details */}
      <div className="w-full flex flex-col rounded-[8px] border border-neutral-border-light bg-white overflow-hidden">
        <div className="flex items-center gap-4 px-5 py-4 lg:px-7 lg:py-5 bg-neutral-soft-bg border-b border-neutral-border-light">
           <div className="w-[48px] h-[48px] rounded-full border border-neutral-border-light flex items-center justify-center border-dashed bg-white shrink-0">
             <LayoutGrid className="text-text-secondary" size={24} />
           </div>
           <div className="flex flex-col">
             <h3 className="font-poppins font-medium text-[16px] leading-[26px] text-neutral-dark">{t("registration.contactDetails")}</h3>
             <p className="font-poppins font-normal text-[12px] text-neutral-medium-gray">{t("registration.contactDetailsDesc")}</p>
           </div>
        </div>
        
        <div className="p-5 lg:p-7 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-gray-700">{t("registration.email")}</label>
            <Input {...register("email")} placeholder={t("placeholders.email")} className={`h-[44px] bg-white ${errors.email ? "border-red-500" : ""}`} />
            {errors.email && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.email.message}`)}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-gray-700">{t("registration.district")}</label>
            <div className="flex gap-2">
              <Select onValueChange={(val) => setValue("district", val as any, { shouldValidate: true })} value={watch("district") || ""}>
                <SelectTrigger className={`h-[44px] flex-1 bg-white ${errors.district ? "border-red-500" : ""}`}>
                  <SelectValue placeholder={t("registration.selectDistrict") as string} />
                </SelectTrigger>
                <SelectContent position="popper" className="max-h-[300px]">
                  {Districts.map(dist => <SelectItem key={dist} value={dist}>{t(`districts.${dist}`)}</SelectItem>)}
                </SelectContent>
              </Select>
              <Button type="button" className="h-[44px] bg-neutral-dark text-white hover:bg-black px-6 rounded-md">{t("registration.verifyBtn")}</Button>
            </div>
            {errors.district && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.district.message}`)}</span>}
          </div>
          <div className="flex flex-col gap-1.5 md:col-span-1">
            <label className="text-[14px] font-medium text-gray-700">{t("registration.contactNumber")}</label>
            <div className="flex gap-2">
              <Select defaultValue="+91">
                <SelectTrigger className="h-[44px] w-[90px] bg-neutral-soft-bg shrink-0">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="+91">+91 (IN)</SelectItem>
                  <SelectItem value="+1">+1 (US/CA)</SelectItem>
                  <SelectItem value="+44">+44 (UK)</SelectItem>
                  <SelectItem value="+61">+61 (AU)</SelectItem>
                  <SelectItem value="+81">+81 (JP)</SelectItem>
                  <SelectItem value="+971">+971 (AE)</SelectItem>
                </SelectContent>
              </Select>
              <Input {...register("contactNumber")} placeholder={t("placeholders.contactNumber")} className={`h-[44px] flex-1 bg-white ${errors.contactNumber ? "border-red-500" : ""}`} />
            </div>
            {errors.contactNumber && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.contactNumber.message}`)}</span>}
            <span className="text-brand-primary text-[12px] font-medium mt-1">{t("registration.otpNote")}</span>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-2 pb-12 gap-4">
        <Button 
          type="button" 
          onClick={handleSaveDraft} 
          variant="outline" 
          className="hidden sm:flex h-[44px] w-full sm:w-auto px-8 border-gray-300 text-gray-800 font-medium rounded-lg"
        >
          {t("registration.saveDraft")}
        </Button>
        <div className="flex w-full sm:w-[336px] max-w-full h-[44px] gap-[12px] sm:gap-[16px]">
          <Button 
            type="button" 
            onClick={handleReset} 
            variant="outline" 
            className="h-full flex-1 px-0 border-gray-300 text-gray-800 font-medium rounded-lg text-[13px] sm:text-[14px]"
          >
            {t("registration.resetData")}
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="h-full flex-[1.5] sm:flex-[1.8] px-0 bg-brand-primary hover:bg-brand-primary/90 text-white font-medium rounded-lg text-[13px] sm:text-[15px] whitespace-nowrap flex items-center justify-center gap-1"
          >
            {t("registration.sendOtp")} <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </form>
  );
}
