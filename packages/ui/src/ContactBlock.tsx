interface ContactDetail {
  label: string;
  lines?: string[];
  name?: string;
  email?: string;
  url?: string;
  display?: string;
}

interface ContactBlockProps {
  pullQuote?: string;
  details?: ContactDetail[];
  ctaTitle?: string;
  ctaBody?: string;
  email?: string;
  theme?: "dark" | "light";
}

export function ContactBlock({
  pullQuote,
  details = [],
  ctaTitle,
  ctaBody,
  email,
  theme = "dark",
}: ContactBlockProps) {
  const quoteColor = theme === "dark" ? "text-ivory" : "text-navy";
  const labelColor = theme === "dark" ? "text-gold" : "text-bronze";
  const bodyColor = theme === "dark" ? "text-steel" : "text-navy/70";

  const hasSidebar = Boolean(pullQuote) || details.length > 0;
  const hasCta = Boolean(ctaTitle || ctaBody || email);

  const ctaContent = hasCta && (
    <div>
      {ctaTitle && (
        <h3 className={`font-display text-2xl md:text-[28px] ${quoteColor}`}>
          {ctaTitle}
        </h3>
      )}
      {ctaBody && (
        <p className={`t-body mt-4 max-w-prose ${bodyColor}`}>{ctaBody}</p>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="t-eyebrow mt-8 inline-block border-b border-gold pb-1 text-gold transition-opacity hover:opacity-80"
        >
          {email}
        </a>
      )}
    </div>
  );

  if (!hasSidebar) {
    return <div className="max-w-prose">{ctaContent}</div>;
  }

  return (
    <div className="grid gap-16 md:grid-cols-2 md:gap-24">
      <div>
        {pullQuote && <PullQuoteInline quote={pullQuote} className={quoteColor} />}
        {details.length > 0 && (
          <dl className={pullQuote ? "mt-10 space-y-6" : "space-y-6"}>
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className={`t-label ${labelColor}`}>{detail.label}</dt>
                <dd className={`t-body mt-2 ${bodyColor}`}>
                  {detail.lines?.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  {detail.name && <span className="block">{detail.name}</span>}
                  {detail.email && (
                    <a
                      href={`mailto:${detail.email}`}
                      className="block transition-colors hover:text-gold"
                    >
                      {detail.email}
                    </a>
                  )}
                  {detail.url && (
                    <a
                      href={detail.url}
                      className="block transition-colors hover:text-gold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {detail.display ?? detail.url}
                    </a>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
      {ctaContent}
    </div>
  );
}

function PullQuoteInline({
  quote,
  className,
}: {
  quote: string;
  className: string;
}) {
  return (
    <blockquote
      className={`border-l-2 border-gold pl-6 font-display text-xl italic leading-snug md:text-2xl ${className}`}
    >
      {quote}
    </blockquote>
  );
}

export function PageHero({
  label,
  headline,
  subline,
}: {
  label?: string;
  headline: string;
  subline?: string;
}) {
  return (
    <section className="grain-overlay flex min-h-[60vh] flex-col items-center justify-center bg-navy px-6 pt-24 text-center text-ivory md:px-8">
      <div className="mx-auto w-full max-w-content">
        {label && <p className="t-eyebrow mb-6 text-gold">{label}</p>}
        <h1 className="t-headline mx-auto max-w-[min(32ch,90vw)] text-balance">
          {headline}
        </h1>
        {subline && (
          <p className="t-body mx-auto mt-6 max-w-prose text-steel">{subline}</p>
        )}
      </div>
    </section>
  );
}

export function ProseSection({
  paragraphs,
  theme = "light",
  centered = false,
}: {
  paragraphs: string[];
  theme?: "dark" | "light";
  centered?: boolean;
}) {
  const color = theme === "dark" ? "text-steel" : "text-navy/75";
  return (
    <div className={`space-y-6 ${color} ${centered ? "t-prose" : ""}`}>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 40)} className={`t-body ${centered ? "" : "max-w-prose"}`}>
          {p}
        </p>
      ))}
    </div>
  );
}
