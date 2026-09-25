import type { ReactNode } from 'react'
import './Frames.css'

interface BrowserFrameProps {
  url?: string
  children: ReactNode
  className?: string
  tone?: 'light' | 'dark'
}

export function BrowserFrame({ url, children, className, tone = 'light' }: BrowserFrameProps) {
  return (
    <div className={`browser-frame browser-frame-${tone} ${className ?? ''}`}>
      <div className="browser-bar" aria-hidden="true">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        {url && <span className="browser-url">{url}</span>}
      </div>
      <div className="browser-body">{children}</div>
    </div>
  )
}

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`phone-frame ${className ?? ''}`}>
      <span className="phone-notch" aria-hidden="true" />
      <div className="phone-screen">{children}</div>
    </div>
  )
}
