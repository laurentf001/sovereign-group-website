export interface ConsortiumEntity {
  name: string;
  role: string;
  description: string;
}

export const sovereignCapitalConsortium: ConsortiumEntity[] = [
  {
    name: "Sovereign Capital",
    role: "Holding Company · Consortium Lead",
    description:
      "Institutional governance, deal structuring, capital deployment, and bridging finance. The entity that partners encounter first and that holds the group together.",
  },
  {
    name: "Absolute Life",
    role: "Senior Living JV · Sovereign Capital & Lombard",
    description:
      "Insurance-backed operating platform jointly owned by Sovereign Capital and Lombard Insurance. Purpose-built to develop, fund, and manage senior living assets at institutional scale.",
  },
  {
    name: "Retirement 24Seven",
    role: "Life Rights Advisory · Sales",
    description:
      "Specialist life rights advisory and sales platform. Accepts mandates across all Sovereign Capital projects and from third-party developers, funds, and landowners.",
  },
  {
    name: "Lombard Insurance",
    role: "Sovereign Capital Partner · Insurance & Risk",
    description:
      "Established South African insurer and co-owner of Absolute Life. Lombard brings embedded insurance underwriting, structured risk solutions, and the regulatory credibility essential for a life rights operating platform.",
  },
];

export const collaboratingPartners: ConsortiumEntity[] = [
  {
    name: "Fedgroup",
    role: "Financial Collaborator · Retirement 24Seven · R30B AUM",
    description:
      "One of South Africa's most respected independent financial services groups. Fedgroup collaborates with Retirement 24Seven on selected life rights development projects — providing institutional-grade funding capacity, long-term capital commitment, and the financial stability required for large-scale phased developments.",
  },
];

export const consortiumIntro =
  "We do not assemble partners project by project. Our consortium is a standing, purpose-built structure with each entity contributing a distinct and essential capability. The result is institutional-grade governance with the agility of a specialist boutique.";

export const consortiumQuote =
  "Lombard's underwriting strength anchors the Sovereign Capital consortium. Fedgroup's capital capacity extends the reach of Retirement 24Seven into transactions that require institutional-grade financial partners alongside specialist advisory.";

export const rt247ConsortiumBlock = {
  label: "Part of the Sovereign Capital Group",
  headline: "Advisory is only part of what we bring.",
  body: "Retirement 24Seven operates as the specialist advisory and sales arm of the Sovereign Capital Group — a private capital consortium that also provides insurance-backed operating infrastructure through Absolute Life, and access to institutional finance through our collaboration with Fedgroup. For the right mandate, we are not just advisors. We are co-investors.",
  entities: [
    { name: "Sovereign Capital", role: "Holding Co · Finance" },
    { name: "Absolute Life", role: "Operating Platform" },
    { name: "Lombard Insurance", role: "Risk Partner" },
    { name: "Fedgroup", role: "Financial Collaborator" },
    { name: "Retirement 24Seven", role: "Advisory · Sales" },
  ],
};
