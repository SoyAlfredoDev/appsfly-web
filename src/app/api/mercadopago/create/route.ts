import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, price, quantity, planId } = body;

    // ✅ VALIDACIONES
    if (!title || !price) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const parsedPrice = Number(price);
    const parsedQuantity = Number(quantity) || 1;

    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      return NextResponse.json({ error: "Precio inválido" }, { status: 400 });
    }

    // ✅ External reference más robusto
    const externalReference = `${planId || "plan"}_${Date.now()}`;

    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              title,
              quantity: parsedQuantity,
              unit_price: parsedPrice,
            },
          ],

          installments: 12,

          payment_methods: {
            excluded_payment_types: [{ id: "ticket" }],
          },

          external_reference: externalReference,

          back_urls: {
            success: "https://appsfly.cl/checkout/success",
            failure: "https://appsfly.cl/checkout/error",
            pending: "https://appsfly.cl/checkout/pending",
          },

          auto_return: "approved",

          notification_url: "https://appsfly.cl/api/mercadopago/webhook",
        }),
      },
    );

    const data = await response.json();

    // ✅ Validar respuesta de MercadoPago
    console.log("DATA: 65", data);
    console.log("RESPONSE: 66", response);

    if (!response.ok || !data.init_point) {
      console.error("Error MercadoPago:", data);

      return NextResponse.json(
        { error: " -->Error creando pago en MercadoPago" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      url: data.init_point,
    });
  } catch (error) {
    console.error("Error creando pago:", error);

    return NextResponse.json(
      { error: "---Error interno del servidor" },
      { status: 500 },
    );
  }
}
export async function GET() {
  return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
}
