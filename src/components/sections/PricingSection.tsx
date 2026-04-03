"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Badge from "../ui/badge";
import { plans } from "@/data/plans";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-12">
      <div className="pointer-events-none absolute inset-0 bg-gray-200">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#01c676]/5 blur-3xl" />
        <div className="absolute bottom-12 right-0 h-80 w-80 rounded-full bg-[#094fd1]/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center "
        >
          <Badge title="Planes y precios" color="blueLight" />
          <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 leading-8 lg:leading-12">
            Elige cómo impulsar tu negocio
          </h2>

          <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
            Soluciones diseñadas para ayudarte a convertir visitas en clientes.
          </p>
        </motion.div>

        <div className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex min-w-[86vw] snap-center flex-col rounded-[28px] border px-6 py-4 transition-all duration-300 sm:min-w-[360px] lg:min-w-full ${
                plan.highlight
                  ? "z-10 border-[#01c676] bg-[#021f41] text-white shadow-[0_18px_50px_rgba(1,198,118,0.18)] lg:-translate-y-1"
                  : "border-gray-100 bg-white text-[#021f41] shadow-[0_10px_30px_rgba(2,31,65,0.06)] hover:border-[#01c676]/20 hover:shadow-[0_16px_36px_rgba(2,31,65,0.10)]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#01c676] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md">
                  <Sparkles className="h-3.5 w-3.5" />
                  Recomendado
                </div>
              )}

              <div
                className={`mb-5 border-b pb-4 ${
                  plan.highlight ? "border-white/10" : "border-gray-100"
                }`}
              >
                <h3
                  className={`mb-1 font-chillax text-xl font-bold ${
                    plan.highlight ? "text-white" : "text-primary"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold tracking-tight">
                    ${plan.price.toLocaleString("es-CL")}
                  </span>

                  <span
                    className={`mb-1 text-sm font-medium ${
                      plan.highlight ? "text-white/65" : "text-gray-500"
                    }`}
                  >
                    + IVA
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p
                  className={`mb-3 text-[11px] font-bold uppercase tracking-[0.16em] ${
                    plan.highlight ? "text-white/70" : "text-[#021f41]"
                  }`}
                >
                  Incluye
                </p>

                <ul className="space-y-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-1">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#01c676]"
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          plan.highlight ? "text-white/88" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`mb-5 border-t pt-4 ${
                  plan.highlight ? "border-white/10" : "border-gray-100"
                }`}
              >
                <p
                  className={`mb-3 text-[11px] font-bold uppercase tracking-[0.16em] ${
                    plan.highlight ? "text-[#01c676]" : "text-secondary"
                  }`}
                >
                  Resultados esperados
                </p>

                <ul className="space-y-2.5">
                  {plan.results.map((result) => (
                    <li key={result} className="flex items-start gap-2">
                      <Image
                        src="/images/green-arrow-right.png"
                        alt="Check"
                        width={16}
                        height={16}
                        className="mt-1"
                      />
                      <span
                        className={`text-sm ml-2 leading-relaxed ${
                          plan.highlight ? "text-white/90" : "text-gray-700"
                        }`}
                      >
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pb-1">
                <Link
                  href={plan.linkCheckout}
                  className={`group flex w-full items-center ${
                    plan.highlight ? "btn-base btn-green" : "btn-base btn-blue"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2 lg:hidden">
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
