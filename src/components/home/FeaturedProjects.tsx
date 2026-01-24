import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import projectResidential1 from "@/assets/project-residential-1.jpg";
import projectCommercial1 from "@/assets/project-commercial-1.jpg";
import projectInterior1 from "@/assets/project-interior-1.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectCommercial2 from "@/assets/project-commercial-2.jpg";

const projects = [
  {
    id: 1,
    title: "Villa Serene",
    location: "Malibu, California",
    category: "Residential",
    image: projectResidential1,
    featured: true,
    year: "2023",
    description: "A minimalist beachfront residence blending indoor-outdoor living"
  },
  {
    id: 2,
    title: "Nexus Office Tower",
    location: "Manhattan, New York",
    category: "Commercial",
    image: projectCommercial1,
    featured: false,
    year: "2024",
    description: "Sustainable high-rise with biophilic design elements"
  },
  {
    id: 3,
    title: "The Penthouse Collection",
    location: "Miami, Florida",
    category: "Interior",
    image: projectInterior1,
    featured: false,
    year: "2023",
    description: "Luxury penthouse interiors with panoramic ocean views"
  },
  {
    id: 4,
    title: "Mountain Retreat",
    location: "Aspen, Colorado",
    category: "Residential",
    image: projectResidential2,
    featured: false,
    year: "2022",
    description: "Modern cabin harmonizing with natural landscape"
  },
  {
    id: 5,
    title: "Grand Hotel Lobby",
    location: "Chicago, Illinois",
    category: "Commercial",
    image: projectCommercial2,
    featured: true,
    year: "2024",
    description: "Iconic hotel lobby with sculptural architectural features"
  },
];

const FeaturedProjects = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-foreground" />
          ))}
        </div>
      </div>

      <div className="arch-container relative z-10">
        {/* Modern Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground">
                  CURATED SELECTION
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                Signature
                <span className="block text-muted-foreground">Projects</span>
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-foreground mt-4 max-w-lg">
                A showcase of our most innovative architectural solutions
              </p>
            </div>
            <Button 
              variant="minimal" 
              asChild 
              className="group relative overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 px-6 py-6"
            >
              <Link to="/projects" className="flex items-center gap-3">
                <span className="font-sans text-sm tracking-wider uppercase">View Portfolio</span>
                <div className="relative">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <ArrowRight className="absolute -left-2 top-0 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300" />
                </div>
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* Modern Projects Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          staggerDelay={0.08}
        >
          {projects.map((project) => (
            <StaggerItem
              key={project.id}
              className={`
                group relative
                ${project.featured ? "md:col-span-2" : ""}
              `}
            >
              <Link
                to={`/projects/${project.id}`}
                className="block relative overflow-hidden"
              >
                {/* Image Container with Modern Effects */}
                <div className="relative overflow-hidden bg-muted">
                  <div className={`
                    relative overflow-hidden bg-black/5
                    ${project.featured ? "aspect-[16/9]" : "aspect-[4/5]"}
                  `}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1.5 bg-background/90 backdrop-blur-sm font-sans text-xs tracking-wider uppercase text-foreground rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Info - Visible on Hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex-1 flex flex-col justify-end">
                      {/* Category & Location */}
                      <div className="mb-4">
                        <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/80 block mb-2">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2 text-primary-foreground/90">
                          <span className="font-sans text-sm">{project.location}</span>
                        </div>
                      </div>

                      {/* Title with Slide Up Effect */}
                      <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h3>

                      {/* Description - Fades In */}
                      <p className="font-sans text-sm text-primary-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-md">
                        {project.description}
                      </p>
                    </div>

                    {/* View Project Button */}
                    <div className="flex items-center justify-between pt-6 border-t border-primary-foreground/20">
                      <span className="font-sans text-xs tracking-wider uppercase text-primary-foreground">
                        View Project
                      </span>
                      <div className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                        <ExternalLink className="h-3 w-3 text-primary-foreground group-hover:text-background" />
                      </div>
                    </div>
                  </div>

                  {/* Static Info - Fades Out on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
                    <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-6 md:p-8 pt-16">
                      <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/70 block mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-primary-foreground">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-sans text-xs text-primary-foreground/60">{project.location}</span>
                        <span className="text-primary-foreground/40">•</span>
                        <span className="font-sans text-xs text-primary-foreground/60">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Border Hover Effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-all duration-500 rounded-lg overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-background/20 rounded-lg transition-all duration-500" />
                </div>
              </Link>

              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 blur-xl" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View More Projects */}
        <ScrollReveal className="mt-16 text-center">
          <div className="inline-flex items-center gap-8">
            <div className="h-px w-12 bg-border" />
            <Link
              to="/projects"
              className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-2"
            >
              Explore More Projects
              <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="h-px w-12 bg-border" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedProjects;