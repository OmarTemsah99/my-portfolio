// app/api/send-email/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { auth } from "@googleapis/gmail";
import * as z from "zod";

// Zod schema for form validation
const emailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Create OAuth2 transporter
async function createTransporter() {
  const {
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    GMAIL_REFRESH_TOKEN,
    GMAIL_USER,
  } = process.env;

  if (
    !GMAIL_CLIENT_ID ||
    !GMAIL_CLIENT_SECRET ||
    !GMAIL_REFRESH_TOKEN ||
    !GMAIL_USER
  ) {
    throw new Error(
      "Missing Gmail OAuth2 credentials in environment variables."
    );
  }

  const oauth2Client = new auth.OAuth2(
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: GMAIL_REFRESH_TOKEN,
  });

  const accessTokenObj = await oauth2Client.getAccessToken();
  const accessToken = accessTokenObj?.token;

  if (!accessToken) throw new Error("Failed to acquire access token.");

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: GMAIL_USER,
      clientId: GMAIL_CLIENT_ID,
      clientSecret: GMAIL_CLIENT_SECRET,
      refreshToken: GMAIL_REFRESH_TOKEN,
      accessToken,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = emailSchema.parse(body);

    const transporter = await createTransporter();
    await transporter.verify();

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"${validatedData.name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: validatedData.email,
      subject: `New Contact: ${validatedData.subject}`,
      text: `
From: ${validatedData.name} <${validatedData.email}>
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${validatedData.name} &lt;${
        validatedData.email
      }&gt;</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <hr />
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}
