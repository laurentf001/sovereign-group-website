export interface SiteImage {
  src: string;
  alt: string;
  caption?: string;
}

/** Editorial photography for Retirement 247. Replace with owned assets before launch. */
export const retirement247Images = {
  heroWater: {
    src: "/images/hero-water.jpg",
    alt: "Calm navy water at golden hour",
  },
  editorialLeaves: {
    src: "/images/editorial-leaves.jpg",
    alt: "Soft green leaves in natural light",
    caption: "Community built for the long horizon.",
  },
  editorialTeam: {
    src: "/images/editorial-team.png",
    alt: "A collaborative team of professionals planning together",
  },
  careHands: {
    src: "/images/care-hands.png",
    alt: "An elderly person's hand gently held, a quiet gesture of care and reassurance",
    caption: "Care with authority. Security with warmth.",
  },
  communityJoy: {
    src: "/images/community-joy.png",
    alt: "Older adults smiling together outdoors, enjoying community and connection",
    caption: "Community built for the long horizon.",
  },
  companionsWalking: {
    src: "/images/companions-walking.png",
    alt: "An elderly couple walking together through a sunlit garden",
  },
  friendsLaughing: {
    src: "/images/friends-laughing.png",
    alt: "Two older friends laughing and enjoying each other's company",
  },
} satisfies Record<string, SiteImage>;
