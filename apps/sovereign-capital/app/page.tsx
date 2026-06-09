import {
  homepageBusinessUnits,
  sovereignCapitalCopy,
  sovereignCapitalHomeImages,
} from "@sovereign/content";
import {
  EditorialImageBreak,
  EditorialRow,
  EditorialSplitHero,
  PullQuote,
  SectionRule,
  SectionShell,
  StatRow,
} from "@sovereign/ui";

export default function HomePage() {
  const copy = sovereignCapitalCopy;
  const images = sovereignCapitalHomeImages;

  return (
    <>
      <EditorialSplitHero
        size="display"
        headline={
          <>
            {copy.hero.tagline[0]}
            <br />
            <em className="italic text-gold">{copy.hero.tagline[1]}</em>
          </>
        }
        imageSrc={images.hero.src}
        imageAlt={images.hero.alt}
        cta={{ label: "Explore our disciplines", href: "#group" }}
      />

      <SectionShell theme="light">
        <StatRow stats={copy.stats} />
      </SectionShell>

      <SectionShell theme="dark" id="about" variant="fullBleed">
        <div className="mx-auto grid max-w-content gap-16 px-6 md:grid-cols-[1.2fr_0.8fr] md:gap-20 md:px-8">
          <div>
            <SectionRule number="01" label={copy.whoWeAre.label} theme="dark" />
            <h2 className="t-headline mb-12 max-w-[20ch] text-ivory">
              {copy.whoWeAre.headline}
            </h2>
            <div className="space-y-6">
              {copy.whoWeAre.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="t-body max-w-prose text-steel">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <PullQuote theme="dark">{copy.whoWeAre.pullQuote}</PullQuote>
            <p className="t-body mt-8 max-w-prose text-steel">
              {copy.whoWeAre.pullQuoteFollowUp}
            </p>
          </div>
        </div>
      </SectionShell>

      <EditorialImageBreak
        src={images.editorial.src}
        alt={images.editorial.alt}
        caption={images.editorial.caption}
      />

      <SectionShell theme="light" id="group">
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

      <SectionShell theme="dark" variant="statement">
        <PullQuote theme="dark" size="display">
          {copy.whoWeAre.marketContext}
        </PullQuote>
      </SectionShell>
    </>
  );
}
