"use server"

import { Resend } from "resend"

interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(data: EmailData) {
  try {
    // Initialize Resend with your API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Email content
    const { data: emailResponse, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // You can change this to a verified domain later
      to: ["vishwathouti247@gmail.com"],
      reply_to: data.email,
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, message: "Failed to send email. Please try again later." }
    }

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again later." }
  }
}
