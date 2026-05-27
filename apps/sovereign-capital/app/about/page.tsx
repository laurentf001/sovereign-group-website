import type { Metadata } from "next";
import {
  businessUnits,
  sovereignCapitalCopy,
} from "@sovereign/content";
import {
  EditorialRow,
  PageHero,
  ProseSection,
  PullQuote,
  SectionRule,
  SectionShell,
} from "@sovereign/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Group identity, structure, and philosophy — a private capital group built for the long horizon.",
};

export default function AboutPage() {
  const copy = sovereignCapitalCopy;

  return (
    <>
      <PageHero
        breadcrumb="Sovereign Capital → About"
        headline={copy.about.headline}
      />

      <SectionShell theme="light">
        <SectionRule number="01" label="WHO WE ARE" />
        <h2 className="t-headline mb-10 text-navy">{copy.whoWeAre.headline}</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <ProseSection paragraphs={copy.whoWeAre.paragraphs} />
          <div>
            <PullQuote theme="light">{copy.whoWeAre.pullQuote}</PullQuote>
            <p className="t-body mt-8 max-w-[60ch] text-navy/75">
              {copy.whoWeAre.marketContext}
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell theme="dark">
        <SectionRule number="02" label={copy.about.geography.label} theme="dark" />
        <h2 className="t-headline mb-12 text-ivory">{copy.about.geography.headline}</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {copy.about.geography.regions.map((region) => (
            <div key={region.name} className="border-t border-gold/30 pt-8">
              <h3 className="font-display text-2xl text-ivory">{region.name}</h3>
              <p className="t-body mt-4 text-steel">{region.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell theme="light">
        <h2 className="t-headline mb-8 text-navy">The Group</h2>
        <div>
          {businessUnits.map((unit) => (
            <EditorialRow
              key={unit.slug}
              title={unit.name}
              description={unit.proposition}
              href={`/${unit.slug}`}
            />
          ))}
        </div>
        <Link
          href="/consortium"
          className="t-label mt-10 inline-block text-bronze hover:text-navy"
        >
          View consortium →
        </Link>
      </SectionShell>
    </>
  );
}
