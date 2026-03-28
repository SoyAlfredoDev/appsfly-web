"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Inicio", href: "#home" },
  { name: "Problema", href: "#problem" },
  { name: "Soluciones", href: "#solutions" },
  { name: "Servicios", href: "#services" },
  { name: "Portafolio", href: "#portfolio" },
  { name: "Planes", href: "#pricing" },
  { name: "Opiniones", href: "#reviews" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Usamos el hook de Framer Motion para tracking de scroll eficiente
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Lógica de visibilidad (Smart Nav)
    // Aparece si: estamos arriba (latest < 50) O si subimos (latest < previous)
    if (latest > previous && latest > 150) {
      setIsVisible(false); // Bajando
      setIsMobileMenuOpen(false); // Cerramos menú si el usuario scrollea
    } else {
      setIsVisible(true); // Subiendo o en el top
    }

    // Lógica estética (Background/Blur)
    setIsScrolled(latest > 20);
  });

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      // Animación de entrada/salida
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center"
        >
          <Image
            src="/images/logo-appsfly.png"
            alt="AppsFly"
            width={120}
            height={40}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-dark/70 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--color-primary)] p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100"
          >
            <div className="py-4 px-6 flex flex-col space-y-1">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="text-base font-medium text-dark/80 hover:text-primary py-2.5 px-3 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-2 mx-auto mb-[16px]">
                <Link href="#contact" className="btn-primary">
                  Hablemos
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
