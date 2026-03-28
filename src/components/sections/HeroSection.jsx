"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const serviceItems = [
  "Sitios web, landing pages y tiendas online profesionales",
  "Automatización de WhatsApp y atención digital",
  "Desarrollo de software a medida para empresas",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Inicio — Desarrollo web profesional en Chile"
      className="relative flex min-h-screen overflow-hidden"
    >
      {/* Global background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-primary-soft),transparent_28%),radial-gradient(circle_at_82%_18%,var(--color-accent-soft),transparent_24%),linear-gradient(to_bottom,var(--color-surface),var(--color-bg))]" />

        {/* Animated Orbs */}
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-120px] top-[-70px] h-[220px] w-[220px] rounded-full bg-primary/10 blur-3xl sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px]"
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 18, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-110px] top-[90px] h-[200px] w-[200px] rounded-full bg-secondary/10 blur-3xl sm:h-[240px] sm:w-[240px] lg:h-[320px] lg:w-[320px]"
        />
        <motion.div
          animate={{ x: [0, 12, 0], y: [0, 14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-140px] left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-[260px] sm:w-[260px] lg:h-[340px] lg:w-[340px]"
        />
        <div className="absolute inset-0 bg-grid-soft opacity-60" />
      </div>

      {/* Mobile small only background image */}
      <div className="pointer-events-none absolute inset-0 -z-10 sm:hidden">
        {/* Imagen decorativa para móvil pequeño */}
        <div className="pointer-events-none absolute inset-0 -z-10 sm:hidden overflow-hidden">
          <Image
            src="/images/bg-hero-sm.png"
            alt=""
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.92,
              filter: "grayscale(1) brightness(1.1) contrast(0.95)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: "rgba(1, 198, 118, 0.22)",
              mixBlendMode: "multiply",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/55 to-bg" />
        </div>

        {/* Capa verde suave para integrar mejor con la marca */}
        <div className="absolute inset-0 bg-primary/8 mix-blend-multiply" />

        {/* Luces suaves para que no se vea plana */}
        <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />

        {/* Capa final para mantener legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/35 via-surface/72 to-bg" />
      </div>

      {/* Previous mobile decorative elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 lg:hidden sm:hidden">
        <div className="absolute inset-0 opacity-[0.14] [mask-image:linear-gradient(to_bottom,black,black,transparent)]">
          <div className="absolute left-[8%] top-[18%] h-20 w-20 rounded-2xl border border-primary/20 bg-surface/60 shadow-lg backdrop-blur-md" />
          <div className="absolute right-[10%] top-[14%] h-16 w-16 rounded-full border border-secondary/20 bg-surface/50 backdrop-blur-md" />
        </div>
      </div>

      <div className="container-app flex min-h-screen items-center px-4 md:px-8">
        <div className="grid w-full gap-12 py-24 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 flex w-full max-w-2xl flex-col justify-center"
          >
            <motion.div variants={fadeUp}>
              <span className="badge badge-primary mb-4 text-xs shadow-sm backdrop-blur md:mb-6 md:text-base lg:text-base">
                <Sparkles className="h-4 w-4" />
                Desarrollo web profesional en Chile
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.9rem] lg:bg-transparent"
            >
              Desarrollamos sitios web y software
              <span className="mt-2 block text-brand-gradient">
                para hacer crecer tu negocio
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-sm text-muted md:text-lg"
            >
              Te ayudamos a captar más clientes mediante soluciones digitales
              con estructura estratégica y una interfaz optimizada para
              convertir visitas en oportunidades reales.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="#contact"
                className="btn-base btn-primary group w-[85%] md:w-full"
              >
                Hablemos de tu proyecto
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#services"
                className="btn-base btn-outline w-[85%] md:w-full"
              >
                Ver servicios
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3">
              {serviceItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.45 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-3 text-sm text-secondary md:text-base"
                >
                  <Image
                    src="/images/green-arrow-right.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-0.5 h-5 w-5 shrink-0"
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right mockup - hidden on small screens */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeScale}
            className="relative hidden w-full max-w-[680px] self-center lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.03, 1], opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/10 blur-2xl"
              />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="card-base p-4 shadow-modal backdrop-blur-sm xl:p-5"
              >
                <div className="card-clip border border-primary/20 bg-surface">
                  {/* Browser top */}
                  <div className="flex items-center justify-between border-b border-border bg-surface-alt/50 px-5 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-error" />
                      <span className="h-3 w-3 rounded-full bg-warning" />
                      <span className="h-3 w-3 rounded-full bg-success" />
                    </div>
                    <div className="h-8 w-32 rounded-full bg-surface shadow-sm" />
                  </div>

                  {/* Content */}
                  <div className="p-5 xl:p-6">
                    <div className="space-y-5">
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="card-base border-border bg-surface-alt/70 p-5"
                      >
                        <div className="h-3 w-24 rounded-full bg-border" />
                        <div className="mt-4 h-10 w-4/5 rounded-2xl bg-primary/15" />
                        <div className="mt-4 h-3 w-full rounded-full bg-border" />
                        <div className="mt-2 h-3 w-5/6 rounded-full bg-border" />
                      </motion.div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <motion.div
                          animate={{ y: [0, -10, 0], rotate: [0, -0.8, 0] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="card-base p-4 shadow-soft"
                        >
                          <div className="h-3 w-16 rounded-full bg-primary/30" />
                          <div className="mt-4 h-24 rounded-xl bg-primary/10" />
                          <div className="mt-4 h-3 w-24 rounded-full bg-border" />
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, 10, 0], rotate: [0, 0.8, 0] }}
                          transition={{
                            duration: 5.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="card-base p-4 shadow-soft"
                        >
                          <div className="h-3 w-16 rounded-full bg-secondary/30" />
                          <div className="mt-4 h-24 rounded-xl bg-secondary/10" />
                          <div className="mt-4 h-3 w-24 rounded-full bg-border" />
                        </motion.div>
                      </div>

                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 18px 40px rgba(15,23,42,0.16)",
                            "0 24px 54px rgba(15,23,42,0.22)",
                            "0 18px 40px rgba(15,23,42,0.16)",
                          ],
                        }}
                        transition={{
                          duration: 4.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="card-base border-none bg-dark p-6 text-on-dark"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-surface/70">
                              Resultados visibles
                            </p>
                            <h3 className="mt-1 text-2xl font-bold text-surface">
                              + impacto visual
                            </h3>
                          </div>
                          <div className="rounded-2xl bg-surface/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                            UI + UX
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
                  transition={{
                    duration: 5.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="card-base shadow-accent absolute -right-6 top-14 p-4"
                >
                  <p className="text-xs font-medium text-muted">Optimización</p>
                  <p className="text-sm font-bold text-dark">
                    SEO + Rendimiento
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], x: [0, -4, 0] }}
                  transition={{
                    duration: 5.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="card-base shadow-modal absolute -left-6 bottom-36 p-4"
                >
                  <p className="text-xs font-medium text-muted">Experiencia</p>
                  <p className="text-sm font-bold text-dark">
                    Diseño responsivo
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
