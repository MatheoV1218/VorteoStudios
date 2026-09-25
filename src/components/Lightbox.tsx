import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import './Lightbox.css'

interface LightboxProps {
  images: { src: string; alt: string }[]
  index: number
  onChange: (index: number) => void
  onClose: () => void
}

export default function Lightbox({ images, index, onChange, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchX = useRef<number | null>(null)
  const count = images.length
  const prev = () => onChange((index - 1 + count) % count)
  const next = () => onChange((index + 1) % count)

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.classList.add('menu-open')
    return () => {
      document.body.classList.remove('menu-open')
      opener?.focus()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count)
      if (e.key === 'ArrowRight') onChange((index + 1) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, count, onChange, onClose])

  const image = images[index]

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${count}`}
      onClick={e => e.target === e.currentTarget && onClose()}
      onTouchStart={e => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={e => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)()
        touchX.current = null
      }}
    >
      <button ref={closeRef} type="button" className="lightbox-btn lightbox-close" onClick={onClose} aria-label="Close">
        <FiX />
      </button>

      <figure className="lightbox-figure">
        <img key={image.src} src={image.src} alt={image.alt} />
        <figcaption>
          {index + 1} / {count}
        </figcaption>
      </figure>

      {count > 1 && (
        <>
          <button type="button" className="lightbox-btn lightbox-prev" onClick={prev} aria-label="Previous image">
            <FiChevronLeft />
          </button>
          <button type="button" className="lightbox-btn lightbox-next" onClick={next} aria-label="Next image">
            <FiChevronRight />
          </button>
        </>
      )}
    </div>,
    document.body,
  )
}
