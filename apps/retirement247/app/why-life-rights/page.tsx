import type { Metadata } from "next";
import { retirement247Copy, retirement247Images } from "@sovereign/content";
import {
  CTABand,
  EditorialImageBreak,
  InnerPageHero,
  ModelAccordion,
  SectionShell,
  StatBand,
  WhyLifeRightsProof,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Why Life Rights",
  description:
    "Why the life rights model is structurally different, for asset owners, developers, and funds.",
};

export default function WhyLifeRightsPage() {
  const copy = retirement247Copy;
  const page = copy.pages.whyLifeRights;

  return (
    <>
      <InnerPageHero
        eyebrow={page.eyebrow}
        headline={copy.opportunity.headline}
        intro={page.intro}
        primaryCta={copy.closingCta.primaryCta}
      />

      <StatBand stats={copy.opportunity.stats} />

      <SectionShell theme="light">
        <WhyLifeRightsProof
          headline={copy.whyLifeRights.headline}
          pullQuote={copy.whyLifeRights.pullQuote}
          paragraphs={copy.whyLifeRights.paragraphs}
          returnStats={copy.whyLifeRights.returnStats}
          returnsPanelLabel={copy.whyLifeRights.returnsPanelLabel}
          ctaLabel={copy.whyLifeRights.ctaLabel}
          ctaHref={copy.whyLifeRights.ctaHref}
          showCta={false}
          showHeadline={false}
        />
      </SectionShell>

      <EditorialImageBreak
        src={retirement247Images.careHands.src}
        alt={retirement247Images.careHands.alt}
        caption={retirement247Images.careHands.caption}
        overlay="navy"
        aspect="wide"
      />

      <SectionShell theme="dark">
        <h2 className="t-headline mb-10 max-w-[24ch] text-ivory">
          {page.modelHeadline}
        </h2>
        <ModelAccordion
          assetOwnerTitle="For the Asset Owner"
          assetOwnerBullets={copy.whyLifeRights.assetOwnerBullets}
          residentTitle="For the Resident"
          residentBullets={copy.whyLifeRights.residentBullets}
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
