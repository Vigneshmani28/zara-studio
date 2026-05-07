import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const TermsConditions = () => {
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
                Terms & Conditions
              </h1>

              <div className="max-w-3xl mx-auto space-y-16 text-muted-foreground leading-relaxed font-sans">
                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-lg">
                    By accessing and using this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </section>

                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    2. Intellectual Property Rights
                  </h2>
                  <p className="text-lg">
                    The content on this website, including but not limited to text, graphics, logos, and architectural renderings, is the property of Zara Architects and is protected by copyright and intellectual property laws.
                  </p>
                  <div className="mt-8 p-6 md:p-8 border-t-2 border-accent bg-secondary/50">
                    <p className="italic text-foreground/90 font-serif text-lg">
                      "Our project renderings and completed works are the result of significant creative and professional investment. Any unauthorized use of these visuals for commercial purposes is strictly prohibited."
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    3. Use License
                  </h2>
                  <p className="text-lg">
                    Permission is granted to temporarily view the materials on Zara Architects' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
                  </p>
                  <ul className="list-none mt-6 space-y-3 text-base">
                    <li>Modify or copy the materials;</li>
                    <li>Use the materials for any commercial purpose or public display;</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                    <li>Remove any copyright or other proprietary notations from the materials.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    4. Disclaimer
                  </h2>
                  <p className="text-lg">
                    The materials on Zara Architects' website are provided on an 'as is' basis. Zara Architects makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    5. Limitations
                  </h2>
                  <p className="text-lg">
                    In no event shall Zara Architects or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
                  </p>
                </section>

                <section>
                  <h2 className="text-foreground text-sm font-semibold mb-6 uppercase tracking-[0.2em]">
                    6. Governing Law
                  </h2>
                  <p className="text-lg">
                    Any claim relating to Zara Architects' website shall be governed by the laws of India without regard to its conflict of law provisions.
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

export default TermsConditions;
