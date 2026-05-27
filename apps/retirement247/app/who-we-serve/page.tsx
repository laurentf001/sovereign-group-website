import type { Metadata } from "next";
import { retirement247Copy, retirement247Images } from "@sovereign/content";
import {
  EditorialImagePanel,
  PageHero,
  SectionRule,
  SectionShell,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Landowners, developers, and funds — selective mandates for long-horizon life rights partners.",
};

export default function WhoWeServePage() {
  const copy = retirement247Copy.whoWeServe;

  return (
    <>
      <PageHero breadcrumb="Retirement 247 → Who We Serve" headline={copy.headline} />

      <SectionShell theme="light" fullBleed className="!py-0">
        <div className="grid md:grid-cols-2">
          <div className="mx-auto flex w-full max-w-content flex-col justify-center px-6 py-16 md:px-8 md:py-24">
            <SectionRule number="01" label={copy.label} />
            <p className="t-body mt-6 max-w-[50ch] text-navy/75">{copy.intro}</p>
          </div>
          <EditorialImagePanel
            src={retirement247Images.communityJoy.src}
            alt={retirement247Images.communityJoy.alt}
            overlay="dark"
          />
        </div>
      </SectionShell>

      <SectionShell theme="light">
        <div className="grid gap-12 md:grid-cols-3">
          {copy.audiences.map((audience) => (
            <div key={audience.title} className="border-t border-bronze/40 pt-8">
              <h3 className="font-display text-2xl text-navy">{audience.title}</h3>
              <p className="t-body mt-4 text-navy/75">{audience.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
