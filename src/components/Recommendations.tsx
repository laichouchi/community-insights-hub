import { Recycle, BookOpen, Handshake, Target } from "lucide-react";

const Recommendations = () => {
  const recommendations = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Expand Composting Access",
      description: "Partner with local organizations to increase curbside and community composting programs.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Simplify Guidelines",
      description: "Create clear, visual recycling guides distributed to every household in multiple languages.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Community Partnerships",
      description: "Collaborate with local businesses for waste reduction incentives and drop-off programs.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Set Measurable Goals",
      description: "Establish community-wide waste reduction targets with regular progress updates.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Path Forward
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Actionable Recommendations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Based on our findings, here are key steps our community can take to reduce waste and build sustainable habits.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {recommendations.map((rec, index) => (
            <div
              key={rec.title}
              className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {rec.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {rec.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {rec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
