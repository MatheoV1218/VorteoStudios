interface LogoProps {
  className?: string
  /** Colour of the V strokes; the bar is always brand violet. */
  tone?: 'dark' | 'light'
}

export function LogoMark({ className, tone = 'dark' }: LogoProps) {
  return (
    <svg className={className} viewBox="320 350 590 500" aria-hidden="true" focusable="false">
      <polygon points="330,360 400,360 588,712 715,477 782,477 588,840" fill={tone === 'dark' ? '#0f0d24' : '#ffffff'} />
      <polygon points="578,360 898,360 866,418 546,418" fill="#5b21f5" />
      <polygon points="683,440 693,440 580,652 571,652" fill="#5b21f5" />
    </svg>
  )
}

export default function Logo({ className, tone = 'dark' }: LogoProps) {
  return (
    <span className={`logo ${className ?? ''}`}>
      <LogoMark className="logo-mark" tone={tone} />
      <span className="logo-word">
        Vorteo<span>Studios</span>
      </span>
    </span>
  )
}
