import { z } from "zod";

export const toolkitSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  organisation: z.string().trim().optional().or(z.literal("")),
});

export type ToolkitFormValues = z.infer<typeof toolkitSchema>;
