import { motion } from "framer-motion";
import { User, Briefcase, Heart } from "lucide-react";
import FuturisticButton from "./ui/FuturisticButton";
import { ProcessCard } from "./ui/ProcessCard";

const quizCategories = [
  {
    icon: <User className="text-emerald-950" />,
    title: "Health & Lifestyle",
    description:
      "Your habits, fitness, diet, and sleep patterns",
  },
  {
    icon: <Briefcase className="text-emerald-950" />,
    title: "Career & Skills",
    description:
      "Your job goals, learning, and productivity.",
  },
  {
    icon: <Heart className="text-emerald-950" />,
    title: "Finance & Spending",
    description:
      "Your income, savings, and financial planning.",
  },
];

const QuizSection = () => {
  return (
    <section id="quiz" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto bg-dark-900 bg-opacity-50 rounded-2xl backdrop-blur-lg p-8 md:p-12 border border-indigo-300 border-opacity-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-blue-700">
              Start Your Future Journey
            </h2>
            <p className="text-slate-300">
              Answer our personality quiz to discover who you'll become in the next decade.
            </p>
          </div>

          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-rajdhani font-semibold text-indigo-300">
                Quiz Overview
              </h3>
              <span className="text-sm text-slate-300">Approximately 10 minutes</span>
            </div>

            {quizCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-4 last:mb-0"
              >
                <ProcessCard className="p-5 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 rounded-full bg-indigo-300 bg-opacity-20 flex items-center justify-center">
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-rajdhani font-semibold text-indigo-300 mb-1">
                        {category.title}
                      </h4>
                      <p className="text-sm text-slate-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </ProcessCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <FuturisticButton
              href="/quiz"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-300 to-blue-950 text-indigo-300 font-rajdhani font-bold tracking-wider text-lg shadow-lg"
            >
              BEGIN THE QUIZ
            </FuturisticButton>
            <p className="mt-4 text-sm text-slate-300">
              Your data is private and secure. We don't share your information with third parties.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;
