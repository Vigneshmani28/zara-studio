import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import studioImage from "@/assets/studio-workspace.jpg";

const CTASection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={studioImage}
          alt="Zara Architects studio workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Content */}
      <ScrollReveal className="relative z-10 arch-container text-center px-6">
        {/* Simple Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-8 h-px bg-accent" />
          <span className="font-sans text-sm tracking-[0.2em] uppercase text-primary-foreground/80">
            Let's Collaborate
          </span>
          <div className="w-8 h-px bg-accent" />
        </div>

        {/* Main Heading */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-8 leading-tight">
          Ready to Begin
          <span className="block text-accent">Your Project?</span>
        </h2>

        {/* Subheading */}
        <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Let's work together to create something extraordinary. Schedule a
          consultation with our team today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent/90 px-8 py-6"
            asChild
          >
            <Link to="/contact">Book a Consultation</Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground  hover:bg-white/10 px-8 py-6"
            asChild
          >
            <Link to="/services">View Our Work</Link>
          </Button>
        </div>

        {/* Simple Info */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/70">
            Budget clarity from day one • Practical design solutions • Hands-on
            execution • Client-first approach
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CTASection;
