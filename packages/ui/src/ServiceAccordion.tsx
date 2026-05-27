"use client";

import { useState } from "react";
import type { Service } from "@sovereign/content";

export function ServiceAccordion({ services }: { services: Service[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-navy/10">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={service.number}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="group flex w-full items-start justify-between gap-6 py-8 text-left transition-colors duration-200 hover:bg-ivory md:py-10"
            >
              <div className="flex flex-1 gap-6">
                <span className="t-label shrink-0 text-bronze">{service.number}</span>
                <div>
                  <h3 className="font-display text-xl text-navy md:text-2xl">
                    {service.title}
                  </h3>
                  {!isOpen && (
                    <p className="t-body mt-2 max-w-[60ch] text-navy/70">
                      {service.summary}
                    </p>
                  )}
                </div>
              </div>
              <span
                className={`mt-1 shrink-0 text-bronze transition-transform duration-200 ${isOpen ? "rotate-90" : "group-hover:translate-x-1.5"}`}
              >
                →
              </span>
            </button>
            {isOpen && (
              <div className="pb-8 pl-12 pr-6 md:pl-16">
                <p className="t-body max-w-[60ch] text-navy/80">{service.body}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function ModelAccordion({
  assetOwnerTitle,
  assetOwnerBullets,
  residentTitle,
  residentBullets,
}: {
  assetOwnerTitle: string;
  assetOwnerBullets: string[];
  residentTitle: string;
  residentBullets: string[];
}) {
  const [openSection, setOpenSection] = useState<"owner" | "resident" | null>(
    null,
  );

  return (
    <div className="mt-12 space-y-4">
      {(
        [
          {
            id: "owner" as const,
            title: assetOwnerTitle,
            bullets: assetOwnerBullets,
          },
          {
            id: "resident" as const,
            title: residentTitle,
            bullets: residentBullets,
          },
        ] as const
      ).map(({ id, title, bullets }) => {
        const isOpen = openSection === id;
        return (
          <div key={id} className="border border-ivory/20">
            <button
              type="button"
              onClick={() => setOpenSection(isOpen ? null : id)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-display text-xl text-ivory">{title}</span>
              <span className="text-gold">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <ul className="space-y-0 border-t border-ivory/10 px-6 pb-6">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="t-body border-b border-ivory/10 py-4 text-steel last:border-0"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
