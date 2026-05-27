import type { ReactNode } from "react";
import type { SectionTheme } from "./SectionShell";

interface PullQuoteProps {
  children: ReactNode;
  theme?: SectionTheme;
}

export function PullQuote({ children, theme = "light" }: PullQuoteProps) {
  const border = theme === "dark" ? "border-gold" : "border-bronze";
  const text = theme === "dark" ? "text-ivory" : "text-navy";

  return (
    <blockquote
      className={`border-l-2 ${border} pl-6 font-display text-xl italic leading-snug md:text-2xl ${text}`}
    >
      {children}
    </blockquote>
  );
}
