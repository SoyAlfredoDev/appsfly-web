"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Loader2, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Ingresa la contraseña");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error de autenticación");
      }

      // Éxito, refrescamos la página para que el layout server-side lea la cookie
      router.refresh();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Contraseña
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
            <Lock size={18} />
          </div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-slate-600 rounded-xl bg-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            placeholder="••••••••••••"
            disabled={loading}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-400 bg-red-400/10 px-3 py-1.5 rounded-md border border-red-400/20">
            {error}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {loading ? (
          <Loader2 className="animate-spin" size={18} />
        ) : (
          <>
            Acceder
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
