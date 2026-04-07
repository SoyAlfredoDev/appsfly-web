import { prisma } from "@/lib/prisma/prisma";

type PurchaseBody = {
  documentType?: "boleta" | "factura";
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  companyRut?: string;
  companyLegalName?: string;
  businessActivity?: string;
  district?: string;
  businessAddress?: string;
  acceptedTerms?: boolean;
  paymentDate?: string;
  paymentOperationId?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as PurchaseBody;

    const documentType = body.documentType?.trim();
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const businessName = body.businessName?.trim();
    const companyRut = body.companyRut?.trim();
    const companyLegalName = body.companyLegalName?.trim();
    const businessActivity = body.businessActivity?.trim();
    const district = body.district?.trim();
    const businessAddress = body.businessAddress?.trim();
    const acceptedTerms = body.acceptedTerms;
    const paymentOperationId = body.paymentOperationId?.trim();

    if (!documentType || !["boleta", "factura"].includes(documentType)) {
      return Response.json(
        { ok: false, error: "Tipo de documento inválido" },
        { status: 400 },
      );
    }

    if (!name || !email || !phone || !businessName) {
      return Response.json(
        { ok: false, error: "Faltan campos obligatorios" },
        { status: 400 },
      );
    }

    if (acceptedTerms !== true) {
      return Response.json(
        { ok: false, error: "Debes aceptar los términos" },
        { status: 400 },
      );
    }

    if (documentType === "factura") {
      if (
        !companyRut ||
        !companyLegalName ||
        !businessActivity ||
        !district ||
        !businessAddress
      ) {
        return Response.json(
          {
            ok: false,
            error: "Para factura faltan datos obligatorios de empresa",
          },
          { status: 400 },
        );
      }
    }

    const purchase = await prisma.purchase.create({
      data: {
        documentType,
        name,
        email,
        phone,
        businessName,
        companyRut: companyRut || null,
        companyLegalName: companyLegalName || null,
        businessActivity: businessActivity || null,
        district: district || null,
        businessAddress: businessAddress || null,
        acceptedTerms,
        paymentDate: body.paymentDate ? new Date(body.paymentDate) : null,
        paymentOperationId: paymentOperationId || null,
      },
    });

    return Response.json({
      ok: true,
      purchase,
    });
  } catch (error) {
    console.error("Error creating purchase:", error);

    return Response.json(
      { ok: false, error: "Error registrando la venta" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const sales = await prisma.sale.findMany();
    return Response.json({
      ok: true,
      sales,
    });
  } catch (error) {
    console.error("Error getting sales:", error);

    return Response.json(
      { ok: false, error: "Error obteniendo las ventas" },
      { status: 500 },
    );
  }
}
