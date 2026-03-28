"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Mail,
  MessageCircle,
  Building2,
  FileBadge,
} from "lucide-react";

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
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21 8.5a7.5 7.5 0 01-4.5-1.5v6.75a6.25 6.25 0 11-6.25-6.25c.2 0 .4.02.6.05v3.05a3.25 3.25 0 102.65 3.2V2h3a4.5 4.5 0 004.5 4.5v2z" />
    </svg>
  );
  const phoneNumber = "56935784716";
  const message =
    "Hola, me gustaría solicitar una cotización de sus productos.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer aria-label="Pie de página" className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="#home" onClick={(e) => handleNavClick(e, "#home")}>
              <Image
                src="/images/logo-appsfly.png"
                alt="Logo"
                width={200}
                height={200}
                className="my-[-30px]"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Soluciones digitales pensadas para ayudar a tu negocio a crecer,
              vender más y atender mejor.
            </p>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                Contacto
              </h4>

              <div className="space-y-4 text-sm text-white/60">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Tecnología y Servicios Appsfly SpA</span>
                </div>
                <div className="flex items-start gap-3">
                  <FileBadge className="mt-0.5 h-4 w-4 text-primary" />
                  <span>RUT: 77.719.288-4</span>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-primary" />
                  <a
                    href="mailto:comercial@appsfly.cl"
                    className="transition hover:text-white"
                  >
                    comercial@appsfly.cl
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 text-primary" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    className="transition hover:text-white"
                  >
                    +56 9 3578 4716
                  </a>
                </div>
              </div>
            </div>
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

            <p className="mb-6 text-sm leading-relaxed text-white/60">
              Cuéntanos tu proyecto y te ayudamos a encontrar la mejor solución
              digital para tu negocio.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group mb-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              Hablemos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Suscripción */}
            <div className="mb-6">
              <p className="mb-3 text-xs uppercase tracking-wider text-white/40">
                Suscríbete
              </p>

              <form className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary px-4 text-sm font-semibold text-white transition hover:bg-secondary"
                >
                  OK
                </button>
              </form>
            </div>

            {/* Redes sociales */}
            <div>
              <p className="mb-3 text-xs uppercase tracking-wider text-white/40">
                Síguenos
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="https://www.instagram.com/appsfly.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a AppsFly en Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-primary hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php?id=61585307100875"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a AppsFly en Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-primary hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@appsfly8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a AppsFly en TikTok"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-primary hover:text-white"
                >
                  <TikTokIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
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
