"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    description:
      "Ideal para negocios que necesitan una página profesional para captar clientes.",
    price: "Desde $299",
    features: [
      "Diseño moderno y responsive",
      "Hasta 5 secciones",
      "Formulario de contacto",
      "Integración con WhatsApp",
      "Optimización de velocidad",
    ],
    highlighted: false,
    buttonText: "Contratar",
  },
  {
    name: "Sitio Web Profesional",
    badge: "Más vendido",
    description:
      "La opción más equilibrada para empresas que buscan una presencia digital sólida.",
    price: "Desde $599",
    features: [
      "Diseño personalizado",
      "Hasta 8 secciones",
      "Integración con WhatsApp",
      "Optimización SEO básica",
      "Estructura de conversión",
    ],
    highlighted: true,
    buttonText: "Contratar",
  },
  {
    name: "Tienda Online",
    description:
      "Pensado para negocios que quieren vender productos o servicios por internet.",
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
    <section id="pricing" className="relative overflow-hidden bg-white py-24">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#01c676]/5 blur-3xl" />
        <div className="absolute right-0 bottom-12 h-80 w-80 rounded-full bg-[#094fd1]/5 blur-3xl" />
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
          <p className="mb-4 inline-flex rounded-full bg-[#01c676]/10 px-4 py-1.5 text-sm font-semibold text-[#01c676]">
            Planes y precios
          </p>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#021f41] md:text-5xl font-chillax">
            Impulsa tu presencia digital
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Soluciones escalables diseñadas para convertir visitas en clientes.
          </p>
        </motion.div>

        {/* Contenedor Responsivo: 
            - En 'sm' (móvil): Snap scroll horizontal para ver uno a la vez.
            - En 'lg': Grid estático de 3 columnas.
        */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className={`relative min-w-[85vw] sm:min-w-[350px] lg:min-w-full snap-center rounded-[32px] border p-8 transition-all duration-500 ${
                plan.highlighted
                  ? "border-[#01c676] bg-[#021f41] text-white shadow-2xl shadow-[#01c676]/20 lg:scale-[1.05] z-10"
                  : "border-gray-100 bg-white text-[#021f41] hover:border-[#01c676]/30"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#01c676] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold font-chillax">
                  {plan.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${plan.highlighted ? "text-white/70" : "text-gray-500"}`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${plan.highlighted ? "text-white/50" : "text-gray-400"}`}
                >
                  {" "}
                  /proyecto
                </span>
              </div>

              <ul className="mb-10 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={18}
                      className={
                        plan.highlighted ? "text-[#01c676]" : "text-[#01c676]"
                      }
                    />
                    <span
                      className={
                        plan.highlighted ? "text-white/90" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`group flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[#01c676] text-white hover:bg-[#01c676]/90"
                    : "bg-[#021f41] text-white hover:bg-[#094fd1]"
                }`}
              >
                {plan.buttonText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.article>
          ))}
        </div>

        {/* Indicador visual para móvil */}
        <div className="mt-8 flex justify-center gap-2 lg:hidden">
          {plans.map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
