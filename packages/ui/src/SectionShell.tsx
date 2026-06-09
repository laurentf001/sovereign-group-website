import type { ReactNode } from "react";

export type SectionTheme = "dark" | "light";
export type SectionVariant = "contained" | "fullBleed" | "statement";

interface SectionShellProps {
  theme: SectionTheme;
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
  /** @deprecated Use variant="fullBleed" instead */
  fullBleed?: boolean;
}

export function SectionShell({
  theme,
  children,
  className = "",
  id,
  variant,
  fullBleed = false,
}: SectionShellProps) {
  const resolvedVariant = variant ?? (fullBleed ? "fullBleed" : "contained");

  const innerClass =
    resolvedVariant === "fullBleed"
      ? "w-full"
      : resolvedVariant === "statement"
        ? "mx-auto max-w-statement px-6 text-center md:px-8"
        : "mx-auto max-w-content px-6 md:px-8";

  return (
    <section
      id={id}
      className={`py-32 md:py-40 ${theme === "dark" ? "navy-surface text-ivory" : "cream-surface text-navy"} ${className}`}
    >
      <div className={innerClass}>{children}</div>
    </section>
  );
}
