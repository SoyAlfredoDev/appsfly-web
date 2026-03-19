"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  MessageCircleWarning,
  Clock,
  ChevronDown,
} from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "¿Tu sitio web no genera clientes?",
    description:
      "Muchos negocios tienen páginas web antiguas o mal optimizadas que no convierten visitantes en clientes reales.",
    image: "/images/problem-01.jpg",
  },
  {
    icon: MessageCircleWarning,
    title: "¿Pierdes oportunidades por no responder rápido?",
    description:
      "Los clientes esperan respuestas inmediatas en WhatsApp o redes sociales. Si tardas demasiado, buscan otra opción.",
    image: "/images/problem-02.jpg",
  },
  {
    icon: Clock,
    title: "¿Pierdes tiempo en procesos manuales?",
    description:
      "Sin automatización ni herramientas digitales, muchas tareas se vuelven repetitivas y reducen la eficiencia de tu negocio.",
    image: "/images/problem-03.jpg",
  },
];

export default function ProblemSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="problem"
      className="relative overflow-hidden py-24 bg-[#021f41]"
    >
      {/* 1. Imagen de Fondo Controlada */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-problem.jpg"
          alt="Background"
          fill
          className="object-cover opacity-40" // Aquí controlas la transparencia de la imagen
          priority
        />
        {/* 2. Capa de Tono Verde (Overlay) */}
        <div
          className="absolute inset-0 bg-[#01c676]/60 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      {/* Gradientes decorativos sutiles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-80px] top-20 h-72 w-72 rounded-full bg-red-400/10 blur-3xl" />
        <div className="absolute left-[-60px] bottom-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-bold text-red-600 shadow-sm">
            ¿Te identificas?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-chillax leading-tight">
            Tu negocio podría estar perdiendo clientes por falta de presencia
            digital
          </h2>
          <p className="text-lg text-white/80 leading-relaxed font-inter">
            Muchos negocios tienen presencia digital, pero no está optimizada
            para atraer clientes.
          </p>
        </motion.div>

        {/* Grid / Accordion Container */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group flex flex-col overflow-hidden rounded-[28px] border bg-white transition-all duration-300 ${
                  isExpanded
                    ? "shadow-xl ring-2 ring-primary md:ring-white/20"
                    : "shadow-sm border-gray-100 hover:shadow-md"
                } md:hover:-translate-y-1 md:hover:shadow-xl`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left md:cursor-default md:p-0"
                >
                  <div className="flex items-center gap-4 md:contents">
                    {/* Imagen Desktop */}
                    <div className="hidden md:block relative h-52 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={problem.image}
                        alt={problem.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#021f41]/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-red-500 shadow-md">
                        <Icon size={24} />
                      </div>
                    </div>

                    {/* Cabecera Móvil */}
                    <div className="flex items-center gap-4 md:hidden">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${isExpanded ? "bg-red-500 text-white" : "bg-red-50 text-red-500"}`}
                      >
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-[#021f41] leading-tight font-chillax">
                        {problem.title}
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-gray-400 md:hidden"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Contenido fijo en Desktop */}
                <div className="hidden md:flex flex-1 flex-col p-6 pt-5">
                  <h3 className="mb-3 text-xl font-bold text-[#021f41] leading-snug font-chillax">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    {problem.description}
                  </p>
                </div>

                {/* Contenido expandible en Móvil */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="md:hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-50 pt-4">
                        <div className="relative h-44 w-full overflow-hidden rounded-2xl mb-4">
                          <Image
                            src={problem.image}
                            alt={problem.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm font-inter">
                          {problem.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
