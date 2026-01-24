import { Lightbulb, Users, Leaf, Award } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const features = [
  {
    icon: Lightbulb,
    title: "Design-Led Approach",
    description:
      "Every project begins with deep research and creative exploration, ensuring unique solutions that resonate with your vision.",
  },
  {
    icon: Users,
    title: "End-to-End Execution",
    description:
      "From initial concept through construction completion, we manage every detail with precision and care.",
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    description:
      "We integrate environmental responsibility into every project, creating spaces that respect and enhance their surroundings.",
  },
  {
    icon: Award,
    title: "Award-Winning Team",
    description:
      "Our internationally recognized team brings decades of combined expertise to every project we undertake.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="arch-container">
        {/* Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="font-sans text-small tracking-architectural uppercase opacity-80">
              Why Choose Us
            </span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-display">
            Excellence in Every Detail
          </h2>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group p-8 border border-primary-foreground/10 hover:border-accent/50 transition-colors duration-300 h-full">
                <feature.icon className="h-10 w-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-heading mb-4">{feature.title}</h3>
                <p className="text-body opacity-80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
