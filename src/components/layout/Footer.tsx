"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const footerLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Problema", href: "#problem" },
  { name: "Soluciones", href: "#solutions" },
  { name: "Servicios", href: "#services" },
  { name: "Cómo trabajamos", href: "#process" },
  { name: "Planes", href: "#pricing" },
  { name: "Opiniones", href: "#reviews" },
  { name: "Contacto", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="#home" onClick={(e) => handleNavClick(e, "#home")}>
              <span className="text-2xl font-bold tracking-tight">
                Apps<span className="text-primary">Fly</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Soluciones digitales pensadas para ayudar a tu negocio a crecer,
              vender más y atender mejor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              ¿Listo para empezar?
            </h4>
            <p className="mb-6 text-sm text-white/60 leading-relaxed">
              Cuéntanos tu proyecto y te ayudamos a encontrar la mejor solución
              digital para tu negocio.
            </p>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              Hablemos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} AppsFly. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <span>Privacidad</span>
            <span>Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
