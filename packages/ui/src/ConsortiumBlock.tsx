import type { ConsortiumEntity } from "@sovereign/content";

export function ConsortiumBlock({
  entities,
  layout = "horizontal",
}: {
  entities: ConsortiumEntity[];
  layout?: "horizontal" | "stacked";
}) {
  return (
    <div
      className={
        layout === "horizontal"
          ? "grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          : "space-y-8"
      }
    >
      {entities.map((entity) => (
        <div key={entity.name}>
          <h3 className="font-display text-xl text-ivory md:text-2xl">
            {entity.name}
          </h3>
          <p className="t-label mt-2 text-gold">{entity.role}</p>
          {entity.description && (
            <p className="t-body mt-4 text-steel">{entity.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function ConsortiumBlockLight({
  entities,
}: {
  entities: ConsortiumEntity[];
}) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {entities.map((entity) => (
        <div key={entity.name} className="border-t border-navy/15 pt-8">
          <h3 className="font-display text-xl text-navy">{entity.name}</h3>
          <p className="t-label mt-2 text-bronze">{entity.role}</p>
          <p className="t-body mt-4 text-navy/75">{entity.description}</p>
        </div>
      ))}
    </div>
  );
}
