export interface BusinessUnit {
  slug: string;
  name: string;
  monogram: "SLf" | "S";
  proposition: string;
  descriptor: string;
  body: string[];
  capabilities: { number: string; title: string; body: string }[];
  externalLink?: { label: string; href: string };
}

export const businessUnits: BusinessUnit[] = [
  {
    slug: "living",
    name: "Sovereign Living",
    monogram: "SLf",
    proposition: "Life rights development and senior living operations at institutional scale.",
    descriptor:
      "We identify, structure, and develop life rights retirement villages — from greenfield opportunity through to fully occupied, self-sustaining estate.",
    body: [
      "Sovereign Living is the group's senior living development and operations platform. We manage the full value chain: land, design, feasibility, funding, sales, and operations — partnering with landowners, family offices, REITs, and developers who want institutional-grade execution without surrendering long-term control of their assets.",
      "Through Retirement 24Seven, our specialist advisory and sales arm, we bring decades of life rights expertise to every mandate — whether Sovereign-led or third-party.",
    ],
    capabilities: [
      {
        number: "01",
        title: "Life Rights Development",
        body: "Greenfield and brownfield life rights retirement villages across South Africa and Mauritius — from opportunity identification through to fully occupied estate.",
      },
      {
        number: "02",
        title: "Senior Living Advisory",
        body: "Financial modelling, unit design, governance structures, sales strategy, and statutory compliance under the Housing Development Schemes for Retired Persons Act.",
      },
      {
        number: "03",
        title: "Operations & Care",
        body: "Insurance-backed operating infrastructure through Absolute Life — person-centred care, estate management, and long-duration asset stewardship.",
      },
    ],
    externalLink: {
      label: "Retirement 24Seven",
      href: "https://retirement247.co.za",
    },
  },
  {
    slug: "developments",
    name: "Sovereign Developments",
    monogram: "S",
    proposition: "Institutional-grade life rights development across the Western Cape and beyond.",
    descriptor:
      "We structure, fund, and develop life rights retirement villages — managing the full value chain from land through to operations.",
    body: [
      "Sovereign Developments leads the group's property development mandates — concentrated in the Western Cape's semi-gration corridor where the structural case for premium life rights is strongest.",
      "Our consortium model brings together capital, insurance-backed operating infrastructure, and specialist advisory under a single coordinated structure — institutional-grade governance with the agility of a specialist boutique.",
    ],
    capabilities: [
      {
        number: "01",
        title: "Project Structuring",
        body: "JV frameworks, MOUs, and HOA arrangements between landowners, developers, and capital providers — aligning interests across multi-phase, long-duration projects.",
      },
      {
        number: "02",
        title: "Development Management",
        body: "End-to-end development oversight from feasibility through commissioning — design advisory, contractor management, and sales coordination.",
      },
      {
        number: "03",
        title: "Institutional Partnerships",
        body: "Capital partner introductions, funder relationships, and co-investment structures for projects requiring institutional-grade financial partners.",
      },
    ],
  },
  {
    slug: "money",
    name: "Sovereign Money",
    monogram: "S",
    proposition: "Structured finance and bridging capital for long-duration property assets.",
    descriptor:
      "Bridging and mezzanine finance for the broader development market — Tier 1 conventional bridging and Tier 2 development-linked facilities.",
    body: [
      "Sovereign Money operates a bridging and mezzanine finance unit providing short-term development capital to the broader property market. Backed by our institutional partners, we deploy Tier 1 conventional bridging and Tier 2 development-linked facilities where bank appetite is limited or too slow.",
      "Our finance capability extends the group's reach beyond life rights — serving developers who need patient, structurally sound capital with the governance discipline of an institutional consortium.",
    ],
    capabilities: [
      {
        number: "01",
        title: "Bridging Finance",
        body: "Short-term development capital — Tier 1 conventional bridging facilities backed by institutional partners including Fedgroup.",
      },
      {
        number: "02",
        title: "Mezzanine Structures",
        body: "Tier 2 development-linked facilities where bank appetite is limited — structured to align with project milestones and long-duration asset profiles.",
      },
      {
        number: "03",
        title: "Capital Structuring",
        body: "Deal structuring, capital stack optimisation, and institutional partner introductions for complex, multi-phase development mandates.",
      },
    ],
  },
  {
    slug: "impact",
    name: "Sovereign Impact",
    monogram: "S",
    proposition: "Purpose-driven development beyond life rights — student accommodation and community programmes.",
    descriptor:
      "PBSA development at institutional scale and long-term community investment through the Ground Up Programme.",
    body: [
      "Sovereign Impact encompasses the group's purpose-driven initiatives — developments and programmes that extend our capital stewardship beyond senior living into adjacent sectors and community investment.",
      "These mandates reflect our conviction that patient capital and institutional discipline can serve both commercial returns and genuine social impact.",
    ],
    capabilities: [
      {
        number: "01",
        title: "Student Accommodation",
        body: "Through our PBSA division, we develop and structure purpose-built student accommodation at institutional scale — from premium Studenthood-branded models to NSFAS-aligned affordable housing — with feasibility analysis, investor decks, and funder introductions across South Africa's university precincts.",
      },
      {
        number: "02",
        title: "Ground Up Programme",
        body: "The Ground Up Programme is Sovereign Living's long-term commitment to young South African men aged 20–45. Built in partnership with C-Suite executive coach Justin King and mentor Tony Karam, it delivers emotional intelligence, financial literacy, and mentorship without preconditions and without end dates.",
      },
    ],
  },
];

export const homepageBusinessUnits = businessUnits.map((unit) => ({
  slug: unit.slug,
  name: unit.name,
  descriptor: unit.descriptor,
}));
