import Link from "next/link";
import { SovereignEmblem } from "@sovereign/brand";
import type { SiteVariant } from "./SovereignNav";

interface SovereignFooterProps {
  variant: SiteVariant;
}

const scFooterLinks = [
  { href: "/about", label: "About" },
  { href: "/developments", label: "Developments" },
  { href: "/living", label: "Senior Living" },
  { href: "/money", label: "Money" },
  { href: "/private-equity", label: "Private Equity" },
  { href: "/impact", label: "Impact" },
  { href: "/leadership", label: "Leadership" },
  {
    href: "https://retirement247.co.za",
    label: "Retirement 247",
    external: true,
  },
];

export function SovereignFooter({ variant }: SovereignFooterProps) {
  const year = new Date().getFullYear();

  if (variant === "retirement247") {
    return (
      <footer className="border-t border-ivory/10 bg-navy px-6 py-12 text-ivory md:px-8">
        <div className="mx-auto flex max-w-content flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-body text-sm lowercase text-ivory/80">
                retirement
              </span>
              <span className="font-display text-3xl">247</span>
            </div>
            <p className="t-caption mt-2">Strategy · Design · Marketing · Sales</p>
          </div>
          <div className="flex items-center gap-3">
            <SovereignEmblem monogram="S" size={32} variant="light" />
            <div>
              <p className="t-label text-steel">A Sovereign Capital Group company</p>
              <Link
                href="https://sovereigncapital.co.za"
                className="t-caption mt-1 block hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                sovereigncapital.co.za
              </Link>
            </div>
          </div>
        </div>
        <p className="t-caption mx-auto mt-10 max-w-content text-steel/70">
          © {year} Retirement 24Seven
        </p>
      </footer>
    );
  }

  return (
    <footer className="bg-navy px-6 py-20 text-ivory md:px-8 md:py-24">
      <div className="mx-auto flex max-w-content flex-col items-center text-center">
        <SovereignEmblem monogram="S" size={80} variant="light" />
        <div className="mt-8 h-px w-16 bg-gold/60" />
        <nav className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {scFooterLinks.map((link) => (
            <FooterLink key={link.href} {...link} />
          ))}
        </nav>
        <p className="t-eyebrow mt-10 text-steel">Western Cape · Mauritius</p>
        <p className="t-caption mt-4 text-steel/70">
          © {year} Sovereign Capital (Pty) Ltd
        </p>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "t-eyebrow text-[11px] tracking-[0.2em] text-steel transition-colors hover:text-gold";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
