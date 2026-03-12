"use server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY environment variable.");
}

const resend = new Resend(resendApiKey);

type SendEmailParams = {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
  text?: string;
};

type SendEmailSuccess = {
  success: true;
  id: string;
};

type SendEmailError = {
  success: false;
  error: string;
  details?: unknown;
};

export type SendEmailResult = SendEmailSuccess | SendEmailError;

/**
 * Envía un correo usando Resend.
 * Pensado para emails transaccionales como:
 * - bienvenida
 * - recuperación de contraseña
 * - confirmación de registro
 * - notificaciones del sistema
 */
export async function sendEmail({
  to,
  subject,
  html,
  from = "AppsFly <noreply@appsfly.cl>",
  replyTo,
  text,
}: SendEmailParams): Promise<SendEmailResult> {
  try {
    if (!to || (Array.isArray(to) && to.length === 0)) {
      return {
        success: false,
        error: "Recipient email is required.",
      };
    }

    if (!subject?.trim()) {
      return {
        success: false,
        error: "Email subject is required.",
      };
    }

    if (!html?.trim()) {
      return {
        success: false,
        error: "Email HTML content is required.",
      };
    }

    const payload = {
      from,
      to,
      subject,
      html,
      text,
      ...(replyTo ? { replyTo } : {}),
    };

    const { data, error } = await resend.emails.send(payload);

    if (error) {
      return {
        success: false,
        error: "Resend failed to send the email.",
        details: error,
      };
    }

    if (!data?.id) {
      return {
        success: false,
        error: "Email was sent without a valid response ID.",
        details: data,
      };
    }

    return {
      success: true,
      id: data.id,
    };
  } catch (err) {
    console.error("[sendEmail] Unexpected error:", err);

    return {
      success: false,
      error: "Unexpected error while sending email.",
      details: err instanceof Error ? err.message : err,
    };
  }
}
