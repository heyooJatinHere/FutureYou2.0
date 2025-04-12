import { motion } from "framer-motion";
import { BrainCircuit, LineChart, MonitorSmartphone } from "lucide-react";
import { ProcessCard } from "./ui/ProcessCard";
import FuturisticButton from "./ui/FuturisticButton";

const features = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-emerald-500" />,
      title: "Smart AI Insights",
      description:
        "Using powerful language models, we analyze your responses to unlock meaningful predictions grounded in data and behavioral science."
    },
    {
      icon: <LineChart className="h-6 w-6 text-emerald-500" />,
      title: "Habit Decoder",
      description:
        "Your routines tell a story. We identify hidden patterns in your choices and highlight how they might influence your future self."
    },
    {
      icon: <MonitorSmartphone className="h-6 w-6 text-emerald-500" />,
      title: "Immersive Simulator",
      description:
        "Step into a simulation that brings your future to life — blending AI predictions with interactive storytelling and futuristic vibes."
    }
  ];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 relative z-[1]"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-blue-500 to-sky-600">
            About Future You
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProcessCard className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 rounded-full bg-indigo-200 bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-rajdhani font-bold text-indigo-400 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-center">
                  {feature.description}
                </p>
              </ProcessCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center relative z-[1]"
        >
          <p className="text-slate-300 max-w-3xl mx-auto mb-8">
          The Future You Simulator is designed to help you explore how your daily habits and decisions could shape your future. Combining insights from psychology, behavioral science, and AI, it offers a personalized and engaging way to visualize where you're headed.
          </p>
          <FuturisticButton href="#how-it-works" className="px-8 py-4 rounded-full inline-flex items-center transition-colors group text-indigo-200">
            <span className="mr-2">See how it works</span>
            <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </FuturisticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
