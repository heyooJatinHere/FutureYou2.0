import { motion } from "framer-motion";
import FuturisticButton from "./ui/FuturisticButton";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id="hero">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0 ,y: 50}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-blue-500 to-sky-600 ">
            Shape Your Future
            </span>
            <br />
            <span className="text-shadow-lg/20 text-indigo-300">Today</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-rajdhani text-slate-200 mb-12 max-w-2xl mx-auto"
          >
            Loomo helps you make smarter choices for your health, career, and finances with personalized insights powered by AI. Plan your future with confidence and clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <FuturisticButton
              href="/quiz"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-400 to-blue-950 text-indigo-200 font-rajdhani font-bold tracking-wider text-lg shadow-lg"
            >
              START YOUR JOURNEY
            </FuturisticButton>

            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-full border border-light border-opacity-20 hover:border-opacity-50 transition text-indigo-200 font-rajdhani font-medium tracking-wider group"
            >
              LEARN MORE
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated Shape Bottom */}
      <div className="absolute -bottom-2 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 text-indigo-300"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,
            31,906.67,72,985.66,92.83c70.05,18.48,
            146.53,26.09,214.34,3V120H0V92.83C115.12,
            118.92,220.69,73.2,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
