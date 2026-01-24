import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "15", label: "Design Awards" },
  { value: "100%", label: "Client Satisfaction" },
];

const AboutSnapshot = () => {
  return (
    <section className="section-padding bg-background">
      <div className="arch-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div className="flex items-center gap-4 mb-6">
              <div className="arch-divider" />
              <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                About Us
              </span>
            </div>

            <h2 className="font-serif text-display text-foreground mb-6">
              Creating Architecture That Stands the Test of Time
            </h2>

            <p className="text-body-lg text-muted-foreground mb-6 leading-relaxed">
              For over two decades, Zara Architects has been at the forefront of innovative design, blending functionality with aesthetic excellence. Our philosophy centers on creating spaces that enhance the human experience while respecting environmental context.
            </p>

            <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
              We believe great architecture emerges from deep collaboration with our clients, understanding their vision, and translating it into spaces that exceed expectations.
            </p>

            <Button variant="minimal" asChild className="group">
              <Link to="/about">
                Discover Our Story
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>

          {/* Stats Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-8" staggerDelay={0.15}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="p-8 bg-secondary/50 border border-border">
                  <span className="font-serif text-display text-accent block mb-2">
                    {stat.value}
                  </span>
                  <span className="font-sans text-caption tracking-wide uppercase text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
