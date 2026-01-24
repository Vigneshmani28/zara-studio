import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import studioImage from "@/assets/studio-workspace.jpg";

const CTASection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={studioImage}
          alt="Zara Architects studio workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <ScrollReveal className="relative z-10 arch-container text-center">
        <h2 className="font-serif text-display md:text-display-lg text-primary-foreground mb-6">
          Let's Design Your Dream Space
        </h2>
        <p className="text-body-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Ready to transform your vision into reality? Schedule a consultation with our team and take the first step toward your perfect space.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90" asChild>
            <Link to="/contact">Book a Consultation</Link>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/projects">Explore Our Work</Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CTASection;
