"use client"

import { m } from "motion/react"
import { EASE_OUT_EXPO, DURATION } from "@/lib/animations"

interface SlideUpProps {
  children: React.ReactNode
  delay?: number
  distance?: number
  duration?: number
  className?: string
}

export function SlideUp({
  children,
  delay = 0,
  distance = 80,
  duration = DURATION.slow,
  className,
}: SlideUpProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </m.div>
  )
}
