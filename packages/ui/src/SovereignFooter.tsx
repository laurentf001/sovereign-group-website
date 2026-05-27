import Link from "next/link";
import { SovereignEmblem } from "@sovereign/brand";
import type { SiteVariant } from "./SovereignNav";

interface SovereignFooterProps {
  variant: SiteVariant;
}

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
    <footer className="border-t border-ivory/10 bg-navy px-6 py-12 text-ivory md:px-8">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-lg tracking-[0.15em]">
              SOVEREIGN <span className="text-gold">CAPITAL</span>
            </p>
            <p className="t-caption mt-2">
              Somerset West · Stellenbosch · Mauritius
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <FooterLink href="/about" label="About" />
            <FooterLink href="/consortium" label="Consortium" />
            <FooterLink href="/contact" label="Contact" />
            <FooterLink
              href="https://retirement247.co.za"
              label="Retirement 247"
              external
            />
          </div>
        </div>
        <p className="t-caption mt-10 text-steel/70">
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
  const className = "t-label text-steel transition-colors hover:text-gold";
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
