"use client"

import Image from "next/image"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { m } from "motion/react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { fadeInUp } from "@/lib/animations"
import { Footer } from "@/components/footer"
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
      <Nav />

      {/* Header */}
      <section className="pt-52 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-6">
              <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-1">Merch & Accessori</p>
              <h1 className="font-display text-4xl font-extrabold md:text-6xl">
                <span className="underscore-title">OMI Shop</span>
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
                className="group bg-paper p-4"
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
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-xs uppercase tracking-[0.3em] text-ink-faded mb-8">Accessori</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((item) => (
              <m.div
                key={item.id}
                variants={fadeInUp}
                className="group bg-paper p-4"
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
      <section className="tattoo-accent px-6 py-16 bg-ink text-paper">
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
      <Footer />
    </main>
  )
}
