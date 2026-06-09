import {
  businessUnits,
  impactContent,
  impactProgrammeImages,
  sovereignCapitalImages,
} from "@sovereign/content";
import {
  EditorialImageBreak,
  EditorialSplitHero,
  ProgrammeCard,
  ProseSection,
  SectionRule,
  SectionShell,
  SiloLogo,
  StatRow,
  TextLink,
} from "@sovereign/ui";
import Link from "next/link";

export function ImpactPage() {
  const unit = businessUnits.find((u) => u.slug === "impact")!;
  const images = sovereignCapitalImages.impact;
  const content = impactContent;

  return (
    <>
      <EditorialSplitHero
        headline={unit.name}
        subline={unit.proposition}
        imageSrc={images.hero.src!}
        imageAlt={images.hero.alt}
        minHeight="screen"
      >
        <div className="mb-8 flex justify-center lg:justify-start">
          <SiloLogo
            unitName={unit.name}
            shortName={unit.shortName}
            logoSrc={unit.logoSrc}
            size={80}
          />
        </div>
      </EditorialSplitHero>

      <SectionShell theme="dark" variant="statement">
        <p className="t-pullquote text-gold">{content.statement}</p>
      </SectionShell>

      <SectionShell theme="light">
        <StatRow stats={content.stats} />
      </SectionShell>

      <SectionShell theme="light" variant="fullBleed" className="!py-0">
        <div className="grid md:grid-cols-2">
          {content.programmes.map((programme) => (
            <div key={programme.slug} className="px-6 py-16 md:px-8 md:py-24">
              <ProgrammeCard
                name={programme.name}
                summary={programme.summary}
                imageSrc={impactProgrammeImages[programme.imageKey].src}
                imageAlt={impactProgrammeImages[programme.imageKey].alt}
              />
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell theme="dark" variant="fullBleed">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <SectionRule
            number="01"
            label={content.approach.label}
            theme="dark"
          />
          <h2 className="t-headline mb-16 max-w-[24ch] text-ivory">
            {content.approach.headline}
          </h2>
          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {content.approach.pillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-gold/30 pt-8">
                <h3 className="font-display text-xl text-ivory md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="t-body mt-4 text-steel">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {images.capabilities.src && (
        <EditorialImageBreak
          src={images.capabilities.src}
          alt={images.capabilities.alt}
          caption={images.capabilities.caption}
        />
      )}

      <SectionShell theme="light">
        <SectionRule number="02" label="CAPABILITIES" />
        <ProseSection paragraphs={unit.body} />
        <div className="mt-12 space-y-10">
          {unit.capabilities.map((cap) => (
            <div key={cap.number} className="border-t border-navy/10 pt-8">
              <span className="t-eyebrow text-bronze">{cap.number}</span>
              <h3 className="mt-3 font-display text-2xl text-navy">
                {cap.title}
              </h3>
              <p className="t-body mt-4 max-w-prose text-navy/70">{cap.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell theme="light">
        <p className="t-eyebrow text-bronze">Part of the Sovereign Capital Group</p>
        <div className="mt-8 flex flex-wrap gap-8">
          <TextLink href="/leadership">Get in touch</TextLink>
          <Link href="/" className="t-body text-navy hover:text-bronze">
            Back to group homepage →
          </Link>
        </div>
      </SectionShell>
    </>
  );
}
