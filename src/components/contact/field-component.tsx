"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { sendEmailAction } from "@/app/actions/send-email";
import { contactFormSchema } from "@/lib/validations/contact";
import type { ZodIssue } from "zod";

function getFieldErrors(issues: ZodIssue[]): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "");
    if (key && !errors[key]) {
      errors[key] = issue.message;
    }
  }
  return errors;
}

export function FieldComponent() {
  const t = useTranslations("FieldComponent");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const translateError = (code: string) =>
    t(`errors.${code}` as "errors.generic");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    const clientParsed = contactFormSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName") ?? "",
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!clientParsed.success) {
      const errors = getFieldErrors(clientParsed.error.issues);
      const translated: Record<string, string> = {};
      for (const [field, code] of Object.entries(errors)) {
        translated[field] = translateError(code);
      }
      setFieldErrors(translated);
      return;
    }

    setIsSubmitting(true);
    const result = await sendEmailAction(formData);
    setIsSubmitting(false);

    if (result.success) {
      setIsSent(true);
      form.reset();
      return;
    }

    if (result.error === "validation" && result.fieldErrors) {
      const translated: Record<string, string> = {};
      for (const [field, codes] of Object.entries(result.fieldErrors)) {
        const code = codes?.[0];
        if (code) translated[field] = translateError(code);
      }
      setFieldErrors(translated);
      return;
    }

    if (result.error === "config") {
      setFormError(t("errors.config"));
      return;
    }

    setFormError(t("errors.send"));
  };

  const errorId = (name: string) => `${name}-error`;

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
      {isSent ? (
        <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 animate-bounce" />
          <h3 className="font-semibold text-lg">{t("successTitle")}</h3>
          <p className="text-sm text-muted-foreground">{t("successMessage")}</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setIsSent(false)}
          >
            {t("sendAnother")}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {formError ? (
            <p
              className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              role="alert"
            >
              {formError}
            </p>
          ) : null}

          <FieldSet>
            <FieldGroup className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="first-name">{t("firstName")}</FieldLabel>
                  <Input
                    id="first-name"
                    placeholder={t("firstNamePlaceholder")}
                    required
                    name="firstName"
                    aria-invalid={Boolean(fieldErrors.firstName)}
                    aria-describedby={
                      fieldErrors.firstName ? errorId("firstName") : undefined
                    }
                  />
                  {fieldErrors.firstName ? (
                    <p
                      id={errorId("firstName")}
                      className="text-xs text-destructive mt-1"
                      role="alert"
                    >
                      {fieldErrors.firstName}
                    </p>
                  ) : null}
                </Field>

                <Field>
                  <FieldLabel htmlFor="last-name">{t("lastName")}</FieldLabel>
                  <Input
                    id="last-name"
                    placeholder={t("lastNamePlaceholder")}
                    name="lastName"
                    aria-invalid={Boolean(fieldErrors.lastName)}
                    aria-describedby={
                      fieldErrors.lastName ? errorId("lastName") : undefined
                    }
                  />
                  {fieldErrors.lastName ? (
                    <p
                      id={errorId("lastName")}
                      className="text-xs text-destructive mt-1"
                      role="alert"
                    >
                      {fieldErrors.lastName}
                    </p>
                  ) : null}
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="email">{t("emailAddress")}</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("emailAddressPlaceholder")}
                  required
                  name="email"
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={
                    fieldErrors.email ? errorId("email") : undefined
                  }
                />
                {fieldErrors.email ? (
                  <p
                    id={errorId("email")}
                    className="text-xs text-destructive mt-1"
                    role="alert"
                  >
                    {fieldErrors.email}
                  </p>
                ) : null}
              </Field>

              <Field>
                <FieldLabel htmlFor="subject">{t("subject")}</FieldLabel>
                <Input
                  id="subject"
                  placeholder={t("subjectPlaceholder")}
                  required
                  name="subject"
                  aria-invalid={Boolean(fieldErrors.subject)}
                  aria-describedby={
                    fieldErrors.subject ? errorId("subject") : undefined
                  }
                />
                {fieldErrors.subject ? (
                  <p
                    id={errorId("subject")}
                    className="text-xs text-destructive mt-1"
                    role="alert"
                  >
                    {fieldErrors.subject}
                  </p>
                ) : null}
              </Field>

              <Field>
                <FieldLabel htmlFor="message">{t("message")}</FieldLabel>
                <Textarea
                  id="message"
                  placeholder={t("messagePlaceholder")}
                  className="resize-none min-h-[120px]"
                  required
                  name="message"
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={
                    fieldErrors.message ? errorId("message") : undefined
                  }
                />
                {fieldErrors.message ? (
                  <p
                    id={errorId("message")}
                    className="text-xs text-destructive mt-1"
                    role="alert"
                  >
                    {fieldErrors.message}
                  </p>
                ) : null}
              </Field>

              <Field className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base text-write transition-all hover:bg-primary/90 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t("sending")}
                    </>
                  ) : (
                    <>
                      {t("sendMessage")}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      )}
    </div>
  );
}
