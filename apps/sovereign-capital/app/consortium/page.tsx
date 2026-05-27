import type { Metadata } from "next";
import {
  collaboratingPartners,
  consortiumIntro,
  consortiumQuote,
  sovereignCapitalConsortium,
} from "@sovereign/content";
import {
  ConsortiumBlock,
  ConsortiumBlockLight,
  PageHero,
  PullQuote,
  SectionRule,
  SectionShell,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Consortium",
  description:
    "Four entities. Institutional from the start — Sovereign Capital, Absolute Life, Retirement 24Seven, and Lombard Insurance.",
};

export default function ConsortiumPage() {
  return (
    <>
      <PageHero
        breadcrumb="Sovereign Capital → Consortium"
        headline="Four entities. Institutional from the start."
      />

      <SectionShell theme="light">
        <p className="t-body max-w-[60ch] text-navy/75">{consortiumIntro}</p>
      </SectionShell>

      <SectionShell theme="dark">
        <SectionRule number="01" label="SOVEREIGN CAPITAL GROUP" theme="dark" />
        <ConsortiumBlock entities={sovereignCapitalConsortium} />
      </SectionShell>

      <SectionShell theme="light">
        <SectionRule number="02" label="COLLABORATING PARTNERS" />
        <ConsortiumBlockLight entities={collaboratingPartners} />
        <PullQuote theme="light">
          <span className="text-base not-italic">{consortiumQuote}</span>
        </PullQuote>
      </SectionShell>
    </>
  );
}
