export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  color: string;
  image: string;
  gallery?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Fusion House Fitness",
    slug: "fusion-house-fitness",
    category: "Boutique Fitness Website",
    description:
      "A premium gym website rebuild for a White Plains fitness studio focused on coaching, memberships, and easy booking.",
    longDescription:
      "Fusion House Fitness was rebuilt into a bold, modern fitness website that feels premium while still being simple for real visitors to use. The site highlights private coaching, memberships, client transformations, contact options, location details, and direct booking paths through Mindbody. The design uses strong typography, immersive gym photography, clean service sections, mobile-friendly layouts, and clear calls to action so potential members can quickly understand the studio and take the next step.",
    tags: ["React", "TypeScript", "Vite", "Responsive Design", "Mindbody"],
    year: "2026",
    color: "#ff4f36",
    image: "/projects/fusion-house.webp",
    gallery: [
      "/projects/fusion-house-1.webp",
      "/projects/fusion-house-2.webp",
      "/projects/fusion-house-3.webp",
    ],
    liveUrl: "https://www.thefusionhousefitness.com/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Zoner",
    slug: "zoner",
    category: "Real Estate Web App",
    description:
      "A map-based housing discovery platform that helps users compare towns and neighborhoods by what matters most to them.",
    longDescription:
      "Zoner is a real estate discovery concept built around a more personal way to choose where to live. Instead of only searching by price or property type, users can rank priorities like schools, crime, transit, and affordability, then explore aligned areas through a clean map-based interface. The experience includes priority ranking, top matches, neighborhood deep dives, developer and homebuyer sections, team profiles, milestones, and a polished brand system. The goal was to make housing research feel clearer, more human, and easier to navigate.",
    tags: ["React", "TypeScript", "Maps", "UI Design", "Responsive Design"],
    year: "2026",
    color: "#a6e857",
    image: "/projects/zoner.webp",
    gallery: [
      "/projects/zoner-1.webp",
      "/projects/zoner-2.png",
      "/projects/zoner-3.png",
    ],
    liveUrl: "https://www.zoner.pro/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Mission Control",
    slug: "mission-control",
    category: "Creator Marketplace",
    description:
      "A retro space-inspired platform concept that connects small businesses with local creators and influencers.",
    longDescription:
      "Mission Control was designed as a creator collaboration platform for small businesses that want to launch better local marketing campaigns. The site uses a bold retro space theme, oversized typography, starry backgrounds, profile discovery, business and influencer paths, and a contact flow built around booking a sit-down before launch. The project focused on making the idea feel memorable, approachable, and easy to understand: businesses can find creators who fit their orbit, while creators can connect with brands that match their niche and audience.",
    tags: ["React", "TypeScript", "React Router", "Vercel", "Responsive Design"],
    year: "2026",
    color: "#8b5cf6",
    image: "/projects/mission-control.webp",
    gallery: [
      "/projects/mission-control-1.webp",
      "/projects/mission-control-2.webp",
      "/projects/mission-control-3.webp",
    ],
    liveUrl: "https://mission-control-umber-xi.vercel.app/",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Lukumadness",
    slug: "lukumadness",
    category: "Restaurant Website",
    description:
      "A clean restaurant website concept built around Greek desserts, featured menu items, and strong ordering calls to action.",
    longDescription:
      "Lukumadness is a restaurant website concept created to showcase a dessert-focused café brand with strong visuals and simple navigation. The site highlights signature lukumades, drinks, featured creations, menu items, ordering options, and the brand’s warm café personality. The design uses large food photography, bold condensed typography, clean product cards, and clear calls to action so visitors can quickly explore the menu and place an order.",
    tags: ["React", "CSS", "Vite", "Restaurant UI", "Responsive Design"],
    year: "2026",
    color: "#f97316",
    image: "/projects/lukumadness.webp",
    gallery: [
      "/projects/lukumadness-1.webp",
      "/projects/lukumadness-2.webp",
      "/projects/lukumadness-3.webp",
    ],
    liveUrl: "https://www.lukumadnessusa.com/",
    githubUrl: "",
  },
  {
    id: 5,
    title: "RhythmLab",
    slug: "rhythmlab",
    category: "Medical Training Simulator",
    description:
      "An interactive EKG and respiratory therapy simulator with randomized patient cases, live vitals, and clinical decision practice.",
    longDescription:
      "RhythmLab is an interactive medical training application built to make EKG interpretation and emergency decision-making feel like a clinical game. The platform includes randomized patient scenarios, telemetry monitor visuals, live vitals, rhythm recognition, oxygen and airway management decisions, medication safety, scoring, streaks, difficulty levels, and simulation-based interventions. The experience is designed for fast, focused studying where learners can diagnose the rhythm, choose the right treatment, see feedback, and practice stabilizing patients across different emergency scenarios.",
    tags: ["React", "TypeScript", "Medical Simulation", "EKG", "Interactive UI"],
    year: "2026",
    color: "#facc15",
    image: "/projects/rhythmlab.webp",
    gallery: [
      "/projects/rhythmlab-1.webp",
      "/projects/rhythmlab-2.webp",
      "/projects/rhythmlab-3.webp",
    ],
    liveUrl: "https://ekg-eight.vercel.app/",
    githubUrl: "",
  },
  {
    id: 6,
    title: "BizWizard",
    slug: "bizwizard",
    category: "AI Startup Platform",
    description:
      "A guided AI workspace that helps early founders turn vague ideas into structured ventures they can actually pitch.",
    longDescription:
      "BizWizard is a full application concept for first-time founders and early-stage entrepreneurs who need structure before they build. The platform guides users from a rough idea into a clearer venture by walking them through problem validation, customer definition, business model thinking, pitch preparation, and next steps. The website presents BizWizard as more than a chatbot: it is a guided workspace that remembers decisions, teaches as users go, and produces practical outputs. The design uses a polished dark-purple brand system, venture workspace UI, founder-focused messaging, partnership pages, pricing, and contact flows.",
    tags: ["React", "TypeScript", "AI Product", "Startup Tools", "Product Design"],
    year: "2026",
    color: "#8b5cf6",
    image: "/projects/bizwizard.webp",
    gallery: [
      "/projects/bizwizard-1.webp",
      "/projects/bizwizard-2.webp",
      "/projects/bizwizard-3.webp",
    ],
    liveUrl: "https://www.bizwizard.ai/",
    githubUrl: "",
  },
];
