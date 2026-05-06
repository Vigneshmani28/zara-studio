import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const allProjects = [
  { url: "/projects/one.webp" },
  { url: "/projects/two.webp" },
  { url: "/projects/three.webp" },
  { url: "/projects/four.webp" },
  { url: "/projects/five.webp" },
  { url: "/projects/six.webp" },
  { url: "/projects/2.jpg_11zon.webp" },
  { url: "/projects/3-1.jpg_11zon.webp" },
  { url: "/projects/3-2.jpg_11zon.webp" },
  { url: "/projects/3-3.jpg_11zon.webp" },
  { url: "/projects/3-7.jpg_11zon.webp" },
  { url: "/projects/3-8.jpg_11zon.webp" },
  { url: "/projects/3-9.jpg_11zon.webp" },
  { url: "/projects/4.jpg_11zon.webp" },
  { url: "/projects/5.jpg_11zon.webp" },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<typeof allProjects[0] | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="arch-container mb-20">
          <ScrollReveal className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Our Portfolio
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
              Project <span className="text-muted-foreground italic">Gallery</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A visual journey through our architectural and design explorations. 
              Capturing moments of light, space, and material.
            </p>
          </ScrollReveal>
        </section>

        {/* Projects Grid */}
        <section className="arch-container">
          <Dialog>
            <StaggerContainer
              className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
              staggerDelay={0.05}
            >
              <AnimatePresence mode="popLayout">
                {allProjects.map((project, index) => (
                  <StaggerItem
                    key={project.url}
                    className="break-inside-avoid"
                  >
                    <DialogTrigger asChild onClick={() => setSelectedImage(project)}>
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="cursor-pointer group relative overflow-hidden rounded-2xl bg-muted"
                      >
                        {/* Image */}
                        <img
                          src={project.url}
                          alt="Project Image"
                          className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        
                        {/* Hover Icon */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500">
                            <Maximize2 className="w-6 h-6" />
                          </div>
                        </div>
                        
                        {/* Subtle Border */}
                        <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-2xl" />
                      </motion.div>
                    </DialogTrigger>
                  </StaggerItem>
                ))}
              </AnimatePresence>
            </StaggerContainer>

            {/* Lightbox Content */}
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                {selectedImage && (
                  <motion.div
                    key={selectedImage.url}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative group flex items-center justify-center w-full h-full"
                  >
                    <img
                      src={selectedImage.url}
                      alt="Project Detail"
                      className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />

                    <DialogClose className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/40 transition-colors">
                      <X className="w-6 h-6" />
                    </DialogClose>
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
