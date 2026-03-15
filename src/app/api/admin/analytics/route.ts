import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin/auth";
import fs from "fs";
import path from "path";
import { AnalyticsSummary } from "@/types/admin";

const DATA_FILE = path.join(process.cwd(), "data", "analytics.json");

export async function GET(request: Request) {
  // Verificar autenticación
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  // Leer parámetros (timeframe: 24h, 7d, 30d, all)
  const { searchParams } = new URL(request.url);
  const range = searchParams.get("range") || "7d";
  
  const now = Date.now();
  let fromTimestamp = 0;
  
  if (range === "24h") fromTimestamp = now - 24 * 60 * 60 * 1000;
  else if (range === "7d") fromTimestamp = now - 7 * 24 * 60 * 60 * 1000;
  else if (range === "30d") fromTimestamp = now - 30 * 24 * 60 * 60 * 1000;

  try {
    // Si no existe el archivo aún, devolver estado vacío de fallback
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json(getEmptyFallbackData());
    }

    const fileContent = fs.readFileSync(DATA_FILE, "utf-8");
    const json = JSON.parse(fileContent);
    const events = json.events || [];
    
    // Filtrar por fechas
    const filteredEvents = events.filter((e: any) => e.timestamp >= fromTimestamp);
    
    if (filteredEvents.length === 0) {
      return NextResponse.json(getEmptyFallbackData());
    }

    // Calcular métricas
    const uniqueVisitors = new Set();
    const pathsMap: Record<string, { views: number, visitors: Set<string> }> = {};
    const refsMap: Record<string, Set<string>> = {};
    const browsersMap: Record<string, Set<string>> = {};
    const osMap: Record<string, Set<string>> = {};
    const devicesMap: Record<string, Set<string>> = {};

    filteredEvents.forEach((ev: any) => {
      uniqueVisitors.add(ev.visitorId);
      
      // Top Pages
      const p = ev.path || "/";
      if (!pathsMap[p]) pathsMap[p] = { views: 0, visitors: new Set() };
      pathsMap[p].views++;
      pathsMap[p].visitors.add(ev.visitorId);
      
      // Top Referrers
      const ref = cleanReferrer(ev.referer);
      if (!refsMap[ref]) refsMap[ref] = new Set();
      refsMap[ref].add(ev.visitorId);

      // Browsers
      const browser = ev.browser || "Unknown";
      if (!browsersMap[browser]) browsersMap[browser] = new Set();
      browsersMap[browser].add(ev.visitorId);
      
      // OS
      const os = ev.os || "Unknown";
      if (!osMap[os]) osMap[os] = new Set();
      osMap[os].add(ev.visitorId);
      
      // Devices
      const dev = ev.deviceType || "Desktop";
      if (!devicesMap[dev]) devicesMap[dev] = new Set();
      devicesMap[dev].add(ev.visitorId);
    });

    // Formatear respuesta
    const topPages = Object.entries(pathsMap)
      .map(([path, data]) => ({ path, views: data.views, visitors: data.visitors.size }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);
      
    const topReferrers = Object.entries(refsMap)
      .map(([referrer, visitors]) => ({ referrer, visitors: visitors.size }))
      .sort((a, b) => b.visitors - a.visitors)
      .slice(0, 5);

    const topBrowsers = Object.entries(browsersMap)
      .map(([name, set]) => ({ name, visitors: set.size }))
      .sort((a, b) => b.visitors - a.visitors);
      
    const topOs = Object.entries(osMap)
      .map(([name, set]) => ({ name, visitors: set.size }))
      .sort((a, b) => b.visitors - a.visitors);
      
    const topDevices = Object.entries(devicesMap)
      .map(([name, set]) => ({ name, visitors: set.size }))
      .sort((a, b) => b.visitors - a.visitors);

    const summary: AnalyticsSummary = {
      from: new Date(fromTimestamp).toISOString(),
      to: new Date(now).toISOString(),
      totalVisitors: uniqueVisitors.size,
      totalPageViews: filteredEvents.length,
      traffic: generateTrafficSerie(filteredEvents, range),
      topPages,
      topReferrers,
      topCountries: [{ country: "Chile", code: "CL", visitors: uniqueVisitors.size }], // Fallback (IP geo no implementado sin servicio extra)
      topBrowsers,
      topOs,
      topDevices,
      available: true
    };
    
    return NextResponse.json(summary);

  } catch (error) {
    console.error("Error en API /analytics:", error);
    return NextResponse.json(getEmptyFallbackData());
  }
}

// Helpers

function getEmptyFallbackData(): AnalyticsSummary {
  return {
    from: new Date().toISOString(),
    to: new Date().toISOString(),
    totalVisitors: 0,
    totalPageViews: 0,
    traffic: [],
    topPages: [],
    topReferrers: [],
    topCountries: [],
    topBrowsers: [],
    topOs: [],
    topDevices: [],
    available: false
  };
}

function cleanReferrer(ref: string): string {
  if (!ref || ref === "direct" || ref === "") return "Direct";
  try {
    const url = new URL(ref);
    if (url.hostname.includes("appsfly.cl") || url.hostname.includes("localhost")) return "Internal";
    return url.hostname;
  } catch (e) {
    return "Direct";
  }
}

function generateTrafficSerie(events: any[], range: string) {
  // Simplificado para crear puntos para el gráfico
  const serie = [];
  const mapData = new Map();
  
  events.forEach(e => {
    // Agrupar por día
    const date = new Date(e.timestamp).toISOString().split('T')[0];
    if (!mapData.has(date)) {
      mapData.set(date, { views: 0, visitors: new Set() });
    }
    const dayData = mapData.get(date);
    dayData.views++;
    dayData.visitors.add(e.visitorId);
  });
  
  // Convertir a array ordenado
  const sortedDays = Array.from(mapData.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  
  return sortedDays.map(([date, data]) => ({
    date,
    visitors: data.visitors.size,
    pageViews: data.views
  }));
}
