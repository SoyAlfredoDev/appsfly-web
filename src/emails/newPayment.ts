export function newPaymentEmailTemplate({
  name,
  email,
  phone,
  service,
  contactMethod,
  message,
}: {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  contactMethod?: string;
  message?: string;
}) {
  const safe = (value?: string) => value || "No especificado";

  return `
  <div style="font-family: Arial, sans-serif; background-color: #f6f9fc; padding: 20px;">
    
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e5e7eb;">
      
      <!-- Header -->
      <div style="margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 22px; color: #111827;">
          🎉 Nuevo cliente adquirido
        </h1>
        <p style="margin: 4px 0 0; color: #6b7280; font-size: 14px;">
          Se ha recibido un nuevo pago correctamente
        </p>
      </div>

      <!-- Divider -->
      <div style="height: 1px; background: #e5e7eb; margin: 16px 0;"></div>

      <!-- Data -->
      <div style="font-size: 14px; color: #111827; line-height: 1.6;">
        
        <p><strong>Nombre:</strong> ${safe(name)}</p>
        <p><strong>Email:</strong> ${safe(email)}</p>
        <p><strong>Teléfono:</strong> ${safe(phone)}</p>
        <p><strong>Servicio:</strong> ${safe(service)}</p>
        <p><strong>Medio de contacto:</strong> ${safe(contactMethod)}</p>

        ${message ? `<p><strong>Mensaje:</strong><br/>${message}</p>` : ""}

        <p style="margin-top: 12px; color: #6b7280;">
          <strong>Fecha:</strong> ${new Date().toLocaleString()}
        </p>

      </div>

      <!-- Footer -->
      <div style="margin-top: 24px; font-size: 12px; color: #9ca3af; text-align: center;">
        Este correo fue generado automáticamente por tu sistema
      </div>

    </div>

  </div>
  `;
}
