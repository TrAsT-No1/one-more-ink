# Project Research Summary

**Project:** One More Ink -- Premium Tattoo Studio Website
**Domain:** Static portfolio/brochure site with premium animations (speculative pitch)
**Researched:** 2026-03-08
**Confidence:** HIGH

## Executive Summary

One More Ink is a speculative build: a dark, animation-rich static website for a Modena tattoo studio that has no web presence. The goal is dual -- serve as a portfolio piece for Federico and as a ready-to-sell product pitched at EUR 1,500. Research across stack, features, architecture, and pitfalls converges on one clear approach: a Next.js 16 static export with Motion + GSAP animations, Tailwind v4 dark theme, and per-artist portfolio galleries. This is a well-trodden path -- the stack is mature, the patterns are documented, and there are no novel technical challenges.

The recommended architecture is a "Server Component shell with Client Animation Islands" pattern. Pages remain Server Components for SEO and metadata; animated sections are isolated Client Components. Data is fully static (hardcoded in `lib/data.ts`), no backend, no CMS, no API routes. Lenis provides smooth scrolling, Motion handles component-level animations, and GSAP ScrollTrigger handles page-level scroll choreography. Image optimization at build time via `next-image-export-optimizer` solves the static export limitation of `next/image`.

The primary risks are not technical but presentational: (1) a placeholder gallery that feels like a template demo instead of a bespoke build will kill the pitch, (2) animations that stutter on the client's mid-tier Android phone will destroy the wow factor during the demo, (3) a dark theme that fails accessibility contrast checks signals amateur work, and (4) zero local SEO means the site generates no organic traffic, undermining the business value proposition. All four are preventable with upfront discipline -- contrast-checked color tokens, mobile-first animation budgets, curated Instagram-sourced images, and SEO architecture from phase 1.

## Key Findings

### Recommended Stack

The stack leverages Federico's existing Next.js + Tailwind expertise with zero unfamiliar technologies. Every library is mature and well-documented.

**Core technologies:**
- **Next.js 16.1 (static export):** Framework with `output: "export"` for zero-server deployment. Turbopack stable, React Compiler stable, App Router mature.
- **Tailwind CSS 4.2:** CSS-native config, OKLCH color space (richer darks), cascade layers. No JS config file.
- **Motion 12.x:** Component-level animations -- hover, tap, enter/exit, `whileInView` scroll reveals. Import from `motion/react`, NOT `framer-motion`.
- **GSAP 3.14 + ScrollTrigger:** Page-level scroll choreography -- timeline sequencing, pinning, scrub, parallax. Now 100% free (Webflow acquired GSAP).
- **Lenis 1.x:** Smooth momentum scrolling (3KB). Foundation for both Motion and GSAP scroll animations.
- **next-image-export-optimizer 1.20:** Build-time WebP/AVIF generation. Solves static export image optimization. Critical for a portfolio site.
- **Vercel (free tier):** Native Next.js hosting with preview deploys and global CDN.

**What NOT to use:** Three.js (overkill, kills mobile), any CMS (static content for 2 artists), Locomotive Scroll (superseded by Lenis), Swiper/Slick (generic feel), `framer-motion` package (deprecated, use `motion`).

### Expected Features

**Must have (table stakes):**
- T1: Per-artist portfolio galleries with style filtering and lightbox
- T2: Artist bios (name, photo, specialties)
- T3: Mobile-first responsive design (80%+ traffic from Instagram is mobile)
- T4: Booking CTA on every page (WhatsApp + Instagram DM)
- T5: Studio info with Google Maps embed
- T6: Aftercare instructions page
- T7: FAQ with accordion
- T8: Instagram link (prominent, not buried)
- T9: Fast load times (< 2s LCP)
- T10: Local SEO (structured data, Italian meta, alt text)

**Should have (launch differentiators):**
- D5: Dark editorial design as brand identity (not a toggle)
- D1+D2: Walk-In Day page + flash gallery (unique revenue driver)
- D9: Testimonials / social proof (low effort, high trust)

**Defer to post-launch:**
- D3: Merch shop (start with "DM to order")
- D4: Consultation form (start with WhatsApp CTA)
- D6: Advanced scroll animations (polish phase)
- D8: Blog (content production bottleneck)
- D10: Multi-language (high effort, narrow audience)
- D7: Guest artist section (add when relevant)

**Anti-features (do NOT build):** Full booking system, background music, pricing calculator, client accounts, AI tattoo generator, 3D/WebGL, chatbot, newsletter signup.

### Architecture Approach

Static multi-route site with ~6 routes. Server Component pages import Client Component animation islands. All data lives in `lib/data.ts`. Only client-side state is UI-local (menu open/closed, modal, gallery filter). Unidirectional data flow, top-down props, zero global state management needed.

**Major components:**
1. **RootLayout** -- Theme, fonts, global metadata, Navbar, Footer (Server)
2. **Animation primitives** (`FadeIn`, `SlideUp`, `StaggerContainer`, `Reveal`) -- Reusable wrappers encapsulating Motion logic (Client)
3. **Gallery system** (`GalleryGrid`, `GalleryModal`, `GalleryImage`) -- Filterable, lazy-loaded portfolio with lightbox (Client)
4. **Section components** (`HeroSection`, `ArtistCard`, `ServiceCard`) -- Page-level building blocks with built-in animations (Client)
5. **WhatsAppCTA** -- Floating booking button, visible on every page (Client)

**Key patterns:**
- Shared animation variants in `lib/animations.ts` for visual consistency
- Animate ONLY `transform` and `opacity` (GPU-composited)
- `viewport={{ once: true }}` on all scroll-triggered animations
- No exit animations in page transitions (App Router limitation)
- `generateStaticParams()` for `artists/[slug]` dynamic routes

### Critical Pitfalls

1. **Placeholder gallery that screams "template"** -- The portfolio IS the product. Use curated Instagram-sourced images matching the studio's actual style. Design gallery to shine with 6-8 images, not require 50. Add explicit "I tuoi lavori qui" states.

2. **Animations that die on mobile** -- Test with 4x CPU throttling and Slow 3G. Use `LazyMotion` + `m` components (5KB vs 25KB). Disable parallax on mobile. Cap simultaneous animations to 3-4 elements. This must be a Phase 1 constraint, not Phase 7 optimization.

3. **Dark theme accessibility failure** -- Use dark gray (#121212) not pure black. Pre-validate every color token pair against WCAG 4.5:1. Gold accent #D4AF37 passes; #C9A96E fails. Always overlay scrims on text-over-image.

4. **Zero local SEO** -- Implement LocalBusiness JSON-LD schema from day one. Italian-language content throughout. Page titles: "[Content] | One More Ink Tattoo Studio Modena". Alt text: "Tatuaggio [stile] su [parte corpo] - One More Ink Modena".

5. **Pitching tech instead of business value** -- Demo on the client's phone, not a laptop. Lead with "piu prenotazioni, meno tempo su DM" not "Next.js, React Server Components". Show before/after: Instagram grid vs. portfolio page.

## Implications for Roadmap

### Phase 1: Foundation + Design System
**Rationale:** Everything depends on the theme, layout shell, and animation infrastructure. Color tokens with verified contrast ratios prevent the accessibility pitfall. Animation utilities with performance constraints baked in prevent the mobile performance pitfall.
**Delivers:** Next.js project scaffold, Tailwind v4 dark theme with OKLCH tokens, typography via `next/font`, animation primitives (`FadeIn`, `SlideUp`, `StaggerContainer`), `lib/animations.ts` shared variants, `lib/data.ts` static data structure, `lib/constants.ts`.
**Addresses:** Foundation for all table stakes. D5 (dark editorial design).
**Avoids:** Pitfall 3 (dark theme accessibility), Pitfall 11 (font loading flash), Pitfall 2 (mobile animation performance -- constraints set here).

### Phase 2: Layout Shell + Navigation
**Rationale:** Navbar, Footer, and page transition wrapper must exist before any page can be built. The persistent WhatsApp CTA goes here.
**Delivers:** Navbar (mobile hamburger), Footer (social links, contacts), PageTransition wrapper (entry animation only, no exit), WhatsAppCTA floating button, responsive layout at all breakpoints.
**Addresses:** T4 (booking CTA on every page), T3 (mobile-first).
**Avoids:** Pitfall 6 (buried contact/booking CTA).

### Phase 3: Home Page
**Rationale:** The home page is the first thing the client sees. Hero animation sets the tone. Artist preview cards and styles showcase drive navigation deeper.
**Delivers:** HeroSection (full-viewport animation), ArtistCard previews, styles showcase grid, studio vibe section, final CTA section. Full scroll experience.
**Addresses:** T2 (artist bios preview), partial T1 (artist showcase).
**Avoids:** Pitfall 7 (wow factor for pitch).

### Phase 4: Artist Pages + Gallery System
**Rationale:** The portfolio is the product's core value. This is where the pitch succeeds or fails. Gallery filtering, lightbox, lazy loading, and image optimization all converge here.
**Delivers:** `GalleryGrid` with style filtering, `GalleryModal` lightbox, `GalleryImage` with lazy loading, artist profile pages with `generateStaticParams`, `next-image-export-optimizer` integration.
**Addresses:** T1 (artist portfolios), T9 (fast load times via image optimization).
**Avoids:** Pitfall 1 (template-looking gallery), Pitfall 5 (unorganized gallery).

### Phase 5: Secondary Pages
**Rationale:** Informational pages that complete the site. Lower visual impact than home/gallery but necessary for credibility and SEO.
**Delivers:** Services page (stili tattoo), About page (studio story), Contact page (map + WhatsApp), Walk-In Day page, Aftercare page, FAQ with accordion.
**Addresses:** T5 (studio info), T6 (aftercare), T7 (FAQ), D1 (Walk-In Day), T8 (Instagram link).

### Phase 6: SEO + Performance + Legal
**Rationale:** SEO is not polish -- it is business value. But it requires all content pages to exist first. Lighthouse audit validates mobile performance. GDPR compliance is mandatory for EU.
**Delivers:** Per-page metadata, LocalBusiness JSON-LD schema, FAQ schema, sitemap, alt text audit, Lighthouse 90+ scores, `prefers-reduced-motion` support, GDPR cookie banner, privacy policy page.
**Addresses:** T10 (SEO), T9 (performance validation), Pitfall 10 (GDPR).
**Avoids:** Pitfall 4 (zero SEO), Pitfall 2 (final mobile performance validation).

### Phase 7: Pitch Preparation + Deploy
**Rationale:** The site must be deployed, tested on a real mid-tier phone, and the pitch must be rehearsed with business-value framing.
**Delivers:** Vercel deployment, custom domain setup (optional), mid-tier Android device testing, pitch script with ROI framing, demo walkthrough on mobile.
**Avoids:** Pitfall 7 (pitching tech instead of value).

### Phase Ordering Rationale

- Phases 1-2 are structural prerequisites -- nothing works without them.
- Phase 3 (Home) before Phase 4 (Gallery) because ArtistCard is created in Phase 3 and reused in Phase 4, and the home page provides the first impression during development reviews.
- Phase 4 (Gallery) is the highest-risk phase -- image strategy, filtering UX, and performance optimization all converge. It deserves focused attention.
- Phase 5 (Secondary pages) is low-risk, high-volume -- pages follow established patterns from Phases 3-4.
- Phase 6 (SEO) requires all content pages to exist for per-page metadata, but SEO architecture (meta templates, schema structure) should be defined in Phase 1 and implemented progressively.
- Phase 7 (Pitch) is the business culmination -- the site must be complete and polished before demo.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 4 (Gallery):** Image optimization pipeline with `next-image-export-optimizer` needs hands-on validation. Gallery filtering UX patterns (tag-based vs. category tabs) need design decision. Lightbox accessibility (keyboard navigation, focus trap) needs implementation research.
- **Phase 6 (SEO):** LocalBusiness schema for TattooParlor type -- verify schema.org support. Italian-specific SEO patterns may need validation.

Phases with standard patterns (skip research-phase):
- **Phase 1 (Foundation):** Next.js 16 + Tailwind v4 + Motion setup is well-documented.
- **Phase 2 (Layout):** Standard responsive layout with mobile nav -- no novel challenges.
- **Phase 3 (Home):** Section-based landing page is the most common Next.js pattern.
- **Phase 5 (Secondary pages):** Straightforward content pages following established component patterns.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All technologies verified against official docs and npm. Developer already knows the stack. No experimental dependencies. |
| Features | HIGH | Based on 6+ tattoo studio benchmarks and industry best practices. Feature set aligns with PROJECT.md requirements. |
| Architecture | HIGH | Standard Next.js App Router patterns with well-documented Motion integration. Static export is a simple, proven path. |
| Pitfalls | MEDIUM-HIGH | Cross-referenced multiple sources. Mobile performance and gallery pitfalls are domain-validated. SEO pitfalls are general but applicable. Pitch-related pitfalls are inferred from the speculative nature of the project. |

**Overall confidence:** HIGH

### Gaps to Address

- **Real image strategy:** PROJECT.md acknowledges placeholder images. The gallery component must be designed to work compellingly with 6-8 curated images, not depend on a full portfolio. Instagram scraping for realistic mockup content should be evaluated during Phase 4 planning.
- **GSAP + Lenis + Motion integration:** All three are recommended but their interplay (especially Lenis smooth scroll with GSAP ScrollTrigger and Motion's `whileInView`) needs practical validation during Phase 1. ARCHITECTURE.md mentions this stack but doesn't detail the integration wiring.
- **Walk-In Day content:** D1 is flagged as a differentiator, but the page structure depends on event-specific content (dates, flash sheets) that may not exist yet. Phase 5 should define the template, not require real event data.
- **Next.js version discrepancy:** ARCHITECTURE.md references Next.js 15 while STACK.md recommends Next.js 16.1. Use **Next.js 16.1** as recommended by STACK.md -- it is the latest stable version and ships Turbopack stable.

## Sources

### Primary (HIGH confidence)
- [Next.js 16.1 Blog](https://nextjs.org/blog/next-16-1) -- framework version, static export
- [Motion Documentation](https://motion.dev/docs) -- animation API, performance, bundle size
- [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) -- scroll animation
- [Tailwind CSS v4 Announcement](https://tailwindcss.com/blog/tailwindcss-v4) -- CSS-native config, OKLCH
- [Lenis](https://lenis.darkroom.engineering/) -- smooth scroll integration
- [next-image-export-optimizer](https://github.com/Niels-IO/next-image-export-optimizer) -- static image optimization

### Secondary (MEDIUM confidence)
- [CyberOptik - 20 Best Tattoo Shop Websites 2026](https://www.cyberoptik.net/blog/best-tattoo-shop-websites/) -- design benchmarks
- [Seahawk - Tattoo Website Design Tips](https://seahawkmedia.com/design/tattoo-website-design-tips/) -- UX patterns
- [Dingg - Tattoo Portfolio Structure](https://dingg.app/blogs/how-to-make-your-website-actually-book-tattoo-clients-not-just-look-pretty) -- gallery engagement data
- [Accessibilitychecker.org - Dark Mode Accessibility](https://www.accessibilitychecker.org/blog/dark-mode-accessibility/) -- WCAG dark theme
- [TattooStudioPro - SEO](https://tattoostudiopro.com/seo-for-tattoo-websites/) -- local SEO

### Tertiary (LOW confidence)
- [Bookedin - Tattoo Marketing 2026](https://bookedin.com/blog/best-tattoo-studio-marketing-strategies/) -- marketing context
- Gallery engagement data (18s vs 3min) -- single source, directionally useful

---
*Research completed: 2026-03-08*
*Ready for roadmap: yes*
