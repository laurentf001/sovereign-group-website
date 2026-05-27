"use client";

import type { SectionTheme } from "./SectionShell";

interface SectionRuleProps {
  number: string;
  label: string;
  theme?: SectionTheme;
}

export function SectionRule({ number, label, theme = "light" }: SectionRuleProps) {
  const accent = theme === "dark" ? "text-gold" : "text-bronze";

  return (
    <div className="mb-8">
      <p className={`t-label mb-4 ${accent}`}>
        {number} — {label}
      </p>
      <div
        className={`h-px w-full origin-left ${theme === "dark" ? "bg-gold/40" : "bg-bronze/40"} gold-rule-animate`}
      />
    </div>
  );
}
