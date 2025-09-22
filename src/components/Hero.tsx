import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/allgot-hero.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              AI-baserad lärarassistent
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight">
              Välkommen till{" "}
              <span className="block mt-2">
                <span className="bg-hero-gradient bg-clip-text text-transparent">Allgot</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Allgot är en AI-baserad lärarassistent som tar rättningshögen och skapar lektioner på ett klick.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="gap-2 text-lg px-8 py-4">
                Nyfiken? Se själv
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Se exempel
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Ingen installation
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                14 dagars gratis test
              </div>
            </div>
          </div>
          
          <div className="relative max-w-4xl mx-auto mt-16">
            <div className="absolute inset-0 bg-hero-gradient rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src={heroImage} 
              alt="Lärare som använder Allgot AI-verktyg"
              className="relative rounded-3xl shadow-hero w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;