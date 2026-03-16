"use client"

import Image from "next/image"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { fadeInUp } from "@/lib/animations"
import { m } from "motion/react"
import { Footer } from "@/components/footer"
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
      <Nav />

      {/* Header */}
      <section className="pt-52 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-6">
              <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-1">Cosa Offriamo</p>
              <h1 className="font-display text-4xl font-extrabold md:text-6xl">
                <span className="underscore-title">Servizi</span>
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
                <div className="bg-paper border border-ink/8 p-8 md:p-10 group hover:border-rust/20 transition-colors">
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
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">Gli Stili</p>
            <h2 className="font-display text-4xl font-extrabold mb-3 md:text-6xl">
              <span className="underscore-title">Trova il Tuo</span>
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
            <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">Il Percorso</p>
            <h2 className="font-display text-3xl font-extrabold mb-16 md:text-5xl">
              Come Funziona
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
                <div className="bg-paper p-6">
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
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rust text-paper px-10 py-4 text-sm font-display font-bold uppercase tracking-widest hover:bg-rust-dark transition-colors"
          >
            Scrivici su WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
