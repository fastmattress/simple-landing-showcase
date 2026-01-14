import Hero from "@/components/Hero";
import DeliverySection from "@/components/DeliverySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <DeliverySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
