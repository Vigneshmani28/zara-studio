import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ArrowUpRight, X, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    url: "/projects/one.webp",
    title: "Minimalist Interior",
    category: "Residential",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    url: "/projects/two.webp",
    title: "Urban Architecture",
    category: "Commercial",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    url: "/projects/three.webp",
    title: "Serene Living",
    category: "Interior",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    url: "/projects/four.webp",
    title: "Modern Workspace",
    category: "Office",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    url: "/projects/five.webp",
    title: "Contemporary Villa",
    category: "Residential",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    url: "/projects/six.webp",
    title: "Luxury Lounge",
    category: "Hospitality",
    className: "md:col-span-1 md:row-span-1"
  }
];

const OurGallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="arch-container relative z-10">
        {/* Header */}
        <ScrollReveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Visual Journey
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Our <span className="text-muted-foreground italic">Gallery</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A curated collection of our finest moments in architecture and design,
            capturing the essence of modern living.
          </p>
        </ScrollReveal>

        {/* Bento Grid Gallery */}
        <Dialog>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]"
            staggerDelay={0.05}
          >
            {galleryImages.map((image, index) => (
              <StaggerItem
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-muted cursor-pointer ${image.className}`}
              >
                <DialogTrigger asChild onClick={() => setSelectedImage(image)}>
                  <div className="w-full h-full">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <img
                      src={image.url}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Hover Content */}
                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-sans text-xs tracking-widest uppercase text-accent mb-2 block">
                            {image.category}
                          </span>
                          <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                            {image.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <Maximize2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Grid Lines Overlay (Subtle) */}
                    <div className="absolute inset-0 pointer-events-none border border-white/5 z-30" />
                  </div>
                </DialogTrigger>
              </StaggerItem>
            ))}
          </StaggerContainer>

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
                    alt={selectedImage.title}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  />

                  {/* Floating Info Overlay */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="text-center">
                      <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent mb-1 block">
                        {selectedImage.category}
                      </span>
                      <h3 className="font-serif text-xl text-white leading-tight">
                        {selectedImage.title}
                      </h3>
                    </div>
                  </div>

                  <DialogClose className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/40 transition-colors">
                    <X className="w-6 h-6" />
                  </DialogClose>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>

        {/* Bottom Decorative Element */}
        <ScrollReveal className="mt-20 flex justify-center">
          <div className="flex items-center gap-8 text-muted-foreground/30">
            <div className="h-px w-24 bg-current" />
            <span className="font-serif italic text-2xl">Zara Studio</span>
            <div className="h-px w-24 bg-current" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OurGallery;
