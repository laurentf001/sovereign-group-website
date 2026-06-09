export interface Leader {
  name: string;
  title: string;
  bio: string;
  initials: string;
}

const directorTitle = "Director · Sovereign Capital";

export const sovereignCapitalLeadership: Leader[] = [
  {
    name: "Arthur Case",
    title: directorTitle,
    initials: "AC",
    bio: "Former CEO of Evergreen Lifestyles (Amdec Group), developed, commissioned, and operated 7 retirement villages over 12 years. Career spanning Anglo American, Nedbank, Southern Life Association, and Deloitte across South Africa and the Middle East. Former Managing Director of MediCor Hospital Group (sold to MediClinic). Brings unmatched operational depth to the group's life rights development platform.",
  },
  {
    name: "Gavin Vickers",
    title: directorTitle,
    initials: "GV",
    bio: "Specialist in development finance, bridging and mezzanine structures, and strategic deal-making. Former corporate banking positions at RMB Private Banking, Nedbank Commercial Asset Based Finance, and Standard Bank. Co-developer of Mt Prospect retirement estate in Constantia. Founding principal of RezProp (sold to National Real Estate, 2023). Co-founder of Retirement 24Seven.",
  },
  {
    name: "Lauren Peacock",
    title: directorTitle,
    initials: "LP",
    bio: "Responsible for group governance, strategic partnerships, and operational leadership across the Sovereign consortium. Brings rigorous institutional discipline to a group operating across multiple complex, long-duration development mandates simultaneously.",
  },
  {
    name: "Rhys Meredith",
    title: directorTitle,
    initials: "RM",
    bio: "Contributes senior leadership across the group's capital structuring, development partnerships, and institutional relationships. Brings depth of experience to a consortium operating at the intersection of property development, structured finance, and long-duration asset management.",
  },
];

export const retirement247Team: Leader[] = [
  {
    name: "Gavin Vickers",
    title: "Director · Retirement 24Seven",
    initials: "GV",
    bio: "Specialist in development finance, deal structuring, and life rights capital. Former corporate banking roles at RMB Private Banking, Nedbank Commercial Asset Based Finance, and Standard Bank. Co-developer of Mt Prospect retirement estate in Constantia. Founding principal of RezProp (sold to National Real Estate, 2023). Co-founder and Director of Retirement 24Seven.",
  },
  {
    name: "Arthur Case",
    title: "CEO · Sovereign Senior Living",
    initials: "AC",
    bio: "Former CEO of Evergreen Lifestyles (Amdec Group). Developed, commissioned and operated 7 retirement villages over 12 years. Career spanning Anglo American, Nedbank, Southern Life Association, and Deloitte across South Africa and the Middle East. Former Managing Director of MediCor Hospital Group (sold to MediClinic). The most operationally experienced life rights executive in South Africa.",
  },
];
