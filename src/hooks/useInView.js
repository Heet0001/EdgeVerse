import { useState, useEffect, useRef } from 'react'

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  const { rootMargin = '0px 0px -50px 0px', threshold = 0.1, once = true } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold, once])

  return [ref, isInView]
}
