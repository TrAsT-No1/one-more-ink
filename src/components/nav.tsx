"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { STUDIO_INFO } from "@/lib/constants"

const NAV_LINKS = [
  { href: "/artisti", label: "Artisti" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/servizi", label: "Servizi" },
  { href: "/shop", label: "Shop" },
]

export function Nav({ isHome = false }: { isHome?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="tattoo-pattern fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 bg-ink/70 backdrop-blur-md">
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="One More Ink"
            width={96}
            height={133}
            className="h-[96px] w-auto"
          />
          <span className="font-display font-extrabold text-paper text-2xl hidden sm:block">
            One <span className="text-rust-light">More</span> Ink
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-glow text-base font-display font-bold uppercase tracking-widest text-paper/70 hover:text-rust-light transition-colors hidden sm:block"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow text-base font-display font-bold uppercase tracking-widest bg-rust border border-rust text-paper px-5 py-2.5 hover:bg-paper hover:text-ink hover:border-paper transition-colors hidden sm:inline-block"
          >
            Prenota
          </a>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-paper transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-paper transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-paper transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-300 sm:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-display font-extrabold uppercase tracking-widest text-paper hover:text-rust-light transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={STUDIO_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-4 text-lg font-display font-bold uppercase tracking-widest bg-rust border border-rust text-paper px-8 py-4 hover:bg-paper hover:text-ink hover:border-paper transition-colors"
        >
          Prenota su WhatsApp
        </a>
      </div>
    </>
  )
}
