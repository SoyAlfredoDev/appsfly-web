"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

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
  const googleUrl = "https://www.google.com/maps"; // reemplaza con tu link real de Google Business

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
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Opiniones de clientes
          </p>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-dark md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>

          <p className="text-lg text-gray-600">
            Valoraciones reales basadas en experiencias de clientes que ya han
            trabajado con nosotros.
          </p>
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
          <p className="text-gray-600">
            Basado en{" "}
            <span className="font-semibold text-dark">{total} reseñas</span> en
            Google
          </p>
        </motion.div>

        {/* Review cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Stars rating={review.rating} />

              <p className="mt-4 text-gray-700 leading-relaxed">
                “{review.text}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-dark">{review.name}</p>
                {review.role && (
                  <p className="text-sm text-gray-500">{review.role}</p>
                )}
              </div>
            </motion.article>
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
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-dark transition-all duration-300 hover:border-secondary hover:text-secondary"
          >
            Ver todas las reseñas en Google
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
