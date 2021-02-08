const easing = [0.6, -0.05, 0.1, 0.99];

export const containerAnimation = {
  initial: { opacity: 0, x: 200 },
  animate: {
    x: 0,
    opacity: 1,
    ease: easing
  },
  transition: {
    delay: 0.6
  }
};

export const layoutAnimation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
};
