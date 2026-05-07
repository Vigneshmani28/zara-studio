import { Quote, Star, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const testimonials = [
  {
    id: 1,
    quote: "Zara Architects understood our vision perfectly and delivered a beautiful, functional design with great attention to detail.",
    author: "Guna",
    rating: 5,
  },
  {
    id: 2,
    quote: "Very professional team with creative ideas. The entire process was smooth and the final outcome exceeded our expectations.",
    author: "Saranya",
    rating: 5,
  },
  {
    id: 3,
    quote: "Excellent design approach and timely execution. Highly satisfied with the quality and support provided throughout the project.",
    author: "Mohan",
    rating: 5,
  },
  {
    id: 4,
    quote: "They transformed our space into something modern and elegant. Truly impressed with their dedication and creativity.",
    author: "Maheswari",
    rating: 5,
  },
  {
    id: 5,
    quote: "Great experience working with Zara Architects. Their planning and design sense made our dream home a reality.",
    author: "Raja",
    rating: 5,
  },
  {
    id: 6,
    quote: "The team was friendly, responsive, and highly talented. Every detail was thoughtfully designed and executed beautifully.",
    author: "Karthigai Rani",
    rating: 5,
  },
  {
    id: 7,
    quote: "Creative concepts, quality work, and excellent communication. I would definitely recommend Zara Architects to others.",
    author: "Shiva",
    rating: 5,
  },
  {
    id: 8,
    quote: "Zara Architects delivered a stylish and practical design that perfectly suited our lifestyle and requirements.",
    author: "Vignesh",
    rating: 5,
  },
  {
    id: 9,
    quote: "Very satisfied with their service and commitment. The final design was both unique and aesthetically pleasing.",
    author: "Logeshwaran",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="arch-container">
        {/* Modern Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
                TESTIMONIALS
              </span>
              <Sparkles className="h-4 w-4 text-accent" />
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Client
            <span className="text-muted-foreground block">Experiences</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Hear from those who have experienced our architectural excellence firsthand.
          </p>
        </ScrollReveal>

        {/* Enhanced Testimonials Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="group relative h-full">
                {/* Main Card */}
                <div className="relative overflow-hidden bg-background border border-border/50 
                              rounded-2xl p-8 h-full transition-all duration-500 ease-out
                              hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20
                              hover:translate-y-[-4px] flex flex-col">

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <div className="grid grid-cols-3 gap-2 h-full">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="border border-foreground/10 rounded" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Section */}
                    <div className="flex items-start justify-between mb-6">
                      <Quote className="h-8 w-8 text-accent/20" />

                      {/* Rating Stars */}
                      <div className="flex items-center gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-lg leading-relaxed text-foreground mb-8 
                                           relative pl-4 flex-grow">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30" />
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Section */}
                    <div className="pt-6 border-t border-border/50 text-center">
                      <p className="font-sans text-base font-medium text-foreground tracking-wide">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 
                                rounded-2xl blur-xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 -z-10" />
                </div>

                {/* Subtle Shadow */}
                <div className="absolute inset-0 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 -z-20" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;