"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import InputForm from "@/components/ui/inputForm";
import SelectedPlanCard from "@/components/checkout/SelectedPlanCard";
import { plans } from "@/data/plans";

type Props = {
  params: Promise<{ id: string }>;
};

type FieldRequired = {
  documentType: "boleta" | "factura";
  nombre: string;
  email: string;
  telefono: string;
  negocio: string;
  rutEmpresa: string;
  razonSocial: string;
  giro: string;
  comuna: string;
  direccion: string;
  comentarios: string;
};

export default function CheckoutPage({ params }: Props) {
  const { id: planId } = use(params);
  const planSelected = plans.find((plan) => plan.id === planId);

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [fieldRequired, setFieldRequired] = useState<FieldRequired>({
    documentType: "boleta",
    nombre: "",
    email: "",
    telefono: "",
    negocio: "",
    rutEmpresa: "",
    razonSocial: "",
    giro: "",
    comuna: "",
    direccion: "",
    comentarios: "",
  });
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldRequired = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFieldRequired((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAcceptTerms = () => {
    setAcceptTerms((prev) => !prev);
  };

  const requiredFields = useMemo(() => {
    const commonFields: (keyof FieldRequired)[] = [
      "nombre",
      "email",
      "telefono",
      "negocio",
    ];

    const facturaFields: (keyof FieldRequired)[] = [
      "rutEmpresa",
      "razonSocial",
      "giro",
      "comuna",
      "direccion",
    ];

    return fieldRequired.documentType === "factura"
      ? [...commonFields, ...facturaFields]
      : commonFields;
  }, [fieldRequired.documentType]);

  const missingFields = useMemo(() => {
    return requiredFields.filter((field) => {
      const value = fieldRequired[field];
      return typeof value === "string" && value.trim() === "";
    });
  }, [fieldRequired, requiredFields]);

  const buttonDisabled = useMemo(() => {
    return isSubmitting;
  }, [isSubmitting]);

  const missingFieldsMessage = useMemo(() => {
    const labels: Record<string, string> = {
      nombre: "nombre y apellido",
      email: "email",
      telefono: "teléfono",
      negocio: "nombre del negocio",
      rutEmpresa: "RUT empresa",
      razonSocial: "razón social",
      giro: "giro",
      comuna: "comuna",
      direccion: "dirección comercial",
    };

    if (missingFields.length === 0) return "";

    const names = missingFields.map((field) => labels[field]).filter(Boolean);

    if (names.length === 1) {
      return `Falta completar ${names[0]}.`;
    }

    if (names.length === 2) {
      return `Faltan completar ${names[0]} y ${names[1]}.`;
    }

    return `Faltan completar ${names.length} campos obligatorios para continuar al pago.`;
  }, [missingFields]);

  const handlePay = async () => {
    try {
      setShowErrors(true);

      if (!planSelected) {
        console.error("Plan no seleccionado");
        return;
      }

      if (missingFields.length > 0) {
        return;
      }

      setIsSubmitting(true);

      const res = await fetch("https://appsfly.cl/api/mercadopago/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: planSelected.name,
          price: Number(planSelected.price) * 1.19,
          quantity: 1,
          planId: planSelected.id,
          customer: {
            documentType: fieldRequired.documentType,
            name: fieldRequired.nombre,
            email: fieldRequired.email,
            phone: fieldRequired.telefono,
            businessName: fieldRequired.negocio,
            companyRut: fieldRequired.rutEmpresa,
            companyLegalName: fieldRequired.razonSocial,
            businessActivity: fieldRequired.giro,
            district: fieldRequired.comuna,
            businessAddress: fieldRequired.direccion,
            comments: fieldRequired.comentarios,
            acceptedTerms: acceptTerms,
          },
        }),
      });

      const data = await res.json();
      console.log("DATA: 166", data);
      console.log("RES: 167", fieldRequired);
      console.log("PLAN: 168", planSelected);

      if (!res.ok || !data.url) {
        throw new Error("No se pudo crear el pago");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Error al iniciar pago:", error);
      setIsSubmitting(false);
    }
  };

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
                    onClick={() =>
                      setFieldRequired((prev) => ({
                        ...prev,
                        documentType: "boleta",
                      }))
                    }
                    className={`btn-base cursor-pointer text-left transition ${
                      fieldRequired.documentType === "boleta"
                        ? "btn-green"
                        : "btn-white"
                    }`}
                  >
                    <p
                      className={`text-center text-sm font-semibold ${
                        fieldRequired.documentType === "boleta"
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      Boleta
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setFieldRequired((prev) => ({
                        ...prev,
                        documentType: "factura",
                      }))
                    }
                    className={`btn-base cursor-pointer text-left transition ${
                      fieldRequired.documentType === "factura"
                        ? "btn-green"
                        : "btn-white"
                    }`}
                  >
                    <p
                      className={`text-center text-sm font-semibold ${
                        fieldRequired.documentType === "factura"
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
                    value={fieldRequired.nombre}
                    onChange={handleFieldRequired}
                  />
                  <InputForm
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Ej: contacto@empresa.cl"
                    required
                    value={fieldRequired.email}
                    onChange={handleFieldRequired}
                  />
                  <InputForm
                    id="telefono"
                    label="Teléfono / WhatsApp"
                    type="text"
                    placeholder="+56 9 1234 5678"
                    required
                    value={fieldRequired.telefono}
                    onChange={handleFieldRequired}
                  />
                  <InputForm
                    id="negocio"
                    label="Nombre del negocio"
                    type="text"
                    placeholder="Ej: AppsFly"
                    required
                    value={fieldRequired.negocio}
                    onChange={handleFieldRequired}
                  />
                </div>
              </div>

              {fieldRequired.documentType === "factura" && (
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
                      value={fieldRequired.rutEmpresa}
                      onChange={handleFieldRequired}
                    />
                    <InputForm
                      id="razonSocial"
                      label="Razón social"
                      type="text"
                      placeholder="Ej: Empresa SpA"
                      required
                      value={fieldRequired.razonSocial}
                      onChange={handleFieldRequired}
                    />
                    <InputForm
                      id="giro"
                      label="Giro"
                      type="text"
                      placeholder="Ej: Desarrollo de software"
                      required
                      value={fieldRequired.giro}
                      onChange={handleFieldRequired}
                    />
                    <InputForm
                      id="comuna"
                      label="Comuna"
                      type="text"
                      placeholder="Ej: Las Condes"
                      required
                      value={fieldRequired.comuna}
                      onChange={handleFieldRequired}
                    />
                    <div className="md:col-span-2">
                      <InputForm
                        id="direccion"
                        label="Dirección comercial"
                        type="text"
                        placeholder="Ej: Av. Apoquindo 1234, Oficina 602"
                        required
                        value={fieldRequired.direccion}
                        onChange={handleFieldRequired}
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
                  value={fieldRequired.comentarios}
                  onChange={handleFieldRequired}
                />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    className="mt-1 h-4 w-4 rounded border-slate-300 accent-green-500"
                    onChange={handleAcceptTerms}
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
              <button
                type="button"
                onClick={handlePay}
                disabled={buttonDisabled}
                className={`inline-flex w-full btn-base btn-green ${
                  buttonDisabled ? "cursor-not-allowed opacity-70" : ""
                }`}
              >
                {isSubmitting ? "Redirigiendo..." : "Pagar con Mercado Pago"}
              </button>

              {showErrors && missingFields.length > 0 && (
                <p className="text-sm leading-6 text-amber-600">
                  {missingFieldsMessage}
                </p>
              )}

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
