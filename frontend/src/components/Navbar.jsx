import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import FuturisticButton from "./ui/FuturisticButton";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/90 backdrop-blur-md border-b border-indigo-400/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-orbitron font-bold tracking-wider text-indigo-300 flex items-center">
            <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-sky-600">LOOMO</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-indigo-200 p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-indigo-200 hover:text-indigo-400 font-rajdhani font-medium tracking-wide transition-colors">
            ABOUT
          </a>
          <a href="#how-it-works" className="text-indigo-200 hover:text-indigo-400 font-rajdhani font-medium tracking-wide transition-colors">
            HOW IT WORKS
          </a>
          {/* <a href="#quiz" className="px-6 py-2 bg-indigo-400 bg-opacity-20 border border-indigo-400 rounded-full text-indigo-50 hover:bg-opacity-30 transition font-rajdhani font-medium tracking-wide">
            START QUIZ
          </a> */}
          <FuturisticButton href="#quiz" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-blue-950 text-indigo-200 font-rajdhani font-medium tracking-wider text-lg shadow-lg">START QUIZ</FuturisticButton>

        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-dark-800 bg-opacity-90 backdrop-blur-lg border-t border-indigo-400/20 overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-center space-y-4">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-indigo-200 hover:text-indigo-400 font-rajdhani font-medium tracking-wide transition-colors py-2"
          >
            ABOUT
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-indigo-200 hover:text-indigo-400 font-rajdhani font-medium tracking-wide transition-colors py-2"
          >
            HOW IT WORKS
          </a>
          {/* <a
            href="#quiz"
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-2 bg-indigo-400 bg-opacity-20 border border-indigo-400 rounded-full text-indigo-50 hover:bg-opacity-30 transition font-rajdhani font-medium tracking-wide text-center "
          >
            START QUIZ
          </a> */}
          <FuturisticButton href="/quiz" onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-blue-950 text-indigo-200 font-rajdhani font-medium tracking-wider text-lg shadow-lg">START QUIZ</FuturisticButton>            
          
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
