import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <img src={logo} alt="2-Hour Mattress" className="h-12 w-auto" />
        <div className="flex items-center gap-4">
          <a 
            href="tel:818-MATTRES" 
            className="hidden sm:flex items-center gap-2 text-primary font-bold text-lg"
          >
            <Phone className="h-5 w-5" />
            818-MATTRES
          </a>
          <Button variant="accent" size="lg">
            Shop Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
