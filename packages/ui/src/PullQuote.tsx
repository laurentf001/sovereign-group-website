import type { ReactNode } from "react";
import type { SectionTheme } from "./SectionShell";

interface PullQuoteProps {
  children: ReactNode;
  theme?: SectionTheme;
  size?: "default" | "display";
}

export function PullQuote({
  children,
  theme = "light",
  size = "default",
}: PullQuoteProps) {
  const border = theme === "dark" ? "border-gold" : "border-bronze";
  const text = theme === "dark" ? "text-ivory" : "text-navy";

  if (size === "display") {
    return (
      <blockquote className={`t-pullquote text-center ${text}`}>
        {children}
      </blockquote>
    );
  }

  return (
    <blockquote
      className={`border-l-2 ${border} pl-6 font-display text-xl italic leading-snug md:text-2xl ${text}`}
    >
      {children}
    </blockquote>
  );
}
