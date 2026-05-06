import { useState, useMemo, useEffect } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ArrowUpRight, X, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA, Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

const OurGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [randomImages, setRandomImages] = useState<{ url: string; project: Project; className: string }[]>([]);

  // Pick random images from the project data
  useEffect(() => {
    const allImagesWithProjects = PROJECTS_DATA.flatMap(p =>
      p.images.map(img => ({ url: img, project: p }))
    );

    // Shuffle and pick 6
    const shuffled = [...allImagesWithProjects].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6).map((item, index) => {
      // Assign classNames based on index to maintain the "cool" bento grid
      const classes = [
        "md:col-span-2 md:row-span-2", // Large
        "md:col-span-1 md:row-span-1", // Small
        "md:col-span-1 md:row-span-2", // Tall
        "md:col-span-1 md:row-span-1", // Small
        "md:col-span-2 md:row-span-1", // Wide
        "md:col-span-1 md:row-span-1", // Small
      ];
      return { ...item, className: classes[index] };
    });

    setRandomImages(selected);
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="arch-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <ScrollReveal className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold">
                Visual Journey
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Our <span className="text-accent">Projects</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-xl leading-relaxed">
              A glimpse into our ongoing projects and architectural experiments. Each frame captures a moment of spatial clarity.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="/projects"
                className="inline-flex items-center gap-4 group"
              >
                <span className="font-sans text-[10px] tracking-widest uppercase text-foreground group-hover:text-accent transition-colors font-bold">
                  View All Projects
                </span>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Bento Grid Gallery */}
        <Dialog onOpenChange={(open) => !open && setSelectedProject(null)}>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]"
            staggerDelay={0.05}
          >
            {randomImages.map((item, index) => (
              <StaggerItem
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-muted cursor-pointer ${item.className}`}
              >
                <DialogTrigger asChild onClick={() => setSelectedProject(item.project)}>
                  <div className="w-full h-full">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <img
                      src={item.url}
                      alt={item.project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    {/* Desktop Hover Overlay */}
                    <div className="hidden lg:flex absolute inset-0 z-20 p-8 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] bg-black/40 text-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-4 scale-90 group-hover:scale-100 transition-transform duration-500">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                          {item.project.location}
                        </h3>
                        <span className="font-sans text-[10px] tracking-widest uppercase text-accent font-bold">
                          {item.project.title}
                        </span>
                      </div>
                    </div>

                    {/* Mobile/Tablet Info Overlay (Always Visible) */}
                    <div className="lg:hidden absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif text-lg text-white mb-1 truncate">
                            {item.project.location}
                          </h3>
                          <span className="font-sans text-[8px] tracking-widest uppercase text-accent font-bold block truncate">
                            {item.project.title}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 pointer-events-none border border-white/5 z-30" />
                  </div>
                </DialogTrigger>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group flex items-center justify-center w-full h-full"
                >
                  <img
                    src={selectedProject.coverImage}
                    alt={selectedProject.title}
                    className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                  />

                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-5 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group-hover:translate-y-[-10px] transition-transform">
                    <h3 className="font-serif text-2xl text-white leading-tight mb-4">
                      {selectedProject.location}
                    </h3>
                    <Button asChild variant="hero" size="sm" className="rounded-full">
                      <a href="/projects">View Full Project</a>
                    </Button>
                  </div>

                  <DialogClose className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/40 transition-colors">
                    <X className="w-6 h-6" />
                  </DialogClose>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default OurGallery;
