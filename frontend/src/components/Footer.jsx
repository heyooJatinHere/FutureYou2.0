import { Link } from "wouter";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-dark-800 border-t border-indigo-200 border-opacity-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Socials */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-orbitron font-bold tracking-wider text-indigo-400 flex items-center mb-4">
              <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-sky-600">LOOMO</span>
            </Link>
            <p className="text-slate-300 mb-6">
              Discover who you'll become in the next decade with our AI-powered prediction technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-400 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-400 bg-opacity-20 flex items-center justify-center text-primary hover:bg-opacity-30 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-400 bg-opacity-20 flex items-center justify-center text-primary hover:bg-opacity-30 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rajdhani font-bold text-indigo-200 text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-indigo-400 transition">About</a></li>
              <li><a href="#how-it-works" className="text-slate-300 hover:text-indigo-400 transition">How It Works</a></li>
              <li><a href="#quiz" className="text-slate-300 hover:text-indigo-400 transition">Start Quiz</a></li>
              <li><a href="#" className="text-slate-300 hover:text-indigo-400 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-rajdhani font-bold text-indigo-200 text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition">Data Protection</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-indigo-400 border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-slate-300 text-sm">
            &copy; {new Date().getFullYear()} LOOMO - The Future Simulator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
