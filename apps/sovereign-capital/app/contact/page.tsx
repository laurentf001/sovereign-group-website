import type { Metadata } from "next";
import { sovereignCapitalContact } from "@sovereign/content";
import { ContactBlock, PageHero, SectionShell } from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Conversations begin quietly — partner with Sovereign Capital.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Sovereign Capital → Contact"
        headline="Conversations begin quietly."
      />

      <SectionShell theme="light">
        <ContactBlock
          theme="light"
          pullQuote={sovereignCapitalContact.pullQuote}
          details={[
            {
              label: sovereignCapitalContact.address.label,
              lines: sovereignCapitalContact.address.lines,
            },
            {
              label: sovereignCapitalContact.managingDirector.label,
              name: sovereignCapitalContact.managingDirector.name,
              email: sovereignCapitalContact.managingDirector.email,
            },
            {
              label: sovereignCapitalContact.advisory.label,
              url: sovereignCapitalContact.advisory.url,
              display: sovereignCapitalContact.advisory.display,
            },
          ]}
          ctaTitle={sovereignCapitalContact.ctaTitle}
          ctaBody={sovereignCapitalContact.ctaBody}
          email={sovereignCapitalContact.managingDirector.email}
        />
      </SectionShell>
    </>
  );
}
