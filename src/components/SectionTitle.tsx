import './SectionTitle.css'

interface SectionTitleProps {
  eyebrow: string
  heading: string
  accentWord?: string
  sub?: string
  centered?: boolean
  id?: string
}

export default function SectionTitle({ eyebrow, heading, accentWord, sub, centered, id }: SectionTitleProps) {
  const renderHeading = () => {
    if (!accentWord) return heading
    const [before, after] = heading.split(accentWord)
    return (
      <>
        {before}
        <span className="accent">{accentWord}</span>
        {after}
      </>
    )
  }

  return (
    <div className={`section-title-wrap reveal ${centered ? 'centered' : ''}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-heading">
        {renderHeading()}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  )
}
