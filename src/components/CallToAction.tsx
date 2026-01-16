import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileText } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-accent/20 blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Join the Movement for a Cleaner Community
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10">
            Every small action counts. Together, we can reduce waste, protect our environment, and build a more sustainable future for generations to come.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-3">
              <Mail className="w-5 h-5" />
              Get Involved
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl" className="gap-3">
              <FileText className="w-5 h-5" />
              Download Full Report
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-10 border-t border-primary-foreground/20">
            <div>
              <div className="text-4xl font-bold font-display mb-2">150+</div>
              <div className="text-primary-foreground/80 text-sm">Households Engaged</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-display mb-2">3</div>
              <div className="text-primary-foreground/80 text-sm">Neighbourhoods Surveyed</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-display mb-2">∞</div>
              <div className="text-primary-foreground/80 text-sm">Potential Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
