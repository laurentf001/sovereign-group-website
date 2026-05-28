interface StatBandProps {
  stats: { value: string; label: string }[];
}

export function StatBand({ stats }: StatBandProps) {
  return (
    <section
      aria-label="Market statistics"
      className="border-y border-ivory/10 navy-surface py-10 md:py-12"
    >
      <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-6 md:grid-cols-4 md:gap-0 md:px-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-2 md:px-8 ${
              index > 0 ? "md:border-l md:border-ivory/10" : ""
            } ${index >= 2 ? "md:mt-0" : ""}`}
          >
            <span className="font-display text-3xl text-ivory md:text-4xl">
              {stat.value}
            </span>
            <span className="t-label text-steel">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
