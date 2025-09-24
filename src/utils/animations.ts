export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Enhanced animation utilities for the new homepage
export const chromaGlow = {
  boxShadow:
    "0 0 20px rgba(0, 123, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.2), 0 0 80px rgba(0, 123, 255, 0.1)",
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

// Enhanced chroma animations for premium feel
export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(0, 123, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.2)",
      "0 0 30px rgba(0, 123, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.3)",
      "0 0 20px rgba(0, 123, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.2)",
    ],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const shimmerEffect = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear",
  },
};