// app/api/email/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { auth } from "@googleapis/gmail";
import * as z from "zod";
import DOMPurify from "isomorphic-dompurify";

// Simple in-memory rate limiting (for production, use Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Zod schema for form validation
const emailSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters")
    .toLowerCase()
    .trim(),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .trim(),
});

// Logger utility
const logger = {
  info: (message: string, data?: any) => {
    console.log(
      `[INFO] ${new Date().toISOString()}: ${message}`,
      data ? JSON.stringify(data) : ""
    );
  },
  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error);
  },
  warn: (message: string, data?: any) => {
    console.warn(
      `[WARN] ${new Date().toISOString()}: ${message}`,
      data ? JSON.stringify(data) : ""
    );
  },
};

// Simple rate limiting function
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5; // 5 requests per window

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // New window or expired window
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, resetTime: record.resetTime };
  }

  // Increment count
  record.count++;
  return { allowed: true };
}

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIP) {
    return realIP.trim();
  }

  return "unknown";
}

// Validate environment variables
function validateEnvVars() {
  const requiredVars = [
    "GMAIL_CLIENT_ID",
    "GMAIL_CLIENT_SECRET",
    "GMAIL_REFRESH_TOKEN",
    "GMAIL_USER",
  ];

  const missing = requiredVars.filter((varName) => !process.env[varName]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
}

// Create OAuth2 transporter with improved error handling
async function createTransporter() {
  try {
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

    oauth2Client.setCredentials({
      refresh_token: GMAIL_REFRESH_TOKEN,
    });

    const accessTokenObj = await oauth2Client.getAccessToken();
    const accessToken = accessTokenObj?.token;

    if (!accessToken) {
      throw new Error("Failed to acquire Gmail access token");
    }

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

    // Verify transporter
    await transporter.verify();

    return transporter;
  } catch (error) {
    logger.error("Failed to create email transporter", error);
    throw new Error("Email service configuration error");
  }
}

// Sanitize HTML content
function sanitizeContent(content: string): string {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
}

// Create email templates
function createEmailTemplates(data: z.infer<typeof emailSchema>) {
  const sanitizedName = sanitizeContent(data.name);
  const sanitizedEmail = sanitizeContent(data.email);
  const sanitizedSubject = sanitizeContent(data.subject);
  const sanitizedMessage = sanitizeContent(data.message);

  const textContent = `
New Contact Form Submission

From: ${sanitizedName} <${sanitizedEmail}>
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

---
Sent at: ${new Date().toISOString()}
  `.trim();

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .content { padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
        .footer { margin-top: 20px; padding: 10px; font-size: 12px; color: #666; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">From:</span> ${sanitizedName} &lt;${sanitizedEmail}&gt;
          </div>
          <div class="field">
            <span class="label">Subject:</span> ${sanitizedSubject}
          </div>
          <div class="field">
            <span class="label">Message:</span>
            <div style="margin-top: 10px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
              ${sanitizedMessage.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
        <div class="footer">
          Sent at: ${new Date().toISOString()}
        </div>
      </div>
    </body>
    </html>
  `;

  return { textContent, htmlContent };
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const clientIP = getClientIP(request);

  try {
    // Rate limiting check
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      const resetDate = new Date(rateLimit.resetTime!);
      logger.warn("Rate limit exceeded", {
        ip: clientIP,
        resetTime: resetDate,
      });

      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
          resetTime: resetDate.toISOString(),
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

    // Parse and validate request body
    const body = await request.json();
    const validatedData = emailSchema.parse(body);

    logger.info("Processing contact form submission", {
      ip: clientIP,
      email: validatedData.email,
      subject: validatedData.subject.substring(0, 50) + "...",
    });

    // Create transporter
    const transporter = await createTransporter();

    // Create email templates
    const { textContent, htmlContent } = createEmailTemplates(validatedData);

    // Email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: validatedData.email,
      subject: `Contact Form: ${validatedData.subject}`,
      text: textContent,
      html: htmlContent,
      headers: {
        "X-Priority": "3",
        "X-MSMail-Priority": "Normal",
        "X-Mailer": "Portfolio Contact Form",
      },
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    const processingTime = Date.now() - startTime;

    logger.info("Email sent successfully", {
      messageId: info.messageId,
      processingTime: `${processingTime}ms`,
      ip: clientIP,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    const processingTime = Date.now() - startTime;

    logger.error("Email sending failed", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      processingTime: `${processingTime}ms`,
      ip: clientIP,
    });

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    const isDevelopment = process.env.NODE_ENV === "development";

    return NextResponse.json(
      {
        success: false,
        error: isDevelopment
          ? error instanceof Error
            ? error.message
            : "Unknown error occurred"
          : "Failed to send message. Please try again later.",
        ...(isDevelopment && {
          details: error instanceof Error ? error.stack : error,
        }),
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
