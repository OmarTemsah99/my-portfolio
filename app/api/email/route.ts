// app/api/email/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter, SendMailOptions } from "nodemailer";
import { auth } from "@googleapis/gmail";
import * as z from "zod";
import DOMPurify from "isomorphic-dompurify";

// Rate limiting store
type RateLimitEntry = { count: number; resetTime: number };
const rateLimitMap = new Map<string, RateLimitEntry>();

// Form schema
const emailSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(255).toLowerCase().trim(),
  subject: z.string().min(5).max(200).trim(),
  message: z.string().min(10).max(5000).trim(),
});

// Logger utility
const logger = {
  info: (msg: string, data?: Record<string, unknown>) =>
    console.log(`[INFO] ${new Date().toISOString()} - ${msg}`, data || ""),
  warn: (msg: string, data?: Record<string, unknown>) =>
    console.warn(`[WARN] ${new Date().toISOString()} - ${msg}`, data || ""),
  error: (msg: string, err?: unknown) =>
    console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`, err),
};

// Rate limit
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;

  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false, resetTime: entry.resetTime };
  }

  entry.count++;
  return { allowed: true };
}

// IP extractor
function getClientIP(request: NextRequest): string {
  const fwd = request.headers.get("x-forwarded-for");
  const real = request.headers.get("x-real-ip");
  return fwd?.split(",")[0].trim() || real?.trim() || "unknown";
}

// Env validator
function validateEnvVars(): void {
  const required = [
    "GMAIL_CLIENT_ID",
    "GMAIL_CLIENT_SECRET",
    "GMAIL_REFRESH_TOKEN",
    "GMAIL_USER",
  ];
  const missing = required.filter((v) => !process.env[v]);
  if (missing.length > 0) {
    throw new Error(`Missing env vars: ${missing.join(", ")}`);
  }
}

// Transporter
async function createTransporter(): Promise<Transporter> {
  validateEnvVars();
  const {
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    GMAIL_REFRESH_TOKEN,
    GMAIL_USER,
  } = process.env;

  const oauth2Client = new auth.OAuth2(
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

  const accessTokenObj = await oauth2Client.getAccessToken();
  const accessToken = accessTokenObj?.token;
  if (!accessToken) throw new Error("Could not acquire Gmail access token");

  const transporter = nodemailer.createTransport({
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

  await transporter.verify();
  return transporter;
}

// Sanitization
function sanitizeContent(content: string): string {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
}

// Email template generator
function createEmailTemplates(data: z.infer<typeof emailSchema>): {
  textContent: string;
  htmlContent: string;
} {
  const sanitized = {
    name: sanitizeContent(data.name),
    email: sanitizeContent(data.email),
    subject: sanitizeContent(data.subject),
    message: sanitizeContent(data.message),
  };

  const textContent = `
New Contact Form Submission

From: ${sanitized.name} <${sanitized.email}>
Subject: ${sanitized.subject}

Message:
${sanitized.message}

Sent at: ${new Date().toISOString()}
  `.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
  <body style="font-family: sans-serif;">
    <h2>New Contact Submission</h2>
    <p><strong>From:</strong> ${sanitized.name} &lt;${sanitized.email}&gt;</p>
    <p><strong>Subject:</strong> ${sanitized.subject}</p>
    <p><strong>Message:</strong><br>${sanitized.message.replace(
      /\n/g,
      "<br>"
    )}</p>
    <hr>
    <p style="font-size: 0.8rem; color: #999;">Sent at: ${new Date().toISOString()}</p>
  </body>
</html>
  `;

  return { textContent, htmlContent };
}

// API handler
export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const clientIP = getClientIP(request);

  try {
    // Rate limit
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Try again later.",
          resetTime: new Date(rateLimit.resetTime!).toISOString(),
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(
              (rateLimit.resetTime! - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    const body = await request.json();
    const validated = emailSchema.parse(body);

    logger.info("Email attempt", {
      ip: clientIP,
      subject: validated.subject,
    });

    const transporter = await createTransporter();
    const { textContent, htmlContent } = createEmailTemplates(validated);

    const mailOptions: SendMailOptions = {
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER!,
      replyTo: validated.email,
      subject: `Contact Form: ${validated.subject}`,
      text: textContent,
      html: htmlContent,
      headers: {
        "X-Mailer": "Portfolio Contact Form",
      },
    };

    const result = await transporter.sendMail(mailOptions);

    logger.info("Email sent", {
      messageId: result.messageId,
      duration: `${Date.now() - startTime}ms`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent!",
        messageId: result.messageId,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    logger.error("Error in POST handler", err);

    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: err.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const isDev = process.env.NODE_ENV === "development";
    return NextResponse.json(
      {
        success: false,
        error:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again later.",
        ...(isDev && {
          details: err instanceof Error ? err.stack : err,
        }),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
