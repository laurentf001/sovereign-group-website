export const colors = {
  navy: "#0C1D47",
  gold: "#C8A96E",
  bronze: "#B09A6E",
  ivory: "#F0E8D0",
  cream: "#F8F5EE",
  steelBlue: "#7A9ABE",
} as const;

export const typography = {
  wordmark: {
    fontWeight: 300,
    fontSize: "clamp(36px, 5vw, 52px)",
    lineHeight: 1,
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
  },
  headline: {
    fontWeight: 400,
    fontSize: "clamp(28px, 3.5vw, 44px)",
    lineHeight: 1.1,
  },
  subheading: {
    fontWeight: 600,
    fontSize: "clamp(10px, 1.1vw, 13px)",
    lineHeight: 1,
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
  },
  body: {
    fontWeight: 400,
    fontSize: "clamp(15px, 1.1vw, 17px)",
    lineHeight: 1.7,
  },
  label: {
    fontWeight: 500,
    fontSize: "11px",
    lineHeight: 1,
    letterSpacing: "0.4em",
    textTransform: "uppercase" as const,
  },
  caption: {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: 1.5,
  },
} as const;

export type Monogram = "S" | "SLf" | "247" | "LR";
export type EmblemVariant = "dark" | "light";
