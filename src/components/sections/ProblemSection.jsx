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
    <section id="problem" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Tu negocio podría estar perdiendo clientes en internet
          </h2>

          <p className="text-lg text-gray-600">
            Muchos negocios tienen presencia digital, pero no está optimizada
            para atraer clientes ni para aprovechar las oportunidades online.
          </p>
        </motion.div>

        {/* Problems */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition"
              >
                <div className="mb-4 text-red-500">
                  <Icon size={32} />
                </div>

                <h3 className="text-xl font-semibold text-dark mb-3">
                  {problem.title}
                </h3>

                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
