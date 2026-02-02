// components/ui/scroll-to-top.tsx
import { useEffect, useState } from 'react';
import { ChevronUp, Compass, ArrowUpToLine, Building, ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTopButton}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Main button with architectural design */}
          <div className="relative">
            {/* Background shape - architectural elevation */}
            <div className="absolute inset-0 bg-foreground/90 backdrop-blur-sm rounded-full transform rotate-45 scale-110 group-hover:rotate-90 transition-all duration-500" />
            
            {/* Outer ring - blueprint style */}
            <div className="absolute inset-0 border-2 border-accent/50 rounded-full group-hover:border-accent group-hover:scale-110 transition-all duration-500" />
            
            {/* Main button */}
            <div className="relative w-14 h-14 bg-gradient-to-br from-background to-secondary border-2 border-border rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-500">
              
              {/* Architectural grid lines */}
              <div className="absolute inset-3 border border-accent/30 rounded-full group-hover:border-accent/50 transition-all duration-500" />
              
              {/* Compass icon that rotates */}
              <div className="relative z-10 transform group-hover:rotate-180 transition-transform duration-700">
                <Compass className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              {/* Small arrow */}
              <ArrowUpToLine className="absolute -top-1 h-3 w-3 text-accent opacity-0 group-hover:opacity-100 group-hover:-top-2 transition-all duration-300" />
            </div>

            {/* Architectural elevation indicator */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-1 bg-background border border-border rounded-full px-3 py-1">
                <ArrowUp className="h-3 w-3 text-accent" />
                <span className="font-sans text-xs font-medium text-foreground">TOP</span>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;