import { Shield, Zap, Smartphone, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in seconds, not hours. Our AI processes your requests instantly."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays secure. We never share student information or teaching materials."
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Access your tools on any device - desktop, tablet, or mobile."
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    description: "Monitor your productivity and see how AI is transforming your teaching."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Modern Educators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature is designed with teachers in mind, making your workflow more efficient and effective.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;