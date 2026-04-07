import { NextRequest, NextResponse } from "next/server";
import { createSale } from "@/lib/services/sales";

export async function GET() {
  return NextResponse.json({ ok: true }, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("📩 Webhook MercadoPago recibido:", body);

    const paymentOperationId = body?.data?.id
      ? String(body.data.id)
      : body?.paymentOperationId
        ? String(body.paymentOperationId)
        : null;

    console.log("Body completo:", body);
    console.log("ID de operación de pago:", paymentOperationId);
    /*const sale = {
      documentType: body?.documentType ?? "webhook",
      name: body?.name ?? null,
      email: body?.email ?? null,
      phone: body?.phone ?? null,
      businessName: body?.businessName ?? null,
      companyRut: body?.companyRut ?? null,
      companyLegalName: body?.companyLegalName ?? null,
      businessActivity: body?.businessActivity ?? null,
      district: body?.district ?? null,
      businessAddress: body?.businessAddress ?? null,
      acceptedTerms: body?.acceptedTerms ?? false,
      paymentDate: body?.paymentDate ? new Date(body.paymentDate) : new Date(),
      paymentOperationId,
    };

    await createSale(sale);*/

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Error en webhook:", error);

    return NextResponse.json(
      { error: "Error procesando webhook" },
      { status: 500 },
    );
  }
}
