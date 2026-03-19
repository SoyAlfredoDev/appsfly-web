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
      className="relative overflow-hidden bg-white py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <p className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Portafolio
          </p>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-dark md:text-4xl">
            Algunos trabajos y proyectos realizados
          </h2>

          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            Una muestra de proyectos desarrollados con enfoque visual,
            estructura estratégica y objetivos claros de captación, venta y
            crecimiento digital.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-[24px] border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/45 via-primary/3 to-transparent" />

                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-full border border-white/30 bg-dark/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-xl font-bold leading-tight text-dark">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-secondary md:text-[15px]">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-secondary"
                >
                  Ver proyecto
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex justify-center md:mt-12"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_20px_46px_rgba(99,102,241,0.24)]"
          >
            Ver más trabajos
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
