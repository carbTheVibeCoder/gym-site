import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, IndianRupee } from "lucide-react";
import heroImage from "@/assets/boxing-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Join Our Boxing Classes at Flex Gym!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            Affordable training for fitness and skill-building
          </p>
          <a href="tel:8301863626">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-bold hover:scale-105 transition-transform"
            >
              Call: 8301863626
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Transform Your Fitness</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Experience professional boxing training at Flex Gym, Kuzhalmannam Center. 
            Our affordable classes are perfect for all skill levels - whether you're 
            looking to get fit, learn self-defense, or master the sweet science of boxing.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">Affordable Pricing</h2>
          <Card className="max-w-md mx-auto border-2 border-primary">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <IndianRupee className="w-12 h-12 text-primary" />
              </div>
              <div className="text-5xl font-black text-primary mb-2">₹500</div>
              <div className="text-xl font-semibold mb-6">per month</div>
              <div className="text-muted-foreground mb-4">
                Plus one-time admission fee
              </div>
              <a href="tel:8301863626" className="block">
                <Button 
                  className="w-full font-bold"
                  size="lg"
                >
                  Call: 8301863626
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">Class Schedule</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Wednesday</h3>
                    <p className="text-xl text-muted-foreground">6:00 PM – 8:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Sunday</h3>
                    <p className="text-xl text-muted-foreground">10:00 AM – 12:45 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-12 h-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-black">Find Us</h2>
          </div>
          <p className="text-2xl font-semibold">
            Flex Gym, Kuzhalmannam Center
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Start?</h2>
          <p className="text-xl mb-8">
            Join us today and begin your boxing journey at Flex Gym!
          </p>
          <a href="tel:8301863626">
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 font-bold hover:scale-105 transition-transform"
            >
              Call: 8301863626
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-muted-foreground border-t">
        <p>&copy; 2025 Flex Gym Boxing Classes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
