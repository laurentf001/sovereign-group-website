export const imagePromptKeys = {
  "home.hero.primary": true,
  "home.hero.interior": true,
  "developments.hero": true,
  "developments.panel": true,
  "living.hero": true,
  "living.panel": true,
  "living.spa": true,
  "money.hero": true,
  "money.panel": true,
  "private-equity.hero": true,
  "private-equity.panel": true,
  "impact.hero": true,
  "impact.craft": true,
  "impact.panel": true,
  "ferney.resort": true,
  "ferney.coastline": true,
  "ferney.villa": true,
  "about.geography": true,
  "leadership.study": true,
  "texture.limestone": true,
  "texture.gold-foil": true,
} as const;

export type ImagePromptKey = keyof typeof imagePromptKeys;

export interface SiloImageSlot {
  src?: string;
  alt: string;
  caption?: string;
  promptKey?: ImagePromptKey;
}

export interface SiloImages {
  hero: SiloImageSlot;
  proposition: SiloImageSlot;
  capabilities: SiloImageSlot;
}

/** Placeholder photography — replace with owned assets before launch. */
export const sovereignCapitalHomeImages = {
  hero: {
    src: "/images/hero-home.jpg",
    alt: "Coastal retirement estate at golden hour, Western Cape winelands",
    promptKey: "home.hero.primary",
  },
  editorial: {
    src: "/images/hero-home-interior.jpg",
    alt: "Grand entrance lobby of a boutique luxury retirement residence",
    caption: "Patient capital for the long horizon.",
    promptKey: "home.hero.interior",
  },
};

export const sovereignCapitalImages: Record<string, SiloImages> = {
  living: {
    hero: {
      src: "/images/living-hero.jpg",
      alt: "Serene courtyard garden of a luxury retirement village",
      caption: "Life rights development at institutional scale.",
      promptKey: "living.hero",
    },
    proposition: {
      src: "/images/living-panel.jpg",
      alt: "Elegant private dining room overlooking vineyards",
      caption: "From greenfield opportunity to fully occupied estate.",
      promptKey: "living.panel",
    },
    capabilities: {
      src: "/images/living-spa.jpg",
      alt: "Wellness spa interior in a luxury retirement village",
      caption: "Person-centred care with long-duration stewardship.",
      promptKey: "living.spa",
    },
  },
  developments: {
    hero: {
      src: "/images/developments-hero.jpg",
      alt: "Premium residential development under construction, Western Cape",
      caption: "Institutional-grade life rights development.",
      promptKey: "developments.hero",
    },
    proposition: {
      src: "/images/developments-panel.jpg",
      alt: "Architectural scale model of a luxury mixed-use development",
      caption: "The full value chain from land through to operations.",
      promptKey: "developments.panel",
    },
    capabilities: {
      src: "/images/developments-hero.jpg",
      alt: "Development site with Helderberg mountains in the distance",
      caption: "End-to-end oversight from feasibility to commissioning.",
      promptKey: "developments.hero",
    },
  },
  money: {
    hero: {
      src: "/images/money-hero.jpg",
      alt: "Cape Town foreshore financial district at dusk",
      caption: "Patient capital with institutional discipline.",
      promptKey: "money.hero",
    },
    proposition: {
      src: "/images/money-panel.jpg",
      alt: "Hand-signed document on cream paper with Montblanc pen",
      caption: "Bridging and mezzanine finance for the broader market.",
      promptKey: "money.panel",
    },
    capabilities: {
      src: "/images/money-panel.jpg",
      alt: "Structured finance documentation detail",
      caption: "Capital stack optimisation for complex mandates.",
      promptKey: "money.panel",
    },
  },
  "private-equity": {
    hero: {
      src: "/images/private-equity-hero.jpg",
      alt: "South African industrial and logistics infrastructure from above",
      caption: "Long-horizon capital for specialist property sectors.",
      promptKey: "private-equity.hero",
    },
    proposition: {
      src: "/images/private-equity-panel.jpg",
      alt: "Polished walnut boardroom overlooking a mountainous landscape",
      caption: "Patient capital aligned with generational asset horizons.",
      promptKey: "private-equity.panel",
    },
    capabilities: {
      src: "/images/private-equity-hero.jpg",
      alt: "Industrial facilities in the Western Cape fynbos landscape",
      caption: "Disciplined governance across multi-phase investments.",
      promptKey: "private-equity.hero",
    },
  },
  impact: {
    hero: {
      src: "/images/impact-hero.jpg",
      alt: "Community vegetable garden in early morning light, Western Cape",
      caption: "Commercial returns with genuine social impact.",
      promptKey: "impact.hero",
    },
    proposition: {
      src: "/images/impact-panel.jpg",
      alt: "Community hall with colourful murals, South African township",
      caption: "Beyond senior living into adjacent sectors.",
      promptKey: "impact.panel",
    },
    capabilities: {
      src: "/images/impact-craft.jpg",
      alt: "Hands working clay at a community craft workshop",
      caption: "Long-term commitment without preconditions.",
      promptKey: "impact.craft",
    },
  },
};

export const impactProgrammeImages = {
  pbsa: {
    src: "/images/impact-pbsa.jpg",
    alt: "Student accommodation and youth community",
  },
  groundUp: {
    src: "/images/impact-craft.jpg",
    alt: "Hands working clay at a community craft workshop",
    promptKey: "impact.craft" as const,
  },
};

export const ferneyImages = {
  resort: {
    src: "/images/ferney-resort.jpg",
    alt: "Luxury smart city resort in Mauritius overlooking the Indian Ocean",
    promptKey: "ferney.resort" as const,
  },
  coastline: {
    src: "/images/ferney-coastline.jpg",
    alt: "Aerial view of Mauritius eastern coastline and turquoise lagoon",
    promptKey: "ferney.coastline" as const,
  },
  villa: {
    src: "/images/ferney-villa.jpg",
    alt: "Premium Mauritius retirement villa with plunge pool and sea view",
    promptKey: "ferney.villa" as const,
  },
};

export const sovereignCapitalPageImages = {
  aboutGeography: {
    src: "/images/about-geography.jpg",
    alt: "Cape winelands estate with geometric vineyard rows from above",
    promptKey: "about.geography" as const,
  },
  leadershipStudy: {
    src: "/images/leadership-study.jpg",
    alt: "Light-filled study with bookshelves and leather wingback chair",
    promptKey: "leadership.study" as const,
  },
  contact: {
    src: "/images/contact-panel.jpg",
    alt: "Architectural detail, Western Cape offices",
  },
};

export const sovereignCapitalTextureImages = {
  limestone: {
    src: "/images/texture-limestone.jpg",
    alt: "Hand-laid limestone tile texture",
    promptKey: "texture.limestone" as const,
  },
  goldFoil: {
    src: "/images/texture-gold-foil.jpg",
    alt: "Champagne gold foil embossing on cream card stock",
    promptKey: "texture.gold-foil" as const,
  },
};
