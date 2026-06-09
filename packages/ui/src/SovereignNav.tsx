"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SovereignEmblem } from "@sovereign/brand";

export type SiteVariant = "sovereign-capital" | "retirement247";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

const sovereignCapitalLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/developments", label: "Developments" },
  { href: "/living", label: "Senior Living" },
  { href: "/money", label: "Money" },
  { href: "/private-equity", label: "Private Equity" },
  { href: "/impact", label: "Impact" },
  { href: "/leadership", label: "Leadership" },
];

const retirement247Links: NavLink[] = [
  { href: "/why-life-rights", label: "Why Life Rights" },
  { href: "/services", label: "Services" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Speak to Us" },
];

interface SovereignNavProps {
  variant: SiteVariant;
}

export function SovereignNav({ variant }: SovereignNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links =
    variant === "sovereign-capital" ? sovereignCapitalLinks : retirement247Links;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSc = variant === "sovereign-capital";
  const navBg = scrolled
    ? isSc
      ? "border-b border-gold/30 bg-navy/90 backdrop-blur-sm"
      : "border-b border-ivory/10 navy-surface backdrop-blur-sm"
    : "bg-transparent";

  const navPadding = isSc ? "py-3" : "py-5";
  const scNavLinkClass =
    "group relative block text-center t-eyebrow text-[11px] leading-snug tracking-[0.2em] text-ivory transition-colors hover:text-gold";

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${navBg}`}
      >
        <nav
          className={`mx-auto flex max-w-content items-center gap-6 px-6 md:px-8 ${navPadding}`}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 text-ivory"
            onClick={() => setMobileOpen(false)}
          >
            <SovereignEmblem
              monogram={variant === "retirement247" ? "247" : "S"}
              size={variant === "retirement247" ? 36 : 40}
              variant="dark"
            />
            {variant === "sovereign-capital" ? (
              <span className="hidden font-display text-sm tracking-[0.2em] text-ivory sm:inline">
                SOVEREIGN CAPITAL
              </span>
            ) : (
              <span className="hidden items-baseline gap-1 text-ivory sm:flex">
                <span className="font-body text-xs lowercase tracking-wide text-ivory/90">
                  retirement
                </span>
                <span className="font-display text-2xl leading-none">247</span>
              </span>
            )}
          </Link>

          <ul className="hidden flex-1 flex-wrap items-center justify-end gap-x-5 gap-y-2 lg:flex xl:gap-x-7">
            {links.map((link, index) => {
              const isCta =
                variant === "retirement247" &&
                index === links.length - 1 &&
                link.href === "/contact";

              return (
                <li key={link.href} className="flex justify-center">
                  {isCta ? (
                    <Link
                      href={link.href}
                      className="t-label bg-ivory px-5 py-2.5 text-navy transition-colors hover:bg-cream"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <NavLinkItem
                      link={link}
                      className={isSc ? scNavLinkClass : navLinkClassName}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="t-label text-ivory lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-navy lg:hidden">
          <ul className="flex flex-col items-center gap-8">
            {links.map((link, index) => {
              const isCta =
                variant === "retirement247" &&
                index === links.length - 1 &&
                link.href === "/contact";

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      isCta
                        ? "t-label bg-ivory px-6 py-3 text-navy"
                        : "font-display text-[32px] text-ivory transition-colors hover:text-gold"
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

const navLinkClassName =
  "group relative t-label text-ivory transition-colors hover:text-gold";

function NavLinkItem({
  link,
  className,
}: {
  link: NavLink;
  className: string;
}) {
  const underline = (
    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.label}
        {underline}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
      {underline}
    </Link>
  );
}
