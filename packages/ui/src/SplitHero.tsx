"use client";

import Image from "next/image";
import Link from "next/link";

interface SplitHeroCta {
  label: string;
  href: string;
}

interface SplitHeroProps {
  eyebrow: string;
  headline: string;
  headlineEmphasis?: string;
  intro: string;
  missionQuote?: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta: SplitHeroCta;
  secondaryCta: SplitHeroCta;
}

export function SplitHero({
  eyebrow,
  headline,
  headlineEmphasis,
  intro,
  missionQuote,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
}: SplitHeroProps) {
  const headlineParts = headlineEmphasis
    ? headline.split(headlineEmphasis)
    : [headline];

  return (
    <section className="grain-overlay navy-surface relative flex min-h-screen flex-col overflow-hidden pt-24">
      <span
        aria-hidden
        className="pointer-events-none absolute right-[2%] top-[42%] z-[1] hidden -translate-y-1/2 select-none font-display text-[280px] leading-none text-ivory/[0.06] md:block lg:right-[4%] lg:text-[420px]"
      >
        247
      </span>

      {/* Desktop: water bleeds from the right edge, fading into navy toward centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[min(58vw,760px)] lg:block"
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="58vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy from-0% via-navy/92 via-[22%] via-navy/55 via-[38%] via-navy/20 via-[58%] to-transparent to-[92%]" />
        <div className="grain-overlay absolute inset-0 opacity-15" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 py-16 md:px-10 lg:py-24 lg:pl-12 xl:pl-16">
        <p className="t-label mb-8 flex items-center gap-4 text-steel before:h-px before:w-8 before:bg-gold before:content-['']">
          {eyebrow}
        </p>

        <h1 className="t-headline max-w-[16ch] text-ivory md:text-[clamp(36px,4.5vw,56px)]">
          {headlineParts.length > 1 ? (
            <>
              {headlineParts[0]}
              <em className="italic text-gold">{headlineEmphasis}</em>
              {headlineParts[1]}
            </>
          ) : (
            headline
          )}
        </h1>

        <p className="t-body mt-8 max-w-[48ch] text-steel">{intro}</p>

        {missionQuote && (
          <blockquote className="mt-8 max-w-[48ch] border-l border-gold/50 pl-5 font-display text-lg italic leading-snug text-ivory/90 md:text-xl">
            {missionQuote}
          </blockquote>
        )}

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={primaryCta.href}
            className="t-label inline-flex items-center bg-ivory px-6 py-3 text-navy transition-colors hover:bg-cream"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="t-label inline-flex items-center border border-ivory/30 px-6 py-3 text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>

      {/* Mobile: thin water band along the bottom of the hero */}
      <div className="relative z-0 mt-auto h-28 w-full shrink-0 sm:h-36 lg:hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/40 to-navy/10" />
        <div className="grain-overlay absolute inset-0 opacity-25" />
      </div>
    </section>
  );
}
