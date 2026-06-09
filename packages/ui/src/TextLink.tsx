import Link from "next/link";
import type { ReactNode } from "react";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

/** Editorial text CTA — no pill button chrome. */
export function TextLink({
  href,
  children,
  external,
  className = "",
}: TextLinkProps) {
  const linkClass = `group inline-flex items-center gap-2 t-eyebrow text-gold transition-colors hover:text-ivory ${className}`;

  const content = (
    <>
      <span className="border-b border-gold/60 pb-0.5 transition-colors group-hover:border-gold">
        {children}
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      {content}
    </Link>
  );
}
