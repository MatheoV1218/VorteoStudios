export const SITE = {
  name: 'Vorteo Studios',
  url: 'https://www.vorteostudios.com',
  email: 'vorteostudios@gmail.com',
  city: 'White Plains',
  region: 'NY',
  founder: 'Matheo Villada',
  linkedin: 'https://www.linkedin.com/in/matheo-villada/',
  github: 'https://github.com/MatheoV1218',
}

export const NAV_LINKS = [
  { to: '/projects', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
]

export interface Service {
  slug: string
  name: string
  short: string
  desc: string
  items: string[]
}

export const services: Service[] = [
  {
    slug: 'business-websites',
    name: 'Business Websites',
    short: 'Clean, fast sites that make you look legit the second someone lands.',
    desc: 'Clean, fast websites that make your business look trustworthy and professional the second someone lands on the page. Built around the one thing you want visitors to do next.',
    items: ['Landing pages', 'Multi-page websites', 'Mobile-first layouts', 'Clear calls to action'],
  },
  {
    slug: 'redesigns',
    name: 'Website Redesigns',
    short: 'Outdated or cluttered? We rebuild it into something polished.',
    desc: 'We take outdated, cluttered, or slow websites and rebuild them into something polished, organized, and easier for customers to use — without losing what already works.',
    items: ['Better layout', 'Stronger visuals', 'Cleaner content flow', 'Faster loading'],
  },
  {
    slug: 'web-apps',
    name: 'Web Apps & E-commerce',
    short: 'Custom React builds — stores, dashboards, tools, and simulators.',
    desc: 'Custom React applications built with reusable components and organized code: online stores, admin dashboards, booking tools, interactive simulators, and more.',
    items: ['React + TypeScript', 'Supabase backends', 'Admin dashboards', 'Online stores'],
  },
  {
    slug: 'booking-contact',
    name: 'Booking & Lead Flows',
    short: 'Turn visitors into bookings, orders, and inquiries.',
    desc: 'Simple user flows that help visitors take action — booking a class, ordering food, requesting a consultation, or sending a message that lands straight in your inbox.',
    items: ['Contact & quote forms', 'Booking integrations', 'Ordering links', 'Click-to-call'],
  },
  {
    slug: 'seo',
    name: 'SEO Foundations',
    short: 'Built to be found — per-page metadata, structured data, sitemaps.',
    desc: 'Every build ships with the technical groundwork search engines look for: unique titles and descriptions, structured data, sitemaps, fast load times, and link previews that look great when shared.',
    items: ['Per-page metadata', 'Structured data', 'Sitemaps', 'Social share previews'],
  },
  {
    slug: 'launch',
    name: 'Launch & Support',
    short: 'Domain, hosting, testing, and a smooth go-live.',
    desc: 'We get the site live, connect your domain, test across devices, clean up final details, and make sure the finished product is ready for real visitors.',
    items: ['Vercel hosting', 'Domain setup', 'Cross-device testing', 'Analytics setup'],
  },
]

export const included = [
  { title: 'Custom design', desc: 'No templates. Every layout is designed around your brand and your customers.' },
  { title: 'Mobile-first build', desc: 'Most visitors check from their phone first, so that is where we start.' },
  { title: 'Performance tuned', desc: 'Optimized images, lean code, and fast hosting so pages load quickly.' },
  { title: 'SEO groundwork', desc: 'Metadata, structured data, and a sitemap on every page from day one.' },
  { title: 'Analytics ready', desc: 'Privacy-friendly analytics so you can see how visitors use your site.' },
  { title: 'Launch support', desc: 'Domain, hosting, and final testing handled so launch day is painless.' },
]

export const processSteps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We get clear on the business, the audience, the goal of the website, and what a visitor should do next.',
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'We map out the pages, content flow, and main calls to action so the site has a purpose before design starts.',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Colors, typography, spacing, and layout come together in a visual direction that actually fits the brand.',
  },
  {
    num: '04',
    title: 'Build',
    desc: 'We turn the design into a responsive React site with organized components and clean code that is easy to update.',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'We test across screen sizes, polish the details, connect the important links, and get it live.',
  },
]

export const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Every project is quoted based on its scope — the number of pages, features like booking or e-commerce, and how much content needs to be created. After a quick conversation about your goals, we send a clear quote before any work begins.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'It depends on the size of the project. A focused landing page moves much faster than a full e-commerce store or custom web app. We give you a realistic timeline after our first call and keep you updated as we go.',
  },
  {
    q: 'Do you only work with businesses in White Plains?',
    a: 'No. We are based in White Plains, NY and love working with Westchester businesses, but we are remote friendly and have built sites for clients in Connecticut, South Carolina, and beyond.',
  },
  {
    q: 'Will my website work on phones?',
    a: 'Yes. Every site is designed mobile-first and tested on phones, tablets, laptops, and desktops, because most customers check a business from their phone before anything else.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. Redesigns are one of our most common projects. We keep what works, fix what does not, and rebuild the site into something faster, cleaner, and easier to use.',
  },
  {
    q: 'Do you handle hosting and domains?',
    a: 'Yes. We deploy sites on Vercel and help connect your domain so launch day is simple. If you already have a domain, we will work with it.',
  },
  {
    q: 'Will my site show up on Google?',
    a: 'Every build includes SEO foundations: unique page titles and descriptions, structured data, a sitemap, and fast load times. Rankings take time and depend on competition, but your site will be built the way search engines expect.',
  },
]
