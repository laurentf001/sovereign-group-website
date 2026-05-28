import {
  retirement247Copy,
  retirement247Images,
  retirement247Services,
  servicesIntro,
} from "@sovereign/content";
import {
  AudienceCardGrid,
  CTABand,
  EditorialImageBreak,
  PillarCards,
  ProcessSteps,
  SectionShell,
  ServiceTileGrid,
  SplitHero,
  StatBand,
  WhyLifeRightsProof,
} from "@sovereign/ui";

export default function HomePage() {
  const copy = retirement247Copy;
  const images = retirement247Images;

  return (
    <>
      <SplitHero
        eyebrow={copy.hero.eyebrow}
        headline={copy.hero.headline}
        headlineEmphasis={copy.hero.headlineEmphasis}
        intro={copy.hero.intro}
        missionQuote={copy.hero.missionQuote}
        imageSrc={images.heroWater.src}
        imageAlt={images.heroWater.alt}
        primaryCta={copy.hero.primaryCta}
        secondaryCta={copy.hero.secondaryCta}
      />

      <StatBand stats={copy.opportunity.stats} />

      <SectionShell theme="light">
        <WhyLifeRightsProof
          headline={copy.whyLifeRights.headline}
          pullQuote={copy.whyLifeRights.pullQuote}
          paragraphs={copy.whyLifeRights.homepageParagraphs}
          returnStats={copy.whyLifeRights.returnStats}
          returnsPanelLabel={copy.whyLifeRights.returnsPanelLabel}
          ctaLabel={copy.whyLifeRights.ctaLabel}
          ctaHref={copy.whyLifeRights.ctaHref}
        />
      </SectionShell>

      <EditorialImageBreak
        src={images.editorialLeaves.src}
        alt={images.editorialLeaves.alt}
        caption={images.editorialLeaves.caption}
        overlay="dark"
      />

      <SectionShell theme="light">
        <PillarCards pillars={copy.commercialPillars} />
      </SectionShell>

      <ServiceTileGrid
        services={retirement247Services}
        headline={copy.services.headline}
        intro={servicesIntro}
      />

      <EditorialImageBreak
        src={images.companionsWalking.src}
        alt={images.companionsWalking.alt}
        overlay="dark"
        aspect="wide"
      />

      <SectionShell theme="light">
        <AudienceCardGrid
          headline={copy.whoWeServe.headline}
          intro={copy.whoWeServe.intro}
          audiences={copy.whoWeServe.audiences}
        />
      </SectionShell>

      <SectionShell theme="dark">
        <ProcessSteps
          headline={copy.processSteps.headline}
          steps={copy.processSteps.steps}
        />
      </SectionShell>

      <CTABand
        headline={copy.closingCta.headline}
        subline={copy.closingCta.subline}
        primaryCta={copy.closingCta.primaryCta}
        secondaryCta={copy.closingCta.secondaryCta}
      />
    </>
  );
}
