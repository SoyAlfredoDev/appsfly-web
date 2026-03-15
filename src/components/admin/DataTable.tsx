"use client";

import { ReactNode } from "react";
import { formatNumber } from "@/lib/admin/formatters";

interface Column<T> {
  key: keyof T | string;
  header: string;
  className?: string;
  render?: (item: T) => ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  total?: number; // Used for calculating percentages if needed
}

export default function DataTable<T>({ data, columns, total }: DataTableProps<T>) {
  if (!data || data.length === 0) {
    return (
      <div className="p-4 text-center text-slate-500 text-sm">
        No hay datos para mostrar en este período.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-500">
            {columns.map((col, index) => (
              <th 
                key={String(col.key)} 
                className={`py-3 px-4 font-medium ${col.className || ""} ${index === 0 ? "pl-2" : ""} ${index === columns.length - 1 ? "pr-2 text-right" : ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-slate-800/50">
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-slate-800/30 transition-colors group">
              {columns.map((col, colIndex) => {
                const cellValue = (item as any)[col.key];
                
                return (
                  <td 
                    key={String(col.key)} 
                    className={`py-3 px-4 text-slate-300 ${col.className || ""} ${colIndex === 0 ? "pl-2 font-medium" : ""} ${colIndex === columns.length - 1 ? "pr-2 text-right text-slate-400" : ""}`}
                  >
                    {col.render ? (
                      col.render(item)
                    ) : typeof cellValue === "number" ? (
                      formatNumber(cellValue)
                    ) : (
                      String(cellValue || "")
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
