"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  X,
  AlertCircle,
} from "lucide-react";
import { sendEmail } from "@/lib/email/sendEmail";
import { contactRequestEmailTemplate } from "@/emails/contactRequestEmailTemplate";
import { useState } from "react";
import Badge from "../ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    contactMethod: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es obligatorio.";

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }

    if (!formData.service) {
      newErrors.service = "Por favor, selecciona un servicio.";
    }

    if (!formData.contactMethod) {
      newErrors.contactMethod = "Selecciona cómo prefieres que te contactemos.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Cuéntanos un poco sobre tu proyecto.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const htmlContent = contactRequestEmailTemplate({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        contactMethod: formData.contactMethod,
        message: formData.message,
      });

      await sendEmail({
        to: "contacto@appsfly.cl",
        subject: `Nueva solicitud de contacto: ${formData.name}`,
        html: htmlContent,
        replyTo: formData.email,
        text: formData.message,
      });

      setShowSuccessModal(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        contactMethod: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (error?: string) => (
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
        >
          <AlertCircle size={12} />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <section
        id="contact"
        aria-label="Contacto — Cotiza tu proyecto web"
        className="relative overflow-hidden bg-background py-20 md:py-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="pt-2"
            >
              <Badge title="Planes y precios" color="blueLight" />
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-dark md:text-4xl">
                Cotiza tu proyecto web — Hablemos
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
                      Recomendado si prefieres recibir la información de forma
                      más ordenada.
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
              className="rounded-[24px] border border-border bg-secondary  p-6 shadow-lg"
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium text-white"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Tu nombre"
                    className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-dark outline-none transition ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-primary"
                    }`}
                  />
                  {renderError(errors.name)}
                </div>

                {/* Phone + Email */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-medium text-white"
                    >
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="Tu teléfono"
                      className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-dark outline-none transition ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-primary"
                      }`}
                    />
                    {renderError(errors.phone)}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="tunombre@email.com"
                      className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-dark outline-none transition ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-primary"
                      }`}
                    />
                    {renderError(errors.email)}
                  </div>
                </div>

                {/* Servicio */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-xs font-medium text-white"
                  >
                    ¿Qué servicio necesitas?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-dark outline-none transition ${
                      errors.service
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-primary"
                    }`}
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
                  {renderError(errors.service)}
                </div>

                {/* Método de contacto */}
                <div>
                  <label
                    htmlFor="contact-method"
                    className="mb-1.5 block text-xs font-medium text-white"
                  >
                    ¿Cómo prefieres que te contactemos?
                  </label>
                  <select
                    id="contact-method"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-dark outline-none transition ${
                      errors.contactMethod
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-primary"
                    }`}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">Email</option>
                  </select>
                  {renderError(errors.contactMethod)}
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-white"
                  >
                    Cuéntanos brevemente tu proyecto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe lo que necesitas, tus objetivos o cualquier detalle importante."
                    className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-dark outline-none transition ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-primary"
                    }`}
                  />
                  {renderError(errors.message)}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                  {!isSubmitting && (
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Al enviar este formulario, nos pondremos en contacto contigo
                  según tu preferencia.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal de Éxito */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-white/70 backdrop-blur-[3px]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md rounded-[24px] border border-border bg-white p-7 text-center shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-dark"
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-dark">
                ¡Solicitud enviada!
              </h3>

              <p className="mb-7 text-sm leading-6 text-text-secondary sm:text-base">
                Hemos recibido tu información correctamente. Un asesor analizará
                los detalles y se pondrá en contacto contigo para ayudarte.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90"
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
