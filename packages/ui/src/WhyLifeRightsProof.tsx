import Link from "next/link";
import { PullQuote } from "./PullQuote";

interface WhyLifeRightsProofProps {
  headline: string;
  pullQuote: string;
  paragraphs: string[];
  returnStats: { value: string; label: string }[];
  returnsPanelLabel: string;
  ctaLabel: string;
  ctaHref: string;
  showCta?: boolean;
  showHeadline?: boolean;
}

export function WhyLifeRightsProof({
  headline,
  pullQuote,
  paragraphs,
  returnStats,
  returnsPanelLabel,
  ctaLabel,
  ctaHref,
  showCta = true,
  showHeadline = true,
}: WhyLifeRightsProofProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        {showHeadline && (
          <h2 className="t-headline max-w-[20ch] text-navy">{headline}</h2>
        )}
        <div className={showHeadline ? "mt-10" : ""}>
          <PullQuote theme="light">{pullQuote}</PullQuote>
        </div>
        <div className="mt-8 space-y-6">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="t-body text-navy/75">
              {p}
            </p>
          ))}
        </div>
        {showCta && (
          <Link
            href={ctaHref}
            className="t-label mt-10 inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        )}
      </div>

      <aside className="ivory-panel border-l-2 border-l-gold px-8 py-10 md:px-10">
        <p className="t-label text-bronze">{returnsPanelLabel}</p>
        <dl className="mt-8 space-y-0">
          {returnStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-5 ${index < returnStats.length - 1 ? "border-b border-navy/10" : ""}`}
            >
              <dt className="font-display text-3xl text-navy">{stat.value}</dt>
              <dd className="t-caption mt-2 text-navy/60">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}
