export type ProjectType = 'Business Website' | 'E-commerce' | 'Web App' | 'Simulator'

export interface Project {
  id: number
  title: string
  slug: string
  category: string
  type: ProjectType
  industry: string
  description: string
  longDescription: string
  /** Concrete features shipped in the build, shown as a checklist on the case study. */
  highlights: string[]
  tags: string[]
  year: string
  color: string
  image: string
  gallery?: string[]
  /** Phone-sized screenshot, shown in a device mockup on the case study. */
  mobileImage?: string
  liveUrl?: string
  githubUrl?: string
  wideGallery?: boolean
  /** Featured projects appear in the stacked showcase on the home page. */
  featured?: boolean
}

export const projectTypes: ProjectType[] = ['Business Website', 'E-commerce', 'Web App', 'Simulator']

export const projects: Project[] = [
  {
    id: 1,
    title: 'Fusion House Fitness',
    slug: 'fusion-house-fitness',
    category: 'Boutique Fitness Website',
    type: 'Business Website',
    industry: 'Fitness',
    description:
      'A premium gym website rebuild for a White Plains fitness studio focused on coaching, memberships, and easy booking.',
    longDescription:
      'Fusion House Fitness was rebuilt into a bold, modern fitness website that feels premium while still being simple for real visitors to use. The site highlights private coaching, memberships, client transformations, contact options, location details, and direct booking paths through Mindbody. The design uses strong typography, immersive gym photography, clean service sections, mobile-friendly layouts, and clear calls to action so potential members can quickly understand the studio and take the next step.',
    highlights: [
      'Direct booking paths through Mindbody',
      'Private coaching and membership breakdowns',
      'Client transformation showcase',
      'Location, hours, and contact details up front',
      'Mobile-first layout with thumb-friendly CTAs',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Responsive Design', 'Mindbody'],
    year: '2026',
    color: '#ff4f36',
    image: '/projects/fusion-house.webp',
    gallery: [
      '/projects/fusion-house-1.webp',
      '/projects/fusion-house-2.webp',
      '/projects/fusion-house-3.webp',
    ],
    mobileImage: '/projects/mobile/fusion-house-fitness.webp',
    liveUrl: 'https://www.thefusionhousefitness.com/',
    featured: true,
  },
  {
    id: 8,
    title: 'Healthcare United',
    slug: 'healthcare-united',
    category: 'Home Care Website',
    type: 'Business Website',
    industry: 'Healthcare',
    description:
      'A warm, trust-first website for a faith-driven Christian home care company serving families across South Carolina.',
    longDescription:
      'Healthcare United needed a website that could speak to families at one of the hardest moments they face: realizing a loved one needs help at home. The site pairs a calm navy-and-gold palette with elegant serif typography to feel reassuring rather than clinical. Visitors can explore six care services in depth, understand insurance and payment options, read answers to common questions, and request a free consultation or call directly from any page. Under the hood every route is prerendered with its own title, description, canonical URL, and structured data, so each service and page can be found in search on its own.',
    highlights: [
      'Six detailed care service pages with tabbed navigation',
      'Insurance and payment options explained in plain language',
      'Free consultation form and click-to-call on every page',
      'FAQ page with FAQPage structured data',
      'Prerendered routes with per-page SEO and JSON-LD',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Prerendered SEO', 'Structured Data'],
    year: '2026',
    color: '#d9b36b',
    image: '/projects/healthcare-united.webp',
    gallery: [
      '/projects/healthcare-united-1.webp',
      '/projects/healthcare-united-2.webp',
      '/projects/healthcare-united-3.webp',
    ],
    mobileImage: '/projects/mobile/healthcare-united.webp',
    liveUrl: 'https://www.hcu.us/',
    featured: true,
  },
  {
    id: 9,
    title: "Toxic Wings × Papito's",
    slug: 'toxic-wings',
    category: 'Dual-Brand Restaurant Website',
    type: 'Business Website',
    industry: 'Restaurant',
    description:
      'One website for two restaurants under one roof in Cos Cob, CT — bold wings on one side, handmade empanadas on the other.',
    longDescription:
      "Toxic Wings and Papito's Empanadas share a counter, a kitchen, and a location, but they are two very different brands. The site had to let both personalities shine without confusing hungry visitors. Each brand gets its own color theme, and the menu page lets guests switch kitchens with a single tap, then jump between categories like wings, flavors, burgers, and sides. Ordering is always one step away through Uber Eats and Grubhub buttons. Full menu structured data is generated straight from the menu files, so prices and items stay in sync with what search engines see.",
    highlights: [
      'Two brand themes living inside one site',
      'Tap-to-switch menu with category jump links',
      '20+ wing flavors and full menus managed as simple data files',
      'One-tap ordering through Uber Eats and Grubhub',
      'Menu, restaurant, and breadcrumb structured data for local search',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Menu Schema', 'Local SEO'],
    year: '2026',
    color: '#f5a524',
    image: '/projects/toxic-wings.webp',
    gallery: [
      '/projects/toxic-wings-1.webp',
      '/projects/toxic-wings-2.webp',
      '/projects/toxic-wings-3.webp',
    ],
    mobileImage: '/projects/mobile/toxic-wings.webp',
    liveUrl: 'https://www.toxicwings.org/',
    featured: true,
  },
  {
    id: 10,
    title: "Diana's Accessories",
    slug: 'dianas-accessories',
    category: 'Designer Resale E-commerce',
    type: 'E-commerce',
    industry: 'Retail',
    description:
      'A boutique e-commerce store for authenticated pre-owned designer bags, clothing, and accessories — with a custom admin dashboard.',
    longDescription:
      "Diana's Accessories and Bags is a full e-commerce build for reselling pre-owned designer pieces from brands like Louis Vuitton, Coach, and UGG. Shoppers can search by item code or name, filter by category, sort, and narrow results with a price range slider. Every listing clearly shows its condition and availability, and one-of-a-kind items are automatically reserved the moment someone checks out. Payment runs through a simple manual flow with Venmo, Zelle, Cash App, and Apple Pay, and buyers can track their order status anytime. Behind the storefront, a private admin dashboard lets Diana post new items with photos, manage orders, and answer messages. The whole site is available in English and Spanish.",
    highlights: [
      'Searchable shop with category, sort, and price range filters',
      'Condition badges and live available / reserved / sold status',
      'Manual payment checkout with order tracking',
      'Private admin dashboard for products, orders, and messages',
      'Full English and Spanish language toggle',
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'E-commerce', 'Admin Dashboard'],
    year: '2026',
    color: '#c9a061',
    image: '/projects/dianas-accessories.webp',
    gallery: [
      '/projects/dianas-accessories-1.webp',
      '/projects/dianas-accessories-2.webp',
      '/projects/dianas-accessories-3.webp',
    ],
    mobileImage: '/projects/mobile/dianas-accessories.webp',
    liveUrl: 'https://www.dianaboutique.org/',
    featured: true,
  },
  {
    id: 6,
    title: 'BizWizard',
    slug: 'bizwizard',
    category: 'AI Startup Platform',
    type: 'Web App',
    industry: 'Startups',
    description:
      'A guided AI workspace that helps early founders turn vague ideas into structured ventures they can actually pitch.',
    longDescription:
      'BizWizard is a full application concept for first-time founders and early-stage entrepreneurs who need structure before they build. The platform guides users from a rough idea into a clearer venture by walking them through problem validation, customer definition, business model thinking, pitch preparation, and next steps. The website presents BizWizard as more than a chatbot: it is a guided workspace that remembers decisions, teaches as users go, and produces practical outputs. The design uses a polished dark-purple brand system, venture workspace UI, founder-focused messaging, partnership pages, pricing, and contact flows.',
    highlights: [
      'Guided venture workspace from idea to pitch',
      'Problem, customer, and business model walkthroughs',
      'Founder-focused messaging and pricing pages',
      'Partnership and contact flows',
      'Polished dark-purple brand system',
    ],
    tags: ['React', 'TypeScript', 'AI Product', 'Startup Tools', 'Product Design'],
    year: '2026',
    color: '#8b5cf6',
    image: '/projects/bizwizard.webp',
    gallery: [
      '/projects/bizwizard-1.webp',
      '/projects/bizwizard-2.webp',
      '/projects/bizwizard-3.webp',
    ],
    mobileImage: '/projects/mobile/bizwizard.webp',
    liveUrl: 'https://www.bizwizard.ai/',
    featured: true,
  },
  {
    id: 2,
    title: 'Zoner',
    slug: 'zoner',
    category: 'Real Estate Web App',
    type: 'Web App',
    industry: 'Real Estate',
    description:
      'A map-based housing discovery platform that helps users compare towns and neighborhoods by what matters most to them.',
    longDescription:
      'Zoner is a real estate discovery concept built around a more personal way to choose where to live. Instead of only searching by price or property type, users can rank priorities like schools, crime, transit, and affordability, then explore aligned areas through a clean map-based interface. The experience includes priority ranking, top matches, neighborhood deep dives, developer and homebuyer sections, team profiles, milestones, and a polished brand system. The goal was to make housing research feel clearer, more human, and easier to navigate.',
    highlights: [
      'Rank priorities like schools, crime, transit, and affordability',
      'Map-based exploration of matching areas',
      'Neighborhood deep dives and top matches',
      'Separate paths for homebuyers and developers',
      'Team, milestones, and brand system pages',
    ],
    tags: ['React', 'TypeScript', 'Maps', 'UI Design', 'Responsive Design'],
    year: '2026',
    color: '#a6e857',
    image: '/projects/zoner.webp',
    gallery: [
      '/projects/zoner-1.webp',
      '/projects/zoner-2.webp',
      '/projects/zoner-3.webp',
    ],
    mobileImage: '/projects/mobile/zoner.webp',
    liveUrl: 'https://www.zoner.pro/',
  },
  {
    id: 4,
    title: 'Lukumadness',
    slug: 'lukumadness',
    category: 'Restaurant Website',
    type: 'Business Website',
    industry: 'Restaurant',
    description:
      'A clean restaurant website built around Greek desserts, featured menu items, and strong ordering calls to action.',
    longDescription:
      'Lukumadness is a restaurant website created to showcase a dessert-focused café brand with strong visuals and simple navigation. The site highlights signature lukumades, drinks, featured creations, menu items, ordering options, and the brand’s warm café personality. The design uses large food photography, bold condensed typography, clean product cards, and clear calls to action so visitors can quickly explore the menu and place an order.',
    highlights: [
      'Signature lukumades and featured creations',
      'Full menu with clean product cards',
      'Online ordering calls to action',
      'Large food photography throughout',
      'Warm, bold café brand personality',
    ],
    tags: ['React', 'CSS', 'Vite', 'Restaurant UI', 'Responsive Design'],
    year: '2026',
    color: '#f97316',
    image: '/projects/lukumadness.webp',
    gallery: [
      '/projects/lukumadness-1.webp',
      '/projects/lukumadness-2.webp',
      '/projects/lukumadness-3.webp',
    ],
    mobileImage: '/projects/mobile/lukumadness.webp',
    liveUrl: 'https://www.lukumadnessusa.com/',
  },
  {
    id: 3,
    title: 'Mission Control',
    slug: 'mission-control',
    category: 'Creator Marketplace',
    type: 'Web App',
    industry: 'Marketing',
    description:
      'A retro space-inspired platform that connects small businesses with local creators and influencers.',
    longDescription:
      'Mission Control was designed as a creator collaboration platform for small businesses that want to launch better local marketing campaigns. The site uses a bold retro space theme, oversized typography, starry backgrounds, profile discovery, business and influencer paths, and a contact flow built around booking a sit-down before launch. The project focused on making the idea feel memorable, approachable, and easy to understand: businesses can find creators who fit their orbit, while creators can connect with brands that match their niche and audience.',
    highlights: [
      'Separate paths for businesses and creators',
      'Creator profile discovery',
      'Booking flow for a pre-launch sit-down',
      'Retro space theme with oversized type',
      'Multi-page React Router build',
    ],
    tags: ['React', 'TypeScript', 'React Router', 'Vercel', 'Responsive Design'],
    year: '2026',
    color: '#8b5cf6',
    image: '/projects/mission-control.webp',
    gallery: [
      '/projects/mission-control-1.webp',
      '/projects/mission-control-2.webp',
      '/projects/mission-control-3.webp',
    ],
    mobileImage: '/projects/mobile/mission-control.webp',
    liveUrl: 'https://mission-control-umber-xi.vercel.app/',
  },
  {
    id: 5,
    title: 'RhythmLab',
    slug: 'rhythmlab',
    category: 'Medical Training Simulator',
    type: 'Simulator',
    industry: 'Medical Education',
    description:
      'An interactive EKG and respiratory therapy simulator with randomized patient cases, live vitals, and clinical decision practice.',
    longDescription:
      'RhythmLab is an interactive medical training application built to make EKG interpretation and emergency decision-making feel like a clinical game. The platform includes randomized patient scenarios, telemetry monitor visuals, live vitals, rhythm recognition, oxygen and airway management decisions, medication safety, scoring, streaks, difficulty levels, and simulation-based interventions. The experience is designed for fast, focused studying where learners can diagnose the rhythm, choose the right treatment, see feedback, and practice stabilizing patients across different emergency scenarios.',
    highlights: [
      'Randomized patient cases with live vitals',
      'Telemetry monitor and rhythm recognition',
      'Airway, oxygen, and medication decisions',
      'Scoring, streaks, and difficulty levels',
      'Instant feedback after every decision',
    ],
    tags: ['React', 'TypeScript', 'Medical Simulation', 'EKG', 'Interactive UI'],
    year: '2026',
    color: '#facc15',
    image: '/projects/rhythmlab.webp',
    gallery: [
      '/projects/rhythmlab-1.webp',
      '/projects/rhythmlab-2.webp',
      '/projects/rhythmlab-3.webp',
    ],
    mobileImage: '/projects/mobile/rhythmlab.webp',
    liveUrl: 'https://ekg-eight.vercel.app/',
  },
  {
    id: 7,
    title: 'VentSim',
    slug: 'ventsim',
    category: 'Ventilator Training Simulator',
    type: 'Simulator',
    industry: 'Medical Education',
    description:
      'A mechanical ventilation simulator that lets Respiratory Therapy students practice on realistic ventilator controls with a live patient physiology engine.',
    longDescription:
      "VentSim is a 'flight simulator for ventilators' built for Respiratory Therapy students who only get hands-on time with real ventilators during clinicals. Rather than a quiz app, VentSim recreates a fully modeled ventilator interface, starting with the Puritan Bennett 980, with live-adjustable controls for FiO2, PEEP, tidal volume, respiratory rate, inspiratory time, trigger sensitivity, and more. Every setting change drives a continuously running patient physiology engine that updates SpO2, heart rate, blood pressure, EtCO2, ABGs, and airway pressures over a realistic timescale, rendered through live Pressure-Time, Flow-Time, and Volume-Time waveforms. The sandbox mode lets students pick a disease state, adjust anything, and control simulation speed to see cause and effect play out exactly like it would on a real patient. The architecture is built so additional ventilator models, like the Hamilton C6, can be added as new control skins on top of the same shared simulation core.",
    highlights: [
      'Fully modeled Puritan Bennett 980 interface',
      'Live physiology engine for SpO2, ABGs, and pressures',
      'Real-time pressure, flow, and volume waveforms',
      'Sandbox mode with disease states and speed control',
      'Shared core that supports new ventilator skins',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Medical Simulation', 'Physiology Engine'],
    year: '2026',
    color: '#0ea5e9',
    image: '/projects/VentSimlogo.webp',
    gallery: [
      '/projects/ventsim-1.webp',
      '/projects/ventsim-2.webp',
      '/projects/ventsim-3.webp',
    ],
    liveUrl: 'https://vent-sim-olive.vercel.app/',
    wideGallery: true,
  },
]

export const featuredProjects = projects.filter(p => p.featured)

export const industries = [...new Set(projects.map(p => p.industry))]

export function getProject(slug: string | undefined) {
  return projects.find(p => p.slug === slug)
}

export function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, '')
}
