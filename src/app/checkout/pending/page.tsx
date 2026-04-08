"use client";

import { Suspense } from "react";
import PendingContent from "@/app/checkout/pending/PendingContent";

export default function PendingPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-slate-100">
          <p className="text-sm text-slate-500">Cargando estado del pago...</p>
        </main>
      }
    >
      <PendingContent />
    </Suspense>
  );
}
