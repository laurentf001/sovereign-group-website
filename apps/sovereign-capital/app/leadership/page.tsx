import type { Metadata } from "next";
import {
  sovereignCapitalContact,
  sovereignCapitalCopy,
  sovereignCapitalLeadership,
} from "@sovereign/content";
import {
  ContactBlock,
  LeadershipList,
  PageHero,
  SectionRule,
  SectionShell,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Leadership & Contact",
  description: "Directors and contact details for Sovereign Capital.",
};

export default function LeadershipPage() {
  const copy = sovereignCapitalCopy.leadership;
  const contact = sovereignCapitalContact;

  return (
    <>
      <PageHero label={copy.label} headline={copy.headline} />

      <SectionShell theme="light">
        <LeadershipList leaders={sovereignCapitalLeadership} />
      </SectionShell>

      <SectionShell theme="dark" variant="fullBleed">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <SectionRule number="01" label="CONTACT" theme="dark" />
          <ContactBlock
            theme="dark"
            ctaTitle={contact.ctaTitle}
            ctaBody={contact.ctaBody}
            email={contact.director.email}
          />
        </div>
      </SectionShell>
    </>
  );
}
