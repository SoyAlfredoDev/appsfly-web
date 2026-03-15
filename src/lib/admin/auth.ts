import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const AUTH_COOKIE_NAME = "adfly_admin_session";

/**
 * Verifica si la request actual está autenticada
 */
export async function isAuthenticated(request?: NextRequest): Promise<boolean> {
  let sessionCookie;
  
  if (request) {
    // Si se pasa el request, leemos la cookie desde ahí (útil en middleware o route handlers)
    sessionCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  } else {
    // Si no, leemos usando el módulo cookies de next/headers (útil en server components)
    const cookieStore = await cookies();
    sessionCookie = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  }
  
  if (!sessionCookie) return false;
  
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword) {
    console.error("ADMIN_PASSWORD no está configurado en variables de entorno");
    return false; // Por seguridad, si no hay clave, nadie entra
  }
  
  // En un sistema robusto guardaríamos un token/JWT firmado, 
  // pero para un admin simple validamos el matching del valor
  return sessionCookie === expectedPassword;
}

/**
 * Establece la cookie de autenticación
 */
export async function setAuthCookie(password: string): Promise<boolean> {
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword) return false;
  
  if (password === expectedPassword) {
    const cookieStore = await cookies();
    cookieStore.set({
      name: AUTH_COOKIE_NAME,
      value: password,
      httpOnly: true, // No accesible desde JavaScript (document.cookie)
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 días
      sameSite: "strict"
    });
    return true;
  }
  
  return false;
}

/**
 * Elimina la cookie de autenticación (Logout)
 */
export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}
