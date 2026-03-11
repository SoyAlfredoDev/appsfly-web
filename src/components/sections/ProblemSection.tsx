"use client";

import { motion } from "framer-motion";
import { AlertCircle, MessageCircleWarning, Clock } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Tu sitio web no genera clientes",
      description:
        "Muchos negocios tienen páginas web antiguas o mal optimizadas que no convierten visitantes en clientes reales.",
    },
    {
      icon: MessageCircleWarning,
      title: "Pierdes oportunidades por no responder rápido",
      description:
        "Los clientes esperan respuestas inmediatas en WhatsApp o redes sociales. Si tardas demasiado, buscan otra opción.",
    },
    {
      icon: Clock,
      title: "Procesos manuales que consumen tiempo",
      description:
        "Sin automatización ni herramientas digitales, muchas tareas se vuelven repetitivas y reducen la eficiencia de tu negocio.",
    },
  ];

  return (
    <section
      id="problem"
      className="relative overflow-hidden py-24 bg-background"
    >
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-80px] top-20 h-72 w-72 rounded-full bg-red-400/5 blur-3xl" />
        <div className="absolute left-[-60px] bottom-10 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-red-50 text-red-500 px-4 py-1.5 text-sm font-medium">
            ¿Te identificas?
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Tu negocio podría estar perdiendo clientes en internet
          </h2>

          <p className="text-lg text-text-secondary leading-relaxed">
            Muchos negocios tienen presencia digital, pero no está optimizada
            para atraer clientes ni para aprovechar las oportunidades online.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-surface rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-400">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-dark mb-3 leading-snug">
                  {problem.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
