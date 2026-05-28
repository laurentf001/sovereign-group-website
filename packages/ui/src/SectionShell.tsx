"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type SectionTheme = "dark" | "light";

interface SectionShellProps {
  theme: SectionTheme;
  children: ReactNode;
  className?: string;
  id?: string;
  fullBleed?: boolean;
}

export function SectionShell({
  theme,
  children,
  className = "",
  id,
  fullBleed = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${theme === "dark" ? "navy-surface text-ivory" : "cream-surface text-navy"} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={fullBleed ? "w-full" : "mx-auto max-w-content px-6 md:px-8"}
      >
        {children}
      </motion.div>
    </section>
  );
}
