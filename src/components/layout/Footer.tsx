import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Facebook } from "lucide-react";
import logo from "@/assets/logo/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Studio", path: "/studio" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Journal", path: "/journal" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Architectural Design",
    "Interior Design",
    "Urban Planning",
    "Sustainable Design",
    "Consultation",
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/zara_architects", label: "Instagram" },
    // { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    // { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Mail, href: "mailto:zaraarchitects@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="inline-block">
                <div className="bg-white/100 backdrop-blur-sm p-2 rounded-xl inline-block hover:bg-white/90 transition-all duration-300">
                  <img
                    src={logo}
                    alt="Zara Architects"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Crafting spaces that harmonize form, function, and beauty through
                innovative architecture and thoughtful design.
              </p>
              <div className="flex gap-3 pt-2">
                {socialLinks.slice(0, 3).map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Explore
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Connect
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 leading-relaxed">
                    No.4/26, Gnanamani street,<br />
                    Sathyamoorthi block,<br />
                    Ashok nagar, Chennai - 83
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+919791540113"
                    className="flex gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    <span>+91 97915 40113</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:zaraarchitects@gmail.com"
                    className="flex gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    <span className="break-all">zaraarchitects@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs">
              © {currentYear} Zara Architects. All rights reserved.
            </p>
            {/* <div className="flex gap-4 text-xs">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/terms" className="text-gray-500 hover:text-gray-400 transition-colors">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;