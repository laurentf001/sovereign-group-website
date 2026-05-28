"use client";

import { useState } from "react";
import type { Service } from "@sovereign/content";

interface ServiceTileGridProps {
  services: Service[];
  headline: string;
  intro: string;
  id?: string;
}

export function ServiceTileGrid({
  services,
  headline,
  intro,
  id = "services",
}: ServiceTileGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="navy-surface py-16 md:py-24">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="t-headline max-w-[18ch] text-ivory">{headline}</h2>
          <p className="t-body text-steel">{intro}</p>
        </div>

        <div className="grid gap-px bg-ivory/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={service.number}
                className={`bg-navy transition-colors duration-200 ${
                  isOpen ? "ring-1 ring-inset ring-gold/40" : ""
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${index}`}
                  id={`service-trigger-${index}`}
                  onClick={() => toggle(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(index);
                    }
                  }}
                  className={`group flex h-full w-full flex-col border border-ivory/10 p-6 text-left transition-colors duration-200 hover:bg-ivory/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold md:p-8 ${
                    isOpen ? "border-l-gold bg-ivory/[0.06]" : "hover:border-l-gold"
                  }`}
                >
                  <span className="t-label text-gold">{service.number}</span>
                  <h3 className="mt-4 font-display text-xl text-ivory md:text-2xl">
                    {service.title}
                  </h3>
                  <p
                    className={`t-body mt-3 text-steel ${isOpen ? "hidden" : "block"}`}
                  >
                    {service.summary}
                  </p>
                  <span
                    aria-hidden
                    className={`mt-auto pt-4 text-gold transition-transform duration-200 ${
                      isOpen ? "rotate-90" : "group-hover:translate-x-1"
                    }`}
                  >
                    →
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`service-panel-${index}`}
                    role="region"
                    aria-labelledby={`service-trigger-${index}`}
                    className="border-x border-b border-ivory/10 px-6 pb-6 md:px-8 md:pb-8"
                  >
                    <p className="t-body text-ivory/85">{service.body}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
