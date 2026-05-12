export const easeOutExpo = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const sectionFadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const fadeItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const pageTransitionTiming = {
  duration: 0.45,
  ease: easeOutExpo,
};

export const cardHover = {
  y: -6,
  scale: 1.01,
  transition: { duration: 0.22, ease: easeOutExpo },
};

export const iconHover = {
  y: -2,
  scale: 1.08,
  transition: { duration: 0.2, ease: easeOutExpo },
};

export const buttonHover = {
  scale: 1.03,
  transition: { duration: 0.2, ease: easeOutExpo },
};

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.12, ease: easeOutExpo },
};

export const floatingBlob = {
  animate: {
    y: [0, -14, 0],
    x: [0, 8, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
