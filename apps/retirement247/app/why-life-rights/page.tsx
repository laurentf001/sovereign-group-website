import type { Metadata } from "next";
import { retirement247Copy, retirement247Images } from "@sovereign/content";
import {
  EditorialImageBreak,
  ModelAccordion,
  PageHero,
  PullQuote,
  SectionRule,
  SectionShell,
  StatRow,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Why Life Rights",
  description:
    "Why the life rights model is structurally different — for asset owners, developers, and funds.",
};

export default function WhyLifeRightsPage() {
  const copy = retirement247Copy;

  return (
    <>
      <PageHero
        breadcrumb="Retirement 247 → Why Life Rights"
        headline={copy.opportunity.headline}
      />

      <EditorialImageBreak
        src={retirement247Images.careHands.src}
        alt={retirement247Images.careHands.alt}
        overlay="navy"
        aspect="wide"
      />

      <SectionShell theme="light">
        <StatRow stats={copy.opportunity.stats} />
      </SectionShell>

      <SectionShell theme="dark">
        <SectionRule number="01" label="THE MODEL" theme="dark" />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <PullQuote theme="dark">{copy.whyLifeRights.pullQuote}</PullQuote>
            <div className="mt-8 space-y-6">
              {copy.whyLifeRights.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="t-body text-steel">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {copy.whyLifeRights.returnStats.map((stat) => (
              <div key={stat.label}>
                <p className="t-stat text-ivory">{stat.value}</p>
                <p className="t-caption mt-3 text-steel">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <ModelAccordion
          assetOwnerTitle="For the Asset Owner"
          assetOwnerBullets={copy.whyLifeRights.assetOwnerBullets}
          residentTitle="For the Resident"
          residentBullets={copy.whyLifeRights.residentBullets}
        />
      </SectionShell>
    </>
  );
}
