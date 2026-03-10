"use client"

import { Suspense, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { m } from "motion/react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { Lightbox } from "@/components/lightbox"
import { fadeInUp } from "@/lib/animations"
import { STUDIO_INFO, SOCIAL_LINKS } from "@/lib/constants"
import { artists, tattooStyles, galleryItems } from "@/lib/data"

function PortfolioContent() {
  const searchParams = useSearchParams()
  const activeStyle = searchParams.get("style") || "all"
  const activeArtist = searchParams.get("artist") || "all"
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = galleryItems.filter((item) => {
    const matchStyle = activeStyle === "all" || item.style.toLowerCase().replace(/\s+/g, "-") === activeStyle
    const matchArtist = activeArtist === "all" || item.artist === activeArtist
    return matchStyle && matchArtist
  })

  const buildHref = (key: string, value: string) => {
    const params = new URLSearchParams()
    if (key === "style") {
      if (value !== "all") params.set("style", value)
      if (activeArtist !== "all") params.set("artist", activeArtist)
    } else {
      if (activeStyle !== "all") params.set("style", activeStyle)
      if (value !== "all") params.set("artist", value)
    }
    const qs = params.toString()
    return `/portfolio${qs ? `?${qs}` : ""}`
  }

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))
  }, [])

  const handleNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i))
  }, [filtered.length])

  const handleClose = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  return (
    <main>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-ink/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="One More Ink" width={72} height={72} />
          <span className="font-display font-extrabold text-paper text-xl hidden sm:block">One More Ink</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/#artisti" className="text-xs font-display uppercase tracking-widest text-paper/60 hover:text-paper transition-colors hidden sm:block">
            Artisti
          </Link>
          <Link href="/portfolio" className="text-xs font-display uppercase tracking-widest text-paper">
            Portfolio
          </Link>
          <Link href="/#servizi" className="text-xs font-display uppercase tracking-widest text-paper/60 hover:text-paper transition-colors hidden sm:block">
            Servizi
          </Link>
          <Link href="/shop" className="text-xs font-display uppercase tracking-widest text-paper/60 hover:text-paper transition-colors hidden sm:block">
            Shop
          </Link>
          <a
            href={STUDIO_INFO.whatsappUrl}
            className="text-xs font-display uppercase tracking-widest border border-paper/30 text-paper px-4 py-2 hover:bg-rust hover:border-rust transition-colors"
          >
            Prenota
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-6">
              <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-1">I nostri lavori</p>
              <h1 className="font-display text-4xl font-extrabold md:text-6xl">
                <span className="underscore-title">portfolio</span>
              </h1>
            </div>
            <p className="text-ink-muted max-w-lg leading-relaxed">
              {filtered.length} {filtered.length === 1 ? "lavoro" : "lavori"}
              {activeStyle !== "all" && ` in ${tattooStyles.find(s => s.slug === activeStyle)?.name || activeStyle}`}
              {activeArtist !== "all" && ` di ${artists.find(a => a.id === activeArtist)?.name || activeArtist}`}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[73px] z-40 bg-paper/95 backdrop-blur-sm border-b border-ink/8 px-6 py-4">
        <div className="max-w-6xl mx-auto space-y-3">
          {/* Style filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-[10px] font-display uppercase tracking-widest text-ink-faded mr-1 shrink-0">Stile</span>
            <Link
              href={buildHref("style", "all")}
              className={`shrink-0 text-xs font-display uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                activeStyle === "all"
                  ? "bg-ink text-paper border-ink"
                  : "border-ink/15 text-ink-muted hover:border-ink/30"
              }`}
            >
              Tutti
            </Link>
            {tattooStyles.map((style) => (
              <Link
                key={style.id}
                href={buildHref("style", style.slug)}
                className={`shrink-0 text-xs font-display uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                  activeStyle === style.slug
                    ? "bg-ink text-paper border-ink"
                    : "border-ink/15 text-ink-muted hover:border-ink/30"
                }`}
              >
                {style.name}
              </Link>
            ))}
          </div>

          {/* Artist filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-[10px] font-display uppercase tracking-widest text-ink-faded mr-1 shrink-0">Artista</span>
            <Link
              href={buildHref("artist", "all")}
              className={`shrink-0 text-xs font-display uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                activeArtist === "all"
                  ? "bg-rust text-paper border-rust"
                  : "border-ink/15 text-ink-muted hover:border-ink/30"
              }`}
            >
              Tutti
            </Link>
            {artists.map((artist) => (
              <Link
                key={artist.id}
                href={buildHref("artist", artist.id)}
                className={`shrink-0 text-xs font-display uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                  activeArtist === artist.id
                    ? "bg-rust text-paper border-rust"
                    : "border-ink/15 text-ink-muted hover:border-ink/30"
                }`}
              >
                {artist.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20">
                <p className="font-display text-xl text-ink-muted mb-4">Nessun lavoro trovato con questi filtri.</p>
                <Link href="/portfolio" className="text-sm font-display uppercase tracking-widest text-rust hover:text-rust-dark transition-colors">
                  Mostra tutti →
                </Link>
              </div>
            </FadeIn>
          ) : (
            <StaggerContainer key={`${activeStyle}-${activeArtist}`} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              {filtered.map((item, index) => (
                <m.div
                  key={item.id}
                  variants={fadeInUp}
                  className="group relative overflow-hidden aspect-square cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-paper text-sm font-display font-bold">{item.label}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-paper/50 text-xs font-display uppercase tracking-wider">
                        {item.style}
                      </span>
                      <span className="text-rust-light text-xs">·</span>
                      <span className="text-rust-light text-xs font-display">
                        {artists.find(a => a.id === item.artist)?.name.split(" ")[0] || item.artist}
                      </span>
                    </div>
                  </div>
                </m.div>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        items={filtered}
        currentIndex={lightboxIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* CTA */}
      <section className="px-6 py-16 bg-ink text-paper">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl font-extrabold mb-4 md:text-4xl">
            Ti piace quello che vedi?
          </h2>
          <p className="text-paper/50 mb-8 max-w-md mx-auto">
            La prima consulenza è gratuita. Raccontaci la tua idea.
          </p>
          <a
            href={STUDIO_INFO.whatsappUrl}
            className="inline-block bg-rust text-paper px-10 py-4 text-sm font-display font-bold uppercase tracking-widest hover:bg-rust-dark transition-colors"
          >
            Scrivici su WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-paper/40 border-t border-paper/5 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="" width={64} height={64} />
            <div>
              <p className="font-display text-lg font-extrabold text-paper">{STUDIO_INFO.name}</p>
              <p className="text-xs mt-1">
                {STUDIO_INFO.address}
              </p>
            </div>
          </div>
          <div className="flex gap-6 text-xs font-display uppercase tracking-wider">
            <a href={SOCIAL_LINKS.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-rust-light transition-colors">
              Instagram
            </a>
            <Link href="/" className="hover:text-rust-light transition-colors">
              ← Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <p className="font-display text-ink-muted">Caricamento...</p>
      </main>
    }>
      <PortfolioContent />
    </Suspense>
  )
}
