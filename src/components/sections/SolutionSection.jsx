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
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: Bot,
      title: "Automatización de atención y procesos",
      description:
        "Implementamos automatizaciones para WhatsApp y otros canales digitales para responder más rápido, organizar consultas y mejorar la atención.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: Blocks,
      title: "Software adaptado a tu negocio",
      description:
        "Desarrollamos soluciones a medida para digitalizar procesos, optimizar tareas y ayudarte a operar de forma más eficiente.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section
      id="solutions"
      aria-label="Soluciones digitales para tu negocio"
      className="relative overflow-hidden py-24 bg-white"
    >
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-16 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-[-60px] bottom-10 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
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
          <p className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Soluciones digitales
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-chillax">
            La tecnología adecuada puede transformar tu negocio
          </h2>

          <p className="text-lg text-gray-600 font-inter">
            No se trata solo de tener presencia digital, sino de contar con
            herramientas que te ayuden a captar clientes y trabajar con más
            eficiencia.
          </p>
        </motion.div>

        {/* Contenedor Responsivo Estilo Pricing:
          - Mobile: Flexbox con scroll horizontal y snap
          - Desktop: Grid de 3 columnas
        */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-sm transition-all duration-300 
                min-w-[85vw] sm:min-w-[380px] lg:min-w-full snap-center
                hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Contenedor de la Imagen */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Contenedor del Contenido */}
                <div className="relative flex flex-1 flex-col p-6 pt-10">
                  {/* Ícono Flotante */}
                  <div className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-md border border-gray-50 transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={26} strokeWidth={2.5} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-dark leading-snug font-chillax">
                    {solution.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-inter text-sm md:text-base">
                    {solution.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Indicador visual para móvil (Dots) */}
        <div className="mt-8 flex justify-center gap-1.5 lg:hidden">
          {solutions.map((_, i) => (
            <div key={i} className="h-1 w-4 rounded-full bg-primary/20" />
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
