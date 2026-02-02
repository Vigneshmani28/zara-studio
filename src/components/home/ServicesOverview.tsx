import { Link } from "react-router-dom";
import { 
  Home, 
  Building, 
  LayoutDashboard, 
  DraftingCompass, 
  SquareStack,
  DollarSign,
  Palette,
  HardHat,
  Users,
  ArrowUpRight
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const services = [
  {
    icon: <DraftingCompass className="h-5 w-5" />,
    title: "Architectural Design",
    description: "Elevations & exterior expression with careful consideration of function and form.",
    link: "/services#architecture",
  },
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Space Planning",
    description: "Optimizing layouts for efficiency, flow, and practical everyday use.",
    link: "/services",
  },
  {
    icon: <Home className="h-5 w-5" />,
    title: "Residential Interiors",
    description: "Creating comfortable, functional homes that reflect your lifestyle.",
    link: "/services",
  },
  {
    icon: <Building className="h-5 w-5" />,
    title: "Commercial Interiors",
    description: "Designing workspaces that support productivity and brand identity.",
    link: "/services",
  },
  {
    icon: <SquareStack className="h-5 w-5" />,
    title: "Budget Planning",
    description: "Transparent cost management and responsible financial planning.",
    link: "/services",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Material Selection",
    description: "Curating finishes that balance aesthetics, durability, and maintenance.",
    link: "/services",
  },
  {
    icon: <HardHat className="h-5 w-5" />,
    title: "Execution Coordination",
    description: "Hands-on site involvement ensuring quality and adherence to design.",
    link: "/services",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Client Guidance",
    description: "Clear communication and collaborative decision-making throughout.",
    link: "/services",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="arch-container">
        {/* Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="arch-divider w-12" />
            <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
              Our Expertise
            </span>
            <div className="arch-divider w-12" />
          </div>
          
          <h2 className="font-serif text-display-2xl text-foreground mb-8">
            Shaping Spaces with Intention
          </h2>
          
          <p className="text-body-xl text-muted-foreground leading-relaxed">
            Zara Architects works at the intersection of interior design and architectural thinking, offering carefully considered solutions that balance function, clarity, and buildability.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.05}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <Link
                to={service.link}
                className="group relative overflow-hidden rounded-xl border border-border bg-background p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg h-full flex flex-col"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 font-sans text-xs font-medium text-muted-foreground">
                  0{index + 1}
                </div>

                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                    <div className="text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-heading-lg text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Line & Arrow */}
                <div className="mt-8 pt-6 border-t border-border group-hover:border-accent/30 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                      Learn More
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </div>

                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/2 group-hover:to-accent/5 transition-all duration-500 -z-10" />
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[64px] border-l-transparent border-t-[64px] border-t-border/10 group-hover:border-t-accent/20 transition-colors duration-500" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Description */}
        <ScrollReveal delay={0.4} className="mt-20">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 border border-border rounded-xl bg-secondary/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-serif text-heading-xl text-foreground mb-4">
                    From Concept to Completion
                  </h4>
                  <p className="text-body-lg text-muted-foreground">
                    Our expertise lies in shaping spaces from early planning stages through detailed interior execution, always guided by practicality and responsibility.
                  </p>
                </div>
                <div className="text-right">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors duration-300 font-sans font-medium"
                  >
                    View Full Services
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesOverview;