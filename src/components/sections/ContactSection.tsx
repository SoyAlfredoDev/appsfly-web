"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Contacto
            </span>

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-dark md:text-4xl">
              Hablemos de tu proyecto
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo para
              ayudarte a encontrar la mejor solución para tu negocio.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-dark">
                    Contacto por WhatsApp
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ideal si prefieres una respuesta rápida y una conversación
                    más directa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-dark">
                    Contacto por email
                  </h3>
                  <p className="text-sm text-gray-600">
                    Recomendado si prefieres recibir la información de forma más
                    ordenada.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Respuesta estimada en menos de 24 horas.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="rounded-[28px] border border-border bg-white p-8 shadow-xl"
          >
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-dark"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-dark outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-dark"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tunombre@email.com"
                  className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-dark outline-none transition focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-dark"
                >
                  ¿Qué servicio necesitas?
                </label>
                <select
                  id="service"
                  className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-dark outline-none transition focus:border-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="website">Sitio web</option>
                  <option value="landing-page">Landing page</option>
                  <option value="online-store">Tienda online</option>
                  <option value="automation">Automatización</option>
                  <option value="custom-software">Software a medida</option>
                  <option value="not-sure">No estoy seguro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-method"
                  className="mb-2 block text-sm font-medium text-dark"
                >
                  ¿Cómo prefieres que te contactemos?
                </label>
                <select
                  id="contact-method"
                  className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-dark outline-none transition focus:border-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="email">Email</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-dark"
                >
                  Cuéntanos brevemente tu proyecto
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe lo que necesitas, tus objetivos o cualquier detalle importante."
                  className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-dark outline-none transition focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Enviar solicitud
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-center text-sm text-gray-500">
                Al enviar este formulario, nos pondremos en contacto contigo
                según tu preferencia.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
