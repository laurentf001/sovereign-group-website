import Image from "next/image";

interface SiloLogoProps {
  unitName: string;
  shortName: string;
  logoSrc?: string;
  size?: number;
  className?: string;
}

/** Silo brand logo — renders placeholder until logoSrc is provided. */
export function SiloLogo({
  unitName,
  shortName,
  logoSrc,
  size = 120,
  className = "",
}: SiloLogoProps) {
  if (logoSrc) {
    return (
      <div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={logoSrc}
          alt={`${unitName} logo`}
          fill
          className="object-contain"
          sizes={`${size}px`}
          priority
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center border border-ivory/25 bg-navy/40 ${className}`}
      style={{ width: size, height: size }}
      aria-label={`${unitName} logo placeholder`}
    >
      <span className="font-display text-3xl tracking-wider text-ivory">
        {shortName}
      </span>
      <span className="t-caption mt-2 text-steel">Logo coming soon</span>
    </div>
  );
}
