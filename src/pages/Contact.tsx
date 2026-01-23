import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
            <div className="max-w-4xl">
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
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-secondary/30">
          <div className="arch-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="font-serif text-heading-lg text-foreground mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-8">
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
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
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
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="h-96 bg-muted relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="font-serif text-heading text-foreground">
                42 Architecture Lane, New York
              </p>
              <p className="text-body text-muted-foreground mt-2">
                Interactive map coming soon
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
