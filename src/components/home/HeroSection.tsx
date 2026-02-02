import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import hero4 from "@/assets/hero-4.webp";
import hero5 from "@/assets/hero-5.webp";

const heroImages = [
  { src: hero1, alt: "Modern architectural interior with natural light" },
  { src: hero2, alt: "Luxury residential architecture" },
  { src: hero3, alt: "Contemporary commercial building" },
  { src: hero4, alt: "Elegant interior design" },
  { src: hero5, alt: "Modern residential project" },
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

      {/* Content */}
      <div className="relative z-10 arch-container w-full px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Overline */}
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-up">
            <div className="w-12 h-px bg-accent" />
            <span className="font-sans text-small tracking-architectural uppercase text-primary-foreground/80">
              Turning Space Into Soul
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-display-lg md:text-display-xl text-primary-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
            Designing Spaces That Inspire Living
          </h1>

          {/* Subheading */}
          <p className="text-body-lg md:text-heading text-primary-foreground/90 mb-10 max-w-xl font-light opacity-0 animate-fade-up animation-delay-200">
            Creating functional, thoughtful interiors that prioritize everyday
            living over fleeting trends. Spaces designed for real life.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">View Our works</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Better mobile positioning */}
      <div className="absolute bottom-24 md:bottom-16 left-4 md:left-8 flex flex-col gap-2 md:gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group flex items-center gap-2 md:gap-3 focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="flex items-center gap-1.5 md:gap-2">
              <div
                className={`h-0.5 transition-all duration-500 ${
                  index === currentIndex
                    ? "w-6 md:w-8 lg:w-10 bg-accent"
                    : "w-3 md:w-4 lg:w-6 bg-primary-foreground/40 group-hover:w-4 md:group-hover:w-6 lg:group-hover:w-8 group-hover:bg-primary-foreground/60"
                }`}
              />
              <span
                className={`font-sans text-[10px] md:text-xs lg:text-sm tracking-widest uppercase transition-colors duration-300 ${
                  index === currentIndex
                    ? "text-accent opacity-100"
                    : "text-primary-foreground/40 opacity-0 group-hover:opacity-100"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Slide Counter - Better mobile positioning */}
      <div className="absolute bottom-24 md:bottom-16 right-4 md:right-8 flex items-center gap-1.5 md:gap-2 z-20">
        <span className="font-serif text-lg md:text-xl lg:text-2xl text-accent">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <div className="h-5 md:h-6 w-px bg-primary-foreground/30" />
        <span className="font-sans text-xs md:text-sm lg:text-base text-primary-foreground/60 tracking-widest uppercase">
          {String(heroImages.length).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll Indicator - Adjusted for mobile safe area */}
      <div className="absolute bottom-20 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 md:gap-2 z-20">
        <div className="flex flex-col items-center gap-1.5 md:gap-2 text-primary-foreground/70 opacity-0 animate-fade-up animation-delay-500">
          <span className="font-sans text-[10px] md:text-xs lg:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase">
            Scroll to explore
          </span>
          <div className="relative h-6 md:h-8">
            <ArrowDown className="h-3 w-3 md:h-4 md:w-4 animate-bounce text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
