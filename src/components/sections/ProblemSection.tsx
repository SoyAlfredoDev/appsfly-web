"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  MessageCircleWarning,
  Clock,
  ChevronDown,
} from "lucide-react";
import Badge from "../ui/badge";

const problems = [
  {
    icon: AlertCircle,
    title: "¿Tu sitio web no genera clientes?",
    description:
      "Muchos negocios tienen páginas web antiguas o mal optimizadas que no convierten visitantes en clientes reales.",
    image: "/videos/problem-01.mp4",
  },
  {
    icon: MessageCircleWarning,
    title: "¿Pierdes oportunidades por no responder rápido?",
    description:
      "Los clientes esperan respuestas inmediatas en WhatsApp o redes sociales. Si tardas demasiado, buscan otra opción.",
    image: "/videos/problem-02.mp4",
  },
  {
    icon: Clock,
    title: "¿Pierdes tiempo en procesos manuales?",
    description:
      "Sin automatización ni herramientas digitales, muchas tareas se vuelven repetitivas y reducen la eficiencia de tu negocio.",
    image: "/videos/problem-03.mp4",
  },
];

export default function ProblemSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const desktopVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const mobileVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const stopVideo = (video: HTMLVideoElement | null) => {
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  const playVideo = async (video: HTMLVideoElement | null) => {
    if (!video) return;
    if (!video.paused) return;

    try {
      video.currentTime = 0;
      await video.play();
    } catch {
      // Ignorar errores de autoplay/play del navegador
    }
  };

  useEffect(() => {
    const allVideos = [
      ...desktopVideoRefs.current,
      ...mobileVideoRefs.current,
    ].filter(Boolean) as HTMLVideoElement[];

    allVideos.forEach((video) => {
      video.playbackRate = 1;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
    });
  }, [expandedIndex]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    if (!mobileQuery.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            playVideo(video);
          } else {
            stopVideo(video);
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.6, 0.75, 1],
      },
    );

    const visibleMobileVideos = mobileVideoRefs.current.filter(
      Boolean,
    ) as HTMLVideoElement[];

    visibleMobileVideos.forEach((video) => observer.observe(video));

    return () => {
      visibleMobileVideos.forEach((video) => {
        observer.unobserve(video);
        stopVideo(video);
      });
      observer.disconnect();
    };
  }, [expandedIndex]);

  return (
    <section
      id="problem"
      className="relative overflow-hidden py-16 bg-[#021f41] h-screen"
    >
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-problem.jpg"
          alt="Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#01c676]/30 to-[#01c676]/10 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      {/* Gradientes decorativos */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-80px] top-20 h-72 w-72 rounded-full bg-red-400/10 blur-3xl" />
        <div className="absolute left-[-60px] bottom-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <Badge title="Problema" color="red" />
          <h2 className="text-xl md:text-3xl font-bold text-white mb-4 leading-12">
            Tu negocio podría estar perdiendo clientes por falta de presencia
            digital
          </h2>
          <p className="text-lg text-white/80 leading-relaxed font-inter">
            Muchos negocios tienen presencia digital, pero no está optimizada
            para atraer clientes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer flex flex-col overflow-hidden rounded-[28px] border bg-white transition-all duration-300 ${
                  isExpanded
                    ? "shadow-xl ring-2 ring-primary md:ring-white/20"
                    : "shadow-sm border-gray-100 hover:shadow-md"
                } md:hover:-translate-y-1 md:hover:shadow-xl`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left md:cursor-default md:p-0"
                >
                  <div className="flex items-center gap-4 md:contents">
                    {/* Video Desktop / Tablet */}
                    <div
                      className="hidden cursor-pointer md:block relative h-52 w-full overflow-hidden bg-gray-100"
                      onMouseEnter={() =>
                        playVideo(desktopVideoRefs.current[index])
                      }
                      onMouseLeave={() =>
                        stopVideo(desktopVideoRefs.current[index])
                      }
                    >
                      <video
                        ref={(el) => {
                          desktopVideoRefs.current[index] = el;
                        }}
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full cursor-pointer w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      >
                        <source src={problem.image} type="video/mp4" />
                      </video>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#021f41]/40 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-red-500 shadow-md">
                        <Icon size={24} />
                      </div>
                    </div>

                    {/* Cabecera móvil */}
                    <div className="flex items-center gap-4 md:hidden">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          isExpanded
                            ? "bg-red-500 text-white"
                            : "bg-red-50 text-red-500"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <h3 className="text-lg font-bold text-[#021f41] leading-tight font-chillax">
                        {problem.title}
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-gray-400 md:hidden"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Contenido fijo en Desktop */}
                <div className="hidden md:flex flex-1 flex-col p-6 pt-5">
                  <h3 className="mb-3 text-xl font-bold text-[#021f41] leading-snug font-chillax">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    {problem.description}
                  </p>
                </div>

                {/* Contenido expandible en Móvil */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="md:hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-50 pt-4">
                        <div className="relative h-44 w-full overflow-hidden rounded-2xl mb-4 bg-gray-100">
                          <video
                            ref={(el) => {
                              mobileVideoRefs.current[index] = el;
                            }}
                            muted
                            playsInline
                            preload="metadata"
                            className="h-full w-full object-cover"
                          >
                            <source src={problem.image} type="video/mp4" />
                          </video>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-sm font-inter">
                          {problem.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
