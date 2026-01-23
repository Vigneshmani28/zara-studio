import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
  },
  {
    id: 2,
    title: "Nexus Office Tower",
    location: "Manhattan, New York",
    category: "Commercial",
    image: projectCommercial1,
    featured: false,
  },
  {
    id: 3,
    title: "The Penthouse Collection",
    location: "Miami, Florida",
    category: "Interior",
    image: projectInterior1,
    featured: false,
  },
  {
    id: 4,
    title: "Mountain Retreat",
    location: "Aspen, Colorado",
    category: "Residential",
    image: projectResidential2,
    featured: false,
  },
  {
    id: 5,
    title: "Grand Hotel Lobby",
    location: "Chicago, Illinois",
    category: "Commercial",
    image: projectCommercial2,
    featured: true,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="section-padding bg-background">
      <div className="arch-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="arch-divider" />
              <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                Featured Work
              </span>
            </div>
            <h2 className="font-serif text-display text-foreground">
              Selected Projects
            </h2>
          </div>
          <Button variant="minimal" asChild className="group">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid - Masonry-like */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={`project-card image-zoom group block relative ${
                project.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-muted ${
                  project.featured
                    ? "aspect-[16/10] md:aspect-[16/9]"
                    : "aspect-[4/5]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="project-overlay" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="font-sans text-small tracking-architectural uppercase text-primary-foreground/80 mb-2">
                    {project.category} · {project.location}
                  </span>
                  <h3 className="font-serif text-heading-lg md:text-heading-xl text-primary-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Always visible info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/80 to-transparent group-hover:opacity-0 transition-opacity duration-500 pointer-events-none md:hidden">
                <span className="font-sans text-small tracking-architectural uppercase text-primary-foreground/80 mb-1 block">
                  {project.category}
                </span>
                <h3 className="font-serif text-heading text-primary-foreground">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
