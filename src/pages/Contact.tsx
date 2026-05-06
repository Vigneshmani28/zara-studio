import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-hidden bg-background">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="arch-container relative z-10">
            <ScrollReveal className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-accent" />
                <span className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground font-semibold">
                  Contact Us
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-[1.1]">
                Let's Start a <br />
                <span className="text-accent italic">Conversation</span>
              </h1>
              <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Ready to bring your vision to life? We'd love to hear about your project. Fill out the form below or reach out directly.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Content */}
        <section className="pb-32 bg-background relative">
          <div className="arch-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-4 space-y-16">
                <ScrollReveal direction="left">
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
                    Get in <span className="text-muted-foreground italic">Touch</span>
                  </h2>

                  <StaggerContainer className="space-y-12" staggerDelay={0.1}>
                    <StaggerItem>
                      <div className="group flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2 font-bold">
                            Studio Address
                          </h3>
                          <p className="font-sans text-base text-foreground leading-relaxed">
                            No.4/26, Gnanamani street,<br />
                            Sathyamoorthi block,<br />
                            Ashok nagar, Chennai -83
                          </p>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="group flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2 font-bold">
                            Phone
                          </h3>
                          <a
                            href="tel:+919791540113"
                            className="font-sans text-base text-foreground hover:text-accent transition-colors"
                          >
                            +91 97915 40113
                          </a>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="group flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2 font-bold">
                            Email
                          </h3>
                          <a
                            href="mailto:zaraarchitects@gmail.com"
                            className="font-sans text-base text-foreground hover:text-accent transition-colors"
                          >
                            zaraarchitects@gmail.com
                          </a>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="group flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2 font-bold">
                            Studio Hours
                          </h3>
                          <p className="font-sans text-base text-foreground leading-relaxed">
                            Monday – Friday: 9am – 6pm<br />
                            Saturday: By appointment
                          </p>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="group flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <Instagram className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2 font-bold">
                            Instagram
                          </h3>
                          <a
                            href="https://www.instagram.com/zara_architects/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans text-base text-foreground hover:text-accent transition-colors"
                          >
                            @zara_architects
                          </a>
                        </div>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                </ScrollReveal>
              </div>

              {/* Contact Form Section */}
              <div className="lg:col-span-8">
                <ScrollReveal direction="right" delay={0.2}>
                  <div className="relative p-8 md:p-16 rounded-[2.5rem] bg-secondary/30 border border-border/50 backdrop-blur-sm overflow-hidden">

                    <div className="relative z-10">
                      <div className="max-w-2xl mb-12">
                        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                          Project <span className="text-muted-foreground italic">Inquiry</span>
                        </h2>
                        <p className="font-sans text-base text-muted-foreground">
                          Tell us about your project and we'll help you turn your vision into a reality.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-3">
                            <label htmlFor="name" className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent font-bold">
                              Your Name *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="e.g. John"
                              className="h-14 bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-all text-lg placeholder:text-muted-foreground/30"
                            />
                          </div>
                          <div className="space-y-3">
                            <label htmlFor="email" className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent font-bold">
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="e.g. john@example.com"
                              className="h-14 bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-all text-lg placeholder:text-muted-foreground/30"
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="phone" className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent font-bold">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="e.g. +91 98765 43210"
                            className="h-14 bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-all text-lg placeholder:text-muted-foreground/30"
                          />
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="message" className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent font-bold">
                            About Your Project *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Describe your vision, goals, and any specific requirements..."
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-all text-lg placeholder:text-muted-foreground/30 resize-none min-h-[120px]"
                          />
                        </div>

                        <div className="pt-6">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative h-16 px-12 rounded-full bg-accent hover:bg-accent/90 text-white font-sans font-bold tracking-widest uppercase text-xs transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                          >
                            <span className="flex items-center gap-3">
                              {isSubmitting ? "Sending..." : "Send Message"}
                              <Send className={`h-4 w-4 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                            </span>
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <ScrollReveal direction="up" className="arch-container mb-32">
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-border group">
            <div className="absolute inset-0 z-0">
              <iframe
                src={`https://www.google.com/maps?q=13.0308898,80.2010841&hl=en&z=14&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="absolute inset-0 contrast-125 opacity-80 group-hover:opacity-100 transition-all duration-700"
              />
            </div>

            {/* Address Overlay */}
            <div className="absolute bottom-10 left-10 z-10 max-w-sm">
              <div className="bg-background/80 backdrop-blur-xl border border-border p-8 rounded-3xl shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-1">
                      Visit Our Studio
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      No.4/26, Gnanamani street, Sathyamoorthi block, Ashok nagar, Chennai -83
                    </p>
                  </div>
                </div>
                <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-accent/80 font-bold tracking-widest uppercase text-[10px] group/link">
                  <a
                    href="https://maps.app.goo.gl/1CyFa9uxtxxkxtVo6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Get Directions
                    <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
