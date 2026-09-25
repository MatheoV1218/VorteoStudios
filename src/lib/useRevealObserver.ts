import { useEffect } from 'react'

/**
 * One shared IntersectionObserver for every `.reveal` element on the page.
 * A MutationObserver picks up elements that mount later (route changes,
 * filtered lists), so components only need to add the class.
 */
export default function useRevealObserver() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.documentElement.classList.remove('js')
      return
    }

    const io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    const scan = (root: ParentNode) => {
      root.querySelectorAll('.reveal:not(.is-visible)').forEach(el => io.observe(el))
    }

    scan(document)

    const mo = new MutationObserver(records => {
      for (const r of records) {
        r.addedNodes.forEach(node => {
          if (!(node instanceof HTMLElement)) return
          if (node.matches('.reveal:not(.is-visible)')) io.observe(node)
          scan(node)
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
