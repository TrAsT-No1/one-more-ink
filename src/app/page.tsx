import { STUDIO_INFO, SOCIAL_LINKS, BUSINESS_HOURS } from "@/lib/constants"
import { artists, services } from "@/lib/data"

export default function DesignSystemTest() {
  return (
    <main className="min-h-screen px-6 py-section-mobile md:py-section">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="font-display text-5xl font-light tracking-tight text-bone md:text-7xl">
            {STUDIO_INFO.name}
          </h1>
          <p className="font-body text-lg text-bone-muted">
            Design System Test Page — All tokens verified below
          </p>
        </header>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-gold">Color Palette</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <ColorSwatch name="ink" className="bg-ink border border-bone/10" />
            <ColorSwatch name="ink-deep" className="bg-ink-deep border border-bone/10" />
            <ColorSwatch name="ink-surface" className="bg-ink-surface border border-bone/10" />
            <ColorSwatch name="gold" className="bg-gold text-ink" />
            <ColorSwatch name="gold-muted" className="bg-gold-muted text-ink" />
            <ColorSwatch name="gold-light" className="bg-gold-light text-ink" />
            <ColorSwatch name="bone" className="bg-bone text-ink" />
            <ColorSwatch name="bone-muted" className="bg-bone-muted text-ink" />
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-gold">Typography</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-bone-muted uppercase tracking-widest mb-2">
                Display (Cormorant Garamond)
              </p>
              <p className="font-display text-4xl font-light">
                The art lives beneath the skin
              </p>
              <p className="font-display text-2xl font-semibold mt-2">
                Bold display variant
              </p>
            </div>
            <div>
              <p className="text-sm text-bone-muted uppercase tracking-widest mb-2">
                Body (Inter)
              </p>
              <p className="font-body text-base">
                Every tattoo tells a story. Our artists bring your vision to
                life with precision, creativity, and years of experience.
              </p>
              <p className="font-body text-sm text-bone-muted mt-2">
                Muted body text for secondary information and captions.
              </p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-gold">Spacing</h2>
          <div className="space-y-4">
            <div className="bg-ink-surface p-6 rounded">
              <p className="text-sm text-bone-muted mb-2">
                Section padding (desktop: 6rem / mobile: 4rem)
              </p>
              <div className="h-4 bg-gold/20 rounded" />
            </div>
          </div>
        </section>

        {/* Focus State */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-gold">Interactive States</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gold text-ink px-6 py-3 font-body text-sm uppercase tracking-widest transition-colors hover:bg-gold-light">
              Primary Action
            </button>
            <button className="border border-gold text-gold px-6 py-3 font-body text-sm uppercase tracking-widest transition-colors hover:bg-gold hover:text-ink">
              Secondary Action
            </button>
            <a
              href="#"
              className="text-gold-muted underline underline-offset-4 transition-colors hover:text-gold"
            >
              Text link
            </a>
          </div>
        </section>

        {/* Studio Info (from constants.ts) */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-gold">Studio Info</h2>
          <div className="bg-ink-surface p-6 rounded space-y-3">
            <p>
              <span className="text-bone-muted">Address:</span>{" "}
              {STUDIO_INFO.address}
            </p>
            <p>
              <span className="text-bone-muted">Phone:</span>{" "}
              {STUDIO_INFO.phone}
            </p>
            <p>
              <span className="text-bone-muted">Email:</span>{" "}
              {STUDIO_INFO.email}
            </p>
            <div className="flex gap-4 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <span key={link.platform} className="text-gold-muted">
                  {link.platform}
                </span>
              ))}
            </div>
            <div className="pt-2 text-sm text-bone-muted">
              {BUSINESS_HOURS.map((h) => (
                <p key={h.day}>
                  {h.day}: {h.hours}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Data (from data.ts) */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-gold">Artists & Services</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-ink-surface p-6 rounded">
              <h3 className="font-display text-xl text-gold-light mb-4">
                Artists ({artists.length})
              </h3>
              {artists.map((artist) => (
                <div key={artist.slug} className="mb-3">
                  <p className="font-display text-lg">{artist.name}</p>
                  <p className="text-sm text-bone-muted">{artist.role}</p>
                  <div className="flex gap-2 mt-1">
                    {artist.styles.map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-ink px-2 py-0.5 rounded text-gold-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-ink-surface p-6 rounded">
              <h3 className="font-display text-xl text-gold-light mb-4">
                Services ({services.length})
              </h3>
              {services.map((service) => (
                <div key={service.slug} className="mb-3">
                  <p className="font-display text-lg">{service.name}</p>
                  <p className="text-sm text-bone-muted">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Responsive Check */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-gold">Responsive</h2>
          <p className="text-bone-muted">
            Resize the browser from 320px to 1440px+. No horizontal overflow
            should occur.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-ink-surface p-6 rounded">
                <p className="font-display text-xl">Card {i}</p>
                <p className="text-sm text-bone-muted mt-2">
                  Responsive grid test
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-bone/10 pt-8 text-center text-sm text-bone-muted">
          <p>Design System v1.0 — {STUDIO_INFO.name}</p>
        </footer>
      </div>
    </main>
  )
}

function ColorSwatch({
  name,
  className,
}: {
  name: string
  className: string
}) {
  return (
    <div className={`rounded p-4 ${className}`}>
      <p className="text-sm font-mono">{name}</p>
    </div>
  )
}
