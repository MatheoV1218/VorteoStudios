// src/pages/Home.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import { projects } from "../data/projects";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <Navbar />

      <section className="hero">
        <div className="hero-bg hero-bg-one"></div>
        <div className="hero-bg hero-bg-two"></div>

        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">Website Design & Development</p>
            <h1>Clean websites that make local businesses look professional.</h1>
            <p>
              I build smooth, modern, mobile-friendly websites for gyms,
              restaurants, stores, creators, and service businesses.
            </p>

            <div className="hero-actions">
              <a href="#work">View My Work</a>
              <a href="#contact">Get A Website</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mock-window">
              <div></div>
              <div></div>
              <div></div>
            </div>

            <p>Fast. Responsive. Built to convert.</p>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <SectionTitle
          eyebrow="Featured Work"
          title="Recent websites"
          text="A few projects showing the kind of clean, responsive websites I build."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="section soft-section" id="services">
        <SectionTitle
          eyebrow="Services"
          title="What I can build for you"
          text="Simple, professional websites that help customers trust your business faster."
        />

        <div className="services-grid">
          <div className="glass-card">
            <h3>Business Websites</h3>
            <p>Clean websites for local stores, service businesses, and personal brands.</p>
          </div>

          <div className="glass-card">
            <h3>Restaurant Websites</h3>
            <p>Menus, hours, location, contact info, ordering links, and reservation buttons.</p>
          </div>

          <div className="glass-card">
            <h3>Gym & Fitness Sites</h3>
            <p>Premium fitness websites with services, memberships, booking links, and forms.</p>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <SectionTitle
          eyebrow="Process"
          title="Simple from start to launch"
          text="A clear process so you always know what is happening."
        />

        <div className="process-grid">
          {["Plan", "Design", "Build", "Launch"].map((step, index) => (
            <div className="process-card" key={step}>
              <span>0{index + 1}</span>
              <h3>{step}</h3>
              <p>
                {index === 0 && "We figure out the pages, goals, and style your business needs."}
                {index === 1 && "I create a clean layout that matches your brand and audience."}
                {index === 2 && "Your website gets built responsive, smooth, and fast."}
                {index === 3 && "The site goes live and is ready to share with customers."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Ready for a better website?"
            text="Tell me what type of website you need and I’ll help you turn it into something clean and professional."
          />
        </div>

        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}

export default Home;