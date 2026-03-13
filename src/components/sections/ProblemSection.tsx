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
      image: "/images/problem-01.jpg", // Reemplaza con tu link
    },
    {
      icon: MessageCircleWarning,
      title: "Pierdes oportunidades por no responder rápido",
      description:
        "Los clientes esperan respuestas inmediatas en WhatsApp o redes sociales. Si tardas demasiado, buscan otra opción.",
      image:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800", // Reemplaza con tu link
    },
    {
      icon: Clock,
      title: "Procesos manuales que consumen tiempo",
      description:
        "Sin automatización ni herramientas digitales, muchas tareas se vuelven repetitivas y reducen la eficiencia de tu negocio.",
      image: "/images/problem-03.jpg", // Reemplaza con tu link
    },
  ];

  return (
    <section
      id="problem"
      aria-label="Problemas comunes de presencia digital"
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
          <p className="mb-4 inline-flex items-center rounded-full bg-red-50 text-red-500 px-4 py-1.5 text-sm font-medium">
            ¿Te identificas?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#021f41] mb-4">
            Tu negocio podría estar perdiendo clientes por falta de presencia
            digital
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
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
                className="group flex flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <img
                    src={problem.image}
                    alt={problem.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Overlay oscuro sutil para que el ícono resalte más */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021f41]/40 via-transparent to-transparent" />

                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-red-500 shadow-md">
                    <Icon size={24} />
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-1 flex-col p-6 pt-5">
                  <h3 className="mb-3 text-xl font-semibold text-[#021f41] leading-snug">
                    {problem.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
