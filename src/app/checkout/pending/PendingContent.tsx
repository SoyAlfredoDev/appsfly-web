"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function PendingContent() {
  const params = useSearchParams();
  const router = useRouter();

  const paymentId = params.get("payment_id");

  const attemptsRef = useRef(0);

  useEffect(() => {
    if (!paymentId) {
      router.replace("/checkout/error");
      return;
    }

    const MAX_ATTEMPTS = 10; // ~30 segundos
    const INTERVAL = 3000;

    const interval = setInterval(async () => {
      try {
        attemptsRef.current += 1;

        const res = await fetch(
          `/api/mercadopago/verify?payment_id=${paymentId}`,
          { cache: "no-store" },
        );

        const data = await res.json();

        if (!res.ok) throw new Error("Error verify");

        // ✅ aprobado
        if (data.status === "approved") {
          clearInterval(interval);
          router.replace("/checkout/success");
          return;
        }

        // ❌ rechazado
        if (data.status === "rejected") {
          clearInterval(interval);
          router.replace("/checkout/error");
          return;
        }

        // ⛔ timeout
        if (attemptsRef.current >= MAX_ATTEMPTS) {
          clearInterval(interval);
          router.replace("/checkout/error");
        }
      } catch (error) {
        console.error("Error verificando:", error);
        clearInterval(interval);
        router.replace("/checkout/error");
      }
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [paymentId, router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full bg-white rounded-2xl shadow p-6 text-center"
      >
        {/* 🔄 Spinner */}
        <motion.div
          className="mx-auto mb-4 h-10 w-10 border-4 border-slate-200 border-t-green-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        <h1 className="text-2xl font-semibold text-green-600">
          Pago en proceso
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Estamos confirmando tu pago. Esto puede tardar unos segundos.
        </p>

        <motion.p
          className="mt-6 text-sm text-slate-500"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Verificando estado del pago...
        </motion.p>
      </motion.div>
    </main>
  );
}
