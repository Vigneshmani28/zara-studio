import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoLight from "@/assets/logo.png"; // You'll need a light version
import logoDark from "@/assets/logo.png"; // You'll need a dark version

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  // { name: "Projects", path: "/projects" },
  { name: "Our Team", path: "/our-team" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine if hero section has light content
  const isHomePage = location.pathname === "/";
  const useDarkHeader = isScrolled || !isHomePage || isMobileMenuOpen;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          useDarkHeader
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-4"
            : "bg-gradient-to-b from-black/20 to-transparent py-6",
        )}
      >
        <div className="arch-container">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={useDarkHeader ? logoDark : logoLight}
                alt="Zara Architects"
                className="h-16 lg:h-18 w-auto transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "arch-link font-sans text-caption tracking-wide uppercase transition-colors relative group",
                    useDarkHeader
                      ? location.pathname === link.path
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      : location.pathname === link.path
                      ? "text-white"
                      : "text-white/80 hover:text-white",
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                      useDarkHeader
                        ? "bg-gray-900 dark:bg-white"
                        : "bg-white",
                      location.pathname === link.path && "w-full"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                variant={useDarkHeader ? "default" : "outline"} 
                size="lg" 
                asChild
                className={cn(
                  "transition-all duration-300 rounded-lg",
                  !useDarkHeader && "bg-transparent text-white border-white hover:bg-white/10"
                )}
              >
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {!isMobileMenuOpen && (
                <Menu 
                  className={`h-6 w-6 transition-colors ${
                    useDarkHeader 
                      ? "text-gray-900 dark:text-white" 
                      : "text-white"
                  }`} 
                />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Improved iPhone-style Mobile Menu Modal */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[999] transition-all duration-300 ease-out",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-150",
        )}
      >
        {/* Enhanced Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black transition-opacity duration-300 ease-out",
            isMobileMenuOpen ? "opacity-40" : "opacity-0",
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Improved Menu Content - Slides from bottom */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 rounded-t-2xl shadow-xl transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full",
          )}
          style={{
            maxHeight: "85vh",
            boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Elegant Drag Handle */}
          <div
            className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
          </div>

          <div
            className="px-6 pb-8 pt-2 overflow-y-auto"
            style={{ maxHeight: "calc(85vh - 60px)" }}
          >
            {/* Enhanced Logo in mobile menu */}
            <div className="flex flex-col items-center mb-8">
              <img
                src={logoDark}
                alt="Zara Architects"
                className="h-12 w-auto mb-3"
              />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-muted-foreground text-center">
                Turning Space Into Soul
              </span>
            </div>

            {/* Improved Navigation Links */}
            <div className="space-y-1 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "group flex items-center justify-between py-4 px-3 rounded-lg transition-all duration-200",
                    location.pathname === link.path
                      ? "bg-primary/5 text-foreground border-l-3 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-800",
                  )}
                >
                  <span className="font-sans text-base font-medium tracking-wide">
                    {link.name}
                  </span>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-foreground group-hover:translate-x-1",
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="mb-6">
              <Button
                variant="hero"
                size="lg"
                className="w-full py-6 text-base font-medium shadow-md hover:shadow-lg transition-shadow"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2"
                >
                  Book Consultation
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Contact Info Section */}
            <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-sm text-muted-foreground mb-3">
                Let's create something extraordinary
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:contact@zaraarchitects.com"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  contact@zaraarchitects.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Close button */}
            <button
              className="mt-6 w-full py-3 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Close Menu
            </button>
          </div>

          {/* Safe area for mobile devices */}
          <div className="h-safe-bottom bg-white dark:bg-gray-900" />
        </div>
      </div>
    </>
  );
};

export default Header;