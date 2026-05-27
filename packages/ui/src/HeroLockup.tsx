"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { SovereignEmblem } from "@sovereign/brand";
import type { Monogram } from "@sovereign/brand";

interface HeroLockupProps {
  monogram?: Monogram;
  wordmark: ReactNode;
  headline?: ReactNode;
  subline?: string;
  label?: string;
  theme?: "dark";
  minHeight?: "screen" | "60vh";
  children?: ReactNode;
}

export function HeroLockup({
  monogram = "S",
  wordmark,
  headline,
  subline,
  label,
  theme = "dark",
  minHeight = "screen",
  children,
}: HeroLockupProps) {
  const heightClass = minHeight === "screen" ? "min-h-screen" : "min-h-[60vh]";

  return (
    <section
      className={`grain-overlay relative flex ${heightClass} flex-col items-center justify-center bg-navy px-6 pt-24 text-ivory md:px-8`}
    >
      <div className="mx-auto flex max-w-content flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SovereignEmblem monogram={monogram} size={120} variant={theme} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mt-8"
        >
          {wordmark}
        </motion.div>
        {headline && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-6 font-display text-3xl leading-tight md:text-[44px]"
          >
            {headline}
          </motion.div>
        )}
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            className="t-caption mt-8"
          >
            {label}
          </motion.p>
        )}
        {subline && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="t-body mt-6 max-w-[560px] text-steel"
          >
            {subline}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}

interface EditorialRowProps {
  number?: string;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
}

export function EditorialRow({
  number,
  title,
  description,
  href,
  external,
}: EditorialRowProps) {
  const content = (
    <div className="group border-b border-navy/10 py-8 transition-colors duration-200 hover:bg-ivory/50 md:py-10">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          {number && (
            <span className="t-label mb-3 block text-bronze">{number}</span>
          )}
          <h3 className="font-display text-2xl text-navy md:text-[28px]">
            {title}
          </h3>
          <p className="t-body mt-3 max-w-[60ch] text-navy/70">{description}</p>
        </div>
        {href && (
          <span className="mt-2 shrink-0 font-body text-gold transition-transform duration-200 group-hover:translate-x-1.5">
            →
          </span>
        )}
      </div>
      {href && (
        <span className="mt-4 block h-px w-0 bg-bronze transition-all duration-300 group-hover:w-full" />
      )}
    </div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
