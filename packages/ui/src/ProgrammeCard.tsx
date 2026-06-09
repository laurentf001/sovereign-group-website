import Image from "next/image";
import Link from "next/link";

interface ProgrammeCardProps {
  name: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

/** Minimal programme card — image, gold rule, name, one sentence. */
export function ProgrammeCard({
  name,
  summary,
  imageSrc,
  imageAlt,
  href,
}: ProgrammeCardProps) {
  const content = (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-navy/40" />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-30" />
      </div>
      <div className="mt-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
      <h3 className="mt-6 font-display text-2xl text-navy md:text-[28px]">
        {name}
      </h3>
      <p className="t-body mt-3 max-w-prose text-navy/70">{summary}</p>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
