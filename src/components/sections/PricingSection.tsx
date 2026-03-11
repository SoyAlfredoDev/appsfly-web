"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    badge: "",
    description:
      "Ideal para negocios que necesitan una página profesional para presentar sus servicios y captar clientes.",
    price: "Desde $299",
    features: [
      "Diseño moderno y responsive",
      "Hasta 5 secciones",
      "Formulario de contacto",
      "Integración con WhatsApp",
      "Optimización básica de velocidad",
    ],
    highlighted: false,
    buttonText: "Contratar",
  },
  {
    name: "Sitio Web Profesional",
    badge: "Más vendido",
    description:
      "La opción más equilibrada para empresas que buscan una presencia digital sólida y más completa.",
    price: "Desde $599",
    features: [
      "Diseño moderno y personalizado",
      "Hasta 8 secciones",
      "Integración con WhatsApp y formularios",
      "Optimización SEO básica",
      "Estructura orientada a conversión",
    ],
    highlighted: true,
    buttonText: "Contratar",
  },
  {
    name: "Tienda Online",
    badge: "",
    description:
      "Pensado para negocios que quieren vender productos o servicios por internet de forma profesional.",
    price: "Desde $899",
    features: [
      "Catálogo de productos",
      "Carrito de compra",
      "Proceso de compra optimizado",
      "Integración de pagos",
      "Panel de administración",
    ],
    highlighted: false,
    buttonText: "Contratar",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-background py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-12 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Planes y precios
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-dark md:text-4xl">
            Algunos de nuestros planes más vendidos
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Estos son algunos de los planes más solicitados por nuestros
            clientes. Si necesitas algo diferente, también desarrollamos
            soluciones personalizadas.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className={`relative rounded-[28px] border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlighted
                  ? "border-primary bg-dark text-white lg:scale-[1.03]"
                  : "border-border bg-white text-dark"
              }`}
            >
              {plan.badge && (
                <div className="mb-6 inline-flex rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
                  {plan.badge}
                </div>
              )}

              <div className="mb-5">
                <h3 className="mb-3 text-2xl font-bold">{plan.name}</h3>
                <p
                  className={`leading-relaxed ${
                    plan.highlighted ? "text-white/75" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <p
                  className={`text-4xl font-bold tracking-tight ${
                    plan.highlighted ? "text-white" : "text-dark"
                  }`}
                >
                  {plan.price}
                </p>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted
                          ? "bg-white/10 text-primary"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Check size={14} />
                    </span>
                    <span
                      className={
                        plan.highlighted ? "text-white/85" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-white hover:-translate-y-0.5 hover:shadow-lg"
                    : "bg-dark text-white hover:-translate-y-0.5 hover:bg-secondary"
                }`}
              >
                {plan.buttonText}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            type="button"
            className="inline-flex items-center rounded-2xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-dark transition-all duration-300 hover:border-secondary hover:text-secondary"
          >
            Ver todos los planes
          </button>
        </motion.div>
      </div>
    </section>
  );
}
