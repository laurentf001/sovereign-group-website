import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/brand/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "rgb(var(--color-navy-rgb) / <alpha-value>)",
        gold: "rgb(var(--color-gold-rgb) / <alpha-value>)",
        bronze: "rgb(var(--color-bronze-rgb) / <alpha-value>)",
        ivory: "rgb(var(--color-ivory-rgb) / <alpha-value>)",
        cream: "rgb(var(--color-cream-rgb) / <alpha-value>)",
        steel: "rgb(var(--color-steel-blue-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
