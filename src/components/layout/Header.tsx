import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "@/assets/logo-white.png";
import logoDark from "@/assets/logo-black.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Team", path: "/our-team" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine if header should use dark elements based on scroll or page
  const isHomePage = location.pathname === "/";
  const useDarkHeader = isScrolled || !isHomePage;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const headerVariants = {
    initial: {
      y: 0,
      padding: "24px 0",
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    scrolled: {
      y: 12,
      padding: "8px 0",
    }
  };

  const navContainerVariants = {
    initial: {
      width: "100%",
      borderRadius: "0px",
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      border: "1px solid rgba(255, 255, 255, 0)",
    },
    scrolled: {
      width: "auto",
      borderRadius: "100px",
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      padding: "0 12px",
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <header className="fixed top-2.5 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial="initial"
          animate={isScrolled ? "scrolled" : "initial"}
          variants={navContainerVariants}
          className={cn(
            "pointer-events-auto flex items-center transition-all duration-500 overflow-hidden",
            isScrolled ? "max-w-[95vw] lg:max-w-4xl" : "w-full arch-container"
          )}
        >
          <nav className={cn(
            "flex items-center justify-between w-full transition-all duration-500",
            isScrolled ? "py-2 px-4 gap-8" : "py-6"
          )}>
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 group">
              <motion.img
                src={useDarkHeader ? logoDark : logoLight}
                alt="Zara Architects"
                className={cn(
                  "transition-all duration-500",
                  isScrolled ? "h-10 lg:h-12" : "h-16 lg:h-18"
                )}
                layoutId="header-logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative px-4 py-2 rounded-full font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-300 group",
                    useDarkHeader
                      ? location.pathname === link.path
                        ? "text-primary font-semibold"
                        : "text-primary/60 hover:text-primary"
                      : location.pathname === link.path
                        ? "text-white font-semibold"
                        : "text-white/70 hover:text-white"
                  )}
                >
                  <span className="relative z-10 font-bold">{link.name}</span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className={cn(
                        "absolute inset-0 rounded-full -z-0",
                        isScrolled ? "bg-primary/5" : "bg-white/10"
                      )}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.div
                    className={cn(
                      "absolute inset-0 rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      isScrolled ? "bg-primary/5" : "bg-white/10"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <Button
                  variant={useDarkHeader ? "hero" : "heroOutline"}
                  size="sm"
                  asChild
                  className={cn(
                    "rounded-full transition-all duration-500",
                    "flex items-center gap-2",
                    isScrolled ? "px-6 h-9" : "px-8 h-12"
                  )}
                >
                  <Link to="/contact">
                    Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  "lg:hidden p-2 rounded-full transition-colors",
                  useDarkHeader ? "text-primary" : "text-white"
                )}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </motion.div>
      </header>

      {/* Modern Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-[100] bg-white dark:bg-gray-900 lg:hidden flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
              <img src={logoDark} alt="Zara Architects" className="h-10 w-auto" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-primary dark:text-white"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col justify-center px-8 py-12">
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={menuItemVariants}>
                    <Link
                      to={link.path}
                      className={cn(
                        "group flex items-center gap-4 text-4xl md:text-5xl font-serif tracking-tight transition-all duration-300",
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-gray-300 hover:text-primary"
                      )}
                    >
                      <span className="text-xs font-sans tracking-widest text-primary/40 group-hover:text-primary/60 transition-colors">
                        0{navLinks.indexOf(link) + 1}
                      </span>
                      {link.name}
                      <ArrowRight className={cn(
                        "h-8 w-8 transition-all duration-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0",
                        location.pathname === link.path && "opacity-100 translate-x-0"
                      )} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Footer Info */}
              <motion.div
                variants={menuItemVariants}
                className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-8"
              >
                <div className="space-y-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans">Contact</p>
                  <div className="space-y-2">
                    <a href="tel:+919791540113" className="block text-sm hover:text-primary transition-colors">+91 97915 40113</a>
                    <a href="mailto:contact@zaraarchitects.com" className="block text-sm hover:text-primary transition-colors">contact@zaraarchitects.com</a>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans">Social</p>
                  <div className="flex gap-4">
                    <a href="https://instagram.com/zara_architects" className="p-2 bg-gray-50 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all"><Instagram size={16} /></a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              variants={menuItemVariants}
              className="p-8"
            >
              <Button variant="hero" className="w-full h-16 rounded-2xl text-base group" asChild>
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;