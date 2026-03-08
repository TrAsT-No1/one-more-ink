"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const LenisContext = createContext<Lenis | null>(null)

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      autoRaf: false, // CRITICAL: GSAP ticker drives the loop
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false, // Better mobile perf
    })

    // Sync Lenis scroll events to ScrollTrigger
    lenisInstance.on("scroll", ScrollTrigger.update)

    // GSAP ticker drives Lenis RAF (single animation loop)
    const update = (time: number) => {
      lenisInstance.raf(time * 1000) // GSAP gives seconds, Lenis wants ms
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    setLenis(lenisInstance)

    return () => {
      lenisInstance.off("scroll", ScrollTrigger.update)
      gsap.ticker.remove(update)
      lenisInstance.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}

export function useLenis() {
  return useContext(LenisContext)
}
