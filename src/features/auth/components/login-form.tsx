import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "../schemas/auth.schema";
import { useFormPersist } from "@/hooks/useFormPersist";
import { User, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/inputs/input";
import { Button } from "@/components/ui/actions/button";
import { useTranslation } from "@/hooks/useTranslation";

export function LoginForm({ role }: { role: string }) {
  const { t } = useTranslation();
  const router = useRouter();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  useFormPersist(form, {
    storageKey: "pledge-login-form",
    exclude: ["password"]
  });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = form;

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login Submitted:", data);
    // TODO: Backend API integration
    localStorage.removeItem("pledge-login-form");
    
    // Route to particular screens based on role
    router.push(`/dashboard/${role}`);
  };

  const headerText = role === "department" ? t("login.officerSignIn") : t("login.enterDetails");
  const buttonText = role === "department" ? t("login.departmentBtn") : t("login.submitBtn");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-[32px]">
      
      {/* 1. Enter Your Details */}
      <div 
        className={`w-full flex flex-col rounded-[8px] border border-neutral-border-light bg-white overflow-hidden ${role === "department" ? "lg:h-[371px]" : ""}`}
      >
        <div className="flex items-center gap-4 px-5 py-4 lg:px-7 lg:py-5 bg-neutral-soft-bg border-b border-neutral-border-light">
           <div className="w-[48px] h-[48px] rounded-full border border-neutral-border-light flex items-center justify-center border-dashed bg-white shrink-0">
             <User className="text-text-secondary" size={24} />
           </div>
           <div className="flex flex-col">
             <h3 className="font-poppins font-medium text-[16px] leading-[26px] text-neutral-dark">
               <span className="hidden sm:inline">{headerText}</span>
               <span className="inline sm:hidden">{t("login.enterDetails")}</span>
             </h3>
             <p className="font-poppins font-normal text-[12px] text-neutral-medium-gray">{t("login.enterDetailsDesc")}</p>
           </div>
        </div>
        
        <div className="p-5 lg:p-7 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-gray-700">{t("login.email")}</label>
            <Input 
              {...register("email")} 
              placeholder={t("placeholders.email")} 
              className={`h-[44px] bg-white ${errors.email ? "border-red-500" : ""}`} 
            />
            {errors.email && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.email.message}`)}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-gray-700">{t("login.password")}</label>
            <Input 
              type="password"
              {...register("password")} 
              placeholder={t("placeholders.password")} 
              className={`h-[44px] bg-white ${errors.password ? "border-red-500" : ""}`} 
            />
            {errors.password && <span className="text-red-500 text-[11px] mt-1">{t(`errors.${errors.password.message}`)}</span>}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col items-center pt-2 pb-12 gap-4">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-[44px] bg-brand-primary hover:bg-brand-primary/90 text-white font-medium rounded-lg text-[15px] sm:text-[16px] flex items-center justify-center gap-1"
        >
          <span className="hidden sm:inline">{buttonText}</span>
          <span className="inline sm:hidden">{role === "department" ? "Send OTP & Register" : buttonText}</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
        <p className={`text-[13px] sm:text-[14px] font-medium text-neutral-dark ${role === "department" ? "sm:hidden" : ""}`}>
          {t("login.newApplicant")} <Link href="/register" className="text-brand-primary hover:underline">{t("login.registerHere")}</Link>
        </p>
      </div>
    </form>
  );
}
