import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Architecture Design",
    description: "Comprehensive architectural solutions from concept to completion, tailored to your unique vision and context.",
    link: "/services#architecture",
  },
  {
    number: "02",
    title: "Interior Design",
    description: "Thoughtfully curated interiors that balance aesthetics with functionality, creating spaces that inspire.",
    link: "/services#interior",
  },
  {
    number: "03",
    title: "Residential Projects",
    description: "Bespoke homes designed around your lifestyle, from luxury villas to modern apartments.",
    link: "/services#residential",
  },
  {
    number: "04",
    title: "Commercial Projects",
    description: "Dynamic commercial spaces that enhance productivity and embody your brand identity.",
    link: "/services#commercial",
  },
  {
    number: "05",
    title: "Landscape Design",
    description: "Outdoor environments that seamlessly extend your architecture into nature.",
    link: "/services#landscape",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="arch-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="arch-divider" />
            <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
              Our Expertise
            </span>
          </div>
          <h2 className="font-serif text-display text-foreground mb-6">
            Comprehensive Design Services
          </h2>
          <p className="text-body-lg text-muted-foreground">
            From initial concept to final execution, we offer end-to-end architectural and design services that transform your vision into reality.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service) => (
            <Link
              key={service.number}
              to={service.link}
              className="service-card group block py-8 border-t border-border last:border-b"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                {/* Number */}
                <span className="font-sans text-caption tracking-architectural text-accent">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-heading-lg text-foreground flex-1 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-body text-muted-foreground flex-1 max-w-md">
                  {service.description}
                </p>

                {/* Arrow */}
                <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
