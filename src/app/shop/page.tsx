"use client"

import Image from "next/image"
import Link from "next/link"
import { m } from "motion/react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { fadeInUp } from "@/lib/animations"
import { STUDIO_INFO, SOCIAL_LINKS } from "@/lib/constants"
import { merchItems } from "@/lib/data"

const CATEGORY_ICONS: Record<string, string> = {
  apparel: "👕",
  accessories: "🎒",
}

export default function ShopPage() {
  const apparel = merchItems.filter((item) => item.category === "apparel")
  const accessories = merchItems.filter((item) => item.category === "accessories")

  return (
    <main>
      {/* Nav */}
      <nav className="tattoo-pattern fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 bg-ink/70 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="One More Ink" width={96} height={96} />
          <span className="font-display font-extrabold text-paper text-2xl hidden sm:block">One More Ink</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/artisti" className="text-sm font-display uppercase tracking-widest text-paper/70 hover:text-rust-light transition-colors hidden sm:block">
            Artisti
          </Link>
          <Link href="/portfolio" className="text-sm font-display uppercase tracking-widest text-paper/70 hover:text-rust-light transition-colors hidden sm:block">
            Portfolio
          </Link>
          <Link href="/servizi" className="text-sm font-display uppercase tracking-widest text-paper/70 hover:text-rust-light transition-colors hidden sm:block">
            Servizi
          </Link>
          <Link href="/shop" className="text-sm font-display uppercase tracking-widest text-paper">
            Shop
          </Link>
          <a
            href={STUDIO_INFO.whatsappUrl}
            className="text-sm font-display uppercase tracking-widest border border-paper/30 text-paper px-5 py-2.5 hover:bg-rust hover:border-rust transition-colors"
          >
            Prenota
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-40 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-6">
              <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-1">Merch & Accessori</p>
              <h1 className="font-display text-4xl font-extrabold md:text-6xl">
                <span className="underscore-title">OMI shop</span>
              </h1>
            </div>
            <p className="text-ink-muted max-w-lg leading-relaxed">
              Porta lo studio addosso — anche quando non sei sulla poltrona.
              Pezzi limitati, design esclusivi degli artisti di One More Ink.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-ink text-paper px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-rust rounded-full animate-pulse" />
                <p className="text-sm font-display font-bold uppercase tracking-widest">Coming Soon</p>
              </div>
              <p className="text-paper/50 text-sm">
                Lo shop aprirà a breve. Seguici su{" "}
                <a
                  href={SOCIAL_LINKS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rust-light hover:text-paper transition-colors"
                >
                  Instagram
                </a>
                {" "}per sapere quando.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Apparel */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-xs uppercase tracking-[0.3em] text-ink-faded mb-8">Abbigliamento</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apparel.map((item) => (
              <m.div
                key={item.id}
                variants={fadeInUp}
                className="group"
              >
                {/* Product image placeholder */}
                <div className="aspect-square bg-ink mb-4 relative overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-display text-5xl font-extrabold text-paper/5 group-hover:text-paper/10 transition-colors duration-500">
                      OMI
                    </span>
                  </div>
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-rust text-paper text-[10px] font-display font-bold uppercase tracking-widest px-3 py-1">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Product info */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-lg">{item.name}</h3>
                    <span className="font-display font-extrabold text-lg text-rust shrink-0">{item.price}</span>
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  {item.variants && (
                    <div className="flex gap-2">
                      {item.variants.map((v) => (
                        <span
                          key={v}
                          className="text-[10px] font-display uppercase tracking-wider border border-ink/15 px-2 py-1 text-ink-faded"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </m.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Accessories */}
      <section className="px-6 py-10 bg-paper-warm">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-xs uppercase tracking-[0.3em] text-ink-faded mb-8">Accessori</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((item) => (
              <m.div
                key={item.id}
                variants={fadeInUp}
                className="group"
              >
                <div className="aspect-square bg-ink mb-4 relative overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-display text-5xl font-extrabold text-paper/5 group-hover:text-paper/10 transition-colors duration-500">
                      OMI
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-lg">{item.name}</h3>
                    <span className="font-display font-extrabold text-lg text-rust shrink-0">{item.price}</span>
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </m.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-ink text-paper">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl font-extrabold mb-4 md:text-4xl">
            Vuoi essere il primo a sapere?
          </h2>
          <p className="text-paper/50 mb-8 max-w-md mx-auto">
            Seguici su Instagram — annunceremo il lancio dello shop lì.
          </p>
          <a
            href={SOCIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rust text-paper px-10 py-4 text-sm font-display font-bold uppercase tracking-widest hover:bg-rust-dark transition-colors"
          >
            Seguici su Instagram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="tattoo-accent bg-ink text-paper/40 border-t border-paper/5 px-6 py-10">
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
            <Link href="/portfolio" className="hover:text-rust-light transition-colors">
              Portfolio
            </Link>
            <Link href="/" className="hover:text-rust-light transition-colors">
              ← Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
