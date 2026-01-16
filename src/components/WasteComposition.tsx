import { Leaf, Package, MoreHorizontal } from "lucide-react";

const WasteComposition = () => {
  const wasteTypes = [
    {
      icon: <Leaf className="w-8 h-8" />,
      name: "Organic Waste",
      percentage: 40,
      description: "Primarily food scraps and garden trimmings",
      color: "bg-organic",
      gradient: "from-organic to-organic/80",
    },
    {
      icon: <Package className="w-8 h-8" />,
      name: "Packaging Waste",
      percentage: 35,
      description: "Plastic, paper, and metal packaging materials",
      color: "bg-packaging",
      gradient: "from-packaging to-packaging/80",
    },
    {
      icon: <MoreHorizontal className="w-8 h-8" />,
      name: "Other Waste",
      percentage: 25,
      description: "Textiles, electronics, and small hazardous waste",
      color: "bg-other",
      gradient: "from-other to-other/80",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Key Findings
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Waste Do We Produce?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding the composition of our community's waste is the first step toward meaningful change.
          </p>
        </div>

        {/* Visual Chart */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex rounded-3xl overflow-hidden h-20 shadow-card">
            {wasteTypes.map((waste, index) => (
              <div
                key={waste.name}
                className={`relative bg-gradient-to-br ${waste.gradient} flex items-center justify-center transition-all duration-500 hover:scale-y-110 origin-bottom`}
                style={{ width: `${waste.percentage}%` }}
              >
                <span className="text-white font-bold text-xl">{waste.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {wasteTypes.map((waste, index) => (
            <div
              key={waste.name}
              className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${waste.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {waste.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {waste.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className={`text-4xl font-bold ${waste.color.replace('bg-', 'text-')}`}>
                  {waste.percentage}%
                </span>
                <span className="text-muted-foreground">of total</span>
              </div>
              <p className="text-muted-foreground">
                {waste.description}
              </p>
            </div>
          ))}
        </div>

        {/* Notable Finding */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-secondary/50 border border-secondary rounded-3xl p-8 text-center">
            <p className="text-lg text-foreground">
              <span className="font-semibold">Notable finding:</span> The widespread use of{" "}
              <span className="text-primary font-semibold">single-use plastics</span> persists despite general awareness campaigns about their environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteComposition;
