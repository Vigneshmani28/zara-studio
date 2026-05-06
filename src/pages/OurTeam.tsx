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
  ArrowRight,
  Eye,
  CheckCircle,
  Building,
  User,
  ShieldCheck,
  Zap,
  Briefcase
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const teamMembers = [
  {
    id: "sanjay",
    name: "Sanjay Prasath",
    role: "Founder | Principal Architect & Design Director",
    icon: <User className="h-8 w-8" />,
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
    icon: <User className="h-8 w-8" />,
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
    icon: <User className="h-8 w-8" />,
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
    icon: <User className="h-8 w-8" />,
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
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="arch-container relative z-10">
            <ScrollReveal className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="arch-divider" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Our Team
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-[1.1]">
                The Focused Team Behind
                <span className="block text-accent">Zara Architects</span>
              </h1>
              <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Zara Architects is shaped by a small, focused team that brings together design thinking, planning clarity, financial discipline, and on-site coordination.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Team Members - Redesigned No-Image UI */}
        <section className="section-padding bg-secondary/20">
          <div className="arch-container">
            <StaggerContainer className="space-y-12 md:space-y-20" staggerDelay={0.1}>
              {teamMembers.map((member, index) => (
                <StaggerItem key={member.id}>
                  <div className="group relative">
                    {/* Background Decorative Number */}
                    <div className="absolute top-0 right-0 font-serif text-[15vw] leading-none text-foreground/[0.03] select-none pointer-events-none -translate-y-1/4 translate-x-1/8">
                      0{index + 1}
                    </div>

                    <div className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-card/40 backdrop-blur-xl p-8 md:p-16 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">

                        {/* Sidebar: Icon, Name & Role */}
                        <div className="lg:col-span-4 space-y-8">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-white shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-500">
                            {member.icon}
                          </div>
                          <div>
                            <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-4 leading-tight">
                              {member.name}
                            </h3>
                            <div className="space-y-2">
                              <span className="font-sans text-xs tracking-widest uppercase text-accent font-semibold block">
                                {member.role.split("|")[0].trim()}
                              </span>
                              <p className="font-sans text-sm text-muted-foreground">
                                {member.role.split("|")[1]?.trim()}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Content: Description & Responsibilities */}
                        <div className="lg:col-span-8 space-y-12">
                          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed border-l-2 border-accent/20 pl-8">
                            {member.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Responsibilities */}
                            <div>
                              <h4 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-3">
                                <ShieldCheck className="h-6 w-6 text-accent" />
                                Key Responsibilities
                              </h4>
                              <ul className="space-y-4">
                                {member.responsibilities.map((resp, i) => (
                                  <li key={i} className="flex items-start gap-3 group/item">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 transition-all group-hover/item:scale-150" />
                                    <span className="font-sans text-base text-muted-foreground">{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Philosophy */}
                            <div className="space-y-8">
                              <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
                                <h5 className="font-serif text-xl text-foreground mb-3 flex items-center gap-2">
                                  <Zap className="h-5 w-5 text-accent" />
                                  Approach
                                </h5>
                                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                                  {member.approach}
                                </p>
                              </div>
                              <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                                <h5 className="font-serif text-xl text-foreground mb-3 flex items-center gap-2">
                                  <Eye className="h-5 w-5 text-accent" />
                                  Focus
                                </h5>
                                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                                  {member.focus}
                                </p>
                              </div>
                            </div>
                          </div>
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
        <section className="section-padding bg-foreground text-background">
          <div className="arch-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="sticky top-24">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-px bg-accent" />
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-background/60">
                      Our Philosophy
                    </span>
                  </div>
                  <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
                    Four Pillars of
                    <span className="block text-accent">Our Approach</span>
                  </h2>
                  <p className="font-sans text-lg text-background/70 leading-relaxed mb-10 max-w-lg">
                    Our team's strength comes from clearly defined roles working in harmony to deliver complete design solutions.
                  </p>
                </div>
              </ScrollReveal>

              <div className="lg:col-span-1">
                <StaggerContainer className="grid grid-cols-1 gap-6" staggerDelay={0.1}>
                  {teamFocusAreas.map((principle, index) => (
                    <StaggerItem key={principle.title}>
                      <div className="group bg-background/5 border border-background/10 rounded-2xl p-8 hover:border-accent transition-all duration-300">
                        <div className="flex items-start gap-6">
                          <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300 shrink-0">
                            {principle.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-sans text-xs font-bold text-accent">0{index + 1}</span>
                              <h3 className="font-serif text-2xl text-background">{principle.title}</h3>
                            </div>
                            <p className="font-sans text-base text-background/60">
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
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
          <div className="arch-container relative z-10 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-secondary/50 rounded-full border border-border">
                <Building className="h-5 w-5 text-accent" />
                <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground font-semibold">
                  Start Your Journey
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
                Work With Our <br />
                <span className="text-accent">Dedicated Team</span>
              </h2>
              <p className="font-sans text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Each project benefits from the collective expertise of our entire team, ensuring comprehensive attention to every detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="rounded-full px-12 py-8 bg-accent hover:bg-accent/90 text-white border-none text-base font-semibold transition-all hover:scale-105">
                  <Link to="/contact" className="flex items-center gap-3">
                    Start Your Project
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-12 py-8 border-border hover:bg-secondary text-base font-semibold transition-all">
                  <Link to="/services">Explore Our Work</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;