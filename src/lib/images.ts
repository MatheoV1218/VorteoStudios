// Every project image in /public/projects has generated siblings:
//   /projects/thumbs/<file>  (≤800px wide)
//   /projects/md/<file>      (≤1400px wide)
// so phones never download the 2048px originals.

const variant = (src: string, dir: 'thumbs' | 'md') => src.replace('/projects/', `/projects/${dir}/`)

export function srcSet(src: string) {
  return `${variant(src, 'thumbs')} 800w, ${variant(src, 'md')} 1400w, ${src} 2048w`
}

export function thumb(src: string) {
  return variant(src, 'thumbs')
}
