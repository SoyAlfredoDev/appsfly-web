import { ReactNode } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { formatNumber, formatPercentage } from "@/lib/admin/formatters";
import { KpiData } from "@/types/admin";
import { CardSkeleton } from "./StateDisplay";

interface KpiCardProps {
  data: KpiData;
  icon: ReactNode;
  format?: "number" | "percentage" | "text";
}

export default function KpiCard({ data, icon, format = "number" }: KpiCardProps) {
  if (data.isLoading) {
    return <CardSkeleton />;
  }

  const formattedValue = 
    format === "number" && typeof data.value === "number" 
      ? formatNumber(data.value)
      : format === "percentage" && typeof data.value === "number"
      ? formatPercentage(data.value)
      : data.value;

  return (
    <div className="bg-[#1e293b] rounded-2xl p-6 border border-slate-800 shadow-sm relative overflow-hidden group hover:border-slate-700 transition-colors">
      {/* Decorative gradient blob */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <p className="text-sm font-medium text-slate-400 mb-1">{data.label}</p>
          <h3 className="text-3xl font-bold text-white tracking-tight">{formattedValue}</h3>
        </div>
        
        <div className="p-3 bg-slate-800/50 rounded-xl text-indigo-400 border border-slate-700/50 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>

      {data.change !== undefined && data.trend && (
        <div className="flex items-center gap-1.5 mt-4 relative z-10">
          <span
            className={`flex items-center gap-0.5 text-xs font-medium px-2 py-1 rounded-md ${
              data.trend === "up"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : data.trend === "down"
                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                : "bg-slate-500/10 text-slate-400 border border-slate-500/20"
            }`}
          >
            {data.trend === "up" ? (
              <TrendingUp size={14} />
            ) : data.trend === "down" ? (
              <TrendingDown size={14} />
            ) : (
              <Minus size={14} />
            )}
            {formatPercentage(data.change)}
          </span>
          <span className="text-xs text-slate-500">vs período anterior</span>
        </div>
      )}
    </div>
  );
}
