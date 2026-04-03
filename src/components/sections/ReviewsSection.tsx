"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Badge from "../ui/badge";

type Review = {
  name: string;
  role?: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Carlos Méndez",
    role: "Dueño de negocio",
    rating: 5,
    text: "Excelente servicio. Nuestro sitio web quedó muy profesional y empezamos a recibir más consultas desde internet.",
  },
  {
    name: "Laura González",
    role: "Emprendedora",
    rating: 5,
    text: "Muy buena comunicación durante todo el proyecto. El resultado final superó nuestras expectativas.",
  },
  {
    name: "Andrés Rojas",
    role: "Gerente comercial",
    rating: 5,
    text: "Trabajo serio y bien estructurado. Nos ayudaron a mejorar nuestra presencia digital y el proceso fue muy claro.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-current" : "opacity-30"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const average = 4.9;
  const total = 23;
  const googleUrl = "https://www.google.com/maps";

  return (
    <section
      id="reviews"
      aria-label="Opiniones de clientes"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-12 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <Badge title="Soluciones" color="blueLight" />

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-dark md:text-4xl font-chillax">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex justify-center">
            <div className="my-auto">
              <p className="text-lg text-gray-600 font-inter">
                Valoraciones reales basadas en experiencias de clientes que ya
                han trabajado con nosotros.
              </p>
            </div>
            <video
              src="/videos/download.mp4"
              className="w-[180px] justify-center"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>

        {/* Rating summary */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col items-center justify-center gap-2 text-center"
        >
          <div className="flex items-center gap-3">
            <div className="text-4xl font-bold text-dark">{average}</div>
            <Stars rating={5} />
          </div>
          <p className="text-gray-600 font-inter text-sm">
            Basado en{" "}
            <span className="font-semibold text-dark">{total} reseñas</span> en
            Google
          </p>
        </motion.div>

        {/* Review cards - Responsive Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="min-w-[85vw] sm:min-w-[350px] lg:min-w-full snap-center rounded-[24px] border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
            >
              <Stars rating={review.rating} />

              <p className="mt-5 flex-1 text-gray-700 leading-relaxed font-inter italic">
                “{review.text}”
              </p>

              <div className="mt-6 border-t border-gray-50 pt-6">
                <p className="font-bold text-dark font-chillax">
                  {review.name}
                </p>
                {review.role && (
                  <p className="text-sm text-gray-500 font-inter">
                    {review.role}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Dots indicator para móvil */}
        <div className="mt-8 flex justify-center gap-1.5 lg:hidden">
          {reviews.map((_, i) => (
            <div key={i} className="h-1 w-4 rounded-full bg-primary/20" />
          ))}
        </div>

        {/* Google CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-dark transition-all duration-300 hover:border-secondary hover:text-secondary hover:bg-secondary/5"
          >
            Ver todas las reseñas en Google
            <ExternalLink
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
