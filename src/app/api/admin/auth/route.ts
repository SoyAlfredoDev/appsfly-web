import { NextResponse } from "next/server";
import { setAuthCookie, clearAuthCookie } from "@/lib/admin/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, action } = body;

    // Logout
    if (action === "logout") {
      await clearAuthCookie();
      return NextResponse.json({ success: true, message: "Sesión cerrada" });
    }

    // Login
    if (!password) {
      return NextResponse.json(
        { success: false, error: "Contraseña requerida" },
        { status: 400 }
      );
    }

    const isValid = await setAuthCookie(password);

    if (isValid) {
      return NextResponse.json({ success: true, message: "Autenticación exitosa" });
    } else {
      return NextResponse.json(
        { success: false, error: "Contraseña incorrecta" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error in auth route:", error);
    return NextResponse.json(
      { success: false, error: "Error de servidor" },
      { status: 500 }
    );
  }
}
