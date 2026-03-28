"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const portfolioItems = [
  {
    id: 1,
    title: "Landing page de servicios profesionales",
    category: "Landing page",
    description:
      "Diseño orientado a conversión, estructura clara y experiencia enfocada en captar contactos de calidad.",
    image: "/images/portfolio-1.jpg",
    alt: "Proyecto de landing page profesional desarrollado por AppsFly",
    href: "#",
  },
  {
    id: 2,
    title: "Tienda online para negocio local",
    category: "E-commerce",
    description:
      "Catálogo visual, navegación simple y una base preparada para crecer con productos, campañas y ventas.",
    image: "/images/portfolio-2.jpg",
    alt: "Proyecto de tienda online desarrollado por AppsFly",
    href: "#",
  },
  {
    id: 3,
    title: "SAAS Appsfly",
    category: "SAAS",
    description:
      "Plataforma SAAS para el control de ventas, compras, inventario y gastos.",
    image: "/images/portfolio-04.png",
    alt: "Proyecto de automatización digital desarrollado por AppsFly",
    href: "https://appsfly.app",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-label="Portafolio y trabajos realizados"
      className="relative overflow-hidden py-20 md:py-24 bg-secondary"
    >
      {/* --- FONDO CON IMAGEN Y TONO AZUL --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-porfolio.jpg" // Asegúrate de que el nombre coincida en tu carpeta public
          alt="Background Portfolio"
          fill
          className="object-cover opacity-30" // Imagen semitransparente
          priority
        />
        {/* Overlay Azul #094fd1 con mezcla para acabado profesional */}
        <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply" />
      </div>

      {/* Gradientes decorativos sutiles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm border border-white/20">
            Portafolio
          </p>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-white md:text-4xl font-chillax">
            Algunos trabajos y proyectos realizados
          </h2>

          <p className="text-base leading-relaxed text-white/80 md:text-lg font-inter">
            Una muestra de proyectos desarrollados con enfoque visual,
            estructura estratégica y objetivos claros de captación, venta y
            crecimiento digital.
          </p>
        </motion.div>

        {/* Grid / Snap Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] 
              min-w-[85vw] sm:min-w-[400px] lg:min-w-full snap-center"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021f41]/80 via-transparent to-transparent opacity-60" />

                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-full border border-white/30 bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-tight text-[#021f41] font-chillax">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 md:text-[15px] font-inter">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#094fd1] transition-colors duration-300 hover:text-[#01c676]"
                >
                  Ver proyecto
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Indicadores visuales para móvil */}
        <div className="mt-6 flex justify-center gap-2 lg:hidden">
          {portfolioItems.map((_, i) => (
            <div key={i} className="h-1 w-4 rounded-full bg-white/20" />
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex justify-center md:mt-16"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-2xl bg-[#01c676] px-8 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(1,198,118,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#094fd1] hover:shadow-[0_20px_46px_rgba(9,79,209,0.3)]"
          >
            Empezar mi proyecto
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
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
