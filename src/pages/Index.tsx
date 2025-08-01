import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import AgendaSection from "@/components/AgendaSection";
import RouteSection from "@/components/RouteSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <NewsSection />
        <AgendaSection />
        <GallerySection />
        <RouteSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
