import {
  businessUnits,
  sovereignCapitalImages,
  type SiloImageSlot,
} from "@sovereign/content";
import {
  EditorialImageBreak,
  EditorialImagePanel,
  EditorialSplitHero,
  ProseSection,
  SectionRule,
  SectionShell,
  SiloLogo,
  TextLink,
} from "@sovereign/ui";
import Link from "next/link";

function SiloImageBreak({ slot }: { slot: SiloImageSlot }) {
  if (!slot.src) return null;
  return (
    <EditorialImageBreak
      src={slot.src}
      alt={slot.alt}
      caption={slot.caption}
    />
  );
}

export function BusinessUnitPage({ slug }: { slug: string }) {
  const unit = businessUnits.find((u) => u.slug === slug);
  if (!unit) return null;

  const images = sovereignCapitalImages[slug];
  const heroImage = images?.hero;

  return (
    <>
      {heroImage?.src ? (
        <EditorialSplitHero
          headline={unit.name}
          subline={unit.proposition}
          imageSrc={heroImage.src}
          imageAlt={heroImage.alt}
          minHeight="tall"
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
      ) : (
        <section className="grain-overlay relative flex min-h-[70vh] flex-col items-center justify-center bg-navy px-6 pt-24 text-ivory md:px-8">
          <SiloLogo
            unitName={unit.name}
            shortName={unit.shortName}
            logoSrc={unit.logoSrc}
            size={120}
          />
          <h1 className="t-wordmark mt-8 text-ivory">{unit.name}</h1>
        </section>
      )}

      <SectionShell theme="light" variant="fullBleed" className="!py-0">
        <div className="grid md:grid-cols-[0.55fr_0.45fr]">
          <div className="flex flex-col justify-center px-6 py-32 md:px-8 md:py-40 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))]">
            <SectionRule number="01" label="THE PROPOSITION" />
            <p className="t-eyebrow mb-6 text-bronze">{unit.descriptor}</p>
            <ProseSection paragraphs={unit.body} />
            {unit.externalLink && (
              <div className="mt-10">
                <TextLink
                  href={unit.externalLink.href}
                  external
                >
                  {unit.externalLink.label}
                </TextLink>
              </div>
            )}
          </div>
          {images?.proposition.src && (
            <EditorialImagePanel
              src={images.proposition.src}
              alt={images.proposition.alt}
              position="right"
              overlay="navy"
            />
          )}
        </div>
      </SectionShell>

      {images && <SiloImageBreak slot={images.capabilities} />}

      <SectionShell theme="dark" variant="fullBleed">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <SectionRule number="02" label="CAPABILITIES" theme="dark" />
          <div className="space-y-12">
            {unit.capabilities.map((cap) => (
              <div key={cap.number} className="border-t border-gold/20 pt-10">
                <span className="t-eyebrow text-gold">{cap.number}</span>
                <h3 className="mt-4 font-display text-2xl text-ivory md:text-[32px]">
                  {cap.title}
                </h3>
                <p className="t-body mt-4 max-w-prose text-steel">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell theme="light">
        <p className="t-eyebrow text-bronze">Part of the Sovereign Capital Group</p>
        <div className="mt-8 flex flex-wrap gap-8">
          {unit.externalLink && (
            <TextLink href={unit.externalLink.href} external>
              {unit.externalLink.label}
            </TextLink>
          )}
          <Link href="/leadership" className="t-body text-navy hover:text-bronze">
            Get in touch →
          </Link>
          <Link href="/" className="t-body text-navy hover:text-bronze">
            Back to group homepage →
          </Link>
        </div>
      </SectionShell>
    </>
  );
}
