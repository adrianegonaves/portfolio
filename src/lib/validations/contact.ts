import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "FIRST_NAME_REQUIRED" })
    .max(100, { message: "FIRST_NAME_TOO_LONG" }),
  lastName: z.preprocess(
    (val) => (val == null ? "" : val),
    z.string().trim().max(100, { message: "LAST_NAME_TOO_LONG" })
  ),
  email: z
    .string()
    .trim()
    .min(1, { message: "EMAIL_REQUIRED" })
    .email({ message: "EMAIL_INVALID" })
    .max(254, { message: "EMAIL_TOO_LONG" }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "SUBJECT_REQUIRED" })
    .max(200, { message: "SUBJECT_TOO_LONG" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "MESSAGE_TOO_SHORT" })
    .max(5000, { message: "MESSAGE_TOO_LONG" }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export function parseContactForm(formData: FormData) {
  return contactFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName") ?? "",
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });
}
