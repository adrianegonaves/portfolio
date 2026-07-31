"use server"

import { Resend } from "resend"

export async function sendEmailAction(formData: FormData) {
  // Inicialize o Resend AQUI dentro da função
  const resend = new Resend(process.env.RESEND_API_KEY)

  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "adrianegonaves@gmail.com",
      subject: `[Contato Portfólio] ${subject}`,
      replyTo: email,
      text: `Nome: ${firstName} ${lastName}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    })

    return { success: true, data }
  } catch (error) {
    return { success: false, error: "Erro ao enviar e-mail." }
  }
}