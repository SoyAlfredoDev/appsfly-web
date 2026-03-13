export function contactRequestEmailTemplate({
  name,
  email,
  phone,
  service,
  contactMethod,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  service: string;
  contactMethod: string;
  message: string;
}) {
  return `
  <div style="margin:0; padding:0; background-color:#f4f7fb;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f7fb; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px; background:#ffffff; border-radius:20px; overflow:hidden; border:1px solid #e7edf5; box-shadow:0 8px 30px rgba(15, 23, 42, 0.06);">
            
            <tr>
              <td style="padding:28px 32px; background:linear-gradient(135deg, #1d4ed8 0%, #10b981 100%);">
                <p style="margin:0; font-family:Arial, sans-serif; font-size:13px; line-height:20px; color:#dbeafe; letter-spacing:0.3px;">
                  Nueva solicitud desde
                </p>
                <h1 style="margin:8px 0 0; font-family:Arial, sans-serif; font-size:28px; line-height:34px; color:#ffffff; font-weight:700;">
                  AppsFly.cl
                </h1>
              </td>
            </tr>

            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 24px; font-family:Arial, sans-serif; font-size:16px; line-height:26px; color:#334155;">
                  Un usuario ha enviado una solicitud de información desde el formulario de contacto del sitio web.
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate; border-spacing:0; background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; overflow:hidden;">
                  <tr>
                    <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0; width:180px; font-family:Arial, sans-serif; font-size:14px; font-weight:700; color:#0f172a;">
                      Nombre
                    </td>
                    <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0; font-family:Arial, sans-serif; font-size:14px; color:#334155;">
                      ${escapeHtml(name)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0; width:180px; font-family:Arial, sans-serif; font-size:14px; font-weight:700; color:#0f172a;">
                      Telefono
                    </td>
                    <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0; font-family:Arial, sans-serif; font-size:14px; color:#334155;">
                      ${escapeHtml(phone)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0; width:180px; font-family:Arial, sans-serif; font-size:14px; font-weight:700; color:#0f172a;">
                      Email
                    </td>
                    <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0; font-family:Arial, sans-serif; font-size:14px; color:#334155;">
                      ${escapeHtml(email)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0; width:180px; font-family:Arial, sans-serif; font-size:14px; font-weight:700; color:#0f172a;">
                      Servicio solicitado
                    </td>
                    <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0; font-family:Arial, sans-serif; font-size:14px; color:#334155;">
                      ${escapeHtml(service)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0; width:180px; font-family:Arial, sans-serif; font-size:14px; font-weight:700; color:#0f172a;">
                      Medio de contacto
                    </td>
                    <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0; font-family:Arial, sans-serif; font-size:14px; color:#334155;">
                      ${escapeHtml(contactMethod)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:16px 20px; vertical-align:top; width:180px; font-family:Arial, sans-serif; font-size:14px; font-weight:700; color:#0f172a;">
                      Proyecto / mensaje
                    </td>
                    <td style="padding:16px 20px; font-family:Arial, sans-serif; font-size:14px; line-height:24px; color:#334155;">
                      ${escapeHtml(message).replace(/\n/g, "<br />")}
                    </td>
                  </tr>
                </table>

                <div style="margin-top:24px; padding:16px 18px; background:#ecfdf5; border:1px solid #bbf7d0; border-radius:14px;">
                  <p style="margin:0; font-family:Arial, sans-serif; font-size:13px; line-height:22px; color:#166534;">
                    Este mensaje fue generado automáticamente desde el formulario de contacto de <strong>AppsFly.cl</strong>.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 32px; background:#f8fafc; border-top:1px solid #e2e8f0;">
                <p style="margin:0; font-family:Arial, sans-serif; font-size:12px; line-height:20px; color:#64748b; text-align:center;">
                  AppsFly.cl · Notificación automática de solicitud comercial
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
