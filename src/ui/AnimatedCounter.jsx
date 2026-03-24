import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

export function AnimatedCounter({ value, suffix = '', duration = 1500 }) {
  const [ref, isInView] = useInView({ once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const start = performance.now()
    const numericValue = typeof value === 'number' ? value : parseInt(value, 10)

    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * numericValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}
