"use client";

import { LogOut, LayoutDashboard, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { DateRange } from "@/types/admin";
import Link from "next/link";

interface AdminHeaderProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}

export default function AdminHeader({ dateRange, onDateRangeChange }: AdminHeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
      router.refresh();
    } catch (e) {
      console.error("Logout error", e);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <div className="bg-indigo-500/20 p-2 rounded-lg">
                <LayoutDashboard className="text-indigo-400" size={20} />
              </div>
              AppsFly <span className="text-slate-500 font-normal">Analytics</span>
            </div>
            
            <div className="hidden sm:block ml-4 border-l border-slate-700 pl-4">
              <Link 
                href="/" 
                target="_blank"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <Globe size={16} />
                Ver Landing
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex bg-slate-800/50 p-1 rounded-lg border border-slate-700/50">
              <button
                onClick={() => onDateRangeChange("24h")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  dateRange === "24h"
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                24h
              </button>
              <button
                onClick={() => onDateRangeChange("7d")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  dateRange === "7d"
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                7d
              </button>
              <button
                onClick={() => onDateRangeChange("30d")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  dateRange === "30d"
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                30d
              </button>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors border border-transparent hover:border-red-400/20"
              title="Cerrar sesión"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
