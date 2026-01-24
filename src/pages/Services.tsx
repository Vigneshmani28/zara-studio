import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const services = [
  {
    id: "architecture",
    number: "01",
    title: "Architecture Design",
    subtitle: "From Vision to Reality",
    description:
      "Our architectural design services encompass the full spectrum of building creation—from initial concept development through construction documentation. We work closely with clients to understand their needs, site conditions, and aspirations, translating these into designs that are both innovative and buildable.",
    features: [
      "Concept Development & Feasibility Studies",
      "Schematic Design & Design Development",
      "Construction Documents & Specifications",
      "Permit Coordination & Regulatory Compliance",
      "Construction Administration & Site Visits",
    ],
  },
  {
    id: "interior",
    number: "02",
    title: "Interior Design",
    subtitle: "Spaces That Inspire",
    description:
      "Our interior design practice creates cohesive environments that reflect our clients' personalities and enhance their daily experiences. We carefully consider every detail—from spatial planning and material selection to furniture specification and lighting design.",
    features: [
      "Space Planning & Programming",
      "Material & Finish Selection",
      "Custom Furniture & Millwork Design",
      "Lighting Design & Specification",
      "Art Curation & Styling",
    ],
  },
  {
    id: "residential",
    number: "03",
    title: "Residential Projects",
    subtitle: "Homes That Transform Lives",
    description:
      "From intimate urban apartments to expansive country estates, our residential practice creates homes that are deeply personal expressions of how our clients want to live. We approach each home as a unique opportunity to craft spaces that nurture, inspire, and endure.",
    features: [
      "Single-Family Residences & Estates",
      "Luxury Apartments & Penthouses",
      "Vacation Homes & Retreats",
      "Renovations & Historic Restorations",
      "Multi-Family Residential Developments",
    ],
  },
  {
    id: "commercial",
    number: "04",
    title: "Commercial Projects",
    subtitle: "Spaces That Drive Success",
    description:
      "Our commercial practice understands that great design drives business success. We create workplaces that attract talent, retail environments that enhance brands, and hospitality spaces that create memorable experiences.",
    features: [
      "Corporate Offices & Headquarters",
      "Retail Spaces & Flagship Stores",
      "Hotels & Hospitality",
      "Restaurants & Entertainment Venues",
      "Mixed-Use Developments",
    ],
  },
  {
    id: "landscape",
    number: "05",
    title: "Landscape Design",
    subtitle: "Connecting Architecture to Nature",
    description:
      "We believe the landscape is an extension of architecture. Our landscape design services create outdoor environments that complement and enhance built structures while respecting the natural character of each site.",
    features: [
      "Site Planning & Master Planning",
      "Garden & Courtyard Design",
      "Outdoor Living Spaces",
      "Sustainable Landscape Strategies",
      "Hardscape & Planting Design",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin with deep listening—understanding your vision, needs, and the unique context of your project.",
  },
  {
    number: "02",
    title: "Concept Design",
    description: "Our team develops initial concepts that explore different approaches to achieving your goals.",
  },
  {
    number: "03",
    title: "Design Development",
    description: "The chosen concept is refined and detailed, with material selections and technical coordination.",
  },
  {
    number: "04",
    title: "Documentation",
    description: "We prepare comprehensive construction documents that translate design intent into buildable reality.",
  },
  {
    number: "05",
    title: "Construction",
    description: "Our team remains involved through construction, ensuring the design vision is faithfully executed.",
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
                  Our Services
                </span>
              </div>
              <h1 className="font-serif text-display-lg text-foreground mb-8">
                Comprehensive Design Excellence
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
                From initial concept to final completion, we offer end-to-end architectural and design services that transform your vision into spaces that inspire and endure.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-secondary/30">
          <div className="arch-container">
            <div className="space-y-24">
              {services.map((service, index) => (
                <ScrollReveal
                  key={service.id}
                  delay={0.1}
                >
                  <div
                    id={service.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <span className="font-sans text-caption tracking-architectural text-accent block mb-4">
                        {service.number}
                      </span>
                      <h2 className="font-serif text-display text-foreground mb-2">
                        {service.title}
                      </h2>
                      <p className="font-serif text-heading text-accent mb-6">
                        {service.subtitle}
                      </p>
                      <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <Button variant="minimal" asChild className="group">
                        <Link to="/contact">
                          Discuss Your Project
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                    <div className={`bg-background p-8 md:p-10 border border-border ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <h3 className="font-serif text-heading text-foreground mb-6">
                        What We Offer
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-body text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="arch-container">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="font-sans text-small tracking-architectural uppercase opacity-80">
                  Our Process
                </span>
                <div className="w-12 h-px bg-accent" />
              </div>
              <h2 className="font-serif text-display">
                How We Work
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-8" staggerDelay={0.1}>
              {processSteps.map((step, index) => (
                <StaggerItem key={step.number}>
                  <div className="relative">
                    <span className="font-serif text-display-lg text-accent/30 block mb-4">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-heading mb-3">{step.title}</h3>
                    <p className="text-body opacity-80">{step.description}</p>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-px bg-primary-foreground/20" />
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <ScrollReveal className="arch-container text-center">
            <h2 className="font-serif text-display text-foreground mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Every great project begins with a conversation. Tell us about your vision.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
