import type { Metadata } from "next";
import {
  retirement247Copy,
  retirement247Images,
  retirement247Services,
  servicesIntro,
} from "@sovereign/content";
import {
  CTABand,
  EditorialImageBreak,
  InnerPageHero,
  PillarCards,
  ServiceTileGrid,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end life rights support, from value proposition development through to strategic exit.",
};

export default function ServicesPage() {
  const copy = retirement247Copy;
  const page = copy.pages.services;

  return (
    <>
      <InnerPageHero
        eyebrow={page.eyebrow}
        headline={copy.services.headline}
        intro={page.intro}
        primaryCta={copy.closingCta.primaryCta}
      />

      <EditorialImageBreak
        src={retirement247Images.heroWater.src}
        alt={retirement247Images.heroWater.alt}
        overlay="dark"
      />

      <section className="cream-surface py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <PillarCards pillars={copy.commercialPillars} />
        </div>
      </section>

      <ServiceTileGrid
        services={retirement247Services}
        headline="Every discipline. One operating partner."
        intro={servicesIntro}
      />

      <CTABand
        headline={copy.closingCta.headline}
        subline={copy.closingCta.subline}
        primaryCta={copy.closingCta.primaryCta}
        secondaryCta={copy.closingCta.secondaryCta}
      />
    </>
  );
}
