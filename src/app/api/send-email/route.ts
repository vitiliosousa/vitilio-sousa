import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactEmail from "@/emails/ContactEmail";
import { render } from "@react-email/render";
import React from "react";

const resend = new Resend("re_AGv51qYN_2vZL4YiWZTy5VgHe9oKMLGq8");

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const emailHtml = await render(
    React.createElement(ContactEmail, { name, email, message })
  );

  try {
    const data = await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: [`vitiliodesousa@gmail.com`],
      subject: `Nova mensagem do portifolio`,
      html: emailHtml,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error });
  }
}
