import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { 
    name: "About", 
    path: "/about", 
    submenu: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about#team" },
    ]
  },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-brand-dark/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-3xl font-bold font-display tracking-tighter">
           STRAT<span className="text-brand-gold group-hover:text-white transition-colors">NOVA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link 
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-gold flex items-center gap-1",
                  location.pathname === link.path ? "text-brand-gold" : "text-white/80"
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown className="w-3 h-3 opacity-50" />}
              </Link>
              
              {/* Dropdown */}
              {link.submenu && (
                <AnimatePresence>
                  {activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-brand-card border border-white/10 rounded-xl overflow-hidden py-2"
                    >
                      {link.submenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Action */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:07083845690" 
            className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold hover:bg-white/5 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center p-2">
               <Phone className="w-3 h-3 text-brand-gold" />
            </div>
            07083845690
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-card border-b border-white/10 absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link 
                    to={link.path}
                    className="text-lg font-medium"
                    onClick={() => !link.submenu && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 flex flex-col gap-2 mt-1 border-l border-white/10">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="text-white/60 hover:text-brand-gold transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <hr className="border-white/10 my-2" />
              <a 
                href="tel:07083845690" 
                className="btn-gold w-full text-center"
              >
                Call Us: 07083845690
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
