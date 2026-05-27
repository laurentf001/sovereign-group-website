import type { Metadata } from "next";
import {
  retirement247Contact,
  retirement247Copy,
  retirement247Images,
  rt247ConsortiumBlock,
} from "@sovereign/content";
import { SovereignEmblem } from "@sovereign/brand";
import {
  ContactBlock,
  EditorialImageBreak,
  PageHero,
  SectionShell,
} from "@sovereign/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Speak to Retirement 247 — life rights advisory and sales.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Retirement 247 → Contact"
        headline={retirement247Copy.contact.headline}
      />

      <EditorialImageBreak
        src={retirement247Images.careHands.src}
        alt={retirement247Images.careHands.alt}
        caption={retirement247Images.careHands.caption}
        overlay="navy"
        aspect="tall"
      />

      <SectionShell theme="light">
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
      </SectionShell>

      <SectionShell theme="dark">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="t-label text-gold">{rt247ConsortiumBlock.label}</p>
            <h2 className="t-headline mt-4 text-ivory">{rt247ConsortiumBlock.headline}</h2>
            <p className="t-body mt-6 max-w-[60ch] text-steel">{rt247ConsortiumBlock.body}</p>
          </div>
          <div className="border border-ivory/15 p-8">
            <p className="t-label mb-6 text-gold">The Sovereign Capital Consortium</p>
            <ul className="space-y-4">
              {rt247ConsortiumBlock.entities.map((entity) => (
                <li
                  key={entity.name}
                  className="flex justify-between border-b border-ivory/10 pb-4 last:border-0"
                >
                  <span className="font-display text-lg text-ivory">{entity.name}</span>
                  <span className="t-caption">{entity.role}</span>
                </li>
              ))}
            </ul>
            <Link
              href="https://sovereigncapital.co.za"
              className="t-label mt-8 inline-flex items-center gap-3 text-gold hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SovereignEmblem monogram="S" size={28} variant="light" />
              Visit Sovereign Capital
            </Link>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
