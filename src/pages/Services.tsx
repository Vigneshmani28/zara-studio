import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Circle, Users, Target, Lightbulb, Palette, HardHat, MessageSquare, Home, Building, Layout, DollarSign, Compass } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const expertise = [
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Architectural Design",
    description: "Elevations & exterior expression with careful consideration of function and form.",
    details: "Works at the intersection of interior design and architectural thinking for cohesive solutions.",
  },
  {
    icon: <Home className="h-5 w-5" />,
    title: "Residential Interiors",
    description: "Creating comfortable, functional homes that reflect your lifestyle.",
    details: "From individual homes to apartments, each space designed for everyday living.",
  },
  {
    icon: <Building className="h-5 w-5" />,
    title: "Commercial Interiors",
    description: "Designing workspaces that support productivity and brand identity.",
    details: "Commercial spaces that balance professionalism with human-centered design.",
  },
  {
    icon: <Layout className="h-5 w-5" />,
    title: "Space Planning",
    description: "Optimizing layouts for efficiency, flow, and practical everyday use.",
    details: "Studying proportions, light, ventilation, and movement for natural design responses.",
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: "Budget-Oriented Design",
    description: "Transparent cost management and responsible financial planning.",
    details: "Budget as a design guide, not a limitation—creating realistic, achievable interiors.",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Material Selection",
    description: "Curating finishes that balance aesthetics, durability, and comfort.",
    details: "Selecting materials based on use, durability, and long-term maintenance.",
  },
  {
    icon: <HardHat className="h-5 w-5" />,
    title: "Execution Coordination",
    description: "Hands-on site involvement ensuring quality and adherence to design.",
    details: "Regular site involvement to translate planned intent accurately during execution.",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Client Guidance",
    description: "Clear communication and collaborative decision-making throughout.",
    details: "Transparent collaboration ensuring shared understanding at every stage.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understanding Everyday Living",
    description: "We begin by understanding how our clients live, work, and move through their spaces. Lifestyle, routines, and practical needs form the foundation of every design decision.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "Space Sensitivity",
    description: "Each space has its own constraints and possibilities. We study proportions, light, ventilation, and movement to ensure the design responds naturally to the given space.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "Budget Clarity",
    description: "Budget is not treated as a limitation, but as a design guide. Clear cost planning from the beginning allows us to create interiors that are realistic and stress-free.",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "Functional Design Thinking",
    description: "Aesthetic choices are always supported by function. Storage, usability, maintenance, and longevity are carefully considered for spaces that work well beyond first impression.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    number: "05",
    title: "Material & Detail Awareness",
    description: "We select materials and finishes based on use, durability, and comfort. Every detail—visible or hidden—is approached with responsibility and intent.",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    number: "06",
    title: "Execution with Involvement",
    description: "Design does not end on paper. Regular site involvement ensures that the planned intent is translated accurately during execution, maintaining quality and consistency.",
    icon: <HardHat className="h-6 w-6" />,
  },
  {
    number: "07",
    title: "Transparent Collaboration",
    description: "We believe good interiors come from open communication. Clients are guided through each stage with clarity, ensuring shared understanding and informed decisions.",
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    number: "08",
    title: "Meaningful Outcomes",
    description: "The goal is not just a finished interior, but a space that feels right—comfortable, functional, and quietly supportive of everyday life.",
    icon: <Check className="h-6 w-6" />,
  },
];

const Services = () => {
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
                  Our Expertise
                </span>
              </div>
              <h1 className="font-serif text-display-lg text-foreground mb-8">
                Designing with Intention & Intelligence
              </h1>
              <p className="text-body-xl text-muted-foreground max-w-3xl leading-relaxed">
                Zara Architects works at the intersection of interior design and architectural thinking, offering carefully considered solutions that balance function, clarity, and buildability. Our expertise lies in shaping spaces from early planning through detailed execution.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Expertise Grid */}
        <section className="section-padding bg-secondary/30">
          <div className="arch-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
              <ScrollReveal direction="left">
                <div className="sticky top-24">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="arch-divider w-16" />
                    <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                      What We Do
                    </span>
                  </div>
                  <h2 className="font-serif text-display-2xl text-foreground mb-6">
                    Comprehensive Design Expertise
                  </h2>
                  <p className="text-body-lg text-muted-foreground mb-10 leading-relaxed">
                    Guided by practicality and responsibility, we offer solutions that are both beautiful and buildable. Our approach ensures every project balances aesthetics with long-term usability.
                  </p>
                  <div className="p-6 bg-accent/5 border border-accent/20 rounded-xl">
                    <p className="font-serif text-heading-lg text-foreground mb-2">Always guided by</p>
                    <div className="flex flex-wrap gap-3">
                      {["Practicality", "Responsibility", "Function", "Clarity", "Buildability"].map((item) => (
                        <span key={item} className="px-3 py-1 bg-background border border-border rounded-full text-sm font-sans text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <div className="lg:col-span-1">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.05}>
                  {expertise.map((item, index) => (
                    <StaggerItem key={item.title}>
                      <div className="group bg-background border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-full">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 shrink-0">
                            <div className="text-foreground group-hover:text-accent transition-colors duration-300">
                              {item.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-serif text-heading-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-body text-muted-foreground mb-2">{item.description}</p>
                            <p className="text-body-sm text-muted-foreground/70">{item.details}</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-300">
                          <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                            0{index + 1} / Expertise
                          </span>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>

            {/* Divider */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Process */}
        <section id="process" className="section-padding bg-gradient-to-b from-background/30 to-background">
          <div className="arch-container">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                  Our Methodology
                </span>
                <div className="w-12 h-px bg-accent" />
              </div>
              <h2 className="font-serif text-display-2xl text-foreground mb-8">
                The Zara Architects Process
              </h2>
              <p className="text-body-xl text-muted-foreground leading-relaxed">
                Every interior project begins with listening and evolves through clarity, care, and collaboration. Our process is a thoughtful cycle that keeps the client, the space, and the budget in constant balance.
              </p>
            </ScrollReveal>

            <StaggerContainer className="relative" staggerDelay={0.1}>
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />
              
              {processSteps.map((step, index) => (
                <StaggerItem key={step.number}>
                  <div className={`relative flex flex-col lg:flex-row items-center mb-16 lg:mb-24 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Content */}
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="bg-background border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            {step.icon}
                          </div>
                          <div>
                            <span className="font-sans text-xs uppercase tracking-widest text-accent">
                              Step {step.number}
                            </span>
                            <h3 className="font-serif text-heading-xl text-foreground">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-body-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Circle */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-accent border-4 border-background" />
                    </div>

                    {/* Number */}
                    <div className={`lg:hidden mt-6 mb-4`}>
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="font-serif text-heading-lg text-accent">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Process Summary */}
            <ScrollReveal delay={0.5}>
              <div className="max-w-4xl mx-auto mt-24">
                <div className="bg-accent/5 border border-accent/20 rounded-2xl p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-serif text-display text-foreground mb-6">
                        Not Linear, but Thoughtful
                      </h3>
                      <p className="text-body-xl text-muted-foreground leading-relaxed">
                        Our process adapts to each project's unique needs while maintaining our core principles of clarity, care, and collaboration at every stage.
                      </p>
                    </div>
                    <div className="lg:text-right">
                      <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                        <Link to="/contact" className="flex items-center gap-2">
                          Start Your Project
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background mb-10">
          <div className="arch-container">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-display-2xl text-foreground mb-8">
                  Ready to Create Meaningful Spaces?
                </h2>
                <p className="text-body-xl text-muted-foreground mb-10 leading-relaxed">
                  Let's discuss how we can help shape spaces that are not just beautiful, but deeply supportive of how you live and work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="hero">
                    <Link to="/contact" className="flex items-center gap-2">
                      Schedule a Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;