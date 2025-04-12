import { motion } from "framer-motion";
import { User, Cpu, Eye } from "lucide-react";
import { ProcessCard } from "./ui/ProcessCard";

const steps = [
  {
    number: 1,
    title: "Complete Personality Quiz",
    description:
      "Answer our scientifically designed questions about your habits, aspirations, and choices. This helps our AI understand your current trajectory.",
    icon: <User className="h-6 w-6 text-indigo-300" />,
  },
  {
    number: 2,
    title: "AI Analysis",
    description:
      "Our advanced algorithm processes your responses, comparing them with millions of data points to predict your most likely future outcomes.",
    icon: <Cpu className="h-6 w-6 text-indigo-300" />,
  },
  {
    number: 3,
    title: "Visualize Your Future",
    description:
      "Experience an immersive visualization of your future self, with detailed insights about potential career, health, relationships, and personal growth.",
    icon: <Eye className="h-6 w-6 text-indigo-300" />,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-shadow-glow text-indigo-400">
            How It Works
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our process is simple, yet powerful. Follow these steps to discover
            your future self.
          </p>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-300 bg-opacity-30 -ml-0.5 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10 mb-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-8"
                      : "md:pl-8 order-1 md:order-2"
                  } mb-8 md:mb-0`}
                >
                  <ProcessCard
                    className={`relative ${
                      index % 2 === 0
                        ? "md:ml-auto md:mr-0"
                        : "md:ml-0 md:mr-auto"
                    } max-w-sm`}
                  >
                    <div
                      className={`absolute top-1/2 ${
                        index % 2 === 0 ? "-right-4" : "-left-4"
                      } transform -translate-y-1/2 hidden md:block`}
                    >
                      <div className="w-8 h-8 rounded-full bg-indigo-300 flex items-center justify-center">
                        <span className="text-light font-bold">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-rajdhani font-bold text-indigo-200 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-300">{step.description}</p>
                  </ProcessCard>
                </div>

                {/* Icon - visible only on desktop */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "" : "order-2 md:order-1"
                  } hidden md:flex justify-center`}
                >
                  <div className="w-24 h-24 rounded-full bg-indigo-300/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Curved Divider */}
      <div className="absolute -bottom-2 left-0 w-full overflow-hidden leading-none ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 text-indigo-300 "
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default HowItWorksSection;
