import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="arch-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="font-serif text-heading-lg tracking-tight">
                Zara
              </span>
              <span className="font-sans text-caption tracking-architectural uppercase opacity-70">
                Architects
              </span>
            </Link>
            <p className="text-body-lg opacity-80 leading-relaxed">
              Award-winning architecture and interior design studio crafting timeless spaces that inspire living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-heading mb-6">Explore</h4>
            <ul className="space-y-3">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="arch-link text-body opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-heading mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Architecture Design",
                "Interior Design",
                "Residential",
                "Commercial",
                "Landscape Design",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="arch-link text-body opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-heading mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 opacity-70 mt-0.5 flex-shrink-0" />
                <span className="text-body opacity-80">
                  42 Architecture Lane<br />
                  Design District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-70 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="arch-link text-body opacity-80 hover:opacity-100"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-70 flex-shrink-0" />
                <a
                  href="mailto:hello@zaraarchitects.com"
                  className="arch-link text-body opacity-80 hover:opacity-100"
                >
                  hello@zaraarchitects.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:border-primary-foreground/60 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:border-primary-foreground/60 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="arch-container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption opacity-60">
            © {new Date().getFullYear()} Zara Architects. All rights reserved.
          </p>
          <p className="text-caption opacity-60 italic">
            Designed with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
