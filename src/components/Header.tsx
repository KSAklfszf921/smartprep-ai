import { Button } from "@/components/ui/button";
import { BookOpen, LogIn } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">TeachAI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#tools" className="text-foreground hover:text-primary transition-colors">Tools</a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
        </nav>
        
        <Button variant="outline" className="gap-2">
          <LogIn className="h-4 w-4" />
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;