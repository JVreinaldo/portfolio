import { useEffect, useRef } from 'react'

// Marca o elemento como visível assim que ele entra na viewport, para o
// fade/translate sutil definido em [data-reveal] no index.css. Progressive
// enhancement: sem JS (ou sem IntersectionObserver) o conteúdo já é visível.
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    node.setAttribute('data-reveal', 'hidden')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.setAttribute('data-reveal', 'visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
