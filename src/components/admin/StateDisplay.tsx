import { Loader2, AlertCircle, BarChart3 } from "lucide-react";

export function LoadingState({ message = "Cargando datos..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-slate-400 bg-slate-800/20 rounded-2xl border border-slate-800/50 h-full w-full min-h-[300px]">
      <Loader2 className="animate-spin text-indigo-500 mb-4" size={32} />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}

export function ErrorState({ message = "Error al cargar los datos", description }: { message?: string, description?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-slate-400 bg-red-900/10 rounded-2xl border border-red-900/20 h-full w-full min-h-[300px]">
      <AlertCircle className="text-red-400 mb-4" size={32} />
      <p className="text-sm font-medium text-slate-200">{message}</p>
      {description && <p className="text-xs text-slate-500 mt-2 text-center max-w-sm">{description}</p>}
    </div>
  );
}

export function EmptyState({ message = "No hay datos disponibles", description, icon: Icon = BarChart3 }: { message?: string, description?: string, icon?: any }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-slate-400 bg-slate-800/10 rounded-2xl border border-slate-800/30 h-full w-full min-h-[300px] border-dashed">
      <div className="bg-slate-800/50 p-3 rounded-xl mb-4 text-slate-500">
        <Icon size={24} />
      </div>
      <p className="text-sm font-medium text-slate-300">{message}</p>
      {description && <p className="text-xs text-slate-500 mt-2 text-center max-w-xs">{description}</p>}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-[#1e293b] rounded-2xl p-6 border border-slate-800 overflow-hidden relative">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-slate-700/50 rounded w-1/3"></div>
          <div className="h-8 bg-slate-700/50 rounded w-1/2"></div>
        </div>
        <div className="rounded-full bg-slate-700/50 h-10 w-10"></div>
      </div>
    </div>
  );
}
