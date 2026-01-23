import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import founderImage from "@/assets/founder-portrait.jpg";
import studioImage from "@/assets/studio-workspace.jpg";

const values = [
  {
    title: "Minimalism",
    description: "We believe in the power of simplicity—eliminating the unnecessary to reveal the essential beauty of form and function.",
  },
  {
    title: "Functionality",
    description: "Every design decision is guided by purpose. Our spaces work seamlessly for the lives lived within them.",
  },
  {
    title: "Context-Driven",
    description: "Architecture should respond to its environment. We design buildings that belong to their place and time.",
  },
  {
    title: "Sustainability",
    description: "Environmental responsibility is woven into every project, creating spaces that honor our planet.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
          <div className="arch-container">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="arch-divider" />
                <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                  About Us
                </span>
              </div>
              <h1 className="font-serif text-display-lg text-foreground mb-8">
                Crafting Spaces That Tell Stories
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
                For over two decades, Zara Architects has been redefining the boundaries of architectural excellence. Our studio brings together a passion for design innovation with deep respect for timeless principles.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-secondary/30">
          <div className="arch-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-display text-foreground mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 text-body-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2001, Zara Architects emerged from a vision to create architecture that transcends trends and speaks to the fundamental human need for beautiful, functional spaces.
                  </p>
                  <p>
                    What began as a small studio with a handful of passionate designers has grown into an internationally recognized practice, while never losing the intimacy and personal attention that defined our early years.
                  </p>
                  <p>
                    Today, our portfolio spans residential masterpieces, commercial landmarks, and interior transformations across three continents. Each project, regardless of scale, receives the same level of dedication and creative rigor.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={studioImage}
                  alt="Zara Architects studio"
                  className="w-full aspect-4/5 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="section-padding bg-background">
          <div className="arch-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={founderImage}
                  alt="Sarah Zara, Principal Architect"
                  className="w-full max-w-md aspect-3/4 object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="arch-divider" />
                  <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                    Principal Architect
                  </span>
                </div>
                <h2 className="font-serif text-display text-foreground mb-6">
                  Sarah Zara, AIA
                </h2>
                <div className="space-y-6 text-body-lg text-muted-foreground leading-relaxed">
                  <p>
                    With over 25 years of experience shaping the built environment, Sarah Zara founded our studio on the belief that architecture should elevate everyday life.
                  </p>
                  <p>
                    A graduate of Yale School of Architecture and recipient of the AIA Gold Medal, Sarah's work has been published in Architectural Digest, Dwell, and Wallpaper. Her design philosophy centers on creating spaces that feel inevitable—as if they could not exist any other way.
                  </p>
                  <p className="italic font-serif text-foreground">
                    "Great architecture is not about making a statement. It's about creating the conditions for life to flourish."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="arch-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="font-sans text-small tracking-architectural uppercase opacity-80">
                  Our Philosophy
                </span>
                <div className="w-12 h-px bg-accent" />
              </div>
              <h2 className="font-serif text-display">
                Design Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-8 md:p-10 border border-primary-foreground/10"
                >
                  <span className="font-sans text-small tracking-architectural text-accent mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-heading-lg mb-4">{value.title}</h3>
                  <p className="text-body-lg opacity-80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="arch-container text-center">
            <h2 className="font-serif text-display text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Let's discuss your vision and explore how we can bring it to life.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
