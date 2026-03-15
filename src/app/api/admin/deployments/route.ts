import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin/auth";
import { getDeployments } from "@/lib/vercel/api";

export async function GET(request: Request) {
  // Verificar autenticación
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  // Leer parámetros de query de forma segura
  const { searchParams } = new URL(request.url);
  const limit = Math.min(Number(searchParams.get("limit") || 10), 100);

  try {
    const deployments = await getDeployments(limit);
    return NextResponse.json({ deployments });
  } catch (error) {
    console.error("Error en API /deployments:", error);
    return NextResponse.json(
      { error: "Error interno al obtener deployments" },
      { status: 500 }
    );
  }
}
