import { useState, useCallback } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { PROJECTS_DATA, Project } from "@/data/projects";
import useEmblaCarousel from "embla-carousel-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30, // Smoother carousel transition
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="arch-container mb-20">
          <ScrollReveal className="max-w-4xl" duration={0.8} direction="up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold">
                Portfolio
              </span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-8 leading-[0.9]">
              Our <span className="text-accent">Projects</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Our architectural explorations across diverse landscapes. Each site represents a unique dialogue between environment and design.
            </p>
          </ScrollReveal>
        </section>

        {/* Projects Grid */}
        <section className="arch-container">
          <Dialog onOpenChange={(open) => !open && setSelectedProject(null)}>
            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              staggerDelay={0.05} // Faster stagger for smoother feel
            >
              {PROJECTS_DATA.map((project) => (
                <StaggerItem key={project.id}>
                  <DialogTrigger asChild onClick={() => setSelectedProject(project)}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="cursor-pointer group will-change-transform"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-muted shadow-lg">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 will-change-transform"
                        />
                        {/* Desktop Hover Overlay */}
                        <div className="hidden lg:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col items-center justify-center backdrop-blur-[2px] p-6 text-center">
                          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500 mb-4">
                            <Maximize2 className="w-6 h-6" />
                          </div>
                          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                            <h3 className="font-serif text-2xl text-white mb-2 leading-tight">
                              {project.location}
                            </h3>
                            <span className="font-sans text-[10px] tracking-widest uppercase text-accent font-bold">
                              {project.images.length} Images
                            </span>
                          </div>
                        </div>

                        {/* Mobile Tap Indicator */}
                        <div className="lg:hidden absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Info below card (Visible on Mobile/Tablet, Hidden on Desktop) */}
                      <div className="mt-6 px-2 lg:hidden">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-sans text-[10px] tracking-widest uppercase text-accent font-bold">
                            {project.category}
                          </span>
                          <span className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground font-bold">
                            {project.images.length} Images
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl text-foreground leading-tight">
                          {project.location}
                        </h3>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Swipeable Lightbox */}
            <DialogContent className="max-w-screen-2xl w-[95vw] h-[90vh] p-0 border-none bg-black/95 backdrop-blur-xl shadow-none overflow-hidden flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                {selectedProject && (
                  <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full flex flex-col will-change-transform"
                  >
                    {/* Header Info */}
                    <div className="absolute top-0 left-0 right-0 p-8 z-50 flex items-start justify-between pointer-events-none">
                      <div className="pointer-events-auto">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">{selectedProject.location}</h2>
                      </div>
                      <DialogClose className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <X className="w-6 h-6" />
                      </DialogClose>
                    </div>

                    {/* Carousel */}
                    <div className="flex-1 w-full overflow-hidden" ref={emblaRef}>
                      <div className="flex h-full">
                        {selectedProject.images.map((img, i) => (
                          <div key={i} className="flex-[0_0_100%] h-full flex items-center justify-center p-4 md:p-12 lg:p-24">
                            <img
                              src={img}
                              alt={`${selectedProject.title} ${i + 1}`}
                              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none will-change-transform"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={scrollPrev}
                          className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-50"
                        >
                          <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                          onClick={scrollNext}
                          className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-50"
                        >
                          <ChevronRight className="w-8 h-8" />
                        </button>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
                          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/50">
                            Swipe to navigate
                          </span>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </DialogContent>
          </Dialog>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
