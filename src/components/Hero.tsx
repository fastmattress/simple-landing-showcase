import { Button } from "@/components/ui/button";
import { Clock, Truck, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 font-semibold">
            <Clock className="h-5 w-5" />
            Delivered in 2 Hours or It's FREE!
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Perfect Night's Sleep,{" "}
            <span className="text-primary">Delivered Fast</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Premium mattresses delivered to your door in just 2 hours. 
            No more waiting weeks – sleep better tonight.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="accent" size="xl">
              Shop Mattresses
            </Button>
            <Button variant="outline" size="xl">
              Call 818-MATTRES
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              Free 2-Hour Delivery
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              100-Night Trial
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              10-Year Warranty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
