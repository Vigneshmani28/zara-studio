import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroImage from "@/assets/hero-architecture.jpg";
import projectResidential1 from "@/assets/project-residential-1.jpg";
import projectCommercial1 from "@/assets/project-commercial-1.jpg";
import projectInterior1 from "@/assets/project-interior-1.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";

const heroImages = [
  { src: heroImage, alt: "Modern architectural interior with natural light" },
  { src: projectResidential1, alt: "Luxury residential architecture" },
  { src: projectCommercial1, alt: "Contemporary commercial building" },
  { src: projectInterior1, alt: "Elegant interior design" },
  { src: projectResidential2, alt: "Modern residential project" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Smooth Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-8 bg-accent"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 arch-container w-full">
        <div className="max-w-3xl">
          {/* Overline */}
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-up">
            <div className="w-12 h-px bg-accent" />
            <span className="font-sans text-small tracking-architectural uppercase text-primary-foreground/80">
              Award-Winning Architecture Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-display-lg md:text-display-xl text-primary-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
            Designing Spaces That Inspire Living
          </h1>

          {/* Subheading */}
          <p className="text-body-lg md:text-heading text-primary-foreground/90 mb-10 max-w-xl font-light opacity-0 animate-fade-up animation-delay-200">
            Award-focused architecture and interior design studio crafting timeless spaces for discerning clients.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/projects">View Our Projects</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 opacity-0 animate-fade-up animation-delay-500">
        <span className="font-sans text-small tracking-architectural uppercase">
          Scroll to explore
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
