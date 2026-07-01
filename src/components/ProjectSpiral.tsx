import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent as ReactPointerEvent, MouseEvent as ReactMouseEvent, KeyboardEvent as ReactKeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import type { Project } from '../data/projects'
import './ProjectSpiral.css'

interface ProjectSpiralProps {
  projects: Project[]
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
const pad = (n: number) => String(n).padStart(2, '0')

/**
 * A draggable, vertical 3D spiral of project images.
 *
 * Each card sits at a point along a helix: as `progress` changes, cards
 * rotate around the Y axis, drift along a sine curve, climb/descend the
 * vertical axis, and recede in depth — all computed from a single number,
 * so adding another project is just adding another array entry.
 *
 * Interaction: drag (pointer events, works for mouse/touch/pen), arrow
 * keys, on-screen prev/next buttons, or the mouse wheel on desktop. The
 * drag is captured only inside the dark "stage" frame, so it never fights
 * the page's normal vertical scroll outside of it.
 */
export default function ProjectSpiral({ projects }: ProjectSpiralProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ startY: 0, startProgress: 0, dragging: false, moved: false })
  const wheelTimeout = useRef<number | undefined>(undefined)

  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const [isFinePointer, setIsFinePointer] = useState(false)

  const maxIndex = Math.max(projects.length - 1, 0)
  const activeIndex = Math.round(clamp(progress, 0, maxIndex))
  const active = projects[activeIndex]

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setIsFinePointer(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  // Auto-fade the drag hint after a few seconds so it doesn't linger.
  useEffect(() => {
    const t = window.setTimeout(() => setShowHint(false), 4500)
    return () => window.clearTimeout(t)
  }, [])

  const go = (dir: number) => {
    setShowHint(false)
    setProgress(prev => clamp(Math.round(prev) + dir, 0, maxIndex))
  }

  const jumpTo = (index: number) => {
    setShowHint(false)
    setProgress(clamp(index, 0, maxIndex))
  }

  // ── Drag (pointer events cover mouse + touch + pen uniformly) ──
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (maxIndex === 0) return
    stageRef.current?.setPointerCapture(e.pointerId)
    dragRef.current = { startY: e.clientY, startProgress: progress, dragging: true, moved: false }
    setIsDragging(true)
    setShowHint(false)
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.dragging) return
    const dy = e.clientY - dragRef.current.startY
    if (Math.abs(dy) > 4) dragRef.current.moved = true
    const sensitivity = 130 // px of drag per project step
    const next = clamp(dragRef.current.startProgress - dy / sensitivity, 0, maxIndex)
    setProgress(next)
  }

  const endDrag = () => {
    if (!dragRef.current.dragging) return
    dragRef.current.dragging = false
    setIsDragging(false)
    setProgress(prev => Math.round(prev))
  }

  // ── Desktop wheel support (contained to the stage, non-passive so we
  // can prevent the page from scrolling while actively spinning it) ──
  useEffect(() => {
    const stage = stageRef.current
    if (!stage || !isFinePointer || maxIndex === 0) return

    const onWheelNative = (e: WheelEvent) => {
      e.preventDefault()
      setShowHint(false)
      setProgress(prev => clamp(prev + e.deltaY / 320, 0, maxIndex))
      if (wheelTimeout.current) window.clearTimeout(wheelTimeout.current)
      wheelTimeout.current = window.setTimeout(() => setProgress(p => Math.round(p)), 160)
    }

    stage.addEventListener('wheel', onWheelNative, { passive: false })
    return () => stage.removeEventListener('wheel', onWheelNative)
  }, [isFinePointer, maxIndex])

  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); go(1) }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
  }

  const handleCardClick = (e: ReactMouseEvent<HTMLAnchorElement>, i: number) => {
    if (dragRef.current.moved) { e.preventDefault(); return }
    if (i !== activeIndex) {
      e.preventDefault()
      jumpTo(i)
    }
    // if it's already the active card, let the Link navigate normally
  }

  const getCardStyle = (local: number): CSSProperties => {
    const angle = local * 24
    const y = local * 106
    const z = -Math.abs(local) * 205
    const x = Math.sin(local * 1.1) * 84
    const tilt = local * -7
    const scale = clamp(1 - Math.abs(local) * 0.15, 0.42, 1)
    const opacity = clamp(1 - Math.abs(local) * 0.34, 0, 1)
    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${angle}deg) rotateZ(${tilt}deg) scale(${scale})`,
      opacity,
      zIndex: Math.round(200 - Math.abs(local) * 10),
      pointerEvents: opacity < 0.08 ? 'none' : 'auto',
    }
  }

  return (
    <section id="work" className="spiral-section">
      <div className="spiral-header">
        <SectionTitle
          eyebrow="Selected Work"
          heading="Projects that got results"
          accentWord="got results"
          sub="Drag through the spiral, use the arrows, or scroll to explore each build."
        />
      </div>

      <div className="spiral-frame">
        <div className="spiral-glow spiral-glow-1" />
        <div className="spiral-glow spiral-glow-2" />

        <div className="spiral-topbar">
          <span className="spiral-brand">Work<span>.</span></span>
          <span className="spiral-counter">{pad(activeIndex + 1)} / {pad(projects.length)}</span>
        </div>

        <div
          className={`spiral-stage ${isDragging ? 'is-dragging' : 'is-settled'}`}
          ref={stageRef}
          tabIndex={0}
          role="listbox"
          aria-label="Project spiral — drag, scroll, or use arrow keys to browse"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={onKeyDown}
        >
          <div className="spiral-track">
            {projects.map((project, i) => {
              const local = i - progress
              if (Math.abs(local) > 3.4) return null
              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className={`spiral-card ${i === activeIndex ? 'active' : ''}`}
                  style={getCardStyle(local)}
                  onClick={e => handleCardClick(e, i)}
                  role="option"
                  aria-selected={i === activeIndex}
                  aria-label={project.title}
                  tabIndex={-1}
                  draggable={false}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    draggable={false}
                    onError={e => { e.currentTarget.style.display = 'none' }}
                  />
                </Link>
              )
            })}
          </div>

          {showHint && !isDragging && (
            <div className="spiral-hint">
              <span className="spiral-hint-arrow">↕</span> Drag to explore
            </div>
          )}
        </div>

        <div className="spiral-bottombar">
          <div className="spiral-active-info">
            <span className="spiral-active-meta">{active?.category} · {active?.year}</span>
            <h3 className="spiral-active-title">{active?.title}</h3>
          </div>

          <div className="spiral-controls">
            <button type="button" className="spiral-nav-btn" onClick={() => go(-1)} aria-label="Previous project" disabled={activeIndex === 0}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" className="spiral-nav-btn" onClick={() => go(1)} aria-label="Next project" disabled={activeIndex === maxIndex}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 4v8m4-4-4 4-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {active && (
              <Link to={`/projects/${active.slug}`} className="spiral-cta">
                View Case Study
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            )}
          </div>
        </div>

        <div className="spiral-dots">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              className={`spiral-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => jumpTo(i)}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
