import { Quote, Star, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const testimonials = [
  {
    id: 1,
    quote:
      "Zara Architects transformed our vision into a reality that exceeded every expectation. Their attention to detail and commitment to excellence is unmatched.",
    author: "Michael & Sarah Chen",
    role: "Villa Serene, Malibu",
    project: "Residential",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Working with the Zara team was a seamless experience. They understood our brand identity and created a space that truly represents who we are.",
    author: "David Morrison",
    role: "CEO, Nexus Technologies",
    project: "Commercial",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The level of craftsmanship and thoughtfulness in every decision made our project truly special. We couldn't be happier with our new home.",
    author: "Elena Rodriguez",
    role: "Mountain Retreat, Aspen",
    project: "Residential",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "The sustainable design solutions they implemented not only reduced our carbon footprint but also resulted in significant operational savings.",
    author: "Robert Kim",
    role: "Sustainability Director, GreenTech",
    project: "Corporate",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "From concept to completion, the Zara team demonstrated unparalleled professionalism. Our hotel lobby has become the talk of the city.",
    author: "Sophia Williams",
    role: "Managing Director, Grand Hotels",
    project: "Hospitality",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "The architectural vision combined with practical functionality resulted in a space that inspires creativity and productivity every day.",
    author: "Thomas Chen",
    role: "Creative Director, Studio X",
    project: "Office",
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
                              hover:translate-y-[-4px]">
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <div className="grid grid-cols-3 gap-2 h-full">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="border border-foreground/10 rounded" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
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
                                          italic relative pl-4">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30" />
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Section */}
                    <div className="pt-6 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-sans text-base font-medium text-foreground">
                            {testimonial.author}
                          </p>
                          <p className="font-sans text-sm text-muted-foreground mt-1">
                            {testimonial.role}
                          </p>
                        </div>
                        
                        {/* Project Tag */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-sans text-xs font-medium tracking-wider uppercase 
                                         text-accent px-2 py-1 rounded border border-accent/30">
                            {testimonial.project}
                          </span>
                        </div>
                      </div>
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