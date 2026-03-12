import { Navigation } from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import HeroSection from "@/components/sections/HeroSection.jsx";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <HowItWorksSection />
        <PricingSection />
        <ReviewsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
