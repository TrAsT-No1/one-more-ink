"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { fadeInUp } from "@/lib/animations"
import { m } from "motion/react"
import { STUDIO_INFO, SOCIAL_LINKS } from "@/lib/constants"
import { artists, galleryItems } from "@/lib/data"

export default function ArtistiPage() {
  return (
    <main>
      {/* Nav */}
      <nav className="tattoo-pattern fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 bg-ink/70 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="One More Ink" width={96} height={96} />
          <span className="font-display font-extrabold text-paper text-2xl hidden sm:block">One More Ink</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/artisti" className="text-base font-display font-bold uppercase tracking-widest text-rust-light">
            Artisti
          </Link>
          <Link href="/portfolio" className="text-base font-display font-bold uppercase tracking-widest text-paper/70 hover:text-rust-light transition-colors hidden sm:block">
            Portfolio
          </Link>
          <Link href="/servizi" className="text-base font-display font-bold uppercase tracking-widest text-paper/70 hover:text-rust-light transition-colors hidden sm:block">
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
              <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-1">Chi siamo</p>
              <h1 className="font-display text-4xl font-extrabold md:text-6xl">
                <span className="underscore-title">gli artisti</span>
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
                    <p className="text-[10px] font-display uppercase tracking-widest text-ink-faded mb-3">Ultimi lavori</p>
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

      {/* Philosophy */}
      <section className="tattoo-accent bg-ink text-paper px-6 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none">
          <Image src="/logo.png" alt="" width={400} height={400} className="w-[50vw] max-w-[400px] h-auto" />
        </div>
        <div className="max-w-5xl mx-auto relative">
          <FadeIn>
            <p className="font-hand text-xl text-rust-light mb-10 md:text-2xl">_la filosofia_</p>
          </FadeIn>
          <SlideUp>
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Non facciamo tatuaggi.
              <br />
              <span className="text-rust-light">Costruiamo storie</span>
              <br />
              sulla pelle.
            </h2>
          </SlideUp>
          <FadeIn delay={0.3}>
            <p className="mt-12 text-paper/50 max-w-lg leading-relaxed text-lg">
              One More Ink non è solo uno studio — è il posto dove la tua idea diventa arte permanente.
              Ogni progetto parte da una conversazione. Ogni segno ha un significato.
              E quando esci, sai già che tornerai per il prossimo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-paper-warm">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl font-extrabold mb-4 md:text-4xl">
            Vuoi conoscerci di persona?
          </h2>
          <p className="text-ink-muted mb-8 max-w-md mx-auto">
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
            <Image src="/logo.png" alt="" width={64} height={64} />
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
