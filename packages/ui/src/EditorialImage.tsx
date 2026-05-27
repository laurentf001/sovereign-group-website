"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  overlay = "dark",
  aspect = "cinematic",
  priority = false,
  className = "",
}: EditorialImageBreakProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative w-full overflow-hidden ${className}`}
      aria-label={caption ?? alt}
    >
      <div className={`relative ${aspectClasses[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
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
    </motion.section>
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
  overlay = "dark",
  className = "",
}: EditorialImagePanelProps) {
  return (
    <div
      className={`relative min-h-[280px] overflow-hidden md:min-h-[420px] ${
        position === "left" ? "md:order-first" : ""
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center"
      />
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-30" />
    </div>
  );
}
