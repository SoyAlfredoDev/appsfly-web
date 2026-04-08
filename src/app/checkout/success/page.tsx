"use client";

import { Suspense } from "react";
import SuccessContent from "@/app/checkout/success/SuccessContent";

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-slate-100">
          <p className="text-sm text-slate-500">Verificando pago...</p>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
