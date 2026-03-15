"use client";

import { useMemo } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { TrafficDataPoint } from "@/types/admin";
import { formatDate } from "@/lib/admin/formatters";

interface TrafficChartProps {
  data: TrafficDataPoint[];
}

export default function TrafficChart({ data }: TrafficChartProps) {
  // Memoize empty state check
  const hasData = data && data.length > 0;

  if (!hasData) {
    return (
      <div className="h-[300px] flex items-center justify-center text-slate-500 text-sm border border-dashed border-slate-700/50 rounded-xl">
        No hay suficientes datos de tráfico para el período seleccionado.
      </div>
    );
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(value) => {
              const date = new Date(value);
              return new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short' }).format(date);
            }} // Short format like "12 Mar"
            stroke="#475569"
            tick={{ fill: "#64748b", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis 
            stroke="#475569"
            tick={{ fill: "#64748b", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            dx={-10}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#0f172a', 
              borderColor: '#1e293b',
              borderRadius: '0.75rem',
              color: '#f8fafc',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
            }}
            itemStyle={{ color: '#e2e8f0' }}
            labelFormatter={(value) => formatDate(value).split(',')[0]} // Show just the date part
          />
          <Area 
            type="monotone" 
            dataKey="visitors" 
            name="Visitantes"
            stroke="#6366f1" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorVisitors)" 
          />
          <Area 
            type="monotone" 
            dataKey="pageViews" 
            name="Vistas"
            stroke="#10b981" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorViews)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
