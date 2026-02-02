import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import studioImage from "@/assets/studio-workspace.jpg";

const corePrinciples = [
  {
    title: "Practical Planning",
    description:
      "Every project begins with clear, realistic planning that considers both immediate needs and long-term functionality.",
  },
  {
    title: "Budget Clarity",
    description:
      "Transparent cost planning from the start ensures designs are achievable and stress-free to execute.",
  },
  {
    title: "Design Sensibility",
    description:
      "Our team brings together design expertise with practical understanding of how spaces are actually used.",
  },
  {
    title: "Hands-on Execution",
    description:
      "We stay involved throughout the process to ensure quality and consistency from concept to completion.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
          <div className="arch-container">
            <ScrollReveal className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="arch-divider" />
                <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                  About Zara Architects
                </span>
              </div>
              <h1 className="font-serif text-display-lg text-foreground mb-8">
                Creating Interiors That Support Everyday Living
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
                We are an interior design studio established in 2025, driven by
                a new vision of creating spaces that are functional, thoughtful,
                and rooted in everyday living.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="section-padding bg-secondary/30">
          <div className="arch-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-4 mb-8">
                  <div className="arch-divider" />
                  <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                    Our Story
                  </span>
                </div>

                <h2 className="font-serif text-display-2xl text-foreground mb-10">
                  Building Spaces for
                  <span className="block text-accent">Real Life</span>
                </h2>

                <div className="space-y-8">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent/40 to-accent/20 rounded-full" />
                    <div>
                      <h3 className="font-serif text-heading-lg text-foreground mb-3">
                        Our Beginning
                      </h3>
                      <p className="text-body-lg text-muted-foreground leading-relaxed">
                        Zara Architects is an interior design studio established
                        in 2025, driven by a new vision of creating spaces that
                        are functional, thoughtful, and rooted in everyday
                        living.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent/20 to-accent/10 rounded-full" />
                    <div>
                      <h3 className="font-serif text-heading-lg text-foreground mb-3">
                        Our Approach
                      </h3>
                      <p className="text-body-lg text-muted-foreground leading-relaxed">
                        Founded with a strong focus on practical planning,
                        budget clarity, and execution. We work closely with
                        clients to design interiors that balance aesthetics with
                        long-term usability.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent/10 to-accent/5 rounded-full" />
                    <div>
                      <h3 className="font-serif text-heading-lg text-foreground mb-3">
                        Our Commitment
                      </h3>
                      <p className="text-body-lg text-muted-foreground leading-relaxed">
                        Though young as a practice, our team brings together
                        design sensibility, site experience, and hands-on
                        involvement to ensure that every project is carefully
                        planned and responsibly executed.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent/10 to-accent/5 rounded-full" />
                    <div>
                      <h3 className="font-serif text-heading-lg text-foreground mb-3">
                        Our Outcome
                      </h3>
                      <p className="text-body-lg text-muted-foreground leading-relaxed">
                        At Zara Architects, we see interiors as more than
                        finishes and furniture. We see them as spaces where
                        daily life unfolds - spaces that should feel clear,
                        comfortable, and lasting.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <img
                    src={studioImage}
                    alt="Zara Architects interior design studio"
                    className="w-full aspect-4/5 object-cover rounded-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-accent/10 rounded-2xl -z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="arch-container">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="font-sans text-small tracking-architectural uppercase opacity-80">
                  Our Core Principles
                </span>
                <div className="w-12 h-px bg-accent" />
              </div>
              <h2 className="font-serif text-display mb-6">
                What Guides Our Work
              </h2>
              <p className="text-body-lg opacity-80">
                These principles form the foundation of every project we
                undertake
              </p>
            </ScrollReveal>

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              staggerDelay={0.1}
            >
              {corePrinciples.map((principle, index) => (
                <StaggerItem key={principle.title}>
                  <div className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg h-full hover:border-accent/50 transition-colors">
                    <span className="font-sans text-small tracking-architectural text-accent mb-4 block">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-heading-lg mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-body-lg opacity-80 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Philosophy Quote */}
        <section className="section-padding bg-secondary/30">
          <ScrollReveal className="arch-container text-center">
            <h2 className="font-serif text-display text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Let's discuss your vision and explore how we can bring it to life.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
