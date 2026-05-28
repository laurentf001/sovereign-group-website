import type { Metadata } from "next";
import {
  retirement247Copy,
  retirement247Images,
  retirement247Team,
} from "@sovereign/content";
import {
  CTABand,
  EditorialImageBreak,
  InnerPageHero,
  LeadershipList,
  SectionShell,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Team",
  description: "Decades of life rights experience. One focused mandate.",
};

export default function TeamPage() {
  const copy = retirement247Copy.team;
  const page = retirement247Copy.pages.team;

  return (
    <>
      <InnerPageHero
        eyebrow={page.eyebrow}
        headline={copy.headline}
        intro={page.intro}
        primaryCta={retirement247Copy.closingCta.primaryCta}
      />

      <EditorialImageBreak
        src={retirement247Images.communityJoy.src}
        alt={retirement247Images.communityJoy.alt}
        overlay="dark"
        aspect="wide"
      />

      <SectionShell theme="light">
        <LeadershipList leaders={retirement247Team} />
      </SectionShell>

      <CTABand
        headline={retirement247Copy.closingCta.headline}
        subline={retirement247Copy.closingCta.subline}
        primaryCta={retirement247Copy.closingCta.primaryCta}
        secondaryCta={{ label: "Explore our services", href: "/services" }}
      />
    </>
  );
}
