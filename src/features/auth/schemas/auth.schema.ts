import * as z from "zod";
import { EntityTypes, Districts } from "@/constants/enums";

export const registrationSchema = z.object({
  fullName: z.string().min(2, "fullNameMin").max(100),
  aadharCard: z.string().regex(/^\d{12}$/, "aadharExact"),
  entityType: z.string().min(1, "entityTypeReq").refine((val) => EntityTypes.includes(val as any), "entityTypeInv"),
  companyName: z.string().min(2, "companyNameMin"),
  cinNumber: z.string().min(21, "cinLength").max(21).optional().or(z.literal('')),
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "panInv"),
  gstNumber: z.string().regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "gstInv").optional().or(z.literal('')),
  email: z.string().email("emailInv"),
  district: z.string().min(1, "districtReq").refine((val) => Districts.includes(val as any), "districtInv"),
  contactNumber: z.string().regex(/^\d{10}$/, "contactExact"),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const loginSchema = z.object({
  email: z.string().min(1, "emailInv"),
  password: z.string().min(1, "passwordMin"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
