"use server";

import { Resend } from "resend";
import { parseContactForm } from "@/lib/validations/contact";

export type SendEmailResult =
  | { success: true }
  | {
      success: false;
      error: "validation" | "config" | "send";
      fieldErrors?: Record<string, string[]>;
    };

export async function sendEmailAction(formData: FormData): Promise<SendEmailResult> {
  const parsed = parseContactForm(formData);

  if (!parsed.success) {
    return {
      success: false,
      error: "validation",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: "config" };
  }

  const { firstName, lastName, email, subject, message } = parsed.data;
  const resend = new Resend(apiKey);
  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL ?? "adrianegonaves@gmail.com",
      subject: `[Contato Portfólio] ${subject}`,
      replyTo: email,
      text: `Nome: ${fullName}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    });

    if (error) {
      return { success: false, error: "send" };
    }

    return { success: true };
  } catch {
    return { success: false, error: "send" };
  }
}
