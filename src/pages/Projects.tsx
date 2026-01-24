import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets//hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const categories = ["All", "Residential", "Commercial", "Interior"];

const projects = [
  {
    id: 1,
    title: "Villa Serene",
    location: "Malibu, California",
    category: "Residential",
    year: "2023",
    image: hero1,
    featured: true,
  },
  {
    id: 2,
    title: "Nexus Office Tower",
    location: "Manhattan, New York",
    category: "Commercial",
    year: "2023",
    image: hero2,
    featured: false,
  },
  {
    id: 3,
    title: "The Penthouse Collection",
    location: "Miami, Florida",
    category: "Interior",
    year: "2022",
    image: hero4,
    featured: false,
  },
  {
    id: 4,
    title: "Mountain Retreat",
    location: "Aspen, Colorado",
    category: "Residential",
    year: "2022",
    image: hero5,
    featured: false,
  },
  {
    id: 5,
    title: "Grand Hotel Lobby",
    location: "Chicago, Illinois",
    category: "Commercial",
    year: "2023",
    image: hero3,
    featured: true,
  },
  {
    id: 6,
    title: "Horizon House",
    location: "San Francisco, California",
    category: "Residential",
    year: "2021",
    image: hero5,
    featured: false,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-background">
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
                Explore our portfolio of residential, commercial, and interior design projects that showcase our commitment to exceptional design.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-background border-b border-border">
          <div className="arch-container">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "font-sans text-caption tracking-wide uppercase px-4 py-2 transition-colors border",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground"
                  )}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="arch-container">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    className={cn(
                      project.featured ? "md:col-span-2 md:row-span-2" : ""
                    )}
                  >
                    <Link
                      to={`/projects/${project.id}`}
                      className="project-card image-zoom group block relative h-full"
                    >
                      <div
                        className={cn(
                          "relative overflow-hidden bg-muted h-full",
                          project.featured
                            ? "aspect-[16/10] md:aspect-[16/9]"
                            : "aspect-[4/5]"
                        )}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="project-overlay" />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="font-sans text-small tracking-architectural uppercase text-primary-foreground/80 mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              {project.category} · {project.location} · {project.year}
                            </span>
                            <h3 className="font-serif text-heading-lg md:text-heading-xl text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        {/* Always visible on mobile */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/80 to-transparent group-hover:opacity-0 transition-opacity duration-500 pointer-events-none md:opacity-0 md:group-hover:opacity-0">
                          <span className="font-sans text-small tracking-architectural uppercase text-primary-foreground/80 mb-1 block">
                            {project.category}
                          </span>
                          <h3 className="font-serif text-heading text-primary-foreground">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
