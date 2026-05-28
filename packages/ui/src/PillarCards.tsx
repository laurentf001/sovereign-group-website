interface Pillar {
  title: string;
  outcome: string;
  chips: string[];
}

interface PillarCardsProps {
  pillars: Pillar[];
}

export function PillarCards({ pillars }: PillarCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3 md:gap-8">
      {pillars.map((pillar) => (
        <article
          key={pillar.title}
          className="ivory-panel border-t-2 border-t-gold px-6 py-8 md:px-8"
        >
          <h3 className="font-display text-2xl text-navy">{pillar.title}</h3>
          <p className="t-body mt-4 text-navy/75">{pillar.outcome}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {pillar.chips.map((chip) => (
              <li
                key={chip}
                className="t-label border border-navy/10 px-3 py-1.5 text-navy/60"
              >
                {chip}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
