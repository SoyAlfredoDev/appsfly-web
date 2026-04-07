"use client";

export default function ErrorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow p-6 text-center">
        <h1 className="text-2xl font-semibold text-red-600">
          Pago rechazado
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Hubo un problema con tu pago. Intenta nuevamente.
        </p>

        <a href="/" className="mt-6 inline-block w-full btn-base btn-green">
          Volver
        </a>
      </div>
    </main>
  );
}