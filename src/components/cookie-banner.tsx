"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] bg-ink text-paper px-6 py-4 border-t border-paper/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-paper/70">
          Questo sito utilizza solo cookie tecnici necessari al funzionamento.{" "}
          <Link href="/privacy" className="text-rust-light hover:text-rust transition-colors underline">
            Privacy Policy
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 text-xs font-display font-bold uppercase tracking-widest bg-rust text-paper px-6 py-2.5 hover:bg-paper hover:text-ink transition-colors"
        >
          Ho capito
        </button>
      </div>
    </div>
  )
}
