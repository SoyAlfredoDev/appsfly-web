import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Archivo local donde guardaremos las métricas recolectadas para esta versión simple
const DATA_FILE = path.join(process.cwd(), "data", "analytics.json");

// Asegurar que el directorio de datos existe
function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
    } catch (e) {
      console.error("Could not create data dir", e);
    }
  }
  
  if (!fs.existsSync(DATA_FILE)) {
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify({ events: [] }));
    } catch (e) {
      console.error("Could not write init file", e);
    }
  }
}

export async function POST(request: Request) {
  try {
    // Intentar leer el body, pero no fallar si no hay
    const data = await request.json().catch(() => ({}));
    
    // Obtener headers útiles
    const userAgent = request.headers.get("user-agent") || "unknown";
    const referer = request.headers.get("referer") || "direct";
    // Determinar IP de manera segura
    const ip = request.headers.get("x-forwarded-for")?.split(',')[0].trim() || 
               request.headers.get("x-real-ip") || 
               "unknown";
               
    const url = new URL(request.url);
    const path = data.path || url.searchParams.get("path") || "/";
    
    // Crear evento de recolección
    const event = {
      timestamp: Date.now(),
      path,
      userAgent,
      referer,
      // Guardar hash anónimo de IP para visitantes únicos (salt dinámico diario)
      visitorId: createAnonymousId(ip, userAgent),
      // Inferir data extra desde user agent (simple)
      deviceType: inferDeviceType(userAgent),
      browser: inferBrowser(userAgent),
      os: inferOS(userAgent)
    };

    // Si estamos en Vercel Serverless, fs.writeFileSync no persistirá entre ejecuciones
    // Sin embargo, para desarrollo local o mientras la instancia viva sirve como fallback
    // Una implementación pro en Vercel requeriría Vercel KV, Postgres o similar.
    ensureDataDir();
    
    try {
      const fileData = fs.readFileSync(DATA_FILE, "utf-8");
      const json = JSON.parse(fileData);
      
      // Añadimos y mantenemos solo los últimos 10000 eventos para no agotar espacio
      json.events.unshift(event);
      if (json.events.length > 10000) {
        json.events = json.events.slice(0, 10000);
      }
      
      fs.writeFileSync(DATA_FILE, JSON.stringify(json));
    } catch (e) {
      console.error("Error saving analytics event", e);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in collect route:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

// Helpers para anonimización y parseo simple

function createAnonymousId(ip: string, userAgent: string) {
  // Un "hash" muy basico y no criptográfico usando la fecha del día para que expire a las 24h
  const today = new Date().toISOString().split('T')[0];
  let h = 0;
  const str = `${ip}-${userAgent}-${today}`;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  }
  return h.toString(16);
}

function inferDeviceType(ua: string) {
  if (/mobile/i.test(ua)) return "Mobile";
  if (/tablet|ipad/i.test(ua)) return "Tablet";
  return "Desktop";
}

function inferBrowser(ua: string) {
  if (/chrome|crios/i.test(ua) && !/edge|opr\//i.test(ua)) return "Chrome";
  if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) return "Safari";
  if (/firefox|fxios/i.test(ua)) return "Firefox";
  if (/edg/i.test(ua)) return "Edge";
  if (/opr\//i.test(ua)) return "Opera";
  return "Other";
}

function inferOS(ua: string) {
  if (/mac/i.test(ua)) return "macOS";
  if (/windows/i.test(ua)) return "Windows";
  if (/android/i.test(ua)) return "Android";
  if (/iphone|ipad|ipod/i.test(ua)) return "iOS";
  if (/linux/i.test(ua)) return "Linux";
  return "Other";
}
