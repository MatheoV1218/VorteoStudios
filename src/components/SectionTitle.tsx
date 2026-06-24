import './SectionTitle.css'

interface SectionTitleProps {
  eyebrow: string
  heading: string
  accentWord?: string
  sub?: string
  centered?: boolean
}

export default function SectionTitle({ eyebrow, heading, accentWord, sub, centered }: SectionTitleProps) {
  const renderHeading = () => {
    if (!accentWord) return heading
    const parts = heading.split(accentWord)
    return (
      <>
        {parts[0]}
        <span className="accent">{accentWord}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={`section-title-wrap ${centered ? 'centered' : ''}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-heading">{renderHeading()}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  )
}
