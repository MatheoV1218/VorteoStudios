import { useEffect, useMemo, useRef, useState } from 'react'
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

const seeded = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const seededRange = (seed: number, min: number, max: number) => min + seeded(seed) * (max - min)
const finePointerQuery = '(hover: hover) and (pointer: fine)'

export default function ProjectSpiral({ projects }: ProjectSpiralProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ startY: 0, startProgress: 0, dragging: false, moved: false })
  const wheelTimeout = useRef<number | undefined>(undefined)

  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia(finePointerQuery).matches
  })

  const maxIndex = Math.max(projects.length - 1, 0)
  const activeIndex = Math.round(clamp(progress, 0, maxIndex))
  const active = projects[activeIndex]

  const cardVariance = useMemo(
    () => projects.map((_, i) => ({
      rotX: seededRange(i * 3.1 + 1, -24, 24),
      rotZ: seededRange(i * 7.7 + 2, -18, 18),
      offX: seededRange(i * 5.3 + 3, -52, 52),
      offY: seededRange(i * 11.9 + 4, -34, 34),
    })),
    [projects]
  )

  useEffect(() => {
    const query = window.matchMedia(finePointerQuery)
    const update = () => setIsFinePointer(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

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
    const sensitivity = 130
    const next = clamp(dragRef.current.startProgress - dy / sensitivity, 0, maxIndex)
    setProgress(next)
  }

  const endDrag = () => {
    if (!dragRef.current.dragging) return
    dragRef.current.dragging = false
    setIsDragging(false)
    setProgress(prev => Math.round(prev))
  }

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
  }

  const getCardStyle = (local: number, index: number): CSSProperties => {
    const dist = Math.abs(local)
    const variance = cardVariance[index]
    const scatter = clamp(dist / 1.5, 0, 1)

    const rotY = local * 32
    const rotX = variance.rotX * scatter
    const rotZ = local * -5 + variance.rotZ * scatter
    const x = Math.sin(local * 1.05) * 58 + variance.offX * scatter
    const y = local * 98 + variance.offY * scatter
    const z = -dist * 235

    const scale = clamp(1 - dist * 0.17, 0.32, 1)
    const opacity = clamp(1 - dist * 0.15, 0, 1)
    const brightness = clamp(1 - dist * 0.16, 0.32, 1)
    const saturateAmt = clamp(1 - dist * 0.2, 0.25, 1)

    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scale})`,
      opacity,
      filter: `brightness(${brightness}) saturate(${saturateAmt})`,
      zIndex: Math.round(1000 - dist * 60),
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
          <span className="spiral-counter">
            {isFinePointer ? `${pad(activeIndex + 1)} / ${pad(projects.length)}` : 'Swipe projects'}
          </span>
        </div>

        {isFinePointer ? (
          <>
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
                      style={getCardStyle(local, i)}
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
          </>
        ) : (
          <div className="spiral-mobile-list" aria-label="Project list">
            {projects.map(project => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="spiral-mobile-card"
                style={{ '--project-color': project.color } as CSSProperties}
                aria-label={`View ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  draggable={false}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <div className="spiral-mobile-card-content">
                  <span>{project.category} · {project.year}</span>
                  <strong>{project.title}</strong>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
