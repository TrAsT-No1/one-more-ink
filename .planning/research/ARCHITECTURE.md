# Architecture Patterns

**Domain:** Premium tattoo studio website (animation-heavy, static export)
**Researched:** 2026-03-08
**Overall confidence:** HIGH (stack noto, pattern verificati con docs ufficiali)

## Recommended Architecture

Single-page-feel multi-route static site. Next.js 15 App Router con `output: "export"` genera HTML statico. Tutte le animazioni sono client-side via Motion (ex Framer Motion). Nessun backend, nessun database, nessuna API route.

```
app/
  layout.tsx              ← Root layout (theme, fonts, metadata, navbar, footer)
  page.tsx                ← Landing / Home (hero + sezioni scroll)
  artists/
    page.tsx              ← Overview artisti
    [slug]/
      page.tsx            ← Profilo singolo artista + portfolio
  services/
    page.tsx              ← Stili tattoo + piercing
  about/
    page.tsx              ← Storia studio + team
  contact/
    page.tsx              ← Contatti + mappa + WhatsApp CTA
  walk-in/
    page.tsx              ← Walk-In Day (annunci, date)

components/
  layout/                 ← Navbar, Footer, PageTransition
  ui/                     ← Button, Card, Badge, Section (primitivi riusabili)
  animations/             ← FadeIn, SlideUp, StaggerContainer, Reveal, Parallax
  sections/               ← HeroSection, ArtistCard, ServiceCard, GalleryGrid
  gallery/                ← GalleryGrid, GalleryModal, GalleryImage

lib/
  data.ts                 ← Dati statici (artisti, servizi, immagini placeholder)
  animations.ts           ← Varianti Motion condivise (durate, easing, stagger)
  constants.ts            ← Colori, link social, contatti, orari
```

### Principio architetturale: Server Component Shell + Client Animation Islands

Next.js 15 App Router rende tutto Server Component di default. Le animazioni Motion richiedono `"use client"`. L'architettura ottimale:

1. **Le page rimangono Server Component** - struttura, SEO, metadata
2. **I componenti animati sono Client Component isolati** - importati nelle page
3. **I dati sono statici in `lib/data.ts`** - nessuna fetch, tutto hardcoded

Questo significa che `app/page.tsx` importa `<HeroSection />` (client) ma la page stessa resta server.

### Component Boundaries

| Component | Responsibility | Comunicazione | Client/Server |
|-----------|---------------|---------------|---------------|
| `RootLayout` | Theme, fonts, metadata globali, Navbar, Footer | Wrappa tutte le page | Server |
| `Navbar` | Navigazione, hamburger mobile, logo | Link interni, stato menu mobile | Client |
| `Footer` | Link social, contatti, copyright | Props statiche | Server |
| `PageTransition` | Animazione entrata/uscita pagina | Wrappa `{children}` in AnimatePresence | Client |
| `HeroSection` | Animazione hero landing (primo impatto) | Autocontenuto, nessuna dipendenza | Client |
| `FadeIn` / `SlideUp` / `Reveal` | Wrapper animazione riusabile | `{children}` + props config | Client |
| `StaggerContainer` | Container per animazioni figlie sfalsate | `{children}` con variants | Client |
| `ArtistCard` | Card artista con hover effect | Props: nome, foto, stili, slug | Client |
| `GalleryGrid` | Griglia portfolio con filtro stile | Props: immagini[], artista | Client |
| `GalleryModal` | Lightbox immagine full-screen | Stato aperto/chiuso, immagine corrente | Client |
| `ServiceCard` | Card servizio/stile tattoo | Props: nome, descrizione, icona | Client |
| `WhatsAppCTA` | Bottone floating + sezione contatto | Props: numero, messaggio precompilato | Client |
| `MapEmbed` | Google Maps iframe | Props: coordinate | Server |

### Data Flow

```
lib/data.ts (dati statici)
    |
    v
app/page.tsx (Server Component - importa dati + passa come props)
    |
    v
<HeroSection />     ← Client: animazione autonoma
<SectionReveal>     ← Client: wrapper scroll-triggered
  <ArtistCard       ← Client: riceve props, hover animation
    artist={data}
  />
</SectionReveal>
```

**Direzione:** unidirezionale, top-down. I dati partono da `lib/data.ts`, passano attraverso le page (server) come props ai componenti client. Nessuno stato globale necessario. L'unico stato client e' locale: menu aperto/chiuso, modal aperta/chiusa, filtro gallery attivo.

## Animation Architecture

### Libreria: `motion` (v12+)

**CRITICO:** Il pacchetto si chiama `motion`, NON `framer-motion`. Gli import vengono da `motion/react`. Motion v12 e' stabile e compatibile con React 19 + Next.js 15.

```bash
npm install motion
```

```typescript
// CORRETTO
import { motion, AnimatePresence } from "motion/react"

// SBAGLIATO (pacchetto legacy)
import { motion } from "framer-motion"
```

### Tre livelli di animazione

| Livello | Tecnica | Uso | Performance |
|---------|---------|-----|-------------|
| **Entrata pagina** | AnimatePresence + variants | Transizione tra route | GPU (transform + opacity) |
| **Scroll-triggered** | `whileInView` + variants | Reveal sezioni on scroll | GPU (transform + opacity) |
| **Interazione** | `whileHover`, `whileTap` | Hover card, tap button | GPU (scale + opacity) |

### Pattern 1: Reusable Animation Wrapper

Componenti wrapper che incapsulano la logica di animazione. Le page li usano senza conoscere i dettagli Motion.

```typescript
// components/animations/FadeIn.tsx
"use client"
import { motion } from "motion/react"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
  const directionOffset = {
    up: { y: 40 }, down: { y: -40 },
    left: { x: 40 }, right: { x: -40 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

### Pattern 2: Shared Variants in `lib/animations.ts`

Centralizzare durate, easing e stagger per coerenza visiva.

```typescript
// lib/animations.ts
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1]
export const DURATION_FAST = 0.3
export const DURATION_NORMAL = 0.6
export const DURATION_SLOW = 1.0

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: DURATION_NORMAL, ease: EASE_SMOOTH }
  }
}
```

### Pattern 3: Page Transitions con AnimatePresence

```typescript
// components/layout/PageTransition.tsx
"use client"
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}
```

**Nota:** In App Router, `AnimatePresence` per page transitions richiede che il `PageTransition` wrapper sia nel layout e riceva `pathname` come key. Questo funziona ma ha limitazioni note: le exit animation possono essere inconsistenti con la navigazione veloce. Alternativa piu' sicura: animare solo l'entrata (`initial` + `animate`), senza `exit`.

### Performance Rules

1. **Anima SOLO `transform` e `opacity`** - Queste proprieta' girano sul compositor thread GPU. Mai animare `width`, `height`, `top`, `left`, `margin`, `padding`.
2. **`viewport={{ once: true }}`** - Le animazioni scroll si attivano una volta sola. Evita ri-trigger continui e riduce il lavoro dell'Intersection Observer.
3. **`will-change: transform`** - Applicalo via CSS ai container hero/grandi animazioni. Non abusarne (consuma VRAM).
4. **Lazy load immagini sotto il fold** - `loading="lazy"` su tutte le immagini non-hero.
5. **Evita layout animations su liste grandi** - `layout` prop di Motion causa reflow. Usalo solo su pochi elementi (modal, card singole), mai su griglia 20+ elementi.
6. **Niente parallax su mobile** - Il parallax via scroll consuma batteria e causa jank su device lenti. Disabilitarlo con media query o `useReducedMotion()`.

## Page Structure Details

### Home (`/`)
La pagina piu' importante. Single scroll con sezioni:
1. **Hero** - Full viewport, animazione d'impatto (testo che appare + immagine/video)
2. **Artist preview** - 2 card artisti con CTA "Scopri il portfolio"
3. **Styles showcase** - Griglia stili tattoo con hover preview
4. **Studio vibe** - Foto studio + breve testo (social proof)
5. **CTA finale** - WhatsApp + Instagram

### Artist Profile (`/artists/[slug]`)
- Header con foto artista + bio
- Filtro per stile
- Gallery grid masonry con lightbox
- Link social personali

### Services (`/services`)
- Grid di card per ogni stile/servizio
- Descrizione + esempio visivo per stile
- CTA booking in fondo

### About (`/about`)
- Timeline/storia dello studio
- Valori + filosofia
- Foto dello studio

### Contact (`/contact`)
- Mappa Google embedded
- Orari apertura
- Numero telefono
- WhatsApp button (primario)
- Instagram link

### Walk-In Day (`/walk-in`)
- Annuncio prossimo evento
- Come funziona
- CTA WhatsApp per info

## Anti-Patterns to Avoid

### Anti-Pattern 1: Animare tutto
**What:** Ogni elemento ha una animazione diversa con timing diversi.
**Why bad:** Overload visivo, performance degradata, sensazione "cheap" invece che premium.
**Instead:** 2-3 animazioni base (fade-in-up, scale-in, stagger) ripetute con coerenza. Il lusso sta nella coerenza, non nella varieta'.

### Anti-Pattern 2: Server Component con hooks Motion
**What:** Mettere `useScroll`, `useMotionValue` in un Server Component.
**Why bad:** Crash a runtime. Questi hook richiedono `"use client"`.
**Instead:** Isolare ogni pezzo animato in un Client Component dedicato. La page resta Server.

### Anti-Pattern 3: next/image con static export senza config
**What:** Usare `<Image />` di Next.js senza configurazione in `output: "export"`.
**Why bad:** L'Image Optimization API non funziona in static export. Build fallisce o immagini rotte.
**Instead:** Usare `images: { unoptimized: true }` in `next.config.ts`, oppure `next-image-export-optimizer` per ottimizzazione a build time.

### Anti-Pattern 4: Gallery senza lazy loading
**What:** Caricare tutte le immagini portfolio al mount.
**Why bad:** Portfolio di un tatuatore puo' avere 50-100 immagini. Blocca il first paint.
**Instead:** `loading="lazy"` + `whileInView` per caricare immagini solo quando visibili.

### Anti-Pattern 5: Page transitions con exit animation in App Router
**What:** Usare `AnimatePresence` con `exit` per transizioni pagina complesse.
**Why bad:** App Router non supporta nativamente le exit animation delle pagine (il componente viene unmountato prima che l'animazione possa completare). Workaround fragili.
**Instead:** Animare solo l'entrata delle pagine (`initial` + `animate`). Oppure usare `view-transitions` API nativa se supportata.

## Static Export Specifics

### next.config.ts

```typescript
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig
```

### Limitations with `output: "export"`
- **No API Routes** - Nessuna route in `app/api/`. Non serve per questo progetto.
- **No ISR/SSR** - Tutto generato a build time. OK per un sito statico.
- **No Image Optimization** - Usare `unoptimized: true` o optimizer esterno.
- **No middleware** - Nessun redirect server-side.
- **generateStaticParams required** - Per route dinamiche come `artists/[slug]`, serve `generateStaticParams()` che ritorna tutti gli slug possibili a build time.

## Suggested Build Order

Le dipendenze tra componenti determinano l'ordine ottimale:

```
Phase 1: Foundation
  ├── next.config.ts (static export)
  ├── app/layout.tsx (theme, fonts, metadata)
  ├── lib/constants.ts (colori, contatti)
  ├── lib/data.ts (dati placeholder artisti + servizi)
  ├── lib/animations.ts (varianti condivise)
  └── components/ui/ (Button, Section base)
      ↓ BLOCCA: tutto il resto dipende da foundation

Phase 2: Layout Shell
  ├── components/layout/Navbar.tsx
  ├── components/layout/Footer.tsx
  └── components/layout/PageTransition.tsx (opzionale)
      ↓ BLOCCA: le page hanno bisogno del layout

Phase 3: Animation Primitives
  ├── components/animations/FadeIn.tsx
  ├── components/animations/SlideUp.tsx
  ├── components/animations/StaggerContainer.tsx
  └── components/animations/Reveal.tsx
      ↓ NON BLOCCA: usati dalle sezioni, ma le sezioni possono iniziare senza

Phase 4: Home Page (showcase principale)
  ├── components/sections/HeroSection.tsx
  ├── components/sections/ArtistCard.tsx
  ├── components/sections/ServiceCard.tsx
  └── app/page.tsx (compone le sezioni)
      ↓ BLOCCA parziale: ArtistCard riusato in /artists

Phase 5: Artist Pages + Gallery
  ├── components/gallery/GalleryGrid.tsx
  ├── components/gallery/GalleryModal.tsx
  ├── components/gallery/GalleryImage.tsx
  ├── app/artists/page.tsx
  └── app/artists/[slug]/page.tsx + generateStaticParams
      ↓ NON BLOCCA: indipendente dalle altre page

Phase 6: Secondary Pages
  ├── app/services/page.tsx
  ├── app/about/page.tsx
  ├── app/contact/page.tsx (mappa + WhatsApp)
  └── app/walk-in/page.tsx

Phase 7: Polish & Performance
  ├── SEO (metadata, schema markup, sitemap)
  ├── Performance audit (Lighthouse 90+)
  ├── Responsive fine-tuning
  └── Accessibility (contrast, focus, aria)
```

**Rationale ordine:**
- Phase 1-2 sono prerequisiti strutturali (layout, theme, dati)
- Phase 3 puo' andare in parallelo con Phase 2
- Phase 4 (Home) e' la pagina che il cliente vede per prima, priorita' massima
- Phase 5 (Gallery) e' il secondo punto di vendita piu' importante
- Phase 6 sono pagine informative, meno critiche per l'impatto visivo
- Phase 7 e' polish finale, non bloccante per il feedback iniziale

## Sources

- [Motion for React - official docs](https://motion.dev/docs/react) - HIGH confidence
- [Motion upgrade guide](https://motion.dev/docs/react-upgrade-guide) - HIGH confidence (package rename, React 19 compat)
- [Next.js Static Exports guide](https://nextjs.org/docs/pages/guides/static-exports) - HIGH confidence
- [Next.js Image with static export](https://nextjs.org/docs/messages/export-image-api) - HIGH confidence
- [Tattoo website design best practices - Seahawk](https://seahawkmedia.com/design/tattoo-website-design-tips/) - MEDIUM confidence
- [Best tattoo websites 2026 - SiteBuilderReport](https://www.sitebuilderreport.com/inspiration/tattoo-websites) - MEDIUM confidence
- [Best tattoo websites 2026 - CyberOptik](https://www.cyberoptik.net/blog/best-tattoo-shop-websites/) - MEDIUM confidence
