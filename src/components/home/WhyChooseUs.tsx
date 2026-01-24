import { Lightbulb, Users, Leaf, Award, Sparkles, CheckCircle, Target, Zap } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const features = [
  {
    icon: Lightbulb,
    accentIcon: Sparkles,
    title: "Innovative Design",
    subtitle: "Creative Excellence",
    description:
      "Every project begins with deep research and creative exploration, ensuring unique solutions that resonate with your vision.",
    stats: "200+ Projects",
    color: "from-blue-500/20 to-cyan-500/10"
  },
  {
    icon: Users,
    accentIcon: CheckCircle,
    title: "End-to-End Excellence",
    subtitle: "Seamless Process",
    description:
      "From initial concept through construction completion, we manage every detail with precision and care.",
    stats: "98% Client Satisfaction",
    color: "from-emerald-500/20 to-green-500/10"
  },
  {
    icon: Leaf,
    accentIcon: Target,
    title: "Sustainable Solutions",
    subtitle: "Future-Focused",
    description:
      "We integrate environmental responsibility into every project, creating spaces that respect and enhance their surroundings.",
    stats: "Zero Carbon Projects",
    color: "from-teal-500/20 to-emerald-500/10"
  },
  {
    icon: Award,
    accentIcon: Zap,
    title: "Award-Winning Expertise",
    subtitle: "Global Recognition",
    description:
      "Our internationally recognized team brings decades of combined expertise to every project we undertake.",
    stats: "25+ Awards",
    color: "from-amber-500/20 to-orange-500/10"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden mb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-foreground" />
          ))}
        </div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="arch-container relative z-10">
        {/* Modern Header */}
        <ScrollReveal className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
              OUR PHILOSOPHY
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            <span className="block">Why Clients</span>
            <span className="text-muted-foreground">Choose Zara</span>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We don't just design buildings—we craft experiences that stand the test of time.
          </p>
        </ScrollReveal>

        {/* Enhanced Features Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" 
          staggerDelay={0.08}
        >
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <div className="group relative h-full">
                {/* Main Card */}
                <div className={`
                  relative overflow-hidden rounded-2xl border border-border/50 
                  bg-card/50 backdrop-blur-sm p-8 h-full
                  transition-all duration-500 ease-out
                  hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5
                  hover:translate-y-[-4px]
                `}>
                  {/* Background Gradient */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-700
                    bg-gradient-to-br ${feature.color}
                  `} />
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500">
                    <div className="grid grid-cols-4 gap-4 h-full">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="border border-foreground/20 rounded" />
                      ))}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="relative">
                        <div className={`
                          w-14 h-14 rounded-xl flex items-center justify-center
                          bg-gradient-to-br from-background to-muted
                          border border-border shadow-lg
                          group-hover:scale-110 transition-transform duration-500
                        `}>
                          <feature.icon className="h-6 w-6 text-foreground" />
                        </div>
                        
                        {/* Accent Icon */}
                        <div className="absolute -top-2 -right-2">
                          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                            <feature.accentIcon className="h-3 w-3 text-background" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Stats Badge */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
                        <span className="font-sans text-xs font-medium tracking-wider uppercase text-accent px-3 py-1.5 rounded-full border border-accent/30">
                          {feature.stats}
                        </span>
                      </div>
                    </div>

                    {/* Title Section */}
                    <div className="mb-6">
                      <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-2">
                        {feature.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl lg:text-3xl text-foreground leading-tight">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <span className="font-sans text-sm font-medium text-accent">
                        Learn More
                      </span>
                      <div className="w-8 h-px bg-accent/50 transition-all duration-300 group-hover:w-12" />
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute bottom-8 right-8">
                    <span className="font-serif text-5xl font-bold text-foreground/5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-2 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 blur-xl" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;