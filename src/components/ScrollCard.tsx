import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type ScrollCardProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Subtle 3D lift + mild tilt as the card scrolls into view.
 * Fully disabled when prefers-reduced-motion is set.
 */
export function ScrollCard({ children, className = '', delay = 0 }: ScrollCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0])
  const y = useTransform(scrollYProgress, [0, 1], [28, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.35, 0.9, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1])

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        y,
        opacity,
        scale,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </motion.div>
  )
}
