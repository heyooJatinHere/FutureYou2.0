import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const ProcessCard = forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-300/20",
        className
      )}
      whileHover={{ y: -5 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

ProcessCard.displayName = "ProcessCard";
