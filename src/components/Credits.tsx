import { Users, ExternalLink } from "lucide-react";

const Credits = () => {
  const teamMembers = [
    { name: "Team Member 1", role: "Research Lead" },
    { name: "Team Member 2", role: "Data Analyst" },
    { name: "Team Member 3", role: "Survey Coordinator" },
    { name: "Team Member 4", role: "Community Outreach" },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Credits
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the dedicated team behind this community waste survey research.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group bg-card rounded-3xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Users className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Made by RSN.Dev */}
        <div className="text-center">
          <a
            href="https://rsndev.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all duration-300 hover:scale-105 shadow-card"
          >
            Made by RSN.Dev
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Credits;
