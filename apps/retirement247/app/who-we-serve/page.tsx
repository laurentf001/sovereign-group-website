import type { Metadata } from "next";
import { retirement247Copy, retirement247Images } from "@sovereign/content";
import {
  AudienceCardGrid,
  CTABand,
  EditorialImageBreak,
  InnerPageHero,
  SectionShell,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Landowners, developers, and funds. Selective mandates for long-horizon life rights partners.",
};

export default function WhoWeServePage() {
  const copy = retirement247Copy.whoWeServe;
  const page = retirement247Copy.pages.whoWeServe;

  return (
    <>
      <InnerPageHero
        eyebrow={page.eyebrow}
        headline={copy.headline}
        intro={copy.intro}
        primaryCta={retirement247Copy.closingCta.primaryCta}
      />

      <SectionShell theme="light">
        <AudienceCardGrid audiences={copy.audiences} showHeader={false} />
      </SectionShell>

      <EditorialImageBreak
        src={retirement247Images.communityJoy.src}
        alt={retirement247Images.communityJoy.alt}
        caption={retirement247Images.communityJoy.caption}
        overlay="dark"
      />

      <CTABand
        headline={retirement247Copy.closingCta.headline}
        subline={retirement247Copy.closingCta.subline}
        primaryCta={retirement247Copy.closingCta.primaryCta}
        secondaryCta={retirement247Copy.closingCta.secondaryCta}
      />
    </>
  );
}
