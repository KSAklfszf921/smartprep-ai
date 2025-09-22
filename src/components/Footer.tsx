import { GraduationCap, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Allgot</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Ger lärare kraft med AI-verktyg som sparar tid och förbättrar undervisningseffektiviteten. Anslut dig till tusentals lärare som redan förvandlar sina klassrum.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Produkt</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Funktioner</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Priser</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Säkerhet</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Uppdateringar</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Hjälpcenter</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Kontakta oss</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Utbildning</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Gemenskap</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 Allgot. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6 text-sm text-background/70 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-background transition-colors">Användarvillkor</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;