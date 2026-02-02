import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
          <div className="arch-container">
            <ScrollReveal className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="arch-divider" />
                <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                  Contact Us
                </span>
              </div>
              <h1 className="font-serif text-display-lg text-foreground mb-8">
                Let's Start a Conversation
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
                Ready to bring your vision to life? We'd love to hear about your project. Fill out the form below or reach out directly.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-secondary/30">
          <div className="arch-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact Info */}
              <ScrollReveal direction="left" className="lg:col-span-1">
                <h2 className="font-serif text-heading-lg text-foreground mb-8">
                  Get in Touch
                </h2>

                <StaggerContainer className="space-y-8" staggerDelay={0.1}>
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-sans text-body font-medium text-foreground mb-1">
                          Studio Address
                        </h3>
                        <p className="text-body text-muted-foreground">
                          42 Architecture Lane<br />
                          Design District<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-sans text-body font-medium text-foreground mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+12345678900"
                          className="text-body text-muted-foreground hover:text-accent transition-colors"
                        >
                          +1 (234) 567-8900
                        </a>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-sans text-body font-medium text-foreground mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:hello@zaraarchitects.com"
                          className="text-body text-muted-foreground hover:text-accent transition-colors"
                        >
                          hello@zaraarchitects.com
                        </a>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-sans text-body font-medium text-foreground mb-1">
                          Studio Hours
                        </h3>
                        <p className="text-body text-muted-foreground">
                          Monday – Friday: 9am – 6pm<br />
                          Saturday: By appointment
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal direction="right" delay={0.2} className="lg:col-span-2">
                <div className="bg-background p-8 md:p-12 border border-border">
                  <h2 className="font-serif text-heading-lg text-foreground mb-8">
                    Project Inquiry
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="font-sans text-caption tracking-wide uppercase text-muted-foreground mb-2 block"
                        >
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50 border-border focus:border-accent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="font-sans text-caption tracking-wide uppercase text-muted-foreground mb-2 block"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50 border-border focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="font-sans text-caption tracking-wide uppercase text-muted-foreground mb-2 block"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-secondary/50 border-border focus:border-accent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="projectType"
                          className="font-sans text-caption tracking-wide uppercase text-muted-foreground mb-2 block"
                        >
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full h-10 px-3 bg-secondary/50 border border-border text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        >
                          <option value="">Select a type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="interior">Interior Design</option>
                          <option value="landscape">Landscape</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="font-sans text-caption tracking-wide uppercase text-muted-foreground mb-2 block"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full h-10 px-3 bg-secondary/50 border border-border text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Select a range</option>
                        <option value="under-500k">Under $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="1m-5m">$1,000,000 - $5,000,000</option>
                        <option value="5m-plus">$5,000,000+</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="font-sans text-caption tracking-wide uppercase text-muted-foreground mb-2 block"
                      >
                        Tell Us About Your Project *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-secondary/50 border-border focus:border-accent resize-none"
                        placeholder="Describe your vision, goals, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="xl"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? "Sending..." : "Schedule a Consultation"}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <ScrollReveal direction="up">
  <section className="h-96 relative">
    <div className="absolute inset-0 z-0">
      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Zara Architects Location"
        className="absolute inset-0"
      />
    </div>
    
    {/* Overlay with address info */}
    <div className="absolute bottom-6 left-6 right-6 z-10">
      <div className="bg-background/90 backdrop-blur-sm border border-border rounded-xl p-6 max-w-md">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="font-serif text-heading-lg text-foreground mb-1">
              Visit Our Studio
            </h3>
            <p className="font-sans text-sm text-muted-foreground mb-2">
              42 Architecture Lane, New York, NY 10001
            </p>
            <a
              href="https://maps.google.com/?q=42+Architecture+Lane+New+York+NY+10001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
