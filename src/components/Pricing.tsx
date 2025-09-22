import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Grundpaket",
    price: "199 kr",
    description: "Perfekt för enskilda lärare som kommer igång med AI",
    features: [
      "Tillgång till 3 AI-verktyg",
      "50 genereringar per månad",
      "Grundmallar",
      "E-postsupport"
    ],
    popular: false
  },
  {
    name: "Professionell",
    price: "399 kr",
    description: "Allt du behöver för omfattande undervisningsstöd",
    features: [
      "Tillgång till alla AI-verktyg",
      "Obegränsade genereringar",
      "Premiummallar",
      "Prioriterad support",
      "Läroplansjustering",
      "Analysdashboard"
    ],
    popular: true
  },
  {
    name: "Skola",
    price: "999 kr",
    description: "Flera lärarkonton med administratörskontroller",
    features: [
      "Allt i Professionell",
      "Upp till 10 lärarkonton",
      "Skolövergripande analys",
      "Anpassade mallar",
      "Utbildningstillfällen",
      "Dedikerad support"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="priser" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enkla, transparenta priser
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Välj det paket som passar dina behov. Alla paket inkluderar 14 dagars gratis test utan åtagande.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''} bg-card-gradient`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Mest populär
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/månad</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full mb-6"
                  size="lg"
                >
                  Starta gratis test
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;