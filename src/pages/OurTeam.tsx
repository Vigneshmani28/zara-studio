import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Layout, 
  DollarSign,
  HardHat,
  MessageSquare,
  ArrowRight,
  FileText,
  Eye,
  CheckCircle,
  Building
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import founderImage from "@/assets/man.jpg";
import cofounderImage from "@/assets/man.jpg";
import accountsImage from "@/assets/man.jpg";
import architectImage from "@/assets/man.jpg";

const teamMembers = [
  {
    id: "sanjay",
    name: "Sanjay Prasath",
    role: "Founder | Principal Architect & Design Director",
    image: founderImage,
    description: "Sanjay Prasath is the Founder and Principal Architect of Zara Architects, established in 2025 with a clear vision to create spaces driven by clarity in planning, integrity in design, and responsibility in execution. He leads the studio's architectural and interior design direction, shaping projects from early planning and concept development through detailed design and on-site coordination.",
    responsibilities: [
      "Leads architectural and interior design direction",
      "Oversees architectural planning, elevations, and interior layouts",
      "Manages material strategy and design decisions",
      "Ensures balance of function, aesthetics, and budget",
      "Closely involved at every critical project stage"
    ],
    approach: "Grounded in understanding how spaces are lived in, prioritizing usability, longevity, and buildability over short-term trends.",
    focus: "Clear communication, disciplined planning, and thoughtful collaboration resulting in coherent, practical, and enduring spaces."
  },
  {
    id: "supriya",
    name: "Supriya Balasubramaniam",
    role: "Co-Founder | Design & Project Coordination",
    image: cofounderImage,
    description: "As Co-Founder, Supriya plays a key role in design coordination and project management.",
    responsibilities: [
      "Supports the design process through client interaction",
      "Manages project documentation and coordination",
      "Coordinates between design and execution stages",
      "Ensures smooth communication and timely follow-ups",
      "Maintains continuity across all project phases"
    ],
    approach: "Focuses on seamless integration between design concepts and practical implementation.",
    focus: "Ensuring project continuity and clear communication throughout the entire design journey."
  },
  {
    id: "soundhriya",
    name: "Soundhriya",
    role: "Accounts & Financial Management",
    image: accountsImage,
    description: "Soundhriya oversees accounts and financial planning at Zara Architects.",
    responsibilities: [
      "Manages project budgets and billing schedules",
      "Tracks expenses and ensures financial clarity",
      "Maintains financial transparency throughout projects",
      "Supports disciplined cost control",
      "Prevents budget-related uncertainty"
    ],
    approach: "Financial clarity as the foundation for smooth project execution.",
    focus: "Allowing projects to move forward smoothly without financial constraints."
  },
  {
    id: "yuvaraj",
    name: "Yuvaraj",
    role: "Architect | Site Supervisor | Execution & Coordination",
    image: architectImage,
    description: "Yuvaraj is responsible for on-site supervision and execution coordination.",
    responsibilities: [
      "Ensures drawings are accurately translated on site",
      "Conducts regular monitoring and measurements",
      "Coordinates with vendors and craftsmen",
      "Maintains quality control and resolves execution issues",
      "Aligns construction progress with design intent"
    ],
    approach: "Hands-on supervision ensuring design integrity during execution.",
    focus: "Quality maintenance and accurate translation of design to physical space."
  }
];

const teamFocusAreas = [
  {
    icon: <Target className="h-4 w-4" />,
    title: "Design Thinking",
    description: "Creative problem-solving prioritizing function and user experience"
  },
  {
    icon: <Layout className="h-4 w-4" />,
    title: "Planning Clarity",
    description: "Structured approach to space organization and functional layouts"
  },
  {
    icon: <DollarSign className="h-4 w-4" />,
    title: "Financial Discipline",
    description: "Transparent budgeting and responsible resource allocation"
  },
  {
    icon: <HardHat className="h-4 w-4" />,
    title: "On-Site Coordination",
    description: "Hands-on supervision ensuring accurate execution"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-background via-background to-background">
          <div className="arch-container">
            <ScrollReveal className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="arch-divider" />
                <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                  Our Team
                </span>
              </div>
              <h1 className="font-serif text-display-lg text-foreground mb-8">
                The Focused Team Behind
                <span className="block text-accent">Zara Architects</span>
              </h1>
              <p className="text-body-xl text-muted-foreground max-w-3xl leading-relaxed">
                Zara Architects is shaped by a small, focused team that brings together design thinking, planning clarity, financial discipline, and on-site coordination. Each member plays a defined role, ensuring that projects are approached with care, responsibility, and attention to detail.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Team Members */}
        <section className="section-padding bg-secondary/30">
          <div className="arch-container">
            <StaggerContainer className="space-y-32" staggerDelay={0.1}>
              {teamMembers.map((member, index) => (
                <StaggerItem key={member.id}>
                  <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Section - Smaller Size */}
                    <div className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:order-3' : ''}`}>
                      <div className="sticky top-32">
                        <div className="aspect-[2/3] max-w-xs mx-auto lg:max-w-none rounded-xl overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Name & Role */}
                        <div className="mt-8 text-center lg:text-left">
                          <h3 className="font-serif text-display text-foreground mb-2">{member.name}</h3>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                            <span className="font-sans text-sm font-medium text-accent">
                              {member.role.split("|")[0].trim()}
                            </span>
                          </div>
                          <p className="font-sans text-sm text-muted-foreground mt-2">
                            {member.role.split("|")[1]?.trim()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      {/* Description */}
                      <div className="mb-10">
                        <p className="text-body-xl text-muted-foreground leading-relaxed">
                          {member.description}
                        </p>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-1 h-8 bg-accent rounded-full" />
                          <h4 className="font-serif text-heading-xl text-foreground">Key Responsibilities</h4>
                        </div>
                        <ul className="space-y-4">
                          {member.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-body-lg text-muted-foreground">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Approach & Focus */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Target className="h-5 w-5 text-accent" />
                            <h5 className="font-serif text-heading text-foreground">Approach</h5>
                          </div>
                          <p className="text-body text-muted-foreground">
                            {member.approach}
                          </p>
                        </div>
                        
                        <div className="bg-secondary/30 border border-border rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Eye className="h-5 w-5 text-accent" />
                            <h5 className="font-serif text-heading text-foreground">Focus</h5>
                          </div>
                          <p className="text-body text-muted-foreground">
                            {member.focus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* How We Collaborate */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="arch-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="sticky top-24">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="arch-divider w-16" />
                    <span className="font-sans text-small tracking-architectural uppercase opacity-80">
                      How We Work
                    </span>
                  </div>
                  <h2 className="font-serif text-display-2xl mb-6">
                    Four Pillars of
                    <span className="block">Our Approach</span>
                  </h2>
                  <p className="text-body-xl opacity-80 leading-relaxed mb-10">
                    Our team's strength comes from clearly defined roles working in harmony to deliver complete design solutions.
                  </p>
                </div>
              </ScrollReveal>

              <div className="lg:col-span-1">
                <StaggerContainer className="grid grid-cols-1 gap-6" staggerDelay={0.1}>
                  {teamFocusAreas.map((principle, index) => (
                    <StaggerItem key={principle.title}>
                      <div className="group bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300 shrink-0">
                            <div className="text-accent">
                              {principle.icon}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-sans text-xs font-medium text-accent">
                                0{index + 1}
                              </span>
                              <h3 className="font-serif text-heading-lg">{principle.title}</h3>
                            </div>
                            <p className="text-body opacity-80">
                              {principle.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>

            {/* Footer Text */}
            <ScrollReveal delay={0.5} className="mt-12 pt-6 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/70">
                Established 2025 • Design thinking & planning clarity • Financial discipline • On-site coordination
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="arch-container">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <div className="inline-flex items-center justify-center gap-3 mb-8 p-4 bg-secondary/30 rounded-full">
                  <Building className="h-6 w-6 text-accent" />
                  <span className="font-sans text-small tracking-architectural uppercase text-muted-foreground">
                    Work With Our Team
                  </span>
                </div>
                <h2 className="font-serif text-display-2xl text-foreground mb-8">
                  Experience the Difference of Working with a
                  <span className="block text-accent">Dedicated, Focused Team</span>
                </h2>
                <p className="text-body-xl text-muted-foreground mb-10 leading-relaxed">
                  Each project benefits from the collective expertise of our entire team, ensuring comprehensive attention to every detail from initial concept through final execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="hero">
                    <Link to="/contact" className="flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/services" className="flex items-center gap-2">
                      Our work
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;