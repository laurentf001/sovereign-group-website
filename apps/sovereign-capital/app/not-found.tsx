import Link from "next/link";
import { SectionShell } from "@sovereign/ui";

export default function NotFound() {
  return (
    <SectionShell theme="light" className="min-h-[60vh] pt-32">
      <p className="t-label text-bronze">404</p>
      <h1 className="t-headline mt-4 text-navy">Page not found</h1>
      <p className="t-body mt-6 max-w-[50ch] text-navy/70">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="t-label mt-10 inline-block text-bronze transition-colors hover:text-navy"
      >
        Return to Sovereign Capital →
      </Link>
    </SectionShell>
  );
}
