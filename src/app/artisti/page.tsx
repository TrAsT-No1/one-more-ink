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
import { artists, galleryItems } from "@/lib/data"

export default function ArtistiPage() {
  return (
    <main>
      {/* Nav */}
      <Nav />

      {/* Header */}
      <section className="pt-52 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-6">
              <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-1">Chi Siamo</p>
              <h1 className="font-display text-4xl font-extrabold md:text-6xl">
                <span className="underscore-title">Gli Artisti</span>
              </h1>
            </div>
            <p className="text-ink-muted max-w-lg leading-relaxed">
              Due mani diverse, una visione comune: ogni tatuaggio
              deve essere un pezzo unico che ti rappresenta.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Artists */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-20 md:grid-cols-2 md:gap-8">
            {artists.map((artist, i) => (
              <FadeIn key={artist.id} delay={i * 0.2} direction="up">
                <div className={`group ${i === 1 ? "md:mt-32" : ""}`}>
                  {/* Artist photo */}
                  <Link href={`/portfolio?artist=${artist.id}`} className="block aspect-[3/4] bg-ink mb-8 overflow-hidden relative cursor-pointer">
                    <Image
                      src={artist.imageWork}
                      alt={artist.name}
                      fill
                      className="object-cover grayscale transition-opacity duration-500 group-hover:opacity-0"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <Image
                      src={artist.imageCasual}
                      alt={`Lavoro di ${artist.name}`}
                      fill
                      className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-paper">
                      <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-hand text-2xl text-rust-light hover:text-rust transition-colors mb-2 inline-block">{artist.instagram}</a>
                      <p className="text-xs font-display uppercase tracking-[0.2em] text-paper/50">
                        {artist.specialties.join(" · ")}
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-rust font-display mb-1">
                        {artist.role}
                      </p>
                      <h2 className="font-display text-2xl font-extrabold md:text-3xl">
                        {artist.name}
                      </h2>
                    </div>
                    <a
                      href={artist.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-rust hover:text-rust-dark transition-colors font-display uppercase tracking-wider mt-2 border border-rust/30 px-3 py-1.5"
                    >
                      IG →
                    </a>
                  </div>

                  <p className="text-ink-muted leading-relaxed mb-5">
                    {artist.bio}
                  </p>

                  <div className="border-l-2 border-rust/30 pl-4 mb-8">
                    <p className="font-hand text-lg text-ink-faded leading-relaxed">
                      &ldquo;{artist.philosophy}&rdquo;
                    </p>
                  </div>

                  {/* Recent works preview */}
                  <div>
                    <p className="text-[10px] font-display uppercase tracking-widest text-ink-faded mb-3">Ultimi Lavori</p>
                    <StaggerContainer className="grid grid-cols-3 gap-2">
                      {galleryItems
                        .filter(item => item.artist === artist.id)
                        .slice(0, 3)
                        .map((item) => (
                          <m.div key={item.id} variants={fadeInUp}>
                            <Link href={`/portfolio?artist=${artist.id}`} className="block aspect-square relative overflow-hidden group/thumb">
                              <Image
                                src={item.image}
                                alt={item.label}
                                fill
                                className="object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                                sizes="(max-width: 768px) 33vw, 16vw"
                              />
                            </Link>
                          </m.div>
                        ))}
                    </StaggerContainer>
                    <Link
                      href={`/portfolio?artist=${artist.id}`}
                      className="block text-center mt-3 text-xs font-display uppercase tracking-widest text-rust hover:text-rust-dark transition-colors"
                    >
                      Vedi tutti →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gli artisti */}
      <section className="tattoo-accent bg-ink text-paper px-6 py-section-mobile md:py-section relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          {/* Logo decorativo */}
          <div className="hidden md:block" style={{ position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', userSelect: 'none' }}>
            <Image src="/logo.png" alt="" width={220} height={305} className="" style={{ opacity: 0.4 }} />
          </div>
          <FadeIn>
            <p className="font-hand text-xl text-rust-light mb-10 md:text-2xl">_Gli Artisti_</p>
          </FadeIn>
          <SlideUp>
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Due mani diverse.
              <br />
              <span className="text-rust-light">Una visione comune.</span>
            </h2>
          </SlideUp>
          <FadeIn delay={0.3}>
            <p className="mt-12 text-paper/50 max-w-lg leading-relaxed text-lg">
              Federica e Stefano portano stili e percorsi diversi, ma condividono la stessa ossessione per il dettaglio.
              Ogni pezzo nasce da ore di studio, reference e confronto — perché il tuo tatuaggio merita lo stesso rigore di un&apos;opera d&apos;arte.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl font-extrabold mb-4 md:text-4xl">
            Vuoi conoscerci di persona?
          </h2>
          <p className="text-ink-muted mb-8 max-w-md mx-auto">
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
