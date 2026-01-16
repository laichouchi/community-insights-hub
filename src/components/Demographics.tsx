import { Users, Home, User, Heart } from "lucide-react";

const Demographics = () => {
  const demographics = [
    {
      icon: <Home className="w-6 h-6" />,
      label: "Families with children",
      percentage: 60,
      color: "bg-primary",
    },
    {
      icon: <User className="w-6 h-6" />,
      label: "Single-person households",
      percentage: 25,
      color: "bg-accent",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: "Senior residents",
      percentage: 15,
      color: "bg-organic",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Community Snapshot
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Who Responded?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our survey engaged <span className="text-primary font-semibold">150 households</span> across various neighbourhoods, ensuring a representative cross-section of our community's waste habits.
            </p>

            <div className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-soft">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground font-display">150</div>
                <div className="text-muted-foreground">Total Households</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual breakdown */}
          <div className="space-y-6">
            {demographics.map((demo, index) => (
              <div key={demo.label} className="group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${demo.color} text-white`}>
                      {demo.icon}
                    </div>
                    <span className="font-medium text-foreground">{demo.label}</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground font-display">
                    {demo.percentage}%
                  </span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${demo.color} rounded-full transition-all duration-1000 ease-out group-hover:opacity-80`}
                    style={{ width: `${demo.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demographics;
