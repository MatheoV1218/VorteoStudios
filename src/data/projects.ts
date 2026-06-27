export interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  year: string
  color: string
  imageGradient: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Fusion House Fitness',
    category: 'Gym Website Rebuild',
    description: 'A modern website rebuild for a boutique fitness studio in White Plains, NY. The goal was to make the brand feel premium, mobile-friendly, fast, and easier for visitors to book classes.',
    tags: ['React', 'TypeScript', 'Vite', 'Responsive CSS', 'Vercel'],
    year: '2026',
    color: '#ff6b4a',
    imageGradient: 'linear-gradient(135deg, #fff0e8 0%, #ffb199 45%, #1d1b1b 100%)',
  },
  {
    id: 2,
    title: 'Moonshot Media',
    category: 'Startup Platform Concept',
    description: 'A retro-inspired platform concept that connects small businesses with local creators and influencers. Built around discovery, profile cards, and a strong brand personality.',
    tags: ['React', 'TypeScript', 'React Router', 'CSS', 'Vercel'],
    year: '2026',
    color: '#7c5cff',
    imageGradient: 'linear-gradient(135deg, #fff7d6 0%, #ff8a4c 42%, #332064 100%)',
  },
  {
    id: 3,
    title: 'VorTeo Portfolio',
    category: 'Personal Studio Site',
    description: 'My personal portfolio and studio website built to present my work, explain what I offer, and give businesses a clear way to contact me for web design and development projects.',
    tags: ['React', 'TypeScript', 'CSS Animations', 'Component Design', 'Vite'],
    year: '2026',
    color: '#2f80ed',
    imageGradient: 'linear-gradient(135deg, #eaf4ff 0%, #8ec5ff 45%, #172554 100%)',
  },
  {
    id: 4,
    title: 'Business Landing Pages',
    category: 'Conversion-Focused Websites',
    description: 'Clean, polished landing pages for service businesses that need a stronger first impression, simple messaging, mobile responsiveness, and clear calls to action.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'SEO Basics'],
    year: '2025',
    color: '#22a06b',
    imageGradient: 'linear-gradient(135deg, #f0fff7 0%, #8de0b5 44%, #123629 100%)',
  },
]
