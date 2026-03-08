"use client"

import { m } from "motion/react"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { fadeInUp } from "@/lib/animations"
import { STUDIO_INFO } from "@/lib/constants"

const COLORS = [
  { name: "ink", className: "bg-ink border border-bone/10" },
  { name: "ink-deep", className: "bg-ink-deep border border-bone/10" },
  { name: "ink-surface", className: "bg-ink-surface border border-bone/10" },
  { name: "gold", className: "bg-gold text-ink" },
  { name: "gold-muted", className: "bg-gold-muted text-ink" },
  { name: "gold-light", className: "bg-gold-light text-ink" },
  { name: "bone", className: "bg-bone text-ink" },
  { name: "bone-muted", className: "bg-bone-muted text-ink" },
]

const DIRECTIONS = ["up", "down", "left", "right", "none"] as const

export default function AnimationDemo() {
  return (
    <main>
      {/* Navigation anchors */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ink-deep/80 backdrop-blur-sm border-b border-bone/5">
        <div className="mx-auto max-w-6xl px-6 py-3 flex gap-6 overflow-x-auto text-sm">
          {["hero", "colors", "typography", "animations", "anchors"].map(
            (id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-bone-muted hover:text-gold transition-colors whitespace-nowrap capitalize"
              >
                {id}
              </a>
            )
          )}
        </div>
      </nav>

      {/* Section 1: Hero sim */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center px-6"
      >
        <SlideUp>
          <h1 className="font-display text-6xl font-light tracking-tight text-center md:text-8xl lg:text-9xl">
            {STUDIO_INFO.name}
          </h1>
        </SlideUp>
        <FadeIn delay={0.4} direction="up" distance={20}>
          <p className="mt-6 max-w-lg text-center text-lg text-bone-muted font-body">
            Animation primitives demo — scroll down to see FadeIn, SlideUp, and
            StaggerContainer in action
          </p>
        </FadeIn>
        <FadeIn delay={0.8} direction="none">
          <div className="mt-12 flex gap-4">
            <a
              href="#colors"
              className="bg-gold text-ink px-6 py-3 text-sm font-body uppercase tracking-widest transition-colors hover:bg-gold-light"
            >
              Explore
            </a>
            <a
              href="#animations"
              className="border border-gold text-gold px-6 py-3 text-sm font-body uppercase tracking-widest transition-colors hover:bg-gold hover:text-ink"
            >
              Animations
            </a>
          </div>
        </FadeIn>
        {/* Scroll indicator */}
        <FadeIn delay={1.2} direction="none" className="absolute bottom-8">
          <p className="text-xs text-bone-muted uppercase tracking-[0.3em] animate-pulse">
            Scroll
          </p>
        </FadeIn>
      </section>

      {/* Section 2: Color palette with StaggerContainer */}
      <section
        id="colors"
        className="px-6 py-section-mobile md:py-section"
      >
        <div className="mx-auto max-w-6xl">
          <SlideUp>
            <h2 className="font-display text-4xl text-gold mb-12 md:text-5xl">
              Color Palette
            </h2>
          </SlideUp>
          <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {COLORS.map((color) => (
              <m.div
                key={color.name}
                variants={fadeInUp}
                className={`rounded-lg p-6 ${color.className}`}
              >
                <p className="font-mono text-sm">{color.name}</p>
                <p className="mt-1 text-xs opacity-70">OKLCH token</p>
              </m.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 3: Typography showcase */}
      <section
        id="typography"
        className="bg-ink-deep px-6 py-section-mobile md:py-section"
      >
        <div className="mx-auto max-w-6xl">
          <SlideUp>
            <h2 className="font-display text-4xl text-gold mb-12 md:text-5xl">
              Typography
            </h2>
          </SlideUp>

          <div className="space-y-12">
            <FadeIn direction="left">
              <div>
                <p className="text-sm text-bone-muted uppercase tracking-widest mb-4">
                  Display — Cormorant Garamond
                </p>
                <p className="font-display text-5xl font-light md:text-7xl">
                  The art lives beneath the skin
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div>
                <p className="text-sm text-bone-muted uppercase tracking-widest mb-4">
                  Display — Semibold
                </p>
                <p className="font-display text-3xl font-semibold md:text-5xl">
                  Every mark tells a story
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div>
                <p className="text-sm text-bone-muted uppercase tracking-widest mb-4">
                  Body — Inter
                </p>
                <p className="font-body text-base max-w-2xl leading-relaxed">
                  Every tattoo tells a story. Our artists bring your vision to
                  life with precision, creativity, and years of experience.
                  From delicate fine-line work to bold traditional pieces, we
                  craft art that lasts a lifetime.
                </p>
                <p className="font-body text-sm text-bone-muted mt-4">
                  Muted body text for secondary information and captions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 4: Animation demo - all directions + distances */}
      <section
        id="animations"
        className="px-6 py-section-mobile md:py-section"
      >
        <div className="mx-auto max-w-6xl">
          <SlideUp>
            <h2 className="font-display text-4xl text-gold mb-4 md:text-5xl">
              Animation Primitives
            </h2>
            <p className="text-bone-muted mb-12 max-w-2xl">
              Each box demonstrates a different FadeIn direction. All use
              whileInView with once:true — scroll past and they stay revealed.
            </p>
          </SlideUp>

          {/* FadeIn directions */}
          <div className="space-y-8 mb-16">
            <h3 className="font-display text-2xl text-gold-muted">
              FadeIn Directions
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DIRECTIONS.map((dir, i) => (
                <FadeIn key={dir} direction={dir} delay={i * 0.1}>
                  <div className="bg-ink-surface rounded-lg p-6 border border-bone/5">
                    <p className="font-display text-xl text-gold-light">
                      {dir}
                    </p>
                    <p className="text-sm text-bone-muted mt-2">
                      FadeIn direction=&quot;{dir}&quot;
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* SlideUp with different distances */}
          <div className="space-y-8 mb-16">
            <h3 className="font-display text-2xl text-gold-muted">
              SlideUp Distances
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              {[40, 80, 120].map((dist, i) => (
                <SlideUp key={dist} distance={dist} delay={i * 0.15}>
                  <div className="bg-ink-surface rounded-lg p-6 border border-bone/5">
                    <p className="font-display text-xl text-gold-light">
                      {dist}px
                    </p>
                    <p className="text-sm text-bone-muted mt-2">
                      SlideUp distance={dist}
                    </p>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>

          {/* StaggerContainer demo */}
          <div className="space-y-8">
            <h3 className="font-display text-2xl text-gold-muted">
              StaggerContainer
            </h3>
            <p className="text-sm text-bone-muted">
              Children animate sequentially with stagger delay
            </p>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {Array.from({ length: 8 }, (_, i) => (
                <m.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-ink-surface rounded-lg p-6 border border-bone/5 text-center"
                >
                  <p className="font-display text-3xl text-gold">{i + 1}</p>
                  <p className="text-xs text-bone-muted mt-2">
                    stagger child
                  </p>
                </m.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 5: Anchor test */}
      <section
        id="anchors"
        className="bg-ink-deep px-6 py-section-mobile md:py-section"
      >
        <div className="mx-auto max-w-6xl">
          <SlideUp>
            <h2 className="font-display text-4xl text-gold mb-8 md:text-5xl">
              Anchor Links
            </h2>
            <p className="text-bone-muted mb-8">
              Click any link to test smooth scroll navigation. Back button
              should work correctly.
            </p>
          </SlideUp>
          <FadeIn>
            <div className="flex flex-wrap gap-4">
              {["hero", "colors", "typography", "animations"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="border border-gold text-gold px-6 py-3 text-sm font-body uppercase tracking-widest transition-colors hover:bg-gold hover:text-ink"
                >
                  Go to {id}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-bone/10 px-6 py-8 text-center text-sm text-bone-muted">
        <p>
          Animation Demo — {STUDIO_INFO.name} — Design System v1.0
        </p>
      </footer>
    </main>
  )
}
