
import { Footer } from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { ResultsShowcase } from "./components/resultshowcase/ResultShowCase";
import { ServicesSection } from "./components/service/Service";
import { TestimonialsSection } from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ResultsShowcase />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
