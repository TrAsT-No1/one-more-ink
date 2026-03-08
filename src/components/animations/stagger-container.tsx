"use client"

import { m } from "motion/react"
import { staggerContainer } from "@/lib/animations"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
}: StaggerContainerProps) {
  return (
    <m.div
      variants={{
        ...staggerContainer,
        visible: {
          ...staggerContainer.visible,
          transition: {
            ...staggerContainer.visible.transition,
            delayChildren:
              delay + (staggerContainer.visible.transition.delayChildren ?? 0),
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </m.div>
  )
}
