import type { Metadata } from "next";
import {
  retirement247Copy,
  retirement247Images,
  retirement247Services,
  servicesIntro,
} from "@sovereign/content";
import {
  EditorialImageBreak,
  PageHero,
  SectionShell,
  ServiceAccordion,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end life rights support — from value proposition development through to strategic exit.",
};

export default function ServicesPage() {
  const copy = retirement247Copy.services;

  return (
    <>
      <PageHero breadcrumb="Retirement 247 → Services" headline={copy.headline} />

      <EditorialImageBreak
        src={retirement247Images.friendsLaughing.src}
        alt={retirement247Images.friendsLaughing.alt}
        overlay="dark"
      />

      <SectionShell theme="light">
        <p className="t-body mb-12 max-w-[60ch] text-navy/75">{servicesIntro}</p>
        <ServiceAccordion services={retirement247Services} />
      </SectionShell>
    </>
  );
}
