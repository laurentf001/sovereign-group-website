import type { SectionTheme } from "./SectionShell";

interface SectionRuleProps {
  number: string;
  label: string;
  theme?: SectionTheme;
}

export function SectionRule({ number, label, theme = "light" }: SectionRuleProps) {
  const accent = theme === "dark" ? "text-gold" : "text-bronze";

  return (
    <div className="mb-10">
      <p className={`t-eyebrow mb-4 ${accent}`}>
        {number} · {label}
      </p>
      <div
        className={`h-px w-full ${theme === "dark" ? "bg-gold/40" : "bg-bronze/40"}`}
      />
    </div>
  );
}
