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
    category: "Gym Website",
    description:
      "A modern website rebuild for a boutique fitness studio in White Plains.",
    longDescription:
      "Fusion House Fitness was rebuilt to feel cleaner, faster, and more professional for visitors looking to learn about the gym, explore services, and book through Mindbody. The goal was to create a premium local fitness website that works well on mobile and makes the next step clear.",
    tags: ["React", "TypeScript", "Vite", "Vercel"],
    year: "2026",
    color: "#f97316",
    image: "/projects/fusion-house.png",
    gallery: [
      "/projects/fusion-house-1.jpg",
      "/projects/fusion-house-2.jpg",
      "/projects/fusion-house-3.jpg",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Zoner",
    slug: "zoner",
    category: "Web App Concept",
    description:
      "A clean, modern concept for a platform-style web experience.",
    longDescription:
      "Zoner is a web project focused on creating a strong digital experience with clear sections, smooth layout flow, and a modern interface. It is designed to feel polished, responsive, and easy for users to understand quickly.",
    tags: ["React", "TypeScript", "CSS", "Responsive Design"],
    year: "2026",
    color: "#2f80ed",
    image:  "/projects/zoner.png",
    gallery: [
      "/projects/zoner-1.jpg",
      "/projects/zoner-2.jpg",
      "/projects/zoner-3.jpg",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Mission Control",
    slug: "mission-control",
    category: "Creator Platform",
    description:
      "A retro-inspired platform connecting businesses with creators.",
    longDescription:
      "Mission Control was designed as a creator and influencer marketing platform where small businesses can discover local creators, browse profiles, and build better collaborations. The site uses a bold retro space-inspired visual style with profile cards, discovery sections, and responsive layouts.",
    tags: ["React", "TypeScript", "React Router", "Vercel"],
    year: "2026",
    color: "#7c3aed",
    image:  "/projects/mission-control.png",
    gallery: [
      "/projects/mission-control-1.jpg",
      "/projects/mission-control-2.jpg",
      "/projects/mission-control-3.jpg",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Lukumadness",
    slug: "lukumadness",
    category: "Restaurant Website",
    description:
      "A restaurant website concept built to show food, brand personality, and clear calls to action.",
    longDescription:
      "Lukumadness was created as a restaurant-focused website with a strong visual style, simple navigation, and clear sections for food, story, contact, and ordering information. The goal was to make the restaurant feel memorable online while keeping the site easy to use.",
    tags: ["React", "CSS", "Responsive Design", "Vite"],
    year: "2026",
    color: "#ef4444",
    image:  "/projects/lukumadness.png",
    gallery: [
      "/projects/lukumadness-1.jpg",
      "/projects/lukumadness-2.jpg",
      "/projects/lukumadness-3.jpg",
    ],
    liveUrl: "",
    githubUrl: "",
  },
];