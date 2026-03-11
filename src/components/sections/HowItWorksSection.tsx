"use client";

import { motion } from "framer-motion";
import {
  MessageSquareText,
  PhoneCall,
  SearchCheck,
  Rocket,
  Layers3,
  CreditCard,
  FolderKanban,
  ArrowRight,
} from "lucide-react";

const advisoryFlow = [
  {
    icon: MessageSquareText,
    title: "Cuéntanos tu proyecto",
    description:
      "Completa el formulario con la información de tu negocio y lo que necesitas para poder entender mejor tu caso.",
  },
  {
    icon: PhoneCall,
    title: "Te contactamos",
    description:
      "Nos comunicamos contigo por WhatsApp o email, según la opción que prefieras al momento de enviar tu solicitud.",
  },
  {
    icon: SearchCheck,
    title: "Analizamos tu necesidad",
    description:
      "Revisamos tu proyecto, resolvemos dudas y te recomendamos la solución más adecuada según tus objetivos.",
  },
  {
    icon: Rocket,
    title: "Iniciamos el desarrollo",
    description:
      "Una vez confirmado el servicio, comenzamos el trabajo con una estructura clara y enfocada en resultados.",
  },
];

const directFlow = [
  {
    icon: Layers3,
    title: "Explora el servicio",
    description:
      "Revisa la información detallada, ejemplos visuales y lo que incluye cada servicio desde la landing.",
  },
  {
    icon: FolderKanban,
    title: "Selecciona la opción ideal",
    description:
      "Si ya sabes lo que necesitas, puedes elegir el servicio directamente sin pasar por asesoría previa.",
  },
  {
    icon: CreditCard,
    title: "Realiza el pago",
    description:
      "Completa la contratación del servicio para reservar el inicio del proyecto de forma simple y ordenada.",
  },
  {
    icon: Rocket,
    title: "Comenzamos tu proyecto",
    description:
      "Después de la contratación, coordinamos contigo el inicio y los siguientes pasos del desarrollo.",
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function HowItWorksSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[-80px] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-[-80px] h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Cómo trabajamos
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-dark md:text-4xl">
            Elige la forma de avanzar que mejor se adapte a tu negocio
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Algunas empresas prefieren recibir orientación antes de contratar y
            otras ya saben exactamente lo que necesitan. Por eso ofrecemos un
            proceso claro con dos caminos posibles.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Advisory Flow */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-border bg-surface p-8 shadow-sm"
          >
            <div className="mb-6">
              <span className="inline-flex rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
                Asesoría personalizada
              </span>
            </div>

            <div className="space-y-6">
              {advisoryFlow.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={22} />
                    </div>

                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-sm font-semibold text-primary">
                          Paso {index + 1}
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-dark">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Direct Flow */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="rounded-[28px] border border-border bg-dark p-8 shadow-sm"
          >
            <div className="mb-6">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
                Contratación directa
              </span>
            </div>

            <div className="space-y-6">
              {directFlow.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon size={22} />
                    </div>

                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-sm font-semibold text-primary">
                          Paso {index + 1}
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-white/75 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Hablemos de tu proyecto
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            className="inline-flex items-center rounded-2xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-dark transition-all duration-300 hover:border-secondary hover:text-secondary"
          >
            Ver servicios
          </button>
        </motion.div>
      </div>
    </section>
  );
}
