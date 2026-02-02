import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Lightbulb, Users, Target } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const AboutSnapshot = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="arch-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Title & Intro */}
          <ScrollReveal direction="left" className="lg:col-span-4">
            <div className="sticky top-22">
              <div className="flex items-center gap-4 mb-6">
                <div className="arch-divider w-12" />
                <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                  About Zara
                </span>
              </div>

              <h2 className="font-serif text-display-2xl text-foreground mb-6">
                Designing for Real Life
              </h2>

              <div className="flex items-center gap-3 mt-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">Established 2025</p>
                  <p className="font-sans text-sm text-muted-foreground">Fresh Perspective</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {/* Main Content Block */}
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-body-xl text-muted-foreground leading-relaxed mb-6">
                    Zara Architects is an interior design studio driven by a new vision of creating spaces that are <span className="text-foreground font-semibold">functional, thoughtful, and rooted in everyday living</span>.
                  </p>
                  
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    We believe good interiors are not defined by luxury, but by how comfortably and efficiently a space supports the people who use it.
                  </p>
                </div>
              </ScrollReveal>

              {/* Features Grid - Using individual ScrollReveal instead of StaggerContainer */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <div className="bg-background border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Lightbulb className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-2">Design with Intention</h3>
                    <p className="font-sans text-sm text-muted-foreground">
                      Simple approach: understand lifestyle, respect budget, design with purpose
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <div className="bg-background border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-2">Team Experience</h3>
                    <p className="font-sans text-sm text-muted-foreground">
                      Combining design sensibility, site experience, and hands-on involvement
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                  <div className="bg-background border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Target className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-2">Equal Commitment</h3>
                    <p className="font-sans text-sm text-muted-foreground">
                      From homes to commercial spaces, each project receives the same care
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Quote Block */}
              <ScrollReveal delay={0.4}>
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/20 to-accent/40 rounded-full" />
                  <div className="pl-8">
                    <blockquote className="text-body-2xl italic text-foreground/90 leading-relaxed mb-6">
                      "We see interiors as more than finishes and furniture. We see them as spaces where daily life unfolds—spaces that should feel clear, comfortable, and lasting."
                    </blockquote>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="font-sans font-medium text-foreground">Zara Architects</p>
                        <p className="font-sans text-sm text-muted-foreground">Interior Design Studio</p>
                      </div>
                      <Button asChild variant="outline" className="group border-accent/30 hover:bg-accent/10 hover:text-accent">
                        <Link to="/about" className="flex items-center gap-2">
                          Know More About Us
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;