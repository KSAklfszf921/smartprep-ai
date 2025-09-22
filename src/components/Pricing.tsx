import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for individual teachers getting started with AI",
    features: [
      "Access to 3 AI tools",
      "50 generations per month",
      "Basic templates",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$39",
    description: "Everything you need for comprehensive teaching support",
    features: [
      "Access to all AI tools",
      "Unlimited generations",
      "Premium templates",
      "Priority support",
      "Curriculum alignment",
      "Analytics dashboard"
    ],
    popular: true
  },
  {
    name: "School",
    price: "$99",
    description: "Multi-teacher access with admin controls",
    features: [
      "Everything in Professional",
      "Up to 10 teacher accounts",
      "School-wide analytics",
      "Custom templates",
      "Training sessions",
      "Dedicated support"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial with no commitment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''} bg-card-gradient`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full mb-6"
                  size="lg"
                >
                  Start Free Trial
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