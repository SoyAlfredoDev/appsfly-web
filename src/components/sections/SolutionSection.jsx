"use client";

import { motion } from "framer-motion";
import { Globe, Bot, Blocks } from "lucide-react";

export default function SolutionSection() {
  const solutions = [
    {
      icon: Globe,
      title: "Sitios web diseñados para generar clientes",
      description:
        "Creamos páginas web modernas, rápidas y enfocadas en transmitir confianza, comunicar valor y convertir visitas en oportunidades reales.",
    },
    {
      icon: Bot,
      title: "Automatización de atención y procesos",
      description:
        "Implementamos automatizaciones para WhatsApp y otros canales digitales para responder más rápido, organizar consultas y mejorar la atención.",
    },
    {
      icon: Blocks,
      title: "Software adaptado a tu negocio",
      description:
        "Desarrollamos soluciones a medida para digitalizar procesos, optimizar tareas y ayudarte a operar de forma más eficiente.",
    },
  ];

  return (
    <section id="solutions" className="relative overflow-hidden py-24 bg-white">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-16 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[-60px] bottom-10 h-64 w-64 rounded-full bg-secondary/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium mb-4">
            Soluciones digitales
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            La tecnología adecuada puede transformar tu negocio
          </h2>

          <p className="text-lg text-gray-600">
            No se trata solo de tener presencia digital, sino de contar con
            herramientas que te ayuden a captar clientes, responder mejor y
            trabajar con más eficiencia.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold text-dark mb-3 leading-snug">
                    {solution.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
