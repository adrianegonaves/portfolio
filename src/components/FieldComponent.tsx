"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { useTranslations } from "next-intl"
import { sendEmailAction } from "@/app/actions/send-email"

export function FieldComponent() {
  const t = useTranslations("FieldComponent")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const result = await sendEmailAction(formData)

    setIsSubmitting(false)

    if (result.success) {
      setIsSent(true)
    } else {
      alert("Ocorreu um erro ao enviar. Tente novamente!")
    }
  }
  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
      {isSent ? (
        <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 animate-bounce" />
          <h3 className="font-semibold text-lg">{t("successTitle") || "Mensagem Enviada!"}</h3>
          <p className="text-sm text-muted-foreground">
            {t("successMessage") || "Obrigado pelo contato. Responderei o mais breve possível."}
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setIsSent(false)}
          >
            {t("sendAnother") || "Enviar outra mensagem"}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <FieldSet>
            <FieldGroup className="space-y-4">
              {/* Nome e Sobrenome */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="first-name">{t("firstName")}</FieldLabel>
                  <Input
                    id="first-name"
                    placeholder="Adriane"
                    required
                    name="firstName"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="last-name">{t("lastName")}</FieldLabel>
                  <Input
                    id="last-name"
                    placeholder="Silva"
                    required
                    name="lastName"
                  />
                </Field>
              </div>


              <Field>
                <FieldLabel htmlFor="email">{t("emailAddress")}</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="adriane@exemplo.com"
                  required
                  name="email"
                />
              </Field>


              <Field>
                <FieldLabel htmlFor="subject">{t("subject")}</FieldLabel>
                <Input
                  id="subject"
                  placeholder={t("subjectPlaceholder")}
                  required
                  name="subject"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="message">{t("message")}</FieldLabel>
                <Textarea
                  id="message"
                  placeholder={t("messagePlaceholder")}
                  className="resize-none min-h-[120px]"
                  required
                  name="message"
                />
              </Field>

              <Field className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gap-2 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t("sending") || "Enviando..."}
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
  )
}