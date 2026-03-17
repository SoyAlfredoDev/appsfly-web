"use client";

import { motion, Variants } from "framer-motion";
import {
  Check,
  ArrowRight,
  LayoutTemplate,
  ShoppingBag,
  MessageSquare,
  Code2,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

interface Plan {
  name: string;
  price: string;
  badge?: string;
  features: string[];
  highlighted?: boolean;
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  plans: Plan[];
}

const servicesData: ServiceCategory[] = [
  {
    id: "landing-page",
    title: "Landing Pages de Alta Conversión",
    description:
      "Diseñamos páginas de aterrizaje altamente optimizadas y enfocadas en un solo objetivo: convertir tus visitantes en clientes. Estructura persuasiva, diseño premium y tiempos de carga rápidos.",
    icon: LayoutTemplate,
    plans: [
      {
        name: "Emprende",
        price: "$180.000",
        badge: "Pago único",
        features: [
          "Hosting y dominio por 1 año",
          "Responsive (móvil, tablet, PC)",
          "Hasta 5 secciones estratégicas",
          "Integración WhatsApp + Formulario",
          "Optimización SEO básica",
        ],
        highlighted: false,
      },
      {
        name: "Premium",
        price: "Cotizar",
        badge: "Recomendado",
        features: [
          "Todo el plan Emprende",
          "Configuración para 50 leads",
          "Dashboard de analíticas",
          "Meta tags optimizados",
          "Hasta 8 secciones",
          "SEO avanzado para redes",
        ],
        highlighted: true,
      },
    ],
  },
  {
    id: "web-store",
    title: "E-commerce y Tiendas Online",
    description:
      "Escala tus ventas con una tienda virtual abierta 24/7. Integra métodos de pago locales de forma segura, gestiona tu catálogo fácilmente y brinda una experiencia de compra impecable.",
    icon: ShoppingBag,
    plans: [
      {
        name: "Básico",
        price: "A consultar",
        features: [
          "Diseño orientado a ventas",
          "Catálogo de productos",
          "Carrito de compras integrado",
          "Integración de pasarelas de pago",
        ],
        highlighted: false,
      },
      {
        name: "Avanzado",
        price: "Cotizar",
        badge: "Escalable",
        features: [
          "Todo lo incluido en Básico",
          "Gestión avanzada de inventarios",
          "Herramientas de fidelización",
          "Soporte prioritario",
        ],
        highlighted: true,
      },
    ],
  },
  {
    id: "automatizacion",
    title: "Automatización de WhatsApp",
    description:
      "No dejes a tus prospectos esperando. Implementamos flujos conversacionales y respuestas automáticas inteligentes para atender a tus clientes en segundos, ahorrando tu tiempo valioso.",
    icon: MessageSquare,
    plans: [
      {
        name: "Plan Básico",
        price: "A consultar",
        features: [
          "Respuestas automáticas clave",
          "Menú interactivo de opciones",
          "Configuración para horario comercial",
        ],
        highlighted: false,
      },
      {
        name: "Plan Avanzado",
        price: "Cotizar",
        badge: "IA Integrada",
        features: [
          "Integración con Inteligencia Artificial",
          "Conexión con tu base de datos (CRM)",
          "Enrutamiento inteligente a asesores",
          "Dashboard de métricas de chat",
        ],
        highlighted: true,
      },
    ],
  },
  {
    id: "software",
    title: "Desarrollo de Software a Medida",
    description:
      "Digitalizamos los procesos únicos de tu empresa. Desde plataformas web corporativas hasta herramientas internas de gestión. Construimos la tecnología robusta que escala junto a tu organización.",
    icon: Code2,
    plans: [
      {
        name: "Desarrollo a Medida",
        price: "Cotizar",
        badge: "Exclusivo",
        features: [
          "Levantamiento meticuloso de requisitos",
          "Arquitectura y diseño UX/UI a medida",
          "Desarrollo Full-Stack escalable",
          "Testing, seguridad y QA",
          "Mantenimiento y soporte continuo",
        ],
        highlighted: true,
      },
    ],
  },
  {
    id: "sistema-admin",
    title: "Sistema Administrativo AppsFly",
    description:
      "Toma el control absoluto de tu operación comercial. Nuestro ecosistema propietario te permite gestionar inventarios con precisión, registrar ventas y visualizar métricas financieras en tiempo real.",
    icon: LayoutDashboard,
    plans: [
      {
        name: "Licencia Mensual",
        price: "$9.990 /mes",
        badge: "SaaS",
        features: [
          "Control estricto de inventarios y stock",
          "Módulo de gestión de ventas y compras",
          "Dashboard visual de reportes",
          "Actualizaciones en la nube sin costo",
          "Soporte técnico dedicado",
        ],
        highlighted: true,
      },
    ],
  },
];

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AllServicesSection() {
  return (
    <section
      id="all-services"
      aria-label="Catálogo de servicios"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[-10%] top-[5%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          className="mx-auto max-w-2xl text-center mb-20 lg:mb-32"
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Explora Nuestras Soluciones
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl">
            Servicios a tu medida
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Impulsamos el crecimiento de tu empresa con soluciones digitales
            profesionales, diseñadas estratégicamente para optimizar procesos y
            multiplicar tus ventas.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-32 lg:space-y-40 lg:pb-16">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
                className={`flex flex-col gap-12 lg:gap-24 items-center ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Left/Right Text & Placeholder Image Block */}
                <div className="flex-1 w-full relative">
                  {/* Visual Placeholder Block */}
                  <div className="mb-10 w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-50 to-gray-100 aspect-video lg:aspect-[4/3] relative flex items-center justify-center border border-border shadow-sm group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    <service.icon className="w-24 h-24 text-primary/20 relative z-10 group-hover:scale-110 group-hover:text-primary/30 transition-all duration-500" />
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-dark mb-5 sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary hover:gap-3 transition-all"
                  >
                    Solicitar asesoría gratuita
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Right/Left Cards Block */}
                <div className="flex-1 w-full">
                  <div
                    className={`grid gap-6 ${
                      service.plans.length === 1
                        ? "grid-cols-1 max-w-md mx-auto lg:mx-0 lg:ml-auto"
                        : "sm:grid-cols-2 lg:grid-cols-2"
                    }`}
                  >
                    {service.plans.map((plan) => (
                      <article
                        key={plan.name}
                        className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white ${
                          plan.highlighted
                            ? "border-2 border-primary shadow-md lg:scale-[1.02] z-10"
                            : "border border-border shadow-sm"
                        }`}
                      >
                        {plan.badge && (
                          <span
                            className={`absolute -top-3.5 left-7 inline-flex items-center rounded-full px-3.5 py-1 text-xs font-bold tracking-wide uppercase ${
                              plan.highlighted
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-700 border border-gray-200"
                            }`}
                          >
                            {plan.badge}
                          </span>
                        )}

                        <h3 className="text-xl font-bold text-dark mt-2 mb-2">
                          {plan.name}
                        </h3>
                        <div className="mb-6 pb-6 border-b border-gray-100">
                          <span className="text-3xl font-extrabold tracking-tight text-dark">
                            {plan.price}
                          </span>
                        </div>

                        <ul className="mb-8 flex-1 space-y-3.5 text-sm">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex gap-3 text-left">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Check className="h-3.5 w-3.5" />
                              </span>
                              <span className="text-gray-600 leading-snug">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href="/#contacto"
                          className={`group mt-auto w-full inline-flex justify-center items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
                            plan.highlighted
                              ? "bg-primary text-white hover:bg-primary/90 hover:shadow-lg"
                              : "bg-gray-50 text-dark border border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          Contratar Plan
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
