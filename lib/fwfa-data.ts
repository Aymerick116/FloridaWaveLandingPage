import type { IconName } from "@/components/icons";

export type NavLink = {
  label: string;
  href: string;
};

export type Program = {
  title: string;
  description: string;
  icon: IconName;
  badge?: string;
  subtitle?: string;
  highlights?: string[];
  featured?: boolean;
};

export type Camp = {
  title: string;
  description: string;
  icon: IconName;
  tag: string;
};

export type EventItem = {
  title: string;
  description: string;
  icon: IconName;
  month: string;
};

export type SupportPartnerPillar = {
  title: string;
  description: string;
  icon: IconName;
};

export type ValueItem = {
  title: string;
  description: string;
  icon: IconName;
};

export type PathwayStep = {
  title: string;
  description: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Camps", href: "#camps" },
  { label: "Pathway", href: "#pathway" },
  { label: "Values", href: "#values" },
  { label: "Events", href: "#events" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" }
];

export const trustBadges = [
  "Youth Development",
  "Academic Support",
  "Competitive Training",
  "Community Impact"
];

export const heroHighlights = [
  {
    title: "Player-First Coaching",
    description: "Training sessions built around technical mastery, confidence, and long-term growth.",
    icon: "target" as const
  },
  {
    title: "Academic Culture",
    description: "Support systems that reinforce school success alongside performance on the field.",
    icon: "school" as const
  },
  {
    title: "Leadership Mindset",
    description: "Mentorship that turns every training environment into a platform for character building.",
    icon: "spark" as const
  }
];

export const aboutHighlights = [
  {
    title: "Community-Based",
    description:
      "Rooted in Pompano Beach, Deerfield Beach, and the surrounding South Florida community."
  },
  {
    title: "Player Development Focused",
    description:
      "A structured environment built to help athletes grow with clarity, confidence, and consistency."
  },
  {
    title: "Serving South Florida Youth",
    description:
      "Programs designed to create access, belonging, and real developmental opportunity."
  }
];

export const programs: Program[] = [
  {
    title: "Florida Wave Prep Soccer",
    badge: "New Feature Program",
    subtitle: "Elite Supplemental Training + Competition Pathway",
    description:
      "A selective development track for middle and high school players who want meaningful supplemental training, added competition, and clearer college exposure beyond their primary team environment.",
    highlights: [
      "For select middle & high school players",
      "Supplemental training beyond primary team",
      "Weekend sessions + off-season competition",
      "Competes in top-level club leagues",
      "Minimum 3 college showcases annually",
      "Exposure to college recruitment pathways"
    ],
    featured: true,
    icon: "route"
  },
  {
    title: "After-School Soccer • Academic Program",
    description:
      "Combines soccer development with academic support and structured mentorship.",
    icon: "book"
  },
  {
    title: "In-House Developmental Leagues",
    description:
      "Gives players a supportive environment to learn the game and grow with confidence.",
    icon: "field"
  },
  {
    title: "Competitive & Travel Academy",
    description:
      "Prepares dedicated athletes for higher-level competition and team play.",
    icon: "trophy"
  },
  {
    title: "Advanced Performance Training",
    description:
      "Focused technical and physical development for serious players ready to elevate their game.",
    icon: "bolt"
  },
  {
    title: "Soccer for Success (Community Program)",
    description:
      "Expands access to soccer and youth development throughout the local community.",
    icon: "community"
  }
];

export const camps: Camp[] = [
  {
    title: "Summer Camp",
    description:
      "A high-energy seasonal camp focused on technical repetition, small-sided play, and confident decision-making.",
    icon: "bolt",
    tag: "Seasonal Development"
  },
  {
    title: "Winter Camp",
    description:
      "An off-season training environment that keeps players sharp, active, and progressing through the winter months.",
    icon: "shield",
    tag: "Off-Season Training"
  },
  {
    title: "Spring Camp",
    description:
      "A performance-focused camp built to help players reset, refine technique, and prepare for the next stretch of competition.",
    icon: "growth",
    tag: "Pre-Season Build"
  },
  {
    title: "College ID Camp",
    description:
      "An advanced exposure camp designed to combine high-level training with evaluation and college pathway insight.",
    icon: "target",
    tag: "Next-Level Exposure"
  }
];

export const events: EventItem[] = [
  {
    title: "Heritage Cup",
    description:
      "A May showcase event centered on competition, club pride, and community connection across South Florida.",
    icon: "trophy",
    month: "May"
  },
  {
    title: "5 v 5 Unity Cup",
    description:
      "A July small-sided event built around fast play, teamwork, and a strong sense of community spirit.",
    icon: "community",
    month: "July"
  }
];

export const supportPartnerPillars: SupportPartnerPillar[] = [
  {
    title: "Mental Health Support",
    description:
      "Support that helps players and families build resilience, confidence, and healthy habits beyond the field.",
    icon: "shield"
  },
  {
    title: "Mentorship",
    description:
      "Guidance and encouragement that reinforce leadership, accountability, and positive decision-making.",
    icon: "spark"
  },
  {
    title: "Academic Support",
    description:
      "Resources that strengthen student success and keep education connected to the full player pathway.",
    icon: "school"
  }
];

export const pathwaySteps: PathwayStep[] = [
  {
    title: "After-School Program",
    description:
      "An inviting starting point that introduces players to structured coaching, mentorship, and healthy habits."
  },
  {
    title: "In-House Leagues",
    description:
      "A developmental competition environment where players sharpen technique, decision-making, and confidence."
  },
  {
    title: "Competitive Academy",
    description:
      "A more demanding team setting focused on tactical growth, discipline, and game-ready performance."
  },
  {
    title: "Advanced Training",
    description:
      "Targeted technical and athletic work for players pursuing higher standards and greater opportunities."
  },
  {
    title: "College / Semi-Pro Opportunities",
    description:
      "Guidance, exposure, and preparation that help athletes pursue the next chapter on and off the field."
  }
];

export const coreValues: ValueItem[] = [
  {
    title: "Character",
    description:
      "We build integrity, discipline, accountability, and respect in every player.",
    icon: "shield"
  },
  {
    title: "Development",
    description:
      "We prioritize long-term growth over short-term results, focusing on the complete development of each athlete.",
    icon: "growth"
  },
  {
    title: "Community",
    description:
      "We serve and strengthen our local communities by creating inclusive, supportive environments for all.",
    icon: "community"
  },
  {
    title: "Education",
    description:
      "We promote academic success and personal growth alongside athletic development.",
    icon: "school"
  },
  {
    title: "Inclusion",
    description:
      "We provide access and opportunity for all players, regardless of background or experience level.",
    icon: "spark"
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to high standards on and off the field, striving for continuous improvement.",
    icon: "target"
  }
];
