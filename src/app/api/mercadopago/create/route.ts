import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, price, quantity, planId } = body;

    if (!process.env.MP_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: "Falta MP_ACCESS_TOKEN en variables de entorno" },
        { status: 500 },
      );
    }

    if (!title || price === undefined || price === null) {
      return NextResponse.json(
        { error: "Datos inválidos: falta title o price" },
        { status: 400 },
      );
    }

    const parsedPrice = Math.round(Number(price));
    const parsedQuantity = Math.max(1, Number(quantity) || 1);

    if (Number.isNaN(parsedPrice) || parsedPrice <= 0) {
      return NextResponse.json({ error: "Precio inválido" }, { status: 400 });
    }

    const externalReference = `${planId || "plan"}_${Date.now()}`;

    const mpResponse = await fetch(
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
              currency_id: "CLP",
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

    const rawText = await mpResponse.text();

    let mpData: any = null;
    try {
      mpData = JSON.parse(rawText);
    } catch {
      mpData = { raw: rawText };
    }

    console.log("MP status:", mpResponse.status);
    console.log("MP response:", mpData);

    if (!mpResponse.ok || !mpData?.init_point) {
      return NextResponse.json(
        {
          error: "Error creando pago en MercadoPago",
          mpStatus: mpResponse.status,
          mpResponse: mpData,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      url: mpData.init_point,
    });
  } catch (error) {
    console.error("Error creando pago:", error);

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
}
