"use client";

import { Plan } from "@/types/plan";

export default function SelectedPlanCard({ plan }: { plan?: Plan }) {
  if (!plan) return null;

  const subtotal = plan.price ?? 0;
  const iva = plan.iva ?? 0;
  const total = subtotal + iva;
  const features = plan.features ?? [];

  return (
    <div className="max-w-[400px] rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          {plan.name ?? "Plan seleccionado"}
        </h3>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          Seleccionado
        </span>
      </div>

      <ul className="mb-6 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="my-4 border-t border-gray-100" />

      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>
          <span>${subtotal.toLocaleString("es-CL")}</span>
        </div>

        <div className="flex justify-between text-gray-500">
          <span>IVA</span>
          <span>${iva.toLocaleString("es-CL")}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
        <span className="text-base font-medium text-gray-900">Total</span>
        <span className="text-xl font-semibold text-gray-900">
          ${total.toLocaleString("es-CL")}
        </span>
      </div>
    </div>
  );
}
