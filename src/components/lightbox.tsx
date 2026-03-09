"use client"

import { useCallback, useEffect } from "react"
import Image from "next/image"
import { AnimatePresence, m } from "motion/react"
import { artists } from "@/lib/data"
import type { GalleryItem } from "@/lib/data"

interface LightboxProps {
  items: GalleryItem[]
  currentIndex: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ items, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const item = currentIndex !== null ? items[currentIndex] : null

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    if (currentIndex === null) return
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex, handleKeyDown])

  return (
    <AnimatePresence>
      {item && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-paper/60 hover:text-paper transition-colors p-2"
            aria-label="Chiudi"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev button */}
          {currentIndex !== null && currentIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev() }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-paper/40 hover:text-paper transition-colors p-2"
              aria-label="Precedente"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {currentIndex !== null && currentIndex < items.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext() }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-paper/40 hover:text-paper transition-colors p-2"
              aria-label="Successivo"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Image + info */}
          <m.div
            key={item.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] aspect-square">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-paper font-display font-bold text-sm">{item.label}</p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-paper/40 text-xs font-display uppercase tracking-wider">{item.style}</span>
                <span className="text-rust-light text-xs">·</span>
                <span className="text-rust-light text-xs font-display">
                  {artists.find((a) => a.id === item.artist)?.name.split(" ")[0] || item.artist}
                </span>
              </div>
              {currentIndex !== null && (
                <p className="text-paper/20 text-[10px] mt-1 font-display">
                  {currentIndex + 1} / {items.length}
                </p>
              )}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
