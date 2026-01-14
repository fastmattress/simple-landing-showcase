import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="2-Hour Mattress" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80">
              Premium mattresses delivered to your door in 2 hours or it's free.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:818-MATTRES" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                818-MATTRES
              </a>
              <a href="mailto:hello@2hourmattress.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                hello@2hourmattress.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Los Angeles, CA
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <p className="text-primary-foreground/80">
              Monday - Sunday<br />
              8:00 AM - 10:00 PM
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} 2-Hour Mattress. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
