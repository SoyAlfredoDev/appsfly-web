"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 sm:pt-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-80px] h-[280px] w-[280px] rounded-full bg-primary/10 blur-3xl sm:h-[360px] sm:w-[360px]" />
        <div className="absolute right-[-100px] top-[120px] h-[260px] w-[260px] rounded-full bg-secondary/10 blur-3xl sm:h-[320px] sm:w-[320px]" />
        <div className="absolute bottom-[-140px] left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-[340px] sm:w-[340px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-14 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20 xl:gap-20 xl:py-24">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-2xl lg:mx-0"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-secondary shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              Soluciones modernas para tu negocio
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="max-w-[12ch] text-4xl font-extrabold leading-[1.05] tracking-tight text-dark sm:text-5xl lg:max-w-none lg:text-6xl xl:text-[4.25rem]"
            >
              Haz crecer tu marca con una web
              <span className="mt-2 block text-primary">
                moderna, clara y efectiva
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="mt-6 max-w-xl text-base leading-7 text-text-secondary sm:text-lg"
            >
              Diseñamos experiencias digitales con enfoque visual, estructura
              estratégica y una interfaz pensada para convertir visitas en
              clientes.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
              >
                Hablemos de tu proyecto
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                Ver servicios
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-text-secondary"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Diseño profesional
              </div>
              <div className="hidden h-1 w-1 rounded-full bg-border sm:block" />
              <div>Responsive</div>
              <div className="hidden h-1 w-1 rounded-full bg-border sm:block" />
              <div>Optimizado para conversión</div>
            </motion.div>
          </motion.div>

          {/* Right mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mx-auto w-full max-w-[680px] lg:max-w-none"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-[34px] bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/10 blur-2xl" />

              {/* Main frame */}
              <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-white p-3 shadow-[0_24px_80px_rgba(2,31,65,0.12)] sm:p-4">
                <div className="overflow-hidden rounded-[28px] border border-primary/20 bg-white">
                  {/* Browser top */}
                  <div className="flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-300" />
                      <span className="h-3 w-3 rounded-full bg-yellow-300" />
                      <span className="h-3 w-3 rounded-full bg-green-300" />
                    </div>

                    <div className="hidden h-8 w-40 rounded-full bg-white shadow-sm sm:block" />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="space-y-4 sm:space-y-5">
                      {/* Hero content block */}
                      <div className="rounded-[24px] border border-border bg-background/70 p-4 sm:p-5">
                        <div className="h-3 w-24 rounded-full bg-border" />
                        <div className="mt-4 h-9 w-4/5 rounded-2xl bg-primary/15 sm:h-10" />
                        <div className="mt-3 h-3 w-full rounded-full bg-border/80" />
                        <div className="mt-2 h-3 w-5/6 rounded-full bg-border/60" />
                      </div>

                      {/* Cards */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="rounded-[22px] border border-border bg-white p-4 shadow-sm"
                        >
                          <div className="h-3 w-16 rounded-full bg-primary/30" />
                          <div className="mt-4 h-24 rounded-[18px] bg-primary/10" />
                          <div className="mt-4 h-3 w-24 rounded-full bg-border" />
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, 6, 0] }}
                          transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="rounded-[22px] border border-border bg-white p-4 shadow-sm"
                        >
                          <div className="h-3 w-16 rounded-full bg-secondary/30" />
                          <div className="mt-4 h-24 rounded-[18px] bg-secondary/10" />
                          <div className="mt-4 h-3 w-24 rounded-full bg-border" />
                        </motion.div>
                      </div>

                      {/* Bottom conversion card */}
                      <div className="rounded-[24px] bg-dark p-5 text-white shadow-lg sm:p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm text-white/70">
                              Resultados visibles
                            </p>
                            <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                              + más impacto visual
                            </h3>
                          </div>

                          <div className="w-fit rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold">
                            UI + UX
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-2 top-14 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-xl xl:block"
                >
                  <p className="text-xs font-medium text-text-secondary">
                    Optimización
                  </p>
                  <p className="text-sm font-bold text-dark">
                    SEO + rendimiento
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-36 left-2 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-xl xl:block"
                >
                  <p className="text-xs font-medium text-text-secondary">
                    Experiencia
                  </p>
                  <p className="text-sm font-bold text-dark">
                    Diseño responsivo
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
