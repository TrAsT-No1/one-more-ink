// Shared animation variants, easing curves, and durations
// Used by all animation primitives for visual consistency

export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const
export const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const

export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  hero: 1.4,
} as const

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: [...EASE_SMOOTH] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: [...EASE_SMOOTH] },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: [...EASE_SMOOTH] },
  },
}
