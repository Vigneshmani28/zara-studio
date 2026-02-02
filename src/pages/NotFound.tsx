import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, MapPin, ArrowRight, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md px-6 text-center">
        {/* Error Number with Architectural Simplicity */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border border-gray-300 dark:border-gray-700 rounded-full opacity-10"></div>
          </div>
          <h1 className="text-8xl font-light text-gray-800 dark:text-gray-200 tracking-tighter">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-gray-400" />
            <h2 className="text-2xl font-serif font-light text-gray-700 dark:text-gray-300">
              Page Not Found
            </h2>
          </div>

          <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            This space appears to be empty. The design you're looking for may
            have been moved or doesn't exist.
          </p>

          <div className="inline-flex items-center gap-2 text-sm text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
            <code className="font-mono">{location.pathname}</code>
          </div>
        </div>

        {/* Simple Grid Background */}
        <div className="absolute inset-0 pointer-events-none -z-10 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Primary Action */}
          <Button
            size="lg"
            className="group bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-8 py-6 rounded-none"
            asChild
          >
            <Link to="/" className="flex items-center justify-center gap-3">
              <Home className="w-5 h-5" />
              <span className="tracking-wide">Return Home</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

        {/* Alternative Options */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Explore our work instead:
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/projects"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline underline-offset-4"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline underline-offset-4"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline underline-offset-4"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
