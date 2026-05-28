import Link from "next/link";
import { SovereignEmblem } from "@sovereign/brand";

interface ConsortiumEntity {
  name: string;
  role: string;
}

interface ConsortiumPanelProps {
  label: string;
  headline: string;
  body: string;
  entities: ConsortiumEntity[];
  groupUrl?: string;
  groupLinkLabel?: string;
}

export function ConsortiumPanel({
  label,
  headline,
  body,
  entities,
  groupUrl = "https://sovereigncapital.co.za",
  groupLinkLabel = "Visit Sovereign Capital",
}: ConsortiumPanelProps) {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      <div>
        <p className="t-label text-gold">{label}</p>
        <h2 className="t-headline mt-4 text-ivory">{headline}</h2>
        <p className="t-body mt-6 max-w-[60ch] text-steel">{body}</p>
      </div>
      <div className="border border-ivory/15 p-8">
        <p className="t-label mb-6 text-gold">The Sovereign Capital Consortium</p>
        <ul className="space-y-4">
          {entities.map((entity) => (
            <li
              key={entity.name}
              className="flex justify-between gap-4 border-b border-ivory/10 pb-4 last:border-0"
            >
              <span className="font-display text-lg text-ivory">{entity.name}</span>
              <span className="t-caption shrink-0 text-right">{entity.role}</span>
            </li>
          ))}
        </ul>
        <Link
          href={groupUrl}
          className="t-label mt-8 inline-flex items-center gap-3 text-gold transition-opacity hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SovereignEmblem monogram="S" size={28} variant="light" />
          {groupLinkLabel}
        </Link>
      </div>
    </div>
  );
}
