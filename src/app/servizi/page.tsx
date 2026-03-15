"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { fadeInUp } from "@/lib/animations"
import { m } from "motion/react"
import { STUDIO_INFO, SOCIAL_LINKS } from "@/lib/constants"
import { services, tattooStyles } from "@/lib/data"

const STAR_ICONS: Record<string, string> = {
  "pen-tool": "✦",
  "layers": "◈",
  "circle-dot": "○",
  "message-circle": "◌",
}

export default function ServiziPage() {
  return (
    <main>
      {/* Nav */}
      <nav className="tattoo-pattern fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 bg-ink/70 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="One More Ink" width={96} height={133} className="h-[96px] w-auto" />
          <span className="font-display font-extrabold text-paper text-2xl hidden sm:block">One More Ink</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/artisti" className="text-base font-display font-bold uppercase tracking-widest text-paper/70 hover:text-rust-light transition-colors hidden sm:block">
            Artisti
          </Link>
          <Link href="/portfolio" className="text-base font-display font-bold uppercase tracking-widest text-paper/70 hover:text-rust-light transition-colors hidden sm:block">
            Portfolio
          </Link>
          <Link href="/servizi" className="text-base font-display font-bold uppercase tracking-widest text-rust-light">
            Servizi
          </Link>
          <Link href="/shop" className="text-base font-display font-bold uppercase tracking-widest text-paper/70 hover:text-rust-light transition-colors hidden sm:block">
            Shop
          </Link>
          <a
            href={STUDIO_INFO.whatsappUrl}
            className="text-base font-display font-bold uppercase tracking-widest border border-paper/30 text-paper px-5 py-2.5 hover:bg-rust hover:border-rust transition-colors"
          >
            Prenota
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-52 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-6">
              <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-1">Cosa offriamo</p>
              <h1 className="font-display text-4xl font-extrabold md:text-6xl">
                <span className="underscore-title">servizi</span>
              </h1>
            </div>
            <p className="text-ink-muted max-w-lg leading-relaxed">
              Dal primo incontro al risultato finale — ti seguiamo in ogni passaggio.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.1} direction="up">
                <div className="border border-ink/8 p-8 md:p-10 group hover:border-rust/20 transition-colors">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-2xl text-rust">{STAR_ICONS[service.icon] || "✦"}</span>
                    <h2 className="font-display text-xl font-extrabold">{service.name}</h2>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Styles */}
      <section className="bg-paper-warm px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">Gli stili</p>
            <h2 className="font-display text-4xl font-extrabold mb-3 md:text-6xl">
              <span className="underscore-title">trova il tuo</span>
            </h2>
            <p className="text-ink-muted max-w-md mb-16 leading-relaxed">
              Dal traditional al realismo — ogni stile ha la sua anima.
              Troviamo insieme quello che racconta la tua.
            </p>
          </SlideUp>

          <StaggerContainer className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {tattooStyles.map((style) => (
              <m.div key={style.id} variants={fadeInUp}>
                <Link
                  href={`/portfolio?style=${style.slug}`}
                  className="block bg-paper p-8 md:p-10 group hover:bg-paper-warm transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-lg font-extrabold group-hover:text-rust transition-colors">
                      {style.name}
                    </h3>
                    <span className="text-rust text-xl font-display group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {style.description}
                  </p>
                </Link>
              </m.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">Il percorso</p>
            <h2 className="font-display text-3xl font-extrabold mb-16 md:text-5xl">
              Come funziona
            </h2>
          </SlideUp>

          <div className="grid gap-12 md:grid-cols-4">
            {[
              { step: "01", title: "Contattaci", desc: "Scrivici su WhatsApp o vieni in studio. Raccontaci la tua idea." },
              { step: "02", title: "Consulenza", desc: "Incontro gratuito per definire stile, dimensione, posizione e preventivo." },
              { step: "03", title: "Bozza", desc: "L'artista crea il design. Revisioni fino a quando non è perfetto." },
              { step: "04", title: "Sessione", desc: "Il giorno del tatuaggio. Ambiente sterile, materiali certificati, zero compromessi." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="up">
                <div>
                  <span className="font-display text-5xl font-extrabold text-ink/5">{item.step}</span>
                  <h3 className="font-display text-lg font-extrabold -mt-3 mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tattoo-accent px-6 py-16 bg-ink text-paper">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl font-extrabold mb-4 md:text-4xl">
            Pronto per il prossimo tatuaggio?
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
      <footer className="tattoo-accent bg-ink text-paper/40 border-t border-paper/5 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="" width={64} height={89} className="h-[64px] w-auto" />
            <div>
              <p className="font-display text-lg font-extrabold text-paper">{STUDIO_INFO.name}</p>
              <p className="text-xs mt-1">{STUDIO_INFO.address}</p>
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
