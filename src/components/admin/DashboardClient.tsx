"use client";

import { useState, useEffect } from "react";
import { Users, MousePointerClick, RefreshCcw, Server, Activity, ArrowUpRight, Globe, Monitor, Smartphone, Layout } from "lucide-react";
import { AnalyticsSummary, DeploymentEntry, DateRange } from "@/types/admin";
import { formatNumber, formatPercentage } from "@/lib/admin/formatters";

import AdminHeader from "./AdminHeader";
import KpiCard from "./KpiCard";
import TrafficChart from "./TrafficChart";
import DeploymentList from "./DeploymentList";
import DataTable from "./DataTable";
import { ErrorState, LoadingState, EmptyState } from "./StateDisplay";

export default function DashboardClient() {
  const [dateRange, setDateRange] = useState<DateRange>("7d");
  
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [deployments, setDeployments] = useState<DeploymentEntry[] | null>(null);
  
  const [isLoadingAnalytics, setIsLoadingAnalytics] = useState(true);
  const [isLoadingDeployments, setIsLoadingDeployments] = useState(true);
  
  const [analyticsError, setAnalyticsError] = useState("");
  const [deploymentsError, setDeploymentsError] = useState("");

  const fetchAnalytics = async (range: DateRange) => {
    setIsLoadingAnalytics(true);
    setAnalyticsError("");
    try {
      const res = await fetch(`/api/admin/analytics?range=${range}`);
      if (!res.ok) throw new Error("Error obteniendo métricas");
      const data = await res.json();
      setAnalytics(data);
    } catch (e: any) {
      setAnalyticsError(e.message);
    } finally {
      setIsLoadingAnalytics(false);
    }
  };

  const fetchDeployments = async () => {
    setIsLoadingDeployments(true);
    setDeploymentsError("");
    try {
      const res = await fetch("/api/admin/deployments?limit=5");
      if (!res.ok) throw new Error("Error obteniendo deployments");
      const data = await res.json();
      setDeployments(data.deployments || []);
    } catch (e: any) {
      setDeploymentsError(e.message);
    } finally {
      setIsLoadingDeployments(false);
    }
  };

  useEffect(() => {
    fetchAnalytics(dateRange);
  }, [dateRange]);

  useEffect(() => {
    fetchDeployments();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader dateRange={dateRange} onDateRangeChange={setDateRange} />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Analytics Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Activity className="text-indigo-400" size={24} />
              Tráfico y Audiencia
            </h2>
            {analytics?.available === false && (
              <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-1 rounded-md">
                Modo Fallback: Datos locales (Visita la landing para generarlos)
              </span>
            )}
          </div>

          {isLoadingAnalytics ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <KpiCard data={{ label: "Cargando...", value: 0, isLoading: true }} icon={<Users />} />
              <KpiCard data={{ label: "Cargando...", value: 0, isLoading: true }} icon={<MousePointerClick />} />
              <KpiCard data={{ label: "Cargando...", value: 0, isLoading: true }} icon={<RefreshCcw />} />
            </div>
          ) : analyticsError ? (
            <ErrorState message="No se pudieron cargar las métricas" description={analyticsError} />
          ) : analytics ? (
            <>
              {/* KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KpiCard 
                  data={{ label: "Visitantes Únicos", value: analytics.totalVisitors }} 
                  icon={<Users size={24} />} 
                />
                <KpiCard 
                  data={{ label: "Vistas de Página", value: analytics.totalPageViews }} 
                  icon={<MousePointerClick size={24} />} 
                />
                <KpiCard 
                  data={{ 
                    label: "Vistas por Visitante", 
                    value: analytics.totalVisitors > 0 ? analytics.totalPageViews / analytics.totalVisitors : 0 
                  }} 
                  format="number"
                  icon={<Layout size={24} />} 
                />
                <KpiCard 
                  data={{ 
                    label: "Estado de Tracking", 
                    value: analytics.available ? "Activo" : "Esperando" 
                  }} 
                  format="text"
                  icon={<Activity size={24} />} 
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Traffic Chart */}
                <div className="lg:col-span-2 bg-[#1e293b] rounded-2xl p-6 border border-slate-800 shadow-sm relative overflow-hidden">
                  <h3 className="text-base font-semibold text-slate-200 mb-6 flex items-center gap-2">
                    Evolución del Tráfico
                  </h3>
                  <TrafficChart data={analytics.traffic} />
                </div>

                {/* Top Pages */}
                <div className="bg-[#1e293b] rounded-2xl p-6 border border-slate-800 shadow-sm relative overflow-hidden flex flex-col h-full">
                  <h3 className="text-base font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <Layout size={18} className="text-indigo-400" />
                    Páginas Principales
                  </h3>
                  <div className="flex-1 overflow-auto -mx-4 px-4">
                    <DataTable 
                      data={analytics.topPages} 
                      columns={[
                        { key: "path", header: "Ruta", render: (item) => <span className="font-mono text-xs">{item.path}</span> },
                        { key: "views", header: "Vistas" }
                      ]} 
                    />
                  </div>
                </div>
              </div>

              {/* Demographics & Tech Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                <div className="bg-[#1e293b] rounded-2xl p-5 border border-slate-800">
                  <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <ArrowUpRight size={16} className="text-emerald-400" /> Referrers
                  </h3>
                  <DataTable 
                    data={analytics.topReferrers} 
                    columns={[
                      { key: "referrer", header: "Fuente" },
                      { key: "visitors", header: "Visitas" }
                    ]} 
                  />
                </div>
                
                <div className="bg-[#1e293b] rounded-2xl p-5 border border-slate-800">
                  <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <Globe size={16} className="text-blue-400" /> Dispositivos
                  </h3>
                  <DataTable 
                    data={analytics.topDevices} 
                    columns={[
                      { key: "name", header: "Tipo" },
                      { key: "visitors", header: "Visitas" }
                    ]} 
                  />
                </div>

                <div className="bg-[#1e293b] rounded-2xl p-5 border border-slate-800">
                  <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <Monitor size={16} className="text-purple-400" /> Navegadores
                  </h3>
                  <DataTable 
                    data={analytics.topBrowsers} 
                    columns={[
                      { key: "name", header: "Browser" },
                      { key: "visitors", header: "Visitas" }
                    ]} 
                  />
                </div>

                <div className="bg-[#1e293b] rounded-2xl p-5 border border-slate-800">
                  <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <Smartphone size={16} className="text-pink-400" /> Sist. Operativos
                  </h3>
                  <DataTable 
                    data={analytics.topOs} 
                    columns={[
                      { key: "name", header: "SO" },
                      { key: "visitors", header: "Visitas" }
                    ]} 
                  />
                </div>
              </div>
            </>
          ) : (
            <EmptyState message="No hay datos de analíticas disponibles aún" />
          )}
        </section>

        {/* Technical Section */}
        <section className="pt-8 mt-8 border-t border-slate-800/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Server className="text-slate-400" size={24} />
              Estado Técnico y Deployments
            </h2>
          </div>
          
          <div className="bg-[#1e293b] rounded-2xl p-6 border border-slate-800 shadow-sm relative overflow-hidden">
            {isLoadingDeployments ? (
              <DeploymentList deployments={[]} isLoading={true} />
            ) : deploymentsError ? (
              <ErrorState 
                message="Error al conectar con la API de Vercel" 
                description="Verifica que VERCEL_API_TOKEN y VERCEL_PROJECT_ID estén configurados correctamente (.env.local)."
              />
            ) : (
              <DeploymentList deployments={deployments || []} />
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
