import { EditorialImageFrame } from "./EditorialImageFrame";

type OverlayTone = "dark" | "navy" | "none";
type AspectRatio = "cinematic" | "wide" | "tall";

const aspectClasses: Record<AspectRatio, string> = {
  cinematic: "aspect-[21/9] md:aspect-[2.4/1]",
  wide: "aspect-[16/9] md:aspect-[2/1]",
  tall: "aspect-[4/5] md:aspect-[3/4]",
};

const overlayClasses: Record<OverlayTone, string> = {
  dark: "bg-navy/55",
  navy: "bg-navy/70",
  none: "bg-transparent",
};

interface EditorialImageBreakProps {
  src: string;
  alt: string;
  caption?: string;
  overlay?: OverlayTone;
  aspect?: AspectRatio;
  priority?: boolean;
  className?: string;
}

/** Full-bleed editorial photograph between page sections. */
export function EditorialImageBreak({
  src,
  alt,
  caption,
  overlay = "navy",
  aspect = "cinematic",
  priority = false,
  className = "",
}: EditorialImageBreakProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      aria-label={caption ?? alt}
    >
      <div className={`relative overflow-hidden bg-navy ${aspectClasses[aspect]}`}>
        <EditorialImageFrame
          src={src}
          alt={alt}
          priority={priority}
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-40" />
        {caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent px-6 pb-8 pt-16 md:px-8 md:pb-10">
            <p className="mx-auto max-w-content font-display text-xl text-ivory md:text-2xl">
              {caption}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

interface EditorialImagePanelProps {
  src: string;
  alt: string;
  position?: "left" | "right";
  overlay?: OverlayTone;
  className?: string;
}

/** In-section image panel for editorial layouts beside copy. */
export function EditorialImagePanel({
  src,
  alt,
  position = "right",
  overlay = "navy",
  className = "",
}: EditorialImagePanelProps) {
  return (
    <div
      className={`relative min-h-[320px] overflow-hidden bg-navy md:min-h-full md:min-h-[520px] ${
        position === "left" ? "md:order-first" : ""
      } ${className}`}
    >
      <EditorialImageFrame
        src={src}
        alt={alt}
        sizes="(max-width: 768px) 100vw, 50vw"
        frameClassName="absolute inset-0 min-h-[320px] md:min-h-[520px]"
        className="object-cover object-center"
      />
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-30" />
    </div>
  );
}
