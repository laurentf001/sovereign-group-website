import {
  retirement247Copy,
  retirement247Contact,
  retirement247Images,
  retirement247Services,
  rt247ConsortiumBlock,
  servicesIntro,
} from "@sovereign/content";
import { SovereignEmblem } from "@sovereign/brand";
import {
  ContactBlock,
  EditorialImageBreak,
  HeroLockup,
  PullQuote,
  SectionRule,
  SectionShell,
  ServiceAccordion,
  StatRow,
} from "@sovereign/ui";
import Link from "next/link";

export default function HomePage() {
  const copy = retirement247Copy;
  const images = retirement247Images;

  return (
    <>
      <HeroLockup
        monogram="247"
        wordmark={
          <div className="flex flex-col items-center">
            <span className="font-body text-sm lowercase tracking-wide text-ivory/80">
              retirement
            </span>
            <span className="font-display text-6xl leading-none md:text-7xl">
              247
            </span>
          </div>
        }
        headline={copy.hero.headline}
        label={copy.hero.subline}
        subline={copy.hero.intro}
      />

      <EditorialImageBreak
        src={images.careHands.src}
        alt={images.careHands.alt}
        caption={images.careHands.caption}
        overlay="navy"
        priority
      />

      <SectionShell theme="light">
        <SectionRule number="01" label={copy.opportunity.label} />
        <StatRow stats={copy.opportunity.stats} />
        <p className="t-body mt-12 max-w-[60ch] text-navy/75">
          {copy.opportunity.statement}
        </p>
      </SectionShell>

      <SectionShell theme="dark">
        <h2 className="t-headline mb-10 max-w-[24ch] text-ivory">
          {copy.opportunity.headline}
        </h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <PullQuote theme="dark">{copy.whyLifeRights.pullQuote}</PullQuote>
            <div className="mt-8 space-y-6">
              {copy.whyLifeRights.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="t-body text-steel">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {copy.whyLifeRights.returnStats.map((stat) => (
              <div key={stat.label}>
                <p className="t-stat text-ivory">{stat.value}</p>
                <p className="t-caption mt-3 text-steel">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <EditorialImageBreak
        src={images.communityJoy.src}
        alt={images.communityJoy.alt}
        caption={images.communityJoy.caption}
        overlay="dark"
      />

      <SectionShell theme="light">
        <SectionRule number="02" label={copy.services.label} />
        <h2 className="t-headline mb-4 text-navy">{copy.services.headline}</h2>
        <p className="t-body mb-10 max-w-[60ch] text-navy/75">{servicesIntro}</p>
        <ServiceAccordion services={retirement247Services} />
      </SectionShell>

      <EditorialImageBreak
        src={images.companionsWalking.src}
        alt={images.companionsWalking.alt}
        overlay="dark"
        aspect="wide"
      />

      <SectionShell theme="dark">
        <h2 className="t-headline mb-6 text-ivory">{copy.whoWeServe.headline}</h2>
        <p className="t-body mb-12 max-w-[60ch] text-steel">{copy.whoWeServe.intro}</p>
        <div className="grid gap-12 md:grid-cols-3">
          {copy.whoWeServe.audiences.map((audience) => (
            <div key={audience.title} className="border-t border-gold/30 pt-8">
              <h3 className="font-display text-2xl text-ivory">{audience.title}</h3>
              <p className="t-body mt-4 text-steel">{audience.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell theme="dark">
        <h2 className="t-headline mb-10 max-w-[24ch] text-ivory">
          {copy.contact.headline}
        </h2>
        <ContactBlock
          theme="dark"
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
          email={retirement247Contact.email}
        />
        <div className="mt-16 flex items-center gap-4 border-t border-ivory/10 pt-12">
          <SovereignEmblem monogram="S" size={32} variant="light" />
          <div>
            <p className="t-label text-steel">{rt247ConsortiumBlock.label}</p>
            <Link
              href="https://sovereigncapital.co.za"
              className="t-body text-ivory hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              sovereigncapital.co.za
            </Link>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
