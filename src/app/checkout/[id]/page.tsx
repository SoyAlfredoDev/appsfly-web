"use client";

import { use, useState } from "react";
import Link from "next/link";
import InputForm from "@/components/ui/inputForm";
import SelectedPlanCard from "@/components/checkout/SelectedPlanCard";
import { plans } from "@/data/plans";

type DocumentType = "boleta" | "factura";

type Props = {
  params: Promise<{ id: string }>;
};

export default function CheckoutPage({ params }: Props) {
  const [documentType, setDocumentType] = useState<DocumentType>("boleta");

  const { id: planId } = use(params);
  const planSelected = plans.find((plan) => plan.id === planId);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
            Confirma tu pedido
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 rounded-xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] lg:grid-cols-2">
          <section className="p-5 md:p-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-slate-900">
                Datos del cliente
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Completa esta información para emitir tu documento y coordinar
                el inicio del servicio.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Tipo de documento
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setDocumentType("boleta")}
                    className={`btn-base cursor-pointer text-left transition ${
                      documentType === "boleta" ? "btn-green" : "btn-white"
                    }`}
                  >
                    <p
                      className={`text-center text-sm font-semibold ${
                        documentType === "boleta"
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      Boleta
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDocumentType("factura")}
                    className={`btn-base cursor-pointer text-left transition ${
                      documentType === "factura" ? "btn-green" : "btn-white"
                    }`}
                  >
                    <p
                      className={`text-center text-sm font-semibold ${
                        documentType === "factura"
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      Factura
                    </p>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Información de contacto
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <InputForm
                    id="nombre"
                    label="Nombre y apellido"
                    type="text"
                    placeholder="Ej: Alfredo Pérez"
                    required
                  />
                  <InputForm
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Ej: contacto@empresa.cl"
                    required
                  />
                  <InputForm
                    id="telefono"
                    label="Teléfono / WhatsApp"
                    type="text"
                    placeholder="+56 9 1234 5678"
                    required
                  />
                  <InputForm
                    id="negocio"
                    label="Nombre del negocio"
                    type="text"
                    placeholder="Ej: AppsFly"
                    required
                  />
                </div>
              </div>

              {documentType === "factura" && (
                <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Datos básicos para factura
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Completa los datos principales de la empresa para la
                      emisión del documento tributario.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <InputForm
                      id="rutEmpresa"
                      label="RUT empresa"
                      type="text"
                      placeholder="Ej: 76.123.456-7"
                      required
                    />
                    <InputForm
                      id="razonSocial"
                      label="Razón social"
                      type="text"
                      placeholder="Ej: Empresa SpA"
                      required
                    />
                    <InputForm
                      id="giro"
                      label="Giro"
                      type="text"
                      placeholder="Ej: Desarrollo de software"
                      required
                    />
                    <InputForm
                      id="comuna"
                      label="Comuna"
                      type="text"
                      placeholder="Ej: Las Condes"
                      required
                    />
                    <div className="md:col-span-2">
                      <InputForm
                        id="direccion"
                        label="Dirección comercial"
                        type="text"
                        placeholder="Ej: Av. Apoquindo 1234, Oficina 602"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="comentarios"
                  className="text-sm font-semibold text-slate-900"
                >
                  Observaciones adicionales
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  rows={2}
                  placeholder="Agrega cualquier observación adicional que consideres relevante para el servicio."
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                  />
                  <span>
                    Acepto recibir comunicaciones, novedades, promociones y
                    contenido relacionado con los servicios de AppsFly a través
                    de correo electrónico, WhatsApp u otros medios de contacto
                    proporcionados.
                  </span>
                </label>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-secondary p-5">
                <h3 className="text-sm font-semibold text-white">
                  Información importante
                </h3>
                <p className="mt-2 text-sm leading-6 text-white">
                  Una vez realizado el pago, nuestro equipo se contactará
                  contigo a la brevedad para agendar una reunión inicial y
                  comenzar el trabajo del servicio contratado.
                </p>
              </div>
            </form>
          </section>

          <aside className="p-5 md:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Resumen del pedido
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Revisa el detalle del servicio seleccionado antes de continuar.
              </p>
            </div>

            <div className="mx-auto flex justify-center">
              <SelectedPlanCard plan={planSelected} />
            </div>

            <div className="mt-6 space-y-3">
              <Link
                href={
                  planSelected?.linkMercadoPago || "https://mpago.li/2QL6Ht9"
                }
                target="_blank"
                className="inline-flex w-full btn-base btn-green"
              >
                Continuar al pago
              </Link>

              <Link href="/" className="inline-flex w-full btn-base btn-white">
                Volver
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm leading-6 text-slate-600">
                El pago confirmará tu solicitud y permitirá a nuestro equipo
                iniciar el proceso de coordinación y planificación del servicio.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
