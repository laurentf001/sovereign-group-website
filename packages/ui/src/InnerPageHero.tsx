import Link from "next/link";

interface InnerPageHeroProps {
  eyebrow: string;
  headline: string;
  intro?: string;
  primaryCta?: { label: string; href: string };
}

export function InnerPageHero({
  eyebrow,
  headline,
  intro,
  primaryCta,
}: InnerPageHeroProps) {
  return (
    <section className="grain-overlay navy-surface relative pb-16 pt-28 md:pb-20 md:pt-32">
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none font-display text-[220px] leading-none text-ivory/[0.04] md:block lg:text-[360px]"
      >
        247
      </span>

      <div className="relative z-10 mx-auto max-w-content px-6 md:px-8">
        <p className="t-label mb-8 flex items-center gap-4 text-steel before:h-px before:w-8 before:bg-gold before:content-['']">
          {eyebrow}
        </p>
        <h1 className="t-headline max-w-[20ch] text-ivory md:text-[clamp(32px,4vw,52px)]">
          {headline}
        </h1>
        {intro && (
          <p className="t-body mt-8 max-w-[52ch] text-steel">{intro}</p>
        )}
        {primaryCta && (
          <Link
            href={primaryCta.href}
            className="t-label mt-10 inline-flex items-center bg-ivory px-6 py-3 text-navy transition-colors hover:bg-cream"
          >
            {primaryCta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
