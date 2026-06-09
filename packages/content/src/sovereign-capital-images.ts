export interface SiloImageSlot {
  src?: string;
  alt: string;
  caption?: string;
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
    alt: "Luxury coastal residence at golden hour",
  },
  editorial: {
    src: "/images/editorial-landscape.jpg",
    alt: "Moody architectural landscape at dusk",
    caption: "Patient capital for the long horizon.",
  },
};

export const sovereignCapitalImages: Record<string, SiloImages> = {
  living: {
    hero: {
      src: "/images/living-hero.jpg",
      alt: "Wine estate landscape in the Western Cape",
      caption: "Life rights development at institutional scale.",
    },
    proposition: {
      src: "/images/living-panel.jpg",
      alt: "Premium residential architecture",
      caption: "From greenfield opportunity to fully occupied estate.",
    },
    capabilities: {
      src: "/images/living-hero.jpg",
      alt: "Senior living community environment",
      caption: "Person-centred care with long-duration stewardship.",
    },
  },
  developments: {
    hero: {
      src: "/images/developments-hero.jpg",
      alt: "Contemporary estate architecture",
      caption: "Institutional-grade life rights development.",
    },
    proposition: {
      src: "/images/developments-panel.jpg",
      alt: "Luxury residential interior and architecture",
      caption: "The full value chain from land through to operations.",
    },
    capabilities: {
      src: "/images/developments-hero.jpg",
      alt: "Development site and architectural detail",
      caption: "End-to-end oversight from feasibility to commissioning.",
    },
  },
  money: {
    hero: {
      src: "/images/money-hero.jpg",
      alt: "Coastal property at dusk",
      caption: "Patient capital with institutional discipline.",
    },
    proposition: {
      src: "/images/money-panel.jpg",
      alt: "Architectural detail and structured spaces",
      caption: "Bridging and mezzanine finance for the broader market.",
    },
    capabilities: {
      src: "/images/money-hero.jpg",
      alt: "Financial partnership context",
      caption: "Capital stack optimisation for complex mandates.",
    },
  },
  "private-equity": {
    hero: {
      src: "/images/private-equity-hero.jpg",
      alt: "Premium residential investment property",
      caption: "Long-horizon capital for specialist property sectors.",
    },
    proposition: {
      src: "/images/private-equity-panel.jpg",
      alt: "Urban architecture and institutional assets",
      caption: "Patient capital aligned with generational asset horizons.",
    },
    capabilities: {
      src: "/images/private-equity-hero.jpg",
      alt: "Portfolio and mandate management",
      caption: "Disciplined governance across multi-phase investments.",
    },
  },
  impact: {
    hero: {
      src: "/images/impact-hero.jpg",
      alt: "Mountain landscape, purpose-driven development",
      caption: "Commercial returns with genuine social impact.",
    },
    proposition: {
      src: "/images/impact-panel.jpg",
      alt: "Coastal community development",
      caption: "Beyond senior living into adjacent sectors.",
    },
    capabilities: {
      src: "/images/impact-hero.jpg",
      alt: "Community investment programmes",
      caption: "Long-term commitment without preconditions.",
    },
  },
};

export const impactProgrammeImages = {
  pbsa: {
    src: "/images/impact-pbsa.jpg",
    alt: "Student accommodation and youth community",
  },
  groundUp: {
    src: "/images/impact-groundup.jpg",
    alt: "Mentorship and community programme",
  },
};

export const sovereignCapitalPageImages = {
  aboutGeography: {
    src: "/images/about-geography.jpg",
    alt: "Western Cape landscape and Indian Ocean horizon",
  },
  contact: {
    src: "/images/contact-panel.jpg",
    alt: "Architectural detail, Western Cape offices",
  },
};
