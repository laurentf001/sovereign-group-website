import Link from "next/link";

interface CTABandProps {
  headline: string;
  subline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  theme?: "light" | "dark";
}

export function CTABand({
  headline,
  subline,
  primaryCta,
  secondaryCta,
  theme = "light",
}: CTABandProps) {
  const isDark = theme === "dark";

  return (
    <section className={`py-16 md:py-20 ${isDark ? "navy-surface" : "cream-surface"}`}
    >
      <div className="mx-auto max-w-content px-6 text-center md:px-8">
        <h2
          className={`t-headline mx-auto max-w-[24ch] ${isDark ? "text-ivory" : "text-navy"}`}
        >
          {headline}
        </h2>
        <p
          className={`t-body mx-auto mt-6 max-w-[52ch] ${isDark ? "text-steel" : "text-navy/75"}`}
        >
          {subline}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={`t-label inline-flex items-center px-6 py-3 transition-colors ${
              isDark
                ? "bg-ivory text-navy hover:bg-cream"
                : "bg-navy text-ivory hover:bg-navy/90"
            }`}
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className={`t-label inline-flex items-center border px-6 py-3 transition-colors ${
              isDark
                ? "border-ivory/30 text-ivory hover:border-gold hover:text-gold"
                : "border-navy/20 text-navy hover:border-gold hover:text-gold"
            }`}
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
