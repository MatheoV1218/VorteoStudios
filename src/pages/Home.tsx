import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import { projects } from "../data/projects";
import "./Home.css";

const services = [
  {
    name: "Modern Business Websites",
    desc: "Clean, fast websites that make your business look trustworthy and professional the second someone lands on the page.",
    items: [
      "Landing pages",
      "Full websites",
      "Mobile-first layouts",
      "Clear calls to action",
    ],
  },
  {
    name: "Website Redesigns",
    desc: "I take outdated, cluttered, or slow websites and rebuild them into something polished, organized, and easier for customers to use.",
    items: [
      "Better layout",
      "Stronger visuals",
      "Cleaner content flow",
      "Faster loading",
    ],
  },
  {
    name: "React Front-End Builds",
    desc: "Custom React websites built with reusable components, organized code, smooth interactions, and room to grow over time.",
    items: ["React", "TypeScript", "Vite", "Component structure"],
  },
  {
    name: "Booking & Contact Flows",
    desc: "Simple user flows that help visitors take action, whether that means booking a class, sending a message, or learning about a service.",
    items: [
      "Contact forms",
      "Booking links",
      "CTA sections",
      "Lead-focused pages",
    ],
  },
  {
    name: "Responsive Design",
    desc: "Every section is built to look good on phones, tablets, laptops, and desktops because most customers will check your site from their phone first.",
    items: [
      "Mobile menus",
      "Flexible grids",
      "Touch-friendly buttons",
      "Clean spacing",
    ],
  },
  {
    name: "Launch Support",
    desc: "I can help get the site live, connect the domain, clean up final details, and make sure the finished product feels ready for real visitors.",
    items: [
      "Vercel hosting",
      "Domain setup",
      "Final testing",
      "Basic SEO setup",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Understand the business",
    desc: "We start by getting clear on the business, the audience, the goal of the website, and what the visitor should do next.",
  },
  {
    num: "02",
    title: "Plan the structure",
    desc: "I map out the sections, pages, content flow, and main calls to action so the site has a purpose before the design starts.",
  },
  {
    num: "03",
    title: "Design the experience",
    desc: "The visual direction comes together with colors, spacing, typography, layout, and a style that actually fits the brand.",
  },
  {
    num: "04",
    title: "Build the website",
    desc: "I turn the design into a responsive React site with organized components, smooth CSS, and clean code that is easy to update later.",
  },
  {
    num: "05",
    title: "Launch and polish",
    desc: "Before launch, I test the site across screen sizes, clean up small details, connect the important links, and help get it live.",
  },
];

const marqueeItems = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Vite",
  "React Router",
  "Supabase",
  "Vercel",
  "GitHub",
  "Responsive Design",
  "FormSubmit",
  "SEO Basics",
  "Component Design",
];

export default function Home() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Matheo Villada — Web Developer & Designer
            </div>

            <h1 className="hero-title">
              Websites that feel
              <span className="line-2">clean, sharp, and built to grow.</span>
            </h1>

            <p className="hero-sub">
              I build modern websites for small businesses, creators, and local
              brands that need a stronger online presence. Clean design,
              responsive layouts, and clear sections that help people understand
              what you do and take action.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a href="#work" className="btn-secondary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-section" aria-label="Tools and skills">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <div key={`${item}-${i}`} className="marquee-item">
                <span className="dot" />
                {item}
              </div>
            ),
          )}
        </div>
      </div>

      <section id="work" className="project-cinema-section">
        <div className="project-cinema-heading">
          <SectionTitle
            eyebrow="Selected Work"
            heading="A cinematic showcase of recent projects"
            accentWord="recent projects"
            sub="Scroll through the reel, pause on a project, and click into the full case study."
          />
        </div>

        <div className="project-cinema-frame">
          <div className="project-cinema-glow" />

          <div
            className="project-cinema-scroller"
            aria-label="Project showcase"
            onPointerEnter={(e) => {
              e.currentTarget.classList.add("is-user-control");
            }}
            onPointerLeave={(e) => {
              e.currentTarget.classList.remove("is-user-control");
            }}
            onPointerDown={(e) => {
              const slider = e.currentTarget;
              slider.classList.add("is-dragging");
              slider.setPointerCapture(e.pointerId);

              let startX = e.clientX;
              let startScroll = slider.scrollLeft;
              let velocity = 0;
              let lastX = e.clientX;
              let lastTime = performance.now();
              let frame = 0;

              const track = slider.querySelector(
                ".project-cinema-track",
              ) as HTMLElement;
              const halfway = track.scrollWidth / 2;

              const keepInfinite = () => {
                if (slider.scrollLeft >= halfway) {
                  slider.scrollLeft -= halfway;
                }

                if (slider.scrollLeft <= 0) {
                  slider.scrollLeft += halfway;
                }
              };

              const onPointerMove = (moveEvent: PointerEvent) => {
                const now = performance.now();
                const currentX = moveEvent.clientX;
                const dx = currentX - startX;

                slider.scrollLeft = startScroll - dx;
                keepInfinite();

                const dt = now - lastTime;
                if (dt > 0) {
                  velocity = (lastX - currentX) / dt;
                }

                lastX = currentX;
                lastTime = now;
              };

              const momentum = () => {
                slider.scrollLeft += velocity * 18;
                velocity *= 0.94;
                keepInfinite();

                if (Math.abs(velocity) > 0.02) {
                  frame = requestAnimationFrame(momentum);
                }
              };

              const stopDragging = () => {
                slider.classList.remove("is-dragging");
                slider.releasePointerCapture(e.pointerId);

                window.removeEventListener("pointermove", onPointerMove);
                window.removeEventListener("pointerup", stopDragging);
                window.removeEventListener("pointercancel", stopDragging);

                cancelAnimationFrame(frame);
                frame = requestAnimationFrame(momentum);
              };

              window.addEventListener("pointermove", onPointerMove);
              window.addEventListener("pointerup", stopDragging);
              window.addEventListener("pointercancel", stopDragging);
            }}
          >
            <div className="project-cinema-track">
              {[...projects, ...projects, ...projects, ...projects].map(
                (project, i) => (
                  <a
                    href={`/projects/${project.slug}`}
                    key={`${project.id}-${i}`}
                    className="cinema-project-card"
                    style={{ ["--project-color" as string]: project.color }}
                    aria-label={`View ${project.title} project`}
                  >
                    <div className="cinema-project-image">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                      />
                    </div>

                    <div className="cinema-project-content">
                      <div>
                        <span>{project.category}</span>
                        <h3>{project.title}</h3>
                      </div>

                      <p>{project.description}</p>

                      <div className="cinema-project-footer">
                        <small>{project.year}</small>
                        <strong>View Project →</strong>
                      </div>
                    </div>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="services-inner">
          <SectionTitle
            eyebrow="What I Do"
            heading="Websites that help businesses look legit online"
            accentWord="look legit online"
            sub="My focus is simple: make the business easier to understand, easier to trust, and easier to contact."
          />

          <div className="services-grid">
            {services.map((service, i) => (
              <article key={service.name} className="service-card">
                <div className="service-number">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="service-name">{service.name}</h3>
                <p className="service-desc">{service.desc}</p>

                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-wrapper">
          <div className="about-image-placeholder">
            <div className="placeholder-content">
              <div className="placeholder-circle">MV</div>
              <h3>Professional Photo</h3>
              <p>Add a professional headshot here.</p>
            </div>
          </div>

          <div className="about-content">
            <span className="about-eyebrow">ABOUT ME</span>

            <h2>
              Hi, I'm <span>Matheo.</span>
            </h2>

            <p>
              I build modern websites for small businesses, creators, and local
              brands that want to look more professional online.
            </p>

            <p>
              My focus is simple: clean design, responsive development, and
              websites that help visitors quickly understand what you do and
              take action.
            </p>

            <div className="about-highlights">
              <div>
                <strong>📍</strong>
                White Plains, NY
              </div>

              <div>
                <strong>💻</strong>
                React • TypeScript • Supabase
              </div>

              <div>
                <strong>🚀</strong>
                Available for freelance work
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="process-inner">
          <SectionTitle
            eyebrow="How It Works"
            heading="A clear path from idea to launch"
            accentWord="idea to launch"
            sub="Every project is different, so I keep the steps simple and flexible instead of forcing every client into the same timeline."
          />

          <div className="process-steps">
            {processSteps.map((step) => (
              <article key={step.num} className="process-step">
                <div className="step-number">{step.num}</div>

                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
