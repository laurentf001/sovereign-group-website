import {
  businessUnits,
} from "@sovereign/content";
import {
  HeroLockup,
  ProseSection,
  SectionRule,
  SectionShell,
} from "@sovereign/ui";
import Link from "next/link";

export function BusinessUnitPage({ slug }: { slug: string }) {
  const unit = businessUnits.find((u) => u.slug === slug);
  if (!unit) return null;

  return (
    <>
      <HeroLockup
        monogram={unit.monogram}
        minHeight="60vh"
        wordmark={
          <h1 className="t-wordmark text-ivory">{unit.name}</h1>
        }
        subline={unit.proposition}
        label={`Sovereign Capital → ${unit.name}`}
      />

      <SectionShell theme="light">
        <SectionRule number="01" label="THE PROPOSITION" />
        <ProseSection paragraphs={unit.body} />
        {unit.externalLink && (
          <a
            href={unit.externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="t-label mt-10 inline-block text-bronze hover:text-navy"
          >
            {unit.externalLink.label} →
          </a>
        )}
      </SectionShell>

      <SectionShell theme="dark">
        <SectionRule number="02" label="CAPABILITIES" theme="dark" />
        <div className="space-y-10">
          {unit.capabilities.map((cap) => (
            <div key={cap.number} className="border-t border-gold/20 pt-8">
              <span className="t-label text-gold">{cap.number}</span>
              <h3 className="mt-3 font-display text-2xl text-ivory">{cap.title}</h3>
              <p className="t-body mt-4 max-w-[60ch] text-steel">{cap.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell theme="light">
        <p className="t-label text-bronze">Part of the Sovereign Capital Group</p>
        <div className="mt-6 flex flex-wrap gap-8">
          {unit.externalLink && (
            <a
              href={unit.externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="t-body text-navy hover:text-bronze"
            >
              {unit.externalLink.label} →
            </a>
          )}
          <Link href="/consortium" className="t-body text-navy hover:text-bronze">
            View consortium →
          </Link>
          <Link href="/" className="t-body text-navy hover:text-bronze">
            Back to group homepage →
          </Link>
        </div>
      </SectionShell>
    </>
  );
}
