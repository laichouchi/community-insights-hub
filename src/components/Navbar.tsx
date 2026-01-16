import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${isScrolled ? 'bg-primary text-primary-foreground' : 'bg-primary-foreground/20 text-primary-foreground'} transition-colors duration-300`}>
              <Leaf className="w-5 h-5" />
            </div>
            <span className={`font-display text-lg font-bold transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              Waste Survey
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Findings", "Demographics", "Insights", "Recommendations"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-100 ${
                  isScrolled
                    ? "text-foreground/70 hover:text-primary"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant={isScrolled ? "default" : "hero-outline"}
              size="sm"
              className={!isScrolled ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" : ""}
            >
              Get Report
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card rounded-2xl shadow-elevated animate-scale-in">
            <nav className="flex flex-col gap-2">
              {["Findings", "Demographics", "Insights", "Recommendations"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
              <Button className="mt-2">Get Report</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
