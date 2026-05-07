import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="arch-container">
            <ScrollReveal className="flex flex-col items-center text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-12 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs uppercase tracking-widest font-sans">Back to Home</span>
              </Link>

              <h1 className="font-serif text-4xl md:text-display-md text-foreground mb-16">
                Privacy Policy
              </h1>

              <div className="max-w-3xl mx-auto space-y-16 text-muted-foreground leading-relaxed font-sans">
                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    1. Information Collection
                  </h2>
                  <p className="text-lg">
                    Zara Architects ("we," "us," or "our") respects your privacy. We only collect information that you voluntarily provide to us through our contact forms or email inquiries. This may include your name, email address, phone number, and project details.
                  </p>
                </section>

                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    2. Use of Information
                  </h2>
                  <p className="text-lg">
                    The information we collect is used solely to respond to your inquiries, provide architectural services, and maintain professional communication. We do not sell, trade, or otherwise transfer your personal information to outside parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    3. Image Credits & Intellectual Property
                  </h2>
                  <div className="bg-secondary/50 border border-border rounded-2xl p-6 md:p-10 space-y-6">
                    <div>
                      <h4 className="text-foreground font-semibold mb-2 uppercase tracking-wider text-xs">Hero Section</h4>
                      <p className="text-base opacity-80">
                        The images displayed in the main hero slider of this website are high-quality stock images used for illustrative and aesthetic purposes to represent our design philosophy.
                      </p>
                    </div>
                    <div className="h-px bg-border w-12 mx-auto" />
                    <div>
                      <h4 className="text-foreground font-semibold mb-2 uppercase tracking-wider text-xs">Projects Section</h4>
                      <p className="text-base opacity-80">
                        All project renderings, architectural plans, and photographs displayed in our "Projects" and "Portfolio" sections are the exclusive intellectual property of Zara Architects. These represent our original work and may not be reproduced, copied, or used without our explicit written consent.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    4. Cookies
                  </h2>
                  <p className="text-lg">
                    Our website may use essential cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of certain site features.
                  </p>
                </section>

                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    5. Contact Us
                  </h2>
                  <p className="text-lg">
                    If you have any questions regarding this Privacy Policy, please contact us at:
                    <br />
                    <a href="mailto:zaraarchitects@gmail.com" className="text-accent mt-2 block hover:underline">
                      zaraarchitects@gmail.com
                    </a>
                  </p>
                </section>

                <div className="pt-12 border-t border-border">
                  <p className="text-[10px] uppercase tracking-widest opacity-50">
                    Last Updated: May 2026
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
