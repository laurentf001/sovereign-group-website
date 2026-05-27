import type { Metadata } from "next";
import {
  retirement247Copy,
  retirement247Images,
  retirement247Team,
} from "@sovereign/content";
import {
  EditorialImageBreak,
  LeadershipList,
  PageHero,
  SectionRule,
  SectionShell,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Team",
  description: "Decades of life rights experience. One focused mandate.",
};

export default function TeamPage() {
  const copy = retirement247Copy.team;

  return (
    <>
      <PageHero breadcrumb="Retirement 247 → Team" headline={copy.headline} />

      <EditorialImageBreak
        src={retirement247Images.friendsLaughing.src}
        alt={retirement247Images.friendsLaughing.alt}
        overlay="dark"
        aspect="wide"
      />

      <SectionShell theme="light">
        <SectionRule number="01" label={copy.label} />
        <LeadershipList leaders={retirement247Team} />
      </SectionShell>
    </>
  );
}
