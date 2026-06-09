import type { Metadata } from "next";
import {
  businessUnits,
  ferneyImages,
  sovereignCapitalCopy,
} from "@sovereign/content";
import {
  EditorialImageBreak,
  EditorialImagePanel,
  ProseSection,
  SectionRule,
  SectionShell,
} from "@sovereign/ui";
import { BusinessUnitPage } from "../_components/BusinessUnitPage";

const unit = businessUnits.find((u) => u.slug === "living")!;
const mauritius = sovereignCapitalCopy.about.geography.regions.find(
  (r) => r.name === "Mauritius",
)!;

export const metadata: Metadata = {
  title: unit.name,
  description: unit.proposition,
};

export default function LivingPage() {
  return (
    <>
      <BusinessUnitPage slug="living" />

      <EditorialImageBreak
        src={ferneyImages.resort.src}
        alt={ferneyImages.resort.alt}
        caption="Ferney Smart City · Mauritius' first life rights retirement village"
        aspect="wide"
      />

      <SectionShell theme="light" variant="fullBleed" className="!py-0">
        <div className="grid md:grid-cols-[0.55fr_0.45fr]">
          <div className="flex flex-col justify-center px-6 py-32 md:px-8 md:py-40 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))]">
            <SectionRule number="03" label="MAURITIUS MANDATE" />
            <h2 className="t-headline mb-8 max-w-[20ch] text-navy">
              Indian Ocean reaching
            </h2>
            <ProseSection paragraphs={[mauritius.body]} />
          </div>
          <EditorialImagePanel
            src={ferneyImages.villa.src}
            alt={ferneyImages.villa.alt}
            position="right"
            overlay="navy"
          />
        </div>
      </SectionShell>

      <EditorialImageBreak
        src={ferneyImages.coastline.src}
        alt={ferneyImages.coastline.alt}
        aspect="cinematic"
      />
    </>
  );
}
