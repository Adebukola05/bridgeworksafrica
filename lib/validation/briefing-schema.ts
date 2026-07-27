import { z } from "zod";
import { INSTITUTION_TYPES } from "@/lib/constants";

export const institutionTypes = INSTITUTION_TYPES;

export const briefingSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  organisation: z.string().trim().min(2, "Enter your organisation"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().optional().or(z.literal("")),
  institutionType: z.enum(institutionTypes, {
    errorMap: () => ({ message: "Select an institution type" }),
  }),
  goal: z.string().trim().min(10, "Tell us a little about what you'd like to discuss"),
});

export type BriefingFormValues = z.infer<typeof briefingSchema>;
