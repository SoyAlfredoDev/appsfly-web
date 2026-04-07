import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const paymentId = searchParams.get("payment_id");

    if (!paymentId) {
      return NextResponse.json(
        { error: "payment_id requerido" },
        { status: 400 },
      );
    }

    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error consultando pago", details: data },
        { status: 500 },
      );
    }

    return NextResponse.json({
      status: data.status,
    });
  } catch (error) {
    console.error("Error verify:", error);

    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
