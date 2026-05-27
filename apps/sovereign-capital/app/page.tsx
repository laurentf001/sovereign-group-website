import {
  homepageBusinessUnits,
  sovereignCapitalConsortium,
  sovereignCapitalCopy,
  sovereignCapitalContact,
} from "@sovereign/content";
import {
  ConsortiumBlock,
  ContactBlock,
  EditorialRow,
  HeroLockup,
  PullQuote,
  SectionRule,
  SectionShell,
  StatRow,
} from "@sovereign/ui";

export default function HomePage() {
  const copy = sovereignCapitalCopy;

  return (
    <>
      <HeroLockup
        monogram="S"
        wordmark={
          <h1 className="t-wordmark text-ivory">Sovereign Capital</h1>
        }
        headline={
          <>
            {copy.hero.tagline[0]}
            <br />
            {copy.hero.tagline[1]}
          </>
        }
        label={copy.hero.locations}
      />

      <SectionShell theme="light">
        <StatRow stats={copy.stats} />
      </SectionShell>

      <SectionShell theme="dark" id="about">
        <SectionRule number="01" label={copy.whoWeAre.label} theme="dark" />
        <h2 className="t-headline mb-12 max-w-[24ch] text-ivory">
          {copy.whoWeAre.headline}
        </h2>
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div className="space-y-6">
            {copy.whoWeAre.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="t-body max-w-[60ch] text-steel">
                {p}
              </p>
            ))}
          </div>
          <div>
            <PullQuote theme="dark">{copy.whoWeAre.pullQuote}</PullQuote>
            <p className="t-body mt-8 max-w-[60ch] text-steel">
              {copy.whoWeAre.pullQuoteFollowUp}
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell theme="light">
        <SectionRule number="02" label={copy.businessUnits.label} />
        <h2 className="t-headline mb-4 text-navy">{copy.businessUnits.headline}</h2>
        <div className="mt-10">
          {homepageBusinessUnits.map((unit) => (
            <EditorialRow
              key={unit.slug}
              title={unit.name}
              description={unit.descriptor}
              href={`/${unit.slug}`}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell theme="dark">
        <SectionRule number="03" label={copy.consortium.label} theme="dark" />
        <h2 className="t-headline mb-12 max-w-[24ch] text-ivory">
          {copy.consortium.headline}
        </h2>
        <ConsortiumBlock entities={sovereignCapitalConsortium} />
      </SectionShell>

      <SectionShell theme="light">
        <ContactBlock
          theme="light"
          pullQuote={copy.contact.pullQuote}
          details={[
            {
              label: sovereignCapitalContact.address.label,
              lines: sovereignCapitalContact.address.lines,
            },
            {
              label: sovereignCapitalContact.managingDirector.label,
              name: sovereignCapitalContact.managingDirector.name,
              email: sovereignCapitalContact.managingDirector.email,
            },
          ]}
          ctaBody={sovereignCapitalContact.ctaBody}
          email={sovereignCapitalContact.managingDirector.email}
        />
      </SectionShell>
    </>
  );
}
