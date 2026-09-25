import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CtaBand from './components/CtaBand'
import ScrollToTop from './components/ScrollToTop'
import SEO from './components/SEO'
import useRevealObserver from './lib/useRevealObserver'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()
  useRevealObserver()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SEO />
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/work" element={<Navigate to="/projects" replace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {pathname !== '/contact' && <CtaBand />}
      <Footer />
    </>
  )
}
