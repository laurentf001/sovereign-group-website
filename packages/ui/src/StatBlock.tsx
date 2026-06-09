interface StatBlockProps {
  value: string;
  label: string;
  theme?: "dark" | "light";
}

export function StatBlock({ value, label, theme = "light" }: StatBlockProps) {
  const valueColor = theme === "dark" ? "text-ivory" : "text-navy";
  const labelColor = theme === "dark" ? "text-steel" : "text-navy/60";

  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <span className={`t-stat ${valueColor}`}>{value}</span>
      <span className={`t-eyebrow mt-4 ${labelColor}`}>{label}</span>
    </div>
  );
}

export function StatRow({
  stats,
  theme = "light",
}: {
  stats: { value: string; label: string }[];
  theme?: "dark" | "light";
}) {
  return (
    <div className="grid grid-cols-2 gap-16 md:grid-cols-4 md:gap-12">
      {stats.map((stat) => (
        <StatBlock key={stat.label} {...stat} theme={theme} />
      ))}
    </div>
  );
}
