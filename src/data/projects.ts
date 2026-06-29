export interface Project {
  id: number
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  problem: string
  solution: string
  outcome: string
  tags: string[]
  year: string
  color: string
  imageGradient: string
  coverImage?: string
  liveUrl?: string
  galleryImages?: string[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'fusion-house-fitness',
    title: 'Fusion House Fitness',
    category: 'Gym Website Rebuild',
    description: 'A modern website rebuild for a boutique fitness studio in White Plains, NY with a cleaner brand feel, stronger mobile layout, and clearer booking path.',
    longDescription: 'Fusion House Fitness needed a website that felt faster, cleaner, and more premium. The focus was on making the business easier to understand right away, improving the mobile experience, and giving visitors clear paths to view services, learn about the studio, and book through Mindbody.',
    problem: 'The old website did not feel as polished as the actual business. It needed stronger visuals, clearer service sections, better mobile spacing, and a smoother path from landing on the site to taking action.',
    solution: 'I rebuilt the site with React, TypeScript, Vite, reusable sections, responsive CSS, stronger calls to action, a cleaner services page, FAQ support, and direct booking links.',
    outcome: 'The final result feels more modern, more trustworthy, and easier for a potential member to use from a phone or desktop.',
    tags: ['React', 'TypeScript', 'Vite', 'Responsive CSS', 'Vercel'],
    year: '2026',
    color: '#ff6b4a',
    imageGradient: 'linear-gradient(135deg, #fff0e8 0%, #ffb199 45%, #1d1b1b 100%)',
    coverImage: '/projects/fusion-house-cover.jpg',
    galleryImages: [
      '/projects/fusion-house-1.jpg',
      '/projects/fusion-house-2.jpg',
      '/projects/fusion-house-3.jpg',
    ],
    highlights: ['Premium fitness brand direction', 'Mobile-first service pages', 'Mindbody booking flow', 'FAQ and contact structure'],
  },
  {
    id: 2,
    slug: 'moonshot-media',
    title: 'Moonshot Media',
    category: 'Startup Platform Concept',
    description: 'A retro-inspired platform concept that connects small businesses with local creators and influencers through profile discovery.',
    longDescription: 'Moonshot Media is a platform concept built around helping small businesses discover creators who match their brand, location, audience, and campaign goals. The design direction is bold, fun, and memorable while still keeping the pages organized and easy to understand.',
    problem: 'The idea needed to feel like a real product instead of a simple landing page. It needed clear pages for businesses, creators, profile discovery, and profile details.',
    solution: 'I built a multi-page React experience with reusable cards, profile data, profile detail pages, responsive navigation, and a retro visual system that gives the platform personality.',
    outcome: 'The project feels like an early-stage startup website with a clear concept, strong brand identity, and a foundation that could later connect to Supabase for real user accounts and profiles.',
    tags: ['React', 'TypeScript', 'React Router', 'CSS', 'Vercel'],
    year: '2026',
    color: '#7c5cff',
    imageGradient: 'linear-gradient(135deg, #fff7d6 0%, #ff8a4c 42%, #332064 100%)',
    coverImage: '/projects/moonshot-cover.jpg',
    galleryImages: [
      '/projects/moonshot-1.jpg',
      '/projects/moonshot-2.jpg',
      '/projects/moonshot-3.jpg',
    ],
    highlights: ['Discovery-style profile layout', 'Business and creator flows', 'Profile detail pages', 'Bold retro visual direction'],
  },
  {
    id: 3,
    slug: 'vorteo-portfolio',
    title: 'VorTeo Portfolio',
    category: 'Personal Studio Site',
    description: 'My personal portfolio and studio website built to present my work, explain what I offer, and give businesses a clear way to contact me.',
    longDescription: 'VorTeo Studios is my personal website for showing my work and explaining what I can provide to businesses. The goal is to feel clean, sharp, modern, and professional without becoming confusing or too template-like.',
    problem: 'I needed a portfolio that could work as both a personal site and a small studio website. It needed to show projects in a more memorable way and explain services clearly.',
    solution: 'I built a lightweight React site with a horizontal project showcase, dedicated project pages, clean service cards, responsive sections, and a stronger contact flow.',
    outcome: 'The site now gives visitors a clearer understanding of who I am, what I build, and how to start a project with me.',
    tags: ['React', 'TypeScript', 'CSS Animations', 'Component Design', 'Vite'],
    year: '2026',
    color: '#2f80ed',
    imageGradient: 'linear-gradient(135deg, #eaf4ff 0%, #8ec5ff 45%, #172554 100%)',
    coverImage: '/projects/vorteo-cover.jpg',
    galleryImages: [
      '/projects/vorteo-1.jpg',
      '/projects/vorteo-2.jpg',
      '/projects/vorteo-3.jpg',
    ],
    highlights: ['Horizontal project showcase', 'Dedicated project case-study pages', 'Clean light design system', 'Fully responsive layout'],
  },
  {
    id: 4,
    slug: 'business-landing-pages',
    title: 'Business Landing Pages',
    category: 'Conversion-Focused Websites',
    description: 'Clean, polished landing pages for service businesses that need a stronger first impression and clearer calls to action.',
    longDescription: 'This project represents landing page concepts for service businesses that need to explain what they do quickly and convert visitors into leads. The layouts focus on simple messaging, strong sections, responsive design, and easy contact options.',
    problem: 'Many small businesses have websites that are hard to scan, outdated, or missing clear calls to action.',
    solution: 'I create focused landing pages with strong hero sections, service breakdowns, testimonials when available, contact forms, and mobile-first spacing.',
    outcome: 'The result is a cleaner first impression and a page that makes it easier for visitors to understand the business and reach out.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'SEO Basics'],
    year: '2025',
    color: '#22a06b',
    imageGradient: 'linear-gradient(135deg, #f0fff7 0%, #8de0b5 44%, #123629 100%)',
    coverImage: '/projects/landing-pages-cover.jpg',
    galleryImages: [
      '/projects/landing-pages-1.jpg',
      '/projects/landing-pages-2.jpg',
      '/projects/landing-pages-3.jpg',
    ],
    highlights: ['Clear landing page structure', 'Mobile-first sections', 'Lead-focused contact flow', 'Simple SEO foundations'],
  },
]
