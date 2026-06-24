export interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  year: string
  color: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Lumière Studio',
    category: 'Brand & Web',
    description: 'Full identity system and e-commerce experience for a luxury photography studio. Dark, editorial, conversion-focused.',
    tags: ['React', 'Framer Motion', 'Stripe', 'Headless CMS'],
    year: '2025',
    color: '#7C3AED',
  },
  {
    id: 2,
    title: 'Apex Training Co.',
    category: 'Web App',
    description: 'High-performance coaching platform with real-time dashboards, client portals, and subscription management.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    year: '2025',
    color: '#00F5FF',
  },
  {
    id: 3,
    title: 'Noma Collective',
    category: 'Marketing Site',
    description: 'Immersive storytelling site for a sustainable fashion brand — full-bleed visuals, smooth scroll, and editorial typography.',
    tags: ['React', 'GSAP', 'Three.js', 'Figma'],
    year: '2024',
    color: '#F59E0B',
  },
  {
    id: 4,
    title: 'PulseMetrics',
    category: 'SaaS Dashboard',
    description: 'Analytics SaaS platform with live data visualization, role-based access, and a white-label client reporting module.',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    year: '2024',
    color: '#10B981',
  },
  {
    id: 5,
    title: 'Solis Architecture',
    category: 'Portfolio Site',
    description: 'Award-winning portfolio for a Mexico City architecture firm. Cinematic project reveals and an interactive project map.',
    tags: ['Next.js', 'Three.js', 'GSAP', 'Mapbox'],
    year: '2024',
    color: '#F97316',
  },
  {
    id: 6,
    title: 'Velo Finance',
    category: 'Fintech Web',
    description: 'Trust-building marketing site and onboarding flow for a new-generation personal finance app.',
    tags: ['React', 'TypeScript', 'Lottie', 'Webflow'],
    year: '2023',
    color: '#3B82F6',
  },
]
