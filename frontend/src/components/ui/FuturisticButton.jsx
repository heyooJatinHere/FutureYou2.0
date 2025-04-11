import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const FuturisticButton = ({
  children,
  href,
  onClick,
  className,
  disabled = false,
}) => {
  const ButtonContent = (
    <motion.span
      className={cn(
        "relative inline-block overflow-hidden transition-all duration-300 hover:-translate-y-1",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      <span className="relative z-10 block">{children}</span>

      {/* Glow effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-950 opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: disabled ? 0 : 0.7 }}
        transition={{ duration: 0.5 }}
      />

      {/* Moving highlight effect */}
      <motion.span
        className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
        animate={{ x: ["0%", "200%"] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 0.5,
        }}
      />
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={cn("inline-block", disabled && "pointer-events-none")}
      >
        {ButtonContent}
      </a>
    );
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className="focus:outline-none"
    >
      {ButtonContent}
    </button>
  );
};

export default FuturisticButton;
