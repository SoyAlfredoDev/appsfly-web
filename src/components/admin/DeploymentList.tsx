import { DeploymentEntry } from "@/types/admin";
import { formatRelativeTime, getStatusColor, truncateUrl } from "@/lib/admin/formatters";
import { ExternalLink, GitCommit, CheckCircle2, Clock, XCircle, Loader2 } from "lucide-react";

interface DeploymentListProps {
  deployments: DeploymentEntry[];
  isLoading?: boolean;
}

export default function DeploymentList({ deployments, isLoading }: DeploymentListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="animate-pulse flex items-center h-16 bg-slate-800/20 rounded-xl border border-slate-800/50"></div>
        ))}
      </div>
    );
  }

  if (!deployments || deployments.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 text-sm border border-dashed border-slate-800 rounded-xl bg-slate-900/50">
        No se encontraron deployments recientes.
      </div>
    );
  }

  // Obtenemos el último release exitoso para identificar "Actual"
  const latestReady = deployments.find(d => d.state === "READY")?.uid;

  const getStatusIcon = (state: string) => {
    switch (state) {
      case "READY": return <CheckCircle2 size={16} />;
      case "ERROR":
      case "CANCELED": return <XCircle size={16} />;
      case "BUILDING":
      case "INITIALIZING": return <Loader2 size={16} className="animate-spin" />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className="space-y-3">
      {deployments.map((deployment) => (
        <div 
          key={deployment.uid} 
          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#1e293b]/50 hover:bg-[#1e293b] rounded-xl border border-slate-800 transition-colors gap-4"
        >
          <div className="flex items-start gap-4">
            <div className={`mt-0.5 mt-1 rounded-full p-1.5 ${getStatusColor(deployment.state).replace('bg-', 'bg-opacity-20 bg-').split(' ')[0]} ${getStatusColor(deployment.state).split(' ')[0]}`}>
              {getStatusIcon(deployment.state)}
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-slate-200">
                  {deployment.url ? (
                    <a 
                      href={deployment.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                    >
                      {truncateUrl(deployment.url, 40)}
                      <ExternalLink size={14} className="text-slate-500" />
                    </a>
                  ) : (
                    <span className="text-slate-400">Despliegue en proceso...</span>
                  )}
                </span>
                
                {deployment.uid === latestReady && (
                  <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-md">
                    Producción
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {formatRelativeTime(deployment.created)}
                </span>
                
                {deployment.meta?.githubCommitMessage && (
                  <span className="flex items-center gap-1 text-slate-400 max-w-[200px] truncate" title={deployment.meta.githubCommitMessage}>
                    <GitCommit size={12} />
                    {deployment.meta.githubCommitMessage.split('\n')[0]}
                  </span>
                )}
                
                {deployment.meta?.githubCommitAuthorName && (
                  <span className="flex items-center gap-1">
                    por {deployment.meta.githubCommitAuthorName}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-0 border-slate-800/50">
            <span className={`px-2.5 py-1 text-xs font-medium rounded-md border ${getStatusColor(deployment.state)}`}>
              {deployment.state}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
