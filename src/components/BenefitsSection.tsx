import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  GraduationCap, 
  MessageSquare, 
  CheckCircle, 
  BookOpen, 
  Target,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Allgot tar rättningshögen",
    description: "Få elevtexter bedömda enligt läroplanen – på sekunder.",
    features: ["🔍 Bedömning av elevtexter", "⚖️ Formativa & summativa inslag", "📚 Utgår från kunskapskraven"]
  },
  {
    icon: FileText,
    title: "Lektioner på ett klick",
    description: "Få kompletta lektionsplaneringar – helt anpassade för dig.",
    features: ["📖 Anpassade för din kurs", "⏱️ Sparar timmar av planering", "🎯 Följer läroplanen"]
  },
  {
    icon: MessageSquare,
    title: "Skapa prov och uppgifter",
    description: "Generera engagerande prov och uppgifter som matchar dina mål.",
    features: ["📋 Olika svårighetsgrader", "🎯 Kopplat till kursmålen", "⚡ Snabb generering"]
  },
  {
    icon: Target,
    title: "Individuell anpassning",
    description: "Skapa stödmaterial för elever som behöver extra hjälp.",
    features: ["👥 Personliga studieplaner", "📈 Uppföljning av framsteg", "🔄 Kontinuerlig anpassning"]
  }
];

const BenefitsSection = () => {
  return (
    <section id="verktyg" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Vi har knäckt koden.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Allgot ger verklig insikt utan informationsöverflöd. Fokusera på det som verkligen betyder något för din undervisning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="bg-card-gradient hover:shadow-lg transition-smooth group cursor-pointer border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      {benefit.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  Prova det här verktyget
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-soft-green px-6 py-3 rounded-full text-sm font-medium text-primary mb-4">
            <GraduationCap className="h-4 w-4" />
            Se hela bilden
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Allgot omvandlar din data till tydliga visualiseringar
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Som visar dig exakt vad som händer med varje elevs utveckling och lärande.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;