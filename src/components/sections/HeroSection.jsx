"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
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
      className="relative flex min-h-screen overflow-hidden bg-white"
    >
      {/* Global background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(99,102,241,0.08),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,1),rgba(248,250,252,1))]" />
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
      </div>

      {/* Mobile-only background image style */}
      <div className="pointer-events-none absolute inset-0 -z-10 lg:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_30%),radial-gradient(circle_at_80%_24%,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(15,23,42,0.08),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.14] [mask-image:linear-gradient(to_bottom,black,black,transparent)]">
          <div className="absolute left-[8%] top-[18%] h-20 w-20 rounded-[2rem] border border-primary/20 bg-white/60 shadow-[0_12px_40px_rgba(37,99,235,0.08)] backdrop-blur-md sm:h-28 sm:w-28" />
          <div className="absolute right-[10%] top-[14%] h-16 w-16 rounded-full border border-secondary/20 bg-white/50 backdrop-blur-md sm:h-20 sm:w-20" />
          <div className="absolute right-[14%] top-[36%] h-28 w-20 rounded-[2rem] border border-slate-200/70 bg-white/60 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md sm:h-40 sm:w-28" />
          <div className="absolute left-[10%] bottom-[20%] h-16 w-16 rounded-[1.75rem] border border-primary/20 bg-white/50 backdrop-blur-md sm:h-24 sm:w-24" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/72 to-white" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-7xl px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="grid min-h-screen w-full items-center gap-8 py-24 sm:gap-10 sm:py-28 md:py-32 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:py-28 xl:gap-20">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 mx-auto flex w-full max-w-2xl flex-col justify-center lg:mx-0"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-white/90 px-3 py-1.5 text-xs font-medium text-secondary shadow-sm backdrop-blur sm:mb-5 sm:px-4 sm:py-2 sm:text-sm"
            >
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Desarrollo web profesional en Chile
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-[11ch] text-[2.5rem] font-extrabold leading-[0.98] tracking-tight text-dark min-[420px]:text-[2.8rem] sm:max-w-[11ch] sm:text-[3.4rem] md:text-[3.8rem] lg:max-w-none lg:text-[4.2rem] xl:text-[4.5rem] 3xl:text-[4rem]"
            >
              Desarrollamos sitios web y software
              <span className="mt-1.5 block text-primary sm:mt-2">
                para hacer crecer tu negocio
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm leading-6 text-text-secondary sm:mt-5 sm:text-[15px] sm:leading-7 md:text-base lg:mt-6 lg:text-lg"
            >
              Te ayudamos a captar más clientes mediante soluciones digitales
              con estructura estratégica y una interfaz optimizada para
              convertir visitas en oportunidades reales.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:gap-4"
            >
              <Link
                href="#contact"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_20px_46px_rgba(99,102,241,0.28)] sm:min-h-[52px] sm:px-6 sm:py-3.5"
              >
                Hablemos de tu proyecto
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#services"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-border bg-white/95 px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md sm:min-h-[52px] sm:px-6 sm:py-3.5"
              >
                Ver servicios
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:gap-3"
            >
              {serviceItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.45 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-2.5 text-[12.5px] leading-5 text-text-secondary sm:text-[13px] sm:leading-5 md:text-sm md:leading-6"
                >
                  <Image
                    src={"/images/green-arrow-right.png"}
                    alt="green-arrow-right.png"
                    width={16}
                    height={16}
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px]"
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
            className="relative mx-auto hidden w-full max-w-[560px] self-center lg:block xl:max-w-[680px]"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.03, 1], opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-[34px] bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/10 blur-2xl"
              />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[26px] border border-border/70 bg-white/90 p-3 shadow-[0_28px_90px_rgba(2,31,65,0.12)] backdrop-blur-sm xl:rounded-[32px] xl:p-4"
              >
                <div className="overflow-hidden rounded-[22px] border border-primary/20 bg-white xl:rounded-[28px]">
                  {/* Browser top */}
                  <div className="flex items-center justify-between border-b border-border bg-background/80 px-4 py-2.5 xl:px-5 xl:py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-300" />
                      <span className="h-3 w-3 rounded-full bg-yellow-300" />
                      <span className="h-3 w-3 rounded-full bg-green-300" />
                    </div>

                    <div className="h-7 w-28 rounded-full bg-white shadow-sm xl:h-8 xl:w-40" />
                  </div>

                  {/* Content */}
                  <div className="p-4 lg:p-5 xl:p-6">
                    <div className="space-y-4 xl:space-y-5">
                      {/* Hero content block */}
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="rounded-[20px] border border-border bg-background/70 p-4 xl:rounded-[24px] xl:p-5"
                      >
                        <div className="h-3 w-20 rounded-full bg-border xl:w-24" />
                        <div className="mt-4 h-8 w-4/5 rounded-2xl bg-primary/15 xl:h-10" />
                        <div className="mt-3 h-3 w-full rounded-full bg-border/80" />
                        <div className="mt-2 h-3 w-5/6 rounded-full bg-border/60" />
                      </motion.div>

                      {/* Cards */}
                      <div className="grid gap-3 xl:gap-4 sm:grid-cols-2">
                        <motion.div
                          animate={{ y: [0, -10, 0], rotate: [0, -0.8, 0] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="rounded-[18px] border border-border bg-white p-3.5 shadow-sm xl:rounded-[22px] xl:p-4"
                        >
                          <div className="h-3 w-14 rounded-full bg-primary/30 xl:w-16" />
                          <div className="mt-4 h-20 rounded-[16px] bg-primary/10 xl:h-24 xl:rounded-[18px]" />
                          <div className="mt-4 h-3 w-20 rounded-full bg-border xl:w-24" />
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, 10, 0], rotate: [0, 0.8, 0] }}
                          transition={{
                            duration: 5.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="rounded-[18px] border border-border bg-white p-3.5 shadow-sm xl:rounded-[22px] xl:p-4"
                        >
                          <div className="h-3 w-14 rounded-full bg-secondary/30 xl:w-16" />
                          <div className="mt-4 h-20 rounded-[16px] bg-secondary/10 xl:h-24 xl:rounded-[18px]" />
                          <div className="mt-4 h-3 w-20 rounded-full bg-border xl:w-24" />
                        </motion.div>
                      </div>

                      {/* Bottom conversion card */}
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
                        className="rounded-[20px] bg-dark p-4 text-white xl:rounded-[24px] xl:p-6"
                      >
                        <div className="flex flex-col gap-3 xl:gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs text-white/70 xl:text-sm">
                              Resultados visibles
                            </p>
                            <h3 className="mt-1 text-xl font-bold xl:text-2xl">
                              + más impacto visual
                            </h3>
                          </div>

                          <div className="w-fit rounded-2xl bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur-sm xl:px-4 xl:py-3 xl:text-sm">
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
                  className="absolute right-1 top-10 hidden rounded-2xl border border-border bg-white px-3 py-2 shadow-xl xl:right-2 xl:top-14 xl:block xl:px-4 xl:py-3"
                >
                  <p className="text-[11px] font-medium text-text-secondary xl:text-xs">
                    Optimización
                  </p>
                  <p className="text-xs font-bold text-dark xl:text-sm">
                    SEO + rendimiento
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], x: [0, -4, 0] }}
                  transition={{
                    duration: 5.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-28 left-1 hidden rounded-2xl border border-border bg-white px-3 py-2 shadow-xl xl:bottom-36 xl:left-2 xl:block xl:px-4 xl:py-3"
                >
                  <p className="text-[11px] font-medium text-text-secondary xl:text-xs">
                    Experiencia
                  </p>
                  <p className="text-xs font-bold text-dark xl:text-sm">
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
