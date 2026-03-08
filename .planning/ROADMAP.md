# Roadmap: One More Ink

## Overview

Sito web speculativo per One More Ink, tattoo studio a Modena. Il percorso parte dal design system dark e dall'infrastruttura animazioni, poi costruisce la shell di navigazione con CTA persistenti, la home page con hero d'impatto, il sistema gallery/portfolio per artista (il cuore del pitch), le pagine secondarie (Walk-In Day, info, FAQ, social proof), e chiude con SEO locale, ottimizzazione performance e deploy su Vercel pronto per la demo al cliente.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation + Design System** - Dark theme tokens, typography, animation primitives, project scaffold
- [ ] **Phase 2: Layout Shell + Navigation** - Navbar, footer, WhatsApp/Instagram CTA persistenti, responsive layout
- [ ] **Phase 3: Home Page** - Hero section cinematica, scroll animations, prima impressione completa
- [ ] **Phase 4: Artist Pages + Gallery System** - Portfolio per artista, filtering, lightbox, flash sheet gallery
- [ ] **Phase 5: Secondary Pages** - Walk-In Day, studio info, aftercare, FAQ, contatti, social proof
- [ ] **Phase 6: SEO + Performance + Deploy** - Meta tags, JSON-LD, Lighthouse 90+, image optimization, Vercel deploy

## Phase Details

### Phase 1: Foundation + Design System
**Goal**: Il progetto ha un design system dark verificato per accessibilita e un set di animation primitives riutilizzabili con vincoli di performance mobile
**Depends on**: Nothing (first phase)
**Requirements**: UX-01, UX-02
**Success Criteria** (what must be TRUE):
  1. Il sito mostra un dark theme coerente con background scuri, accenti gold/warm, e ogni coppia colore testo/sfondo supera WCAG 4.5:1
  2. Il layout si adatta correttamente da 320px a 1440px+ senza overflow orizzontale o elementi tagliati
  3. Le animation primitives (FadeIn, SlideUp, StaggerContainer) funzionano senza jank visibile con CPU throttling 4x in Chrome DevTools
  4. Lenis smooth scroll e attivo e non interferisce con la navigazione nativa (anchor link, back button)
**Plans**: TBD

Plans:
- [ ] 01-01: Next.js 16 scaffold, Tailwind v4 config, dark theme tokens, typography
- [ ] 01-02: Animation primitives (Motion + GSAP + Lenis), lib/data.ts, lib/animations.ts

### Phase 2: Layout Shell + Navigation
**Goal**: Ogni pagina ha navigazione funzionante e CTA di booking visibili senza scrollare
**Depends on**: Phase 1
**Requirements**: UX-04, BOOK-01, BOOK-02
**Success Criteria** (what must be TRUE):
  1. La navbar mostra max 6 voci, si trasforma in hamburger menu su mobile, e il menu mobile copre lo schermo con animazione fluida
  2. Il bottone WhatsApp floating e visibile su ogni pagina, in ogni viewport, e apre wa.me con numero precompilato
  3. Il link Instagram DM e accessibile da ogni pagina (navbar o footer) e apre il profilo @onemoreink
  4. Il footer mostra contatti, social links, e credits su tutte le pagine
**Plans**: TBD

Plans:
- [ ] 02-01: Navbar (desktop + mobile hamburger), Footer, page layout wrapper
- [ ] 02-02: WhatsApp floating CTA, Instagram DM link, responsive testing

### Phase 3: Home Page
**Goal**: La home page comunica il brand One More Ink in 5 secondi e spinge il visitatore a esplorare il portfolio
**Depends on**: Phase 2
**Requirements**: UX-05, UX-03
**Success Criteria** (what must be TRUE):
  1. La hero section occupa il viewport completo con un'animazione d'ingresso che cattura l'attenzione entro 2 secondi dal caricamento
  2. Lo scroll rivela sezioni con animazioni entrance (fade, slide, parallax) che si attivano al momento giusto senza stutter
  3. La pagina include preview degli artisti e una CTA che porta al portfolio
  4. L'esperienza scroll completa funziona senza problemi su mobile (touch, momentum, nessun layout shift)
**Plans**: TBD

Plans:
- [ ] 03-01: Hero section con animazione d'impatto, artist preview cards
- [ ] 03-02: Scroll-triggered sections (servizi/stili, studio vibe, CTA finale)

### Phase 4: Artist Pages + Gallery System
**Goal**: Il visitatore puo esplorare il portfolio di ogni artista con un'esperienza visiva che valorizza i lavori come in un sito Awwwards
**Depends on**: Phase 3
**Requirements**: PORT-01, PORT-02, PORT-03, PORT-04, PORT-05
**Success Criteria** (what must be TRUE):
  1. Ogni artista (Federica, Stefano) ha una pagina dedicata con bio, foto, specialita e descrizione della personalita
  2. La gallery mostra immagini lazy-loaded in un grid responsivo e il visitatore puo filtrare per stile tattoo (traditional, blackwork, fine line, ornamental, neo-traditional, realismo)
  3. Il click su un'immagine apre un lightbox full-screen con navigazione prev/next e chiusura via click esterno, ESC, o swipe
  4. La flash sheet gallery mostra design con stato disponibile/preso e info su prezzo/dimensione
  5. La gallery funziona con 6-8 immagini placeholder senza sembrare vuota (layout progettato per scalare, non per riempire)
**Plans**: TBD

Plans:
- [ ] 04-01: Artist profile pages con generateStaticParams, bio, specialties
- [ ] 04-02: Gallery system (GalleryGrid, filtering, lazy loading, next-image-export-optimizer)
- [ ] 04-03: Lightbox modal, flash sheet gallery con status disponibile/preso

### Phase 5: Secondary Pages
**Goal**: Il sito e completo di tutte le pagine informative che danno credibilita allo studio e rispondono alle domande comuni dei clienti
**Depends on**: Phase 4
**Requirements**: WALK-01, WALK-02, WALK-03, INFO-01, INFO-02, INFO-03, INFO-04, BOOK-03, SOCIAL-01, SOCIAL-02, SOCIAL-03
**Success Criteria** (what must be TRUE):
  1. La pagina Walk-In Day mostra data evento, flash designs (linkati alla flash gallery), how-it-works, countdown timer, e CTA di prenotazione
  2. La pagina contatti mostra Google Maps embedded, indirizzo, telefono, WhatsApp, Instagram, e orari di apertura chiaramente leggibili
  3. La pagina aftercare mostra istruzioni di cura post-tatuaggio con tipografia pulita e leggibile
  4. La sezione FAQ usa un formato accordion con almeno 6 domande (primo tatuaggio, pricing, durata sessione, cosa portare, guarigione, caparra)
  5. La sezione testimonials mostra citazioni di clienti con nome e stile tatuaggio, e il link Instagram @onemoreink e prominente con preview o embed del feed
**Plans**: TBD

Plans:
- [ ] 05-01: Walk-In Day page (evento, countdown, flash designs, CTA)
- [ ] 05-02: Studio info page (mappa, orari, contatti), aftercare page, FAQ accordion
- [ ] 05-03: Social proof (testimonials, Instagram link/embed)

### Phase 6: SEO + Performance + Deploy
**Goal**: Il sito e ottimizzato per "tatuatore Modena", carica veloce su mobile, e deployato su Vercel pronto per la demo al cliente
**Depends on**: Phase 5
**Requirements**: PERF-01, PERF-02, PERF-03, SEO-01, SEO-02, SEO-03
**Success Criteria** (what must be TRUE):
  1. Ogni pagina ha meta title, description, e Open Graph tags in italiano ottimizzati per keyword locali
  2. Il JSON-LD LocalBusiness schema include nome, indirizzo, orari, telefono, coordinate geo dello studio
  3. Tutte le immagini hanno alt text in italiano, sono servite in WebP/AVIF con srcset, e usano lazy loading
  4. Lighthouse mobile score 90+ su Performance, Accessibility, Best Practices, SEO
  5. Il sito e live su Vercel con URL condivisibile, navigabile da mobile senza problemi
**Plans**: TBD

Plans:
- [ ] 06-01: Meta tags, Open Graph, semantic HTML, alt text audit
- [ ] 06-02: JSON-LD LocalBusiness, sitemap, image optimization pipeline
- [ ] 06-03: Lighthouse audit + fix, Vercel deploy, mobile device testing

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6

| Phase | Plans Complete | Status | Completed |
|-------|---------------|--------|-----------|
| 1. Foundation + Design System | 0/2 | Not started | - |
| 2. Layout Shell + Navigation | 0/2 | Not started | - |
| 3. Home Page | 0/2 | Not started | - |
| 4. Artist Pages + Gallery System | 0/3 | Not started | - |
| 5. Secondary Pages | 0/3 | Not started | - |
| 6. SEO + Performance + Deploy | 0/3 | Not started | - |
