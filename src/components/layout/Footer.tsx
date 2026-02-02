import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Zara Architects"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Crafting spaces that harmonize form, function, and beauty through innovative architecture and thoughtful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-800">Explore</h4>
            <ul className="space-y-4">
              {["Studio", "Projects", "Services", "Journal", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors group items-center gap-2 arch-link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-800">Services</h4>
            <ul className="space-y-4">
              {[
                "Architectural Design",
                "Interior Design",
                "Urban Planning",
                "Sustainable Design",
                "Consultation",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group arch-link"
                  >
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-800">Connect</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 arch-link">
                  42 Architecture Lane<br />
                  Design District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white transition-colors arch-link"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <a
                  href="mailto:hello@zaraarchitects.com"
                  className="text-gray-400 hover:text-white transition-colors arch-link"
                >
                  hello@zaraarchitects.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 pt-6 border-t border-gray-800">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:hello@zaraarchitects.com"
                className="p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

    {/* Left block */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
      <span>
        © {new Date().getFullYear()} Zara Architects. All rights reserved.
      </span>

      <div className="flex items-center gap-3">
        <Link
          to="/privacy"
          className="hover:text-gray-300 transition-colors"
        >
          Privacy Policy
        </Link>

        <span className="opacity-40">•</span>

        <Link
          to="/terms"
          className="hover:text-gray-300 transition-colors"
        >
          Terms of Service
        </Link>
      </div>
    </div>

    {/* Right block */}
    <span className="text-sm text-gray-500 italic md:text-right">
      Architecture that endures
    </span>

  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;