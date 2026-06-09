import type { ReactNode } from "react";
import { EditorialImageFrame } from "./EditorialImageFrame";
import { TextLink } from "./TextLink";

interface EditorialSplitHeroCta {
  label: string;
  href: string;
  external?: boolean;
}

interface EditorialSplitHeroProps {
  eyebrow?: string;
  headline: ReactNode;
  subline?: string;
  imageSrc: string;
  imageAlt: string;
  cta?: EditorialSplitHeroCta;
  children?: ReactNode;
  minHeight?: "screen" | "tall";
  size?: "display" | "page";
}

export function EditorialSplitHero({
  eyebrow,
  headline,
  subline,
  imageSrc,
  imageAlt,
  cta,
  children,
  minHeight = "screen",
  size = "page",
}: EditorialSplitHeroProps) {
  const headlineClass =
    size === "display"
      ? "t-hero max-w-[14ch] text-ivory"
      : "t-headline max-w-[20ch] text-ivory lg:max-w-[16ch]";
  const heightClass = minHeight === "screen" ? "min-h-screen" : "min-h-[70vh]";

  return (
    <section
      className={`grain-overlay navy-surface relative flex ${heightClass} flex-col overflow-hidden pt-24`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[min(58vw,760px)] overflow-hidden lg:block"
      >
        <EditorialImageFrame
          src={imageSrc}
          alt=""
          priority
          sizes="58vw"
          frameClassName="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy from-0% via-navy/80 via-[25%] via-navy/45 via-[45%] to-transparent to-[90%]" />
        <div className="grain-overlay absolute inset-0 opacity-20" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-end px-6 pb-20 text-center md:px-10 lg:items-start lg:justify-center lg:pb-0 lg:pl-12 lg:text-left xl:pl-16">
        {children}

        {eyebrow && (
          <p className="t-eyebrow mb-8 flex items-center justify-center gap-4 text-steel lg:justify-start before:h-px before:w-8 before:bg-gold before:content-['']">
            {eyebrow}
          </p>
        )}

        <h1 className={headlineClass}>{headline}</h1>

        {subline && (
          <p className="t-body mx-auto mt-6 max-w-prose text-steel lg:mx-0">
            {subline}
          </p>
        )}

        {cta && (
          <div className="mt-10 flex justify-center lg:justify-start">
            <TextLink href={cta.href} external={cta.external}>
              {cta.label}
            </TextLink>
          </div>
        )}
      </div>

      <div className="relative z-0 mt-auto h-36 w-full shrink-0 overflow-hidden lg:hidden">
        <EditorialImageFrame
          src={imageSrc}
          alt={imageAlt}
          priority
          sizes="100vw"
          frameClassName="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/50 to-navy/20" />
        <div className="grain-overlay absolute inset-0 opacity-25" />
      </div>
    </section>
  );
}
