import type { Leader } from "@sovereign/content";

export function LeadershipRow({ leader }: { leader: Leader }) {
  return (
    <article className="border-t border-navy/15 py-10 md:py-12">
      <div className="flex gap-8">
        {/* Placeholder: initials monogram until photography available */}
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-bronze/40 bg-cream font-display text-lg text-navy"
          aria-hidden="true"
        >
          {leader.initials}
        </div>
        <div>
          <h3 className="font-display text-2xl text-navy md:text-[28px]">
            {leader.name}
          </h3>
          <p className="t-label mt-2 text-bronze">{leader.title}</p>
          <p className="t-body mt-5 max-w-[60ch] text-navy/75">{leader.bio}</p>
        </div>
      </div>
    </article>
  );
}

export function LeadershipList({ leaders }: { leaders: Leader[] }) {
  return (
    <div>
      {leaders.map((leader) => (
        <LeadershipRow key={leader.name} leader={leader} />
      ))}
    </div>
  );
}
