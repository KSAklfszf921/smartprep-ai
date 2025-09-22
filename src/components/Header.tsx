import { Button } from "@/components/ui/button";
import { GraduationCap, LogIn } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Allgot</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#verktyg" className="text-foreground hover:text-primary transition-colors">Verktyg</a>
          <a href="#fördelar" className="text-foreground hover:text-primary transition-colors">Fördelar</a>
          <a href="#priser" className="text-foreground hover:text-primary transition-colors">Priser</a>
        </nav>
        
        <Button variant="outline" className="gap-2">
          <LogIn className="h-4 w-4" />
          Logga in
        </Button>
      </div>
    </header>
  );
};

export default Header;