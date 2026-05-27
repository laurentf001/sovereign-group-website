import type { EmblemVariant, Monogram } from "./tokens";

interface SovereignEmblemProps {
  monogram?: Monogram;
  size?: number;
  variant?: EmblemVariant;
  className?: string;
}

export function SovereignEmblem({
  monogram = "S",
  size = 80,
  variant = "dark",
  className = "",
}: SovereignEmblemProps) {
  const fillColor = variant === "dark" ? "#0C1D47" : "#F8F5EE";
  const ringColor = variant === "dark" ? "#C8A96E" : "#B09A6E";
  const textColor = variant === "dark" ? "#F0E8D0" : "#0C1D47";
  const fontSize = monogram === "247" ? size * 0.22 : monogram === "SLf" ? size * 0.18 : size * 0.28;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" fill={fillColor} />
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke={ringColor}
        strokeWidth="1.6"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={ringColor}
        strokeWidth="0.53"
        strokeOpacity="0.45"
        fill="none"
      />
      {/* Compass diamond ornaments N/E/S/W */}
      <path d="M50 4 L52 8 L50 12 L48 8 Z" fill={ringColor} opacity="0.7" />
      <path d="M96 50 L92 52 L88 50 L92 48 Z" fill={ringColor} opacity="0.7" />
      <path d="M50 96 L48 92 L50 88 L52 92 Z" fill={ringColor} opacity="0.7" />
      <path d="M4 50 L8 48 L12 50 L8 52 Z" fill={ringColor} opacity="0.7" />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontFamily="var(--font-cormorant, 'Cormorant Garamond', serif)"
        fontWeight="300"
        fontSize={fontSize}
      >
        {monogram}
      </text>
    </svg>
  );
}
