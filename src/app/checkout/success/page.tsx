"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SuccessPage() {
  const params = useSearchParams();
  const router = useRouter();

  const paymentId = params.get("payment_id");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (!paymentId) {
          setError(true);
          return;
        }

        const res = await fetch(
          `/api/mercadopago/verify?payment_id=${paymentId}`,
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error("Error verificando");
        }

        if (data.status === "approved") {
          setLoading(false);
        } else if (data.status === "rejected") {
          router.replace("/checkout/error");
        } else {
          router.replace("/checkout/pending");
        }
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    verifyPayment();
  }, [paymentId, router]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="h-10 w-10 border-4 border-slate-200 border-t-green-500 rounded-full"
        />
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Error verificando el pago</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-2xl shadow p-6 text-center"
      >
        <h1 className="text-2xl font-semibold text-green-600">
          Pago confirmado
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Tu pago fue aprobado correctamente.
        </p>

        <a href="/" className="mt-6 inline-block w-full btn-base btn-green">
          Volver al inicio
        </a>
      </motion.div>
    </main>
  );
}
