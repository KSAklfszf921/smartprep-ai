import { Shield, Zap, Smartphone, BookOpen } from "lucide-react";

const specifications = [
  {
    icon: Zap,
    title: "Blixtsnabb",
    description: "Få resultat på sekunder, inte timmar. Vår AI bearbetar dina förfrågningar omedelbart."
  },
  {
    icon: Shield,
    title: "Integritet först",
    description: "Din data förblir säker. Vi delar aldrig elevinformation eller undervisningsmaterial."
  },
  {
    icon: Smartphone,
    title: "Fungerar överallt",
    description: "Komma åt dina verktyg på vilken enhet som helst - dator, surfplatta eller mobil."
  },
  {
    icon: BookOpen,
    title: "Följa framsteg",
    description: "Övervaka din produktivitet och se hur AI förvandlar din undervisning."
  }
];

const Specifications = () => {
  return (
    <section id="fördelar" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Byggt för moderna lärare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Varje funktion är designad med lärare i åtanke, vilket gör ditt arbetsflöde mer effektivt.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specifications.map((spec) => (
            <div key={spec.title} className="text-center group">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <spec.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{spec.title}</h3>
              <p className="text-muted-foreground">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;