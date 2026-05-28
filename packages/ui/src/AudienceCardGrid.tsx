import Link from "next/link";

interface Audience {
  title: string;
  quote: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

interface AudienceCardGridProps {
  headline?: string;
  intro?: string;
  audiences: Audience[];
  showHeader?: boolean;
}

export function AudienceCardGrid({
  headline,
  intro,
  audiences,
  showHeader = true,
}: AudienceCardGridProps) {
  return (
    <div>
      {showHeader && headline && (
        <h2 className="t-headline max-w-[20ch] text-navy">{headline}</h2>
      )}
      {showHeader && intro && (
        <p className="t-body mt-6 max-w-[60ch] text-navy/75">{intro}</p>
      )}

      <div className={`grid gap-8 md:grid-cols-3 ${showHeader ? "mt-12" : ""}`}>
        {audiences.map((audience) => (
          <article
            key={audience.title}
            className="flex flex-col border-t border-gold/40 pt-8"
          >
            <blockquote className="font-display text-xl italic leading-snug text-navy md:text-2xl">
              &ldquo;{audience.quote}&rdquo;
            </blockquote>
            <p className="t-label mt-6 text-bronze">{audience.title}</p>
            <p className="t-body mt-4 flex-1 text-navy/75">{audience.body}</p>
            <Link
              href={audience.ctaHref}
              className="t-label mt-8 inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
            >
              {audience.ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
