# One More Ink

> Ultimo aggiornamento: 2026-03-22
> Stato: **MORTO / ABBANDONATO** — da riciclare per un altro tatuatore

## Descrizione

Sito web speculativo per **One More Ink**, tattoo & piercing studio a Modena (Via Nobili 20/22). Costruito come pezzo portfolio di Federico Bavieri e come proposta diretta al cliente. Lo studio ha 7+ anni di attivita ma zero presenza web. L'idea era mandare il sito completo via DM alla titolare (Federica Morselli) e proporre il pacchetto a EUR 1.500.

Il progetto non e mai stato consegnato. Da riciclare come template/base per un altro tatuatore.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **React**: 19.2.3
- **Linguaggio**: TypeScript 5
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Animazioni**: Motion 12 (`motion/react`), GSAP 3.14, Lenis 1.3
- **Output**: Static export (`output: "export"`, immagini unoptimized)
- **Deploy target**: Vercel (free tier)
- **Font**: Syne (display), Inter (body), Caveat (handwritten)
- **Colori**: OKLCH color space, dark theme con accenti rosso `#E00000`

## Stato Tecnico

### FATTO e FUNZIONANTE

- **Home page completa** (`src/app/page.tsx`) — hero full-viewport con animazione d'ingresso, stats bar, marquee stili, sezione artisti con foto reali da IG, portfolio preview (7 items), stili tattoo grid, servizi con WhatsApp deeplink pre-compilato, recensioni, merch teaser, info/orari/mappa, CTA finale
- **Pagina Artisti** (`src/app/artisti/page.tsx`) — profili Federica Morselli e Stefano Mazzotta con bio, filosofia, preview ultimi lavori
- **Pagina Portfolio** (`src/app/portfolio/page.tsx`) — gallery con filtri per stile e artista via URL params, lightbox full-screen con zoom, navigazione prev/next, keyboard (ESC/frecce)
- **Pagina Servizi** (`src/app/servizi/page.tsx`) — 4 servizi (custom, cover up, piercing, consulenza gratuita), stili tattoo, processo "come funziona" in 4 step
- **Pagina Shop** (`src/app/shop/page.tsx`) — catalogo merch (6 prodotti), banner "coming soon", separazione apparel/accessori
- **Pagina Privacy** (`src/app/privacy/page.tsx`) — GDPR-compliant, server component con metadata
- **404 personalizzata** (`src/app/not-found.tsx`)
- **Nav responsive** — desktop links + hamburger mobile con overlay fullscreen
- **Footer** — logo, indirizzo, social icons (IG, FB, WhatsApp), telefono, link privacy
- **Cookie banner** — localStorage-based, solo cookie tecnici
- **Animation system** — FadeIn, SlideUp, StaggerContainer components; Lenis smooth scroll con GSAP ticker; LazyMotion per tree-shaking
- **Design system** — colori OKLCH (paper/ink/rust), font custom, tattoo-pattern background, underscore title style, nav/button glow effects, `prefers-reduced-motion` support
- **SEO base** — meta tags + Open Graph su tutte le pagine, JSON-LD `TattooParlor` schema, sitemap.xml, robots.txt, manifest.json, alt text
- **Assets reali** — 50 foto gallery da Instagram (WebP), foto artisti, immagini shop, logo, og-image, favicon, icone PWA
- **Static export funzionante** — directory `out/` presente con HTML generato

### MANCANTE / NON FATTO

- **Walk-In Day page** — pianificata in roadmap (Phase 5), mai implementata
- **FAQ accordion** — pianificata, mai implementata
- **Aftercare page** — pianificata, mai implementata
- **Instagram feed embed** — solo link, nessun embed reale
- **Testimonials da Google** — le recensioni sono hardcoded, non reali
- **Image optimization pipeline** — immagini unoptimized, niente `next-image-export-optimizer`
- **Lighthouse audit** — mai eseguito formalmente
- **Flash sheet gallery** con status disponibile/preso — mai implementata
- **Form di consultazione** — out of scope v1, mai fatto
- **Google Maps embed** — l'URL nell'iframe potrebbe non puntare all'indirizzo corretto (coordinate approssimative)
- **Dominio** `onemoreink.it` — referenziato in sitemap/robots ma non acquistato
- **Vercel deploy live** — il progetto e linkato a Vercel (project ID esiste) ma non verificato se effettivamente online

### NOTE TECNICHE

- Il roadmap `.planning/ROADMAP.md` mostra 6 fasi, tutte segnate "Not started" — ma il codice e molto piu avanti di quanto lo state tracker indichi (il tracker e rimasto fermo a Phase 1 plan 1)
- Next.js 16 con React 19 — versioni bleeding edge al momento dello sviluppo
- `motion/react` (non `framer-motion`) — import path corretto per Motion 12
- Static export con `output: "export"` — niente API routes, niente SSR
- WhatsApp CTA con messaggi pre-compilati per ogni servizio (template dettagliati in `data.ts`)

## Service Ownership

| Servizio | Account/Owner | Note |
|----------|--------------|------|
| Vercel | Federico Bavieri (`trast-no1s-projects`) | Progetto `one-more-ink`, piano hobby |
| Dominio `onemoreink.it` | Non acquistato | Referenziato in sitemap/robots |
| Instagram `@onemoreink` | Cliente (One More Ink) | 3.468 follower |
| Instagram `@unpiccolofioccodineve` | Federica Morselli | Titolare studio |
| Instagram `@ste49arts` | Stefano Mazzotta | Artista |
| WhatsApp `+39 327 0991523` | Cliente (One More Ink) | Numero studio |
| Google Maps listing | Cliente | Usato per embed |

## File Chiave

### Configurazione
- `package.json` — dipendenze e script
- `next.config.ts` — static export + immagini unoptimized
- `src/app/globals.css` — design system completo (colori, pattern, animazioni, glow effects)
- `src/app/layout.tsx` — root layout con font, JSON-LD schema, providers, cookie banner

### Dati
- `src/lib/data.ts` — TUTTI i dati del sito: artisti, stili, servizi, gallery (50 items), recensioni, merch, stats
- `src/lib/constants.ts` — info studio, social links, orari apertura
- `src/lib/animations.ts` — varianti Motion condivise (easing, duration, fadeInUp, stagger)

### Componenti
- `src/components/nav.tsx` — navbar fixed con hamburger mobile
- `src/components/footer.tsx` — footer con social icons SVG inline
- `src/components/lightbox.tsx` — lightbox gallery con zoom, keyboard nav, swipe
- `src/components/cookie-banner.tsx` — banner GDPR
- `src/components/animations/` — FadeIn, SlideUp, StaggerContainer
- `src/components/providers/` — LenisProvider (smooth scroll + GSAP ticker), MotionProvider (LazyMotion)

### Pagine
- `src/app/page.tsx` — home (la pagina piu grande, ~660 righe)
- `src/app/artisti/page.tsx` — profili artisti
- `src/app/portfolio/page.tsx` — gallery con filtri e lightbox
- `src/app/servizi/page.tsx` — servizi + processo + stili
- `src/app/shop/page.tsx` — merch catalog (coming soon)
- `src/app/privacy/page.tsx` — privacy policy

### Assets
- `public/gallery/` — 50 foto tattoo da Instagram (WebP, ~50-375KB ciascuna)
- `public/artists/` — 8 foto artisti (WebP/JPG)
- `public/shop/` — 6 foto prodotti merch (JPG)
- `public/logo.png` — logo studio
- `public/tattoo-pattern.png` — pattern decorativo usato come background
- `public/og-image.png` — Open Graph image

### Planning (obsoleto)
- `.planning/PROJECT.md` — brief originale con contesto cliente
- `.planning/REQUIREMENTS.md` — 29 requisiti v1, 5 deferred v2
- `.planning/ROADMAP.md` — 6 fasi pianificate (tracker non aggiornato)
