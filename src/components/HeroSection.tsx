import { Button } from "@/components/ui/button";
import { Leaf, TrendingDown, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Sustainable community" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-primary-foreground/10 blur-3xl animate-float animate-delay-200" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in-up">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Community Sustainability Research</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animate-delay-100 text-balance">
            Surveying Wasteful Habits in Our Community
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Insights & Impact: Understanding how our community generates waste and discovering pathways to a more sustainable future together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animate-delay-300">
            <Button variant="hero-outline" size="xl">
              Explore Findings
            </Button>
            <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Take Action
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up animate-delay-400">
            <StatCard 
              icon={<Users className="w-6 h-6" />}
              value="150"
              label="Households Surveyed"
            />
            <StatCard 
              icon={<TrendingDown className="w-6 h-6" />}
              value="4.9 lbs"
              label="Daily Waste Per Person"
            />
            <StatCard 
              icon={<Leaf className="w-6 h-6" />}
              value="40%"
              label="Organic Waste"
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105">
    <div className="flex items-center justify-center gap-3 mb-2">
      {icon}
      <span className="font-display text-3xl font-bold">{value}</span>
    </div>
    <p className="text-sm text-primary-foreground/80">{label}</p>
  </div>
);

export default HeroSection;
