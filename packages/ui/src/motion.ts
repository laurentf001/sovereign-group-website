export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export const imageScale = {
  initial: { scale: 1.02 },
  animate: { scale: 1 },
  transition: { duration: 1.2, ease: "easeOut" as const },
};
