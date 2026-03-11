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
    <section className="relative overflow-hidden bg-[var(--foreground-on-primary)]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[var(--primary)]/10 blur-3xl" />
        <div className="absolute right-[-100px] top-[80px] h-[280px] w-[280px] rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[var(--secondary)]/10 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--medium-gray)] bg-[var(--light-gray)] px-4 py-2 text-sm font-medium text-[var(--secondary)] shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            Soluciones modernas para tu negocio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Haz crecer tu marca con una web
            <span className="block text-[var(--primary)]">
              moderna, clara y efectiva
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
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
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground-on-primary)] shadow-lg shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--secondary)]"
            >
              Hablemos de tu proyecto
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#servicios"
              className="inline-flex items-center justify-center rounded-2xl border border-[var(--medium-gray)] bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Ver servicios
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[var(--accent)]" />
              Diseño profesional
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div>Responsive</div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div>Optimizado para conversión</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[28px] bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] p-[1px]">
              <div className="rounded-[27px] bg-white p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-300" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-300" />
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-[var(--light-gray)] p-4">
                    <div className="h-3 w-24 rounded-full bg-[var(--medium-gray)]" />
                    <div className="mt-3 h-8 w-3/4 rounded-xl bg-[var(--primary)]/15" />
                    <div className="mt-2 h-3 w-full rounded-full bg-[var(--medium-gray)]/70" />
                    <div className="mt-2 h-3 w-5/6 rounded-full bg-[var(--medium-gray)]/50" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="h-3 w-20 rounded-full bg-[var(--accent)]/30" />
                      <div className="mt-4 h-16 rounded-2xl bg-[var(--primary)]/10" />
                      <div className="mt-3 h-3 w-24 rounded-full bg-slate-200" />
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="h-3 w-20 rounded-full bg-[var(--primary)]/30" />
                      <div className="mt-4 h-16 rounded-2xl bg-[var(--accent)]/10" />
                      <div className="mt-3 h-3 w-24 rounded-full bg-slate-200" />
                    </motion.div>
                  </div>

                  <div className="rounded-2xl bg-slate-900 p-5 text-white shadow-lg">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-white/70">
                          Resultados visibles
                        </p>
                        <h3 className="mt-1 text-2xl font-bold">
                          + más impacto visual
                        </h3>
                      </div>
                      <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold">
                        UI + UX
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 hidden rounded-2xl border border-white/50 bg-white px-4 py-3 shadow-xl md:block"
            >
              <p className="text-xs font-medium text-slate-500">Optimización</p>
              <p className="text-sm font-bold text-slate-900">
                SEO + rendimiento
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-white/50 bg-white px-4 py-3 shadow-xl md:block"
            >
              <p className="text-xs font-medium text-slate-500">Experiencia</p>
              <p className="text-sm font-bold text-slate-900">
                Diseño responsivo
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
