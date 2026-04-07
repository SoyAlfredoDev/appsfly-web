import { prisma } from "@/lib/prisma/prisma";

export async function GET() {
  try {
    const result = await prisma.purchase.findMany();

    return Response.json({
      ok: true,
      data: result,
    });
  } catch (error) {
    console.error("DB error:", error);

    return Response.json(
      { ok: false, error: "Error conectando con la base de datos" },
      { status: 500 },
    );
  }
}
