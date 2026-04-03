import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Obtener body
    const body = await req.json();
    console.log("🔔 Webhook recibido:");
    console.log("🔔 Webhook recibido:");
    console.log("🔔 Webhook recibido:");
    console.log(JSON.stringify(body, null, 2));

    // Extra útil
    if (body.type === "payment") {
      const paymentId = body?.data?.id;

      console.log("💰 Payment ID:", paymentId);
    }

    // SIEMPRE responder 200 OK
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Error en webhook:", error);

    return NextResponse.json(
      { error: "Error procesando webhook" },
      { status: 500 },
    );
  }
}
