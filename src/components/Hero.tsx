import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-teacher-ai.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              AI-Powered Teaching Assistant
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your 
              <span className="bg-hero-gradient bg-clip-text text-transparent"> Teaching</span> with AI
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Streamline lesson planning, assess student work, and create engaging content with our suite of specialized AI tools designed specifically for educators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                No setup required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                14-day free trial
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-hero-gradient rounded-2xl blur-3xl opacity-20"></div>
            <img 
              src={heroImage} 
              alt="Teacher using AI tools for education"
              className="relative rounded-2xl shadow-hero w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;