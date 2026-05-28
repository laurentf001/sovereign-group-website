import type { Metadata } from "next";
import {
  retirement247Contact,
  retirement247Copy,
  retirement247Images,
  rt247ConsortiumBlock,
} from "@sovereign/content";
import {
  ConsortiumPanel,
  ContactBlock,
  EditorialImagePanel,
  InnerPageHero,
  SectionShell,
} from "@sovereign/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Speak to Retirement 247 about life rights advisory and sales.",
};

export default function ContactPage() {
  const page = retirement247Copy.pages.contact;

  return (
    <>
      <InnerPageHero
        eyebrow={page.eyebrow}
        headline={retirement247Copy.contact.headline}
        intro={page.intro}
      />

      <SectionShell theme="light" fullBleed className="!py-0">
        <div className="grid md:grid-cols-2">
          <div className="mx-auto flex w-full max-w-content flex-col justify-center px-6 py-16 md:px-8 md:py-24">
            <ContactBlock
              theme="light"
              pullQuote={retirement247Contact.pullQuote}
              details={[
                {
                  label: "Advisory Enquiries",
                  email: retirement247Contact.email,
                },
                {
                  label: retirement247Contact.office.label,
                  lines: retirement247Contact.office.lines,
                },
                {
                  label: retirement247Contact.director.label,
                  name: retirement247Contact.director.name,
                },
              ]}
              ctaTitle={retirement247Contact.ctaTitle}
              ctaBody={retirement247Contact.ctaBody}
              email={retirement247Contact.email}
            />
          </div>
          <EditorialImagePanel
            src={retirement247Images.careHands.src}
            alt={retirement247Images.careHands.alt}
            overlay="navy"
          />
        </div>
      </SectionShell>

      <SectionShell theme="dark">
        <ConsortiumPanel
          label={rt247ConsortiumBlock.label}
          headline={rt247ConsortiumBlock.headline}
          body={rt247ConsortiumBlock.body}
          entities={rt247ConsortiumBlock.entities}
        />
      </SectionShell>
    </>
  );
}
