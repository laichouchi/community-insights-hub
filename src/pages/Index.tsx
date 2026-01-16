import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WasteComposition from "@/components/WasteComposition";
import Demographics from "@/components/Demographics";
import BehavioralInsights from "@/components/BehavioralInsights";
import Recommendations from "@/components/Recommendations";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="findings">
          <WasteComposition />
        </section>
        <section id="demographics">
          <Demographics />
        </section>
        <section id="insights">
          <BehavioralInsights />
        </section>
        <section id="recommendations">
          <Recommendations />
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
