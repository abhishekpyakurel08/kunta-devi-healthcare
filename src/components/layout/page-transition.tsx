"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, className = "", direction = "up" }: PageTransitionProps & { direction?: "up" | "down" | "left" | "right" }) {
  const directionVariants = {
    up: { hidden: { opacity: 0, y: 50 }, enter: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, enter: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 50 }, enter: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      variants={directionVariants[direction]}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className = "", delay = 0 }: PageTransitionProps & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className = "" }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
