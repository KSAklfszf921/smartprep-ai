import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import Specifications from "@/components/Specifications";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BenefitsSection />
      <Specifications />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
