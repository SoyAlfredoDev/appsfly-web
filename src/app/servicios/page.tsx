import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AllServicesSection from "@/components/sections/AllServicesSection";

export const metadata: Metadata = {
  title: "Nuestros Servicios",
  description:
    "Descubre todos los servicios de AppsFly: Desarrollo de Landing Pages, Tiendas Online, Automatización de WhatsApp, Software a Medida y Sistemas Administrativos.",
  alternates: {
    canonical: "https://appsfly.cl/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        <AllServicesSection />
        <Footer />
      </main>
    </>
  );
}
