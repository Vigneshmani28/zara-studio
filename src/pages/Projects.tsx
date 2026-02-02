import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import hero4 from "@/assets/hero-4.webp";
import hero5 from "@/assets/hero-5.webp";
import { useMemo } from "react";

const categories = ["All", "Residential", "Commercial", "Interior"];

const projects = [
  {
    id: 1,
    title: "Villa Serene",
    location: "Malibu, California",
    category: "Residential",
    year: "2023",
    image: hero1,
  },
  {
    id: 2,
    title: "Nexus Office Tower",
    location: "Manhattan, New York",
    category: "Commercial",
    year: "2023",
    image: hero2,
  },
  {
    id: 3,
    title: "The Penthouse Collection",
    location: "Miami, Florida",
    category: "Interior",
    year: "2022",
    image: hero4,
  },
  {
    id: 4,
    title: "Mountain Retreat",
    location: "Aspen, Colorado",
    category: "Residential",
    year: "2022",
    image: hero5,
  },
  {
    id: 5,
    title: "Grand Hotel Lobby",
    location: "Chicago, Illinois",
    category: "Commercial",
    year: "2023",
    image: hero3,
  },
  {
    id: 6,
    title: "Horizon House",
    location: "San Francisco, California",
    category: "Residential",
    year: "2021",
    image: hero5,
  },
  {
    id: 7,
    title: "Urban Loft Residence",
    location: "Seattle, Washington",
    category: "Residential",
    year: "2023",
    image: hero1,
  },
  {
    id: 8,
    title: "Tech Campus Hub",
    location: "Austin, Texas",
    category: "Commercial",
    year: "2023",
    image: hero2,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-background">
          <div className="arch-container">
            <ScrollReveal className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="arch-divider" />
                <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                  Our Work
                </span>
              </div>
              <h1 className="font-serif text-display-lg text-foreground mb-8">
                Selected Projects
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
                Explore our portfolio of residential, commercial, and interior
                design projects that showcase our commitment to exceptional
                design.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-background border-b border-border">
          <div className="arch-container">
            <div className="flex flex-wrap gap-2 md:gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "font-sans text-sm md:text-caption tracking-wide uppercase px-3 md:px-4 py-2 transition-colors border rounded-full",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground",
                  )}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid - Equal Size Boxes */}
        <section className="p-4 bg-background">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    className="aspect-square group"
                  >
                    <Link
                      to={`/projects/${project.id}`}
                      className="project-card image-zoom group block relative w-full h-full overflow-hidden bg-muted"
                    >
                      {/* Image Container */}
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Hover Overlay Content */}
                        <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="space-y-2">
                            <span className="font-sans text-xs md:text-small tracking-architectural uppercase text-white/80 block">
                              {project.category} · {project.year}
                            </span>
                            <h3 className="font-serif text-lg md:text-heading text-white">
                              {project.title}
                            </h3>
                            <p className="font-sans text-xs md:text-small text-white/70">
                              {project.location}
                            </p>
                          </div>
                        </div>

                        {/* Always Visible Corner Label */}
                        <div className="absolute top-0 left-0 p-3 md:p-4">
                          <span className="inline-block font-sans text-xs md:text-small tracking-architectural uppercase text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16"
              >
                <p className="font-sans text-body-lg text-muted-foreground">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
