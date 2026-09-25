import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <PageHero
      crumbs={[{ label: 'Page not found' }]}
      eyebrow="404"
      title={
        <>
          This page <span className="accent">doesn&apos;t exist.</span>
        </>
      }
      lead="The link may be broken or the page may have moved. Here are a few good places to go instead."
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
        <Link to="/" className="btn btn-primary">
          Back home <FiArrowRight aria-hidden="true" />
        </Link>
        <Link to="/projects" className="btn btn-ghost">
          See our work
        </Link>
      </div>
    </PageHero>
  )
}
