import type { Metadata } from "next";
import {
  sovereignCapitalCopy,
  sovereignCapitalLeadership,
} from "@sovereign/content";
import {
  LeadershipList,
  PageHero,
  SectionRule,
  SectionShell,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Leadership",
  description: "The principals behind the Sovereign Capital consortium.",
};

export default function LeadershipPage() {
  const copy = sovereignCapitalCopy.leadership;

  return (
    <>
      <PageHero breadcrumb="Sovereign Capital → Leadership" headline={copy.headline} />

      <SectionShell theme="light">
        <SectionRule number="01" label={copy.label} />
        <LeadershipList leaders={sovereignCapitalLeadership} />
      </SectionShell>
    </>
  );
}
