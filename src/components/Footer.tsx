import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-display text-xl font-bold">Community Waste Survey</span>
          </div>

          <nav className="flex items-center gap-8">
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Methodology
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Full Report
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Contact
            </a>
          </nav>

          <p className="text-background/60 text-sm">
            © 2024 Community Research Initiative
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
