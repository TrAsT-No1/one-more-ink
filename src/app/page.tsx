"use client"

import Image from "next/image"
import Link from "next/link"
import { m } from "motion/react"
import { Nav } from "@/components/nav"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { fadeInUp } from "@/lib/animations"
import { Footer } from "@/components/footer"
import { STUDIO_INFO, BUSINESS_HOURS, SOCIAL_LINKS } from "@/lib/constants"
import { artists, tattooStyles, services, galleryItems, reviews, stats } from "@/lib/data"

const STAR_ICONS: Record<string, string> = {
  "pen-tool": "✦",
  "layers": "◈",
  "circle-dot": "○",
  "message-circle": "◌",
}

export default function Home() {
  return (
    <main>
      {/* Nav — sticky, minimal */}
      <Nav isHome />

      {/* Hero — dark, full impact */}
      <section className="relative min-h-screen bg-ink text-paper flex flex-col justify-between px-6 pt-52 pb-10 overflow-hidden">
        {/* Background — symmetric: Federica left, works center, Stefano right */}
        <div className="absolute inset-0 opacity-[0.12] hidden md:grid grid-cols-[1fr_0.6fr_1fr] gap-0">
          {/* Federica — left */}
          <div className="relative overflow-hidden">
            <Image
              src="/artists/federica-profile.webp"
              alt=""
              fill
              className="object-cover object-top"
              sizes="40vw"
            />
          </div>
          {/* Center column — two works stacked */}
          <div className="grid grid-rows-2 gap-1">
            {/* Top: Federica's work */}
            <div className="relative overflow-hidden">
              <Image
                src="/gallery/federica-mermaid-warrior.webp"
                alt=""
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            {/* Bottom: Stefano's work */}
            <div className="relative overflow-hidden">
              <Image
                src="/gallery/stefano-eye-swirl.webp"
                alt=""
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
          {/* Stefano — right */}
          <div className="relative overflow-hidden">
            <Image
              src="/artists/stefano-work-bw.jpg"
              alt=""
              fill
              className="object-cover object-top"
              sizes="40vw"
            />
          </div>
        </div>
        {/* Mobile fallback — simpler */}
        <div className="absolute inset-0 opacity-[0.08] md:hidden">
          <Image
            src="/artists/federica-profile.webp"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>

        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 w-px h-28 bg-paper/10" />

        {/* Top info */}
        <FadeIn delay={0.3} direction="none">
          <div className="flex justify-between items-baseline max-w-6xl mx-auto w-full relative">
            <p className="text-sm font-display font-bold uppercase tracking-[0.3em] text-paper/60" style={{ textShadow: '0 0 12px rgba(255,255,255,0.3)' }}>
              Tattoo & Piercing Studio
            </p>
            <p className="font-hand text-lg text-rust-light" style={{ textShadow: '0 0 12px rgba(255,51,51,0.4)' }}>
              Modena, dal 2013
            </p>
          </div>
        </FadeIn>

        {/* Name — massive */}
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center -mt-8 relative">
          <SlideUp>
            <h1 className="font-display font-extrabold leading-[0.82] tracking-tighter text-left">
              <span className="block text-[15vw] md:text-[12vw]">One</span>
              <span className="block text-[15vw] md:text-[12vw] text-rust-light ml-[5vw]">More</span>
              <span className="block text-[15vw] md:text-[12vw]">Ink</span>
            </h1>
          </SlideUp>
        </div>

        {/* Bottom tagline + scroll */}
        <FadeIn delay={0.6} direction="up" distance={15}>
          <div className="flex justify-between items-end max-w-6xl mx-auto w-full relative">
            <p className="max-w-xs text-base font-bold text-paper/70 leading-relaxed" style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>
              Lo studio dove la nonna viene per il primo tatuaggio
              e tu torni per <span className="font-hand text-lg text-rust-light">ancora uno</span>.
            </p>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-display uppercase tracking-[0.4em] text-paper/30">Scroll</span>
              <div className="w-px h-10 bg-paper/20" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Stats bar — social proof */}
      <section className="tattoo-accent bg-ink text-paper border-t border-paper/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: `Dal ${stats.yearsFounded}`, label: "Anno di fondazione" },
            { value: stats.tattoosCount, label: "Tatuaggi realizzati" },
            { value: stats.googleRating, label: "Voto Google" },
            { value: stats.googleReviews, label: "Recensioni Google" },
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="px-6 py-8 md:py-10 border-r border-paper/5 last:border-r-0 text-center">
                <p className="font-display text-2xl md:text-3xl font-extrabold text-rust-light mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] font-display uppercase tracking-[0.3em] text-paper/30">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="border-b border-ink/10 py-5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 mr-8 text-sm font-display uppercase tracking-[0.2em] text-ink-muted">
              <span>Traditional</span>
              <span className="text-rust text-lg">*</span>
              <span>Blackwork</span>
              <span className="text-rust text-lg">*</span>
              <span>Fine Line</span>
              <span className="text-rust text-lg">*</span>
              <span>Neo-Traditional</span>
              <span className="text-rust text-lg">*</span>
              <span>Ornamental</span>
              <span className="text-rust text-lg">*</span>
              <span>Realismo</span>
              <span className="text-rust text-lg">*</span>
              <span>Piercing</span>
              <span className="text-rust text-lg">*</span>
              <span>Cover Up</span>
              <span className="text-rust text-lg">*</span>
            </span>
          ))}
        </div>
      </div>

      {/* Artists — with real photos */}
      <section id="artisti" className="px-6 py-section-mobile md:py-section">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">Chi Siamo</p>
            <h2 className="font-display text-4xl font-extrabold mb-3 md:text-6xl">
              <span className="underscore-title">Gli Artisti</span>
            </h2>
            <p className="text-ink-muted max-w-md mb-20 leading-relaxed">
              Due mani diverse, una visione comune: ogni tatuaggio
              deve essere un pezzo unico che ti rappresenta.
            </p>
          </SlideUp>

          <div className="grid gap-16 md:grid-cols-2 md:gap-8">
            {artists.map((artist, i) => (
              <FadeIn key={artist.id} delay={i * 0.2} direction="up">
                <div className={`group ${i === 1 ? "md:mt-32" : ""}`}>
                  {/* Artist photo — profile → tattoo work on hover */}
                  <Link href={`/portfolio?artist=${artist.id}`} className="block aspect-[3/4] bg-ink mb-8 overflow-hidden relative cursor-pointer">
                    {/* Profile photo — B&W, visible by default */}
                    <Image
                      src={artist.imageWork}
                      alt={`${artist.name}`}
                      fill
                      className="object-cover grayscale transition-opacity duration-500 group-hover:opacity-0"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Tattoo work — visible on hover */}
                    <Image
                      src={artist.imageCasual}
                      alt={`Lavoro di ${artist.name}`}
                      fill
                      className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-paper">
                      <span className="font-hand text-2xl text-rust-light mb-2 inline-block">{artist.instagram}</span>
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
                      <h3 className="font-display text-2xl font-extrabold md:text-3xl">
                        {artist.name}
                      </h3>
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

                  <div className="border-l-2 border-rust/30 pl-4">
                    <p className="font-hand text-lg text-ink-faded leading-relaxed">
                      &ldquo;{artist.philosophy}&rdquo;
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="tattoo-accent bg-ink text-paper px-6 py-section-mobile md:py-section relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          {/* Logo decorativo — centered right, mirroring CTA layout */}
          <div className="hidden md:block" style={{ position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', userSelect: 'none' }}>
            <Image src="/logo.png" alt="" width={220} height={305} className="" style={{ opacity: 0.4 }} />
          </div>

          <FadeIn>
            <p className="font-hand text-xl text-rust-light mb-10 md:text-2xl">
              _La Filosofia_
            </p>
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

      {/* Portfolio / Gallery — real photos from IG */}
      <section id="portfolio" className="px-6 py-section-mobile md:py-section">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">I Lavori</p>
            <h2 className="font-display text-4xl font-extrabold mb-3 md:text-6xl">
              <span className="underscore-title">Portfolio</span>
            </h2>
            <p className="text-ink-muted max-w-md mb-16 leading-relaxed">
              Ogni pezzo racconta una storia diversa. Scorri per trovare il tuo stile.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {galleryItems.slice(0, 7).map((item, i) => (
              <m.div
                key={item.id}
                variants={fadeInUp}
                className={`group relative overflow-hidden ${
                  i === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-paper text-sm font-display font-bold">{item.label}</p>
                  <p className="text-paper/50 text-xs font-display uppercase tracking-wider mt-1">
                    {item.style}
                  </p>
                </div>
              </m.div>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <div className="mt-10 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 text-sm font-display uppercase tracking-widest bg-ink text-paper px-8 py-4 hover:bg-rust transition-colors"
              >
                Vedi tutti i lavori →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Styles */}
      <section className="px-6 py-section-mobile md:py-section">
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
              <m.div
                key={style.id}
                variants={fadeInUp}
              >
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

      {/* Services */}
      <section id="servizi" className="px-6 py-section-mobile md:py-section">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">Cosa Offriamo</p>
            <h2 className="font-display text-4xl font-extrabold mb-3 md:text-6xl">
              <span className="underscore-title">Servizi</span>
            </h2>
            <p className="text-ink-muted max-w-md mb-16 leading-relaxed">
              Dal primo incontro al risultato finale — ti seguiamo in ogni passaggio.
            </p>
          </SlideUp>

          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.1} direction="up">
                <a
                  href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-paper border border-ink/8 p-8 md:p-10 group hover:border-rust/20 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-2xl text-rust">{STAR_ICONS[service.icon] || "✦"}</span>
                    <h3 className="font-display text-xl font-extrabold group-hover:text-rust transition-colors">{service.name}</h3>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-xs font-display uppercase tracking-[0.2em] text-rust opacity-0 group-hover:opacity-100 transition-opacity">
                    Scrivici su WhatsApp →
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="tattoo-accent bg-ink text-paper px-6 py-section-mobile md:py-section">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <p className="text-xs font-display uppercase tracking-[0.3em] text-rust-light mb-4">Dicono di Noi</p>
            <h2 className="font-display text-4xl font-extrabold mb-3 md:text-6xl text-paper">
              <span className="underscore-title">Recensioni</span>
            </h2>
            <p className="text-paper/40 max-w-md mb-16 leading-relaxed">
              {stats.googleRating} stelle su Google — {stats.googleReviews} recensioni reali.
            </p>
          </SlideUp>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <m.div
                key={i}
                variants={fadeInUp}
                className="border border-paper/8 p-8 md:p-10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, s) => (
                    <span key={s} className="text-rust-light text-sm">★</span>
                  ))}
                </div>
                <p className="text-paper/70 leading-relaxed mb-6 font-hand text-lg">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-xs font-display uppercase tracking-[0.2em] text-paper/30">
                  {review.name}
                </p>
              </m.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Shop / Merch teaser */}
      <section className="px-6 py-section-mobile md:py-section relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <SlideUp>
                <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">Prossimamente</p>
                <h2 className="font-display text-4xl font-extrabold mb-6 md:text-5xl">
                  <span className="underscore-title">OMI Merch</span>
                </h2>
                <p className="text-ink-muted leading-relaxed mb-8">
                  Porta lo studio addosso — anche quando non sei sulla poltrona.
                  T-shirt, felpe e accessori disegnati dagli artisti di One More Ink.
                  Pezzi limitati, design esclusivi.
                </p>
              </SlideUp>
              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/shop"
                    className="inline-block bg-ink text-paper px-8 py-4 text-sm font-display font-bold uppercase tracking-widest hover:bg-rust transition-colors text-center"
                  >
                    Scopri lo Shop →
                  </Link>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} direction="up">
              <div className="grid grid-cols-2 gap-3">
                {["T-Shirt", "Hoodie", "Cap", "Tote Bag"].map((item, i) => (
                  <div key={i} className="aspect-square bg-ink flex items-center justify-center group">
                    <div className="text-center">
                      <span className="font-display text-3xl font-extrabold text-paper/5 group-hover:text-paper/10 transition-colors">
                        OMI
                      </span>
                      <p className="text-[10px] font-display uppercase tracking-[0.2em] text-paper/20 mt-2">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Info + Hours + Map */}
      <section className="px-6 py-section-mobile md:py-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16 md:grid-cols-2">
            <FadeIn direction="up">
              <div className="bg-paper p-6 md:p-8">
                <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">Info</p>
                <h2 className="font-display text-3xl font-extrabold mb-2 md:text-4xl">
                  <span className="underscore-title">Dove Siamo</span>
                </h2>
                <p className="text-ink-muted leading-relaxed mb-8 mt-4">
                  {STUDIO_INFO.address}
                </p>
                <div className="flex flex-col gap-4 mb-10">
                  <a
                    href={STUDIO_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-rust text-paper px-8 py-4 text-sm font-display font-bold uppercase tracking-widest transition-all hover:bg-rust-dark w-fit"
                  >
                    Scrivici su WhatsApp
                  </a>
                  <a
                    href={`tel:${STUDIO_INFO.phone}`}
                    className="text-sm text-ink-muted hover:text-ink transition-colors font-display"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                </div>

                {/* Google Maps embed */}
                <div className="aspect-[4/3] w-full overflow-hidden border border-ink/8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.5!2d10.9263!3d44.6494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fef24b50116a7%3A0x7a3f9b7ee3cd1a5e!2sOne%20More%20Ink%20Tattoo%20Studio!5e0!3m2!1sit!2sit!4v1709913600000!5m2!1sit!2sit"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="One More Ink — Via Nobili 20/22, Modena"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="bg-paper p-6 md:p-8">
                <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">Orari</p>
                <h2 className="font-display text-3xl font-extrabold mb-2 md:text-4xl">
                  <span className="underscore-title">Quando</span>
                </h2>
                <div className="space-y-0 mt-4">
                  {BUSINESS_HOURS.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between border-b border-ink/8 py-3.5"
                    >
                      <span className="text-sm">{item.day}</span>
                      <span className={`text-sm font-display font-bold ${item.hours === "Chiuso" ? "text-ink-faded" : "text-ink"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                {/* IG Feed preview */}
                <div className="mt-12">
                  <p className="text-xs font-display uppercase tracking-[0.3em] text-rust mb-4">Seguici</p>
                  <div className="grid grid-cols-3 gap-2">
                    {galleryItems.slice(0, 6).map((item) => (
                      <a
                        key={item.id}
                        href={SOCIAL_LINKS.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aspect-square relative overflow-hidden group"
                      >
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 33vw, 16vw"
                        />
                        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors flex items-center justify-center">
                          <span className="text-paper text-xs font-display opacity-0 group-hover:opacity-100 transition-opacity">
                            IG →
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                  <a
                    href={SOCIAL_LINKS.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-4 text-xs font-display uppercase tracking-widest text-rust hover:text-rust-dark transition-colors"
                  >
                    {SOCIAL_LINKS.instagram.handle}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tattoo-accent relative px-6 py-section-mobile md:py-section bg-ink text-paper">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-8 items-center relative z-10">
          <div>
            <SlideUp>
              <p className="font-hand text-2xl text-rust-light mb-6 md:text-3xl">ancora uno?</p>
              <h2 className="font-display text-3xl font-extrabold mb-8 md:text-5xl lg:text-6xl leading-tight">
                Che sia il primo
                <br />
                o il prossimo,
                <br />
                <span className="text-rust-light">parte da qui.</span>
              </h2>
            </SlideUp>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-rust text-paper px-10 py-4 text-sm font-display font-bold uppercase tracking-widest transition-colors hover:bg-rust-dark"
                >
                  Scrivici su WhatsApp
                </a>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="inline-block border border-paper/20 text-paper/60 px-10 py-4 text-sm font-display font-bold uppercase tracking-widest transition-colors hover:border-paper/40 hover:text-paper"
                >
                  Chiamaci
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.4} direction="right">
            <div className="hidden md:block">
              <Image
                src="/logo.png"
                alt="One More Ink"
                width={280}
                height={387}
                className=""
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
