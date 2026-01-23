import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Zara Architects transformed our vision into a reality that exceeded every expectation. Their attention to detail and commitment to excellence is unmatched.",
    author: "Michael & Sarah Chen",
    role: "Villa Serene, Malibu",
  },
  {
    quote:
      "Working with the Zara team was a seamless experience. They understood our brand identity and created a space that truly represents who we are.",
    author: "David Morrison",
    role: "CEO, Nexus Technologies",
  },
  {
    quote:
      "The level of craftsmanship and thoughtfulness in every decision made our project truly special. We couldn't be happier with our new home.",
    author: "Elena Rodriguez",
    role: "Mountain Retreat, Aspen",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="arch-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="arch-divider" />
            <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
              Client Testimonials
            </span>
            <div className="arch-divider" />
          </div>
          <h2 className="font-serif text-display text-foreground">
            Words From Our Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 md:p-10 border border-border relative"
            >
              <Quote className="h-10 w-10 text-accent/30 absolute top-8 right-8" />
              <blockquote className="font-serif text-heading text-foreground mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-6">
                <p className="font-sans text-body font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="font-sans text-caption text-muted-foreground mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
