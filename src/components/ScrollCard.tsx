import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type ScrollCardProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in ms (converted to seconds for the transition). */
  delay?: number
}

/** Smooth ease-out curve — soft start, no overshoot bounce. */
const EASE_OUT_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1]

/**
 * Entrance: slow fade + gentle rise once into view.
 * No continuous scroll-linked 3D (that was the lag source).
 * Honors prefers-reduced-motion.
 */
export function ScrollCard({ children, className = '', delay = 0 }: ScrollCardProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: 0.85,
        delay: Math.min(delay / 1000, 0.35),
        ease: EASE_OUT_SMOOTH,
      }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  )
}
