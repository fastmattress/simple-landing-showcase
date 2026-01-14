import deliveryVan from "@/assets/delivery-van.png";

const DeliverySection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Fastest Mattress Delivery in Town
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're not just fast – we guarantee it. When you order from 2-Hour Mattress, 
              your new mattress arrives at your door within 2 hours, or you don't pay a cent.
            </p>
            <ul className="space-y-4">
              {[
                "Same-day delivery, every day",
                "Professional white-glove setup included",
                "Old mattress removal at no extra cost",
                "Real-time delivery tracking",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src={deliveryVan} 
              alt="2-Hour Mattress Delivery Van" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
