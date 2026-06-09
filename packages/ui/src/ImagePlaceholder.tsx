"use client";

import { motion } from "framer-motion";

type AspectRatio = "cinematic" | "wide" | "tall";

const aspectClasses: Record<AspectRatio, string> = {
  cinematic: "aspect-[21/9] md:aspect-[2.4/1]",
  wide: "aspect-[16/9] md:aspect-[2/1]",
  tall: "aspect-[4/5] md:aspect-[3/4]",
};

interface ImagePlaceholderProps {
  caption?: string;
  aspect?: AspectRatio;
  className?: string;
  label?: string;
}

/** Branded editorial placeholder until photography is available. */
export function ImagePlaceholder({
  caption,
  aspect = "cinematic",
  className = "",
  label = "Photography coming soon",
}: ImagePlaceholderProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative w-full overflow-hidden ${className}`}
      aria-label={caption ?? label}
    >
      <div
        className={`relative flex items-center justify-center bg-gradient-to-br from-navy via-navy/90 to-[#1a2f5c] ${aspectClasses[aspect]}`}
      >
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-40" />
        {!caption && (
          <div className="relative z-10 px-6 text-center">
            <p className="t-label text-gold/70">{label}</p>
          </div>
        )}
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

interface ImagePanelPlaceholderProps {
  caption?: string;
  className?: string;
  position?: "left" | "right";
  label?: string;
}

/** Side-panel placeholder for split editorial layouts. */
export function ImagePanelPlaceholder({
  caption,
  className = "",
  position = "right",
  label = "Photography coming soon",
}: ImagePanelPlaceholderProps) {
  return (
    <div
      className={`relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy/90 to-[#1a2f5c] md:min-h-full md:min-h-[520px] ${
        position === "left" ? "md:order-first" : ""
      } ${className}`}
      aria-label={caption ?? label}
    >
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative z-10 px-6 text-center">
        <p className="t-label text-gold/70">{label}</p>
        {caption && (
          <p className="mt-4 font-display text-lg text-ivory/80 md:text-xl">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
