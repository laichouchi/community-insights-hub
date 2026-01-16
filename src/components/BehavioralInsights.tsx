import { XCircle, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";

const BehavioralInsights = () => {
  const barriers = [
    "Lack of convenient composting options for many households",
    "Confusion surrounding complex or changing recycling rules",
    "Limited awareness of local drop-off points for specific waste streams",
  ];

  const motivators = [
    "Strong desire among residents to save money on waste disposal",
    "Deep-seated commitment to protecting the environment for future generations",
    "Community pride and the aspiration for a cleaner, greener neighbourhood",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Behavioral Insights
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Waste Happens
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding the barriers and motivators that shape our community's waste behaviors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Barriers Card */}
          <div className="bg-card rounded-3xl p-8 shadow-card border-t-4 border-destructive">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 text-destructive">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Barriers to Waste Reduction
              </h3>
            </div>

            <div className="space-y-4">
              {barriers.map((barrier, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-destructive/5 rounded-2xl hover:bg-destructive/10 transition-colors duration-300"
                >
                  <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{barrier}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Motivators Card */}
          <div className="bg-card rounded-3xl p-8 shadow-card border-t-4 border-accent">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Motivators for Sustainable Habits
              </h3>
            </div>

            <div className="space-y-4">
              {motivators.map((motivator, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-accent/5 rounded-2xl hover:bg-accent/10 transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{motivator}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-secondary rounded-3xl p-8 text-center">
            <p className="text-lg text-secondary-foreground">
              Open-ended survey responses frequently highlighted a pressing need for{" "}
              <span className="font-semibold">clearer, more consistent local waste guidelines</span> and easily accessible information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehavioralInsights;
