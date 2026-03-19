"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, ShoppingCart, Bot } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    badge: "Servicio destacado",
    title:
      "Sitios web profesionales para transmitir confianza y captar clientes",
    description:
      "Creamos sitios web modernos, rápidos y bien estructurados para presentar tu negocio de forma profesional y ayudarte a convertir visitas en oportunidades reales.",
    points: [
      "Diseño moderno y responsive",
      "Estructura pensada para convertir",
      "Integración con formularios y WhatsApp",
    ],
    buttonText: "Más información",
    icon: Globe,
    isVideo: false,
    video: "",
    img: "/images/services-landing-page.jpg",
    imgAlt: "Desarrollo de sitios web profesionales en Chile — AppsFly",
  },
  {
    id: 2,
    badge: "Más vendido",
    title: "Tiendas online diseñadas para vender de forma simple y profesional",
    description:
      "Desarrollamos e-commerce claros, visuales y fáciles de usar para que tus clientes compren con confianza desde cualquier dispositivo.",
    points: [
      "Catálogo y fichas de producto",
      "Carrito y proceso de compra optimizado",
      "Base lista para seguir creciendo",
    ],
    buttonText: "Más información",
    icon: ShoppingCart,
    isVideo: true,
    video: "/videos/services-web-store.mp4",
    img: "/images/services-web-store.png",
    imgAlt: "Desarrollo de tiendas online y e-commerce en Chile — AppsFly",
  },
  {
    id: 3,
    badge: "Automatización",
    title: "Automatización para WhatsApp y canales digitales que ahorra tiempo",
    description:
      "Implementamos soluciones para responder más rápido, organizar consultas y mejorar la atención digital de tu negocio sin depender de procesos manuales.",
    points: [
      "Respuestas automáticas",
      "Mejor atención en WhatsApp y redes",
      "Procesos más ordenados y eficientes",
    ],
    buttonText: "Más información",
    icon: Bot,
    isVideo: false,
    video: "",
    img: "/images/services-whatsapp.jpg",
    imgAlt: "Automatización de WhatsApp para negocios en Chile — AppsFly",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Servicios de desarrollo web, e-commerce y automatización"
      className="relative overflow-hidden bg-background py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 inline-flex rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
            Nuestros servicios
          </p>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-dark md:text-4xl">
            Desarrollo web, tiendas online y automatización para ayudarte a
            vender más y crecer
          </h2>

          <p className="text-lg leading-relaxed text-text-secondary">
            No ofrecemos servicios genéricos. Diseñamos soluciones que buscan
            resolver necesidades reales de tu negocio y mejorar tu presencia
            digital.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReverse = index % 2 === 1;
            const shouldRenderVideo =
              service.isVideo &&
              typeof service.video === "string" &&
              service.video.trim() !== "";

            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={isReverse ? "lg:order-2" : ""}>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-dark shadow-sm">
                    <Icon className="h-4 w-4 text-primary" />
                    {service.badge}
                  </div>

                  <h3 className="mb-5 max-w-xl text-2xl font-bold leading-tight text-dark md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mb-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
                    {service.description}
                  </p>

                  <ul className="mb-8 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                        <span className="text-dark/80">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
                  >
                    {service.buttonText}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

                <div className={isReverse ? "lg:order-1" : ""}>
                  <div className="relative overflow-hidden rounded-[28px] border border-border bg-white shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-background via-white to-background">
                      {shouldRenderVideo ? (
                        <video
                          src={service.video}
                          className="h-full w-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          aria-label={service.imgAlt}
                        />
                      ) : (
                        <Image
                          src={service.img}
                          alt={service.imgAlt}
                          width={1000}
                          height={1000}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
