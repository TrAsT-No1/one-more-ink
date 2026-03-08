# Phase 1: Foundation + Design System - Research

**Researched:** 2026-03-08
**Domain:** Dark theme design system, animation primitives, Next.js static scaffold
**Confidence:** HIGH

## Summary

Phase 1 establishes the project scaffold (Next.js 16 with static export), the dark theme design system (Tailwind v4 OKLCH tokens verified for WCAG accessibility), and the animation primitives (Motion 12 + GSAP + Lenis). Every subsequent phase builds on these foundations.

The standard approach is: CSS-native theme tokens in Tailwind v4 `@theme` with pre-validated contrast ratios, reusable animation wrapper components (FadeIn, SlideUp, StaggerContainer) using Motion's `whileInView`, GSAP+ScrollTrigger for advanced scroll sequences synced with Lenis smooth scroll, and a `lib/animations.ts` shared variants file for visual consistency.

Key finding: all gold accent candidates pass WCAG 4.5:1 against dark backgrounds comfortably. The real risk is Motion bundle size (34kb default) — must use LazyMotion+m pattern to get to ~5kb initial. GSAP cleanup requires `@gsap/react` useGSAP hook, not manual useEffect.

**Primary recommendation:** Start with Next.js scaffold + Tailwind v4 dark tokens + typography in Plan 01-01, then animation primitives (Motion LazyMotion + GSAP useGSAP + Lenis provider) in Plan 01-02.

## Standard Stack

### Core (Phase 1 specific)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.x | Framework, SSG, routing | `output: "export"` for static site. Turbopack stable. App Router with Server Components. |
| Tailwind CSS | 4.2.x | Styling, design tokens | CSS-native config via `@theme`. OKLCH color space for richer darks. No JS config file. |
| Motion | 12.x | UI animations | `motion/react` import. LazyMotion+m for 5kb bundle. whileInView, AnimatePresence. |
| GSAP | 3.14.x | Scroll timelines, text reveals | Free since Webflow acquisition. ScrollTrigger for pin/scrub/parallax. |
| @gsap/react | latest | React cleanup hook | useGSAP auto-reverts all animations on unmount. Drop-in useEffect replacement. |
| Lenis | 1.x | Smooth scroll | 3KB. autoRaf option. `lenis/react` for ReactLenis provider. |
| TypeScript | 5.x | Type safety | Ships with create-next-app. |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next/font | built-in | Font loading | Zero-layout-shift fonts. Used in Phase 1 for typography setup. |
| Lucide React | 0.4x+ | Icons | Tree-shakeable. Add when first icon needed (likely Phase 2). |
| next-image-export-optimizer | 1.20.x | Static image optimization | Add in Phase 4 when gallery images arrive. Not needed in Phase 1. |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Motion LazyMotion+m | Full motion.div | 34kb vs ~5kb initial. Full motion.div is simpler API but unacceptable for mobile perf. |
| Custom Lenis context | `lenis/react` ReactLenis | ReactLenis is the official wrapper, simpler. Custom context gives more control for GSAP sync. Custom recommended because GSAP integration needs `autoRaf: false`. |
| GSAP useGSAP | Manual useEffect+cleanup | useGSAP auto-reverts all ScrollTriggers. Manual cleanup is error-prone (memory leaks). |

**Installation (Phase 1):**
```bash
npx create-next-app@latest one-more-ink --typescript --tailwind --eslint --app --src-dir

cd one-more-ink
npm install motion gsap @gsap/react lenis
npm install -D prettier prettier-plugin-tailwindcss
```

## Architecture Patterns

### Recommended Project Structure (Phase 1 scope)

```
src/
  app/
    layout.tsx              # Root layout: fonts, LenisProvider, metadata
    page.tsx                # Placeholder home (verifies theme works)
    globals.css             # Tailwind v4 @theme tokens
  components/
    providers/
      lenis-provider.tsx    # Lenis smooth scroll context + GSAP sync
    animations/
      fade-in.tsx           # Reusable FadeIn wrapper
      slide-up.tsx          # Reusable SlideUp wrapper
      stagger-container.tsx # Stagger children orchestrator
  lib/
    animations.ts           # Shared variants, easing, durations
    data.ts                 # Static data (empty scaffolds for artists, services)
    constants.ts            # Colors, contact info, social links
```

### Pattern 1: Tailwind v4 Dark Theme via @theme (OKLCH)

**What:** Define all design tokens as CSS custom properties in `@theme` block. No tailwind.config.js.
**When to use:** Always in this project. This IS the configuration.

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  /* === BACKGROUNDS === */
  --color-ink: oklch(0.18 0.000 90);          /* #121212 - primary bg */
  --color-ink-deep: oklch(0.17 0.000 90);     /* #0f0f0f - deeper sections */
  --color-ink-surface: oklch(0.22 0.000 90);  /* #1a1a1a - cards, elevated */

  /* === ACCENTS === */
  --color-gold: oklch(0.77 0.139 91);         /* #D4AF37 - primary accent (8.91:1 on ink) */
  --color-gold-muted: oklch(0.75 0.085 82);   /* #C9A96E - secondary accent (8.37:1 on ink) */
  --color-gold-light: oklch(0.80 0.106 85);   /* #DDB96B - hover/highlight (10.01:1 on ink) */

  /* === TEXT === */
  --color-bone: oklch(0.96 0.012 80);         /* #F5F0E8 - primary text (16.51:1 on ink) */
  --color-bone-muted: oklch(0.91 0.023 85);   /* #E8E0D0 - secondary text (14.28:1 on ink) */

  /* === TYPOGRAPHY === */
  --font-display: var(--font-display-face), serif;
  --font-body: var(--font-body-face), sans-serif;

  /* === SPACING (consistent rhythm) === */
  --spacing-section: 6rem;
  --spacing-section-mobile: 4rem;
}
```

**Confidence:** HIGH — verified with Tailwind v4 official docs. `@theme` generates CSS custom properties at `:root` and utility classes automatically.

### Pattern 2: LazyMotion + m for Bundle Optimization

**What:** Replace `motion.div` with `m.div` wrapped in `LazyMotion` to reduce from 34kb to ~5kb.
**When to use:** Every animated component in this project.

```typescript
// src/components/animations/fade-in.tsx
"use client"
import { LazyMotion, domAnimation, m } from "motion/react"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", className }: FadeInProps) {
  const offsets = {
    up: { y: 40 }, down: { y: -40 },
    left: { x: 40 }, right: { x: -40 },
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, ...offsets[direction] }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
```

**Key detail:** `domAnimation` supports animations, variants, exit animations, tap/hover/focus (~15kb loaded async). `domMax` adds drag/pan/layout (~25kb). This project needs `domAnimation` only — no drag interactions.

**Optimization:** Wrap `LazyMotion` once in the root layout rather than per-component, so features load once:

```typescript
// src/app/layout.tsx (relevant part)
import { LazyMotion, domAnimation } from "motion/react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <LazyMotion features={domAnimation}>
          <LenisProvider>
            {children}
          </LenisProvider>
        </LazyMotion>
      </body>
    </html>
  )
}
```

Then all animation components use `m.div` without needing their own `LazyMotion` wrapper.

**Confidence:** HIGH — documented at motion.dev/docs/react-lazy-motion, verified via WebSearch.

### Pattern 3: Lenis Provider with GSAP ScrollTrigger Sync

**What:** Custom Lenis context provider that syncs with GSAP's ticker for ScrollTrigger compatibility.
**When to use:** In root layout. Provides smooth scroll + GSAP integration.

```typescript
// src/components/providers/lenis-provider.tsx
"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const LenisContext = createContext<Lenis | null>(null)

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      autoRaf: false,    // CRITICAL: false because GSAP ticker drives the loop
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,  // Better mobile perf
    })

    // Sync Lenis scroll events to ScrollTrigger
    lenisInstance.on("scroll", ScrollTrigger.update)

    // GSAP ticker drives Lenis RAF (single animation loop)
    const update = (time: number) => {
      lenisInstance.raf(time * 1000) // GSAP gives seconds, Lenis wants ms
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    setLenis(lenisInstance)

    return () => {
      lenisInstance.off("scroll", ScrollTrigger.update)
      gsap.ticker.remove(update)
      lenisInstance.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}

export function useLenis() {
  return useContext(LenisContext)
}
```

**Critical detail:** `autoRaf: false` is mandatory when integrating with GSAP. If `autoRaf: true`, you get two RAF loops competing, causing jank. GSAP's ticker must be the single driver.

**Confidence:** HIGH — verified via Lenis GitHub README and bridger.to/lenis-nextjs guide.

### Pattern 4: GSAP useGSAP Hook for Automatic Cleanup

**What:** `@gsap/react` provides `useGSAP()` that auto-reverts all GSAP animations/ScrollTriggers on unmount.
**When to use:** Every component that uses GSAP directly (hero, scroll sequences).

```typescript
"use client"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function HeroReveal() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    })
  }, { scope: container }) // scope limits selectors to container descendants

  return (
    <div ref={container}>
      <h1 className="hero-title">One More Ink</h1>
    </div>
  )
}
```

**Key benefits:**
- Auto-reverts all ScrollTriggers on unmount (no memory leaks)
- `scope` limits CSS selectors to ref descendants (no global pollution)
- `contextSafe()` for event-handler animations

**Confidence:** HIGH — verified via gsap.com/resources/React/ official docs.

### Pattern 5: Shared Animation Variants

**What:** Centralized animation values for visual consistency across all components.
**When to use:** Import in every animation component.

```typescript
// src/lib/animations.ts
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const
export const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const

export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  hero: 1.4,
} as const

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE_SMOOTH },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE_SMOOTH },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASE_SMOOTH },
  },
}
```

**Confidence:** HIGH — standard pattern from Motion docs and industry practice.

### Anti-Patterns to Avoid

- **`motion.div` instead of `m.div`:** 34kb vs ~5kb. Never use `motion.div` in this project — always `m.div` with `LazyMotion`.
- **`import from "framer-motion"`:** Dead package. Always `import from "motion/react"`.
- **`autoRaf: true` with GSAP ticker:** Two RAF loops = jank. Set `autoRaf: false` and let GSAP drive.
- **Manual `useEffect` for GSAP:** Memory leaks. Always use `useGSAP` from `@gsap/react`.
- **Animating `width`, `height`, `top`, `left`:** Triggers layout/paint. Only animate `transform` + `opacity`.
- **`layout` prop on grid items:** Causes reflow on every change. Reserve for individual modals/cards.
- **Pure black `#000000` background:** Causes halation (text glow). Use `#121212` minimum.
- **Exit animations in App Router:** `AnimatePresence` exit on route change is fragile. Animate entry only.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Smooth scroll | Custom RAF loop | Lenis | 3KB, handles edge cases (sticky, touch, anchors), tested at scale |
| Scroll-triggered reveal | IntersectionObserver wrapper | Motion `whileInView` + `viewport={{ once: true }}` | Handles cleanup, respects `prefers-reduced-motion`, integrates with variants |
| Scroll timeline/pin/scrub | Custom scroll math | GSAP ScrollTrigger | Industry standard, handles resize, recalculates positions, works with Lenis |
| GSAP cleanup in React | Manual useEffect return | `@gsap/react` useGSAP | Auto-reverts ALL animations/triggers on unmount via gsap.context() |
| Color contrast validation | Eyeballing in browser | Pre-calculated OKLCH pairs with verified ratios | Gold on dark can look fine but fail WCAG. Pre-validate every pair. |
| Font loading optimization | Manual preload tags | `next/font` | Handles subset, swap, preload, self-hosting automatically |

**Key insight:** This phase is about establishing foundations that PREVENT optimization work later. Getting LazyMotion, useGSAP, and contrast ratios right now avoids retrofitting in Phase 6.

## Common Pitfalls

### Pitfall 1: Motion Bundle Bloat on Mobile

**What goes wrong:** Default `motion.div` ships 34kb. Multiple animated sections compound. Mid-tier Android stutters.
**Why it happens:** `motion` package exports everything by default. Easy to miss LazyMotion pattern.
**How to avoid:** Wrap root layout in `<LazyMotion features={domAnimation}>`. Use `m.div` everywhere. Test with Chrome CPU throttle 4x.
**Warning signs:** Lighthouse reports >50kb JS for animation library. Visible jank on scroll reveal.

### Pitfall 2: Dual RAF Loop (Lenis + GSAP)

**What goes wrong:** Lenis `autoRaf: true` creates its own requestAnimationFrame loop. GSAP ticker is another RAF loop. Two loops fighting = scroll jank, doubled CPU usage.
**Why it happens:** Default Lenis config is `autoRaf: true`. GSAP integration docs show manual RAF. Easy to leave both on.
**How to avoid:** Set `autoRaf: false` on Lenis. Add Lenis.raf() to GSAP ticker. Single loop drives everything.
**Warning signs:** Scroll feels "stuttery" or "doubled". CPU usage spikes on scroll.

### Pitfall 3: Gold Accent Fails WCAG on Large Text Only

**What goes wrong:** Gold accent passes 3:1 for large text (18px+) but fails 4.5:1 for body text. Developer uses gold for small labels, links, prices — all failing.
**Why it happens:** Gold is inherently medium-lightness. WCAG requirements differ by text size. Pre-research PITFALLS.md warned about this.
**How to avoid:** Use gold (`oklch(0.77 0.139 91)` / #D4AF37, 8.91:1 on #121212) which passes even body text. Reserve darker golds for decorative-only elements or large headings.
**Warning signs:** Small gold text feels hard to read on phone screens.

### Pitfall 4: Tailwind v4 Utility Classes Not Applying

**What goes wrong:** Custom OKLCH colors defined in `@theme` don't generate expected utility classes.
**Why it happens:** Tailwind v4 CSS-native config is different from v3. Wrong variable naming convention, or missing `@import "tailwindcss"`.
**How to avoid:** Follow exact naming: `--color-{name}` generates `bg-{name}`, `text-{name}`. Test immediately after defining tokens.
**Warning signs:** Classes like `bg-ink` have no effect. Browser DevTools shows no matching CSS rule.

### Pitfall 5: GSAP ScrollTrigger Positions Wrong After Hydration

**What goes wrong:** ScrollTrigger calculates start/end positions during SSR or before images load. Positions are wrong when page is fully rendered.
**Why it happens:** ScrollTrigger measures on first render. Dynamic content (images, fonts) changes layout after measurement.
**How to avoid:** Call `ScrollTrigger.refresh()` after page is fully loaded (window load event or after images). Use `invalidateOnRefresh: true` on triggers.
**Warning signs:** Scroll animations fire too early or too late. They correct themselves after manual resize.

### Pitfall 6: Font Flash (FOIT) on Dark Background

**What goes wrong:** Custom display font takes 1-3 seconds to load. On dark background, invisible text = completely blank page.
**Why it happens:** `font-display: block` hides text until font loads. Dark background makes this dramatically worse than light themes.
**How to avoid:** Use `next/font` with `display: 'swap'`. Choose a system font fallback with similar metrics. Test on throttled network.
**Warning signs:** First paint shows blank dark screen for >1 second.

## Code Examples

### Complete next.config.ts for Static Export

```typescript
// Source: nextjs.org/docs/app/guides/static-exports
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Will switch to next-image-export-optimizer in Phase 4
  },
}

export default nextConfig
```

### Complete globals.css with Dark Theme

```css
/* Source: tailwindcss.com/docs/theme */
@import "tailwindcss";
@import "lenis/dist/lenis.css";

@theme {
  /* Backgrounds - dark gray, NOT pure black (prevents halation) */
  --color-ink: oklch(0.18 0.000 90);
  --color-ink-deep: oklch(0.17 0.000 90);
  --color-ink-surface: oklch(0.22 0.000 90);

  /* Gold accents - ALL pass WCAG 4.5:1 on --color-ink */
  --color-gold: oklch(0.77 0.139 91);
  --color-gold-muted: oklch(0.75 0.085 82);
  --color-gold-light: oklch(0.80 0.106 85);

  /* Text - warm whites, NOT pure white (softer on dark) */
  --color-bone: oklch(0.96 0.012 80);
  --color-bone-muted: oklch(0.91 0.023 85);

  /* Typography scale */
  --font-display: var(--font-display-face), serif;
  --font-body: var(--font-body-face), sans-serif;
}

/* Base dark theme applied globally */
body {
  @apply bg-ink text-bone;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Accessible focus rings on dark background */
:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### StaggerContainer Animation Primitive

```typescript
// src/components/animations/stagger-container.tsx
"use client"
import { m } from "motion/react"
import { staggerContainer } from "@/lib/animations"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function StaggerContainer({ children, className, delay = 0 }: StaggerContainerProps) {
  return (
    <m.div
      variants={{
        ...staggerContainer,
        visible: {
          ...staggerContainer.visible,
          transition: {
            ...staggerContainer.visible.transition,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </m.div>
  )
}
```

### Lenis Anchor Scroll Helper

```typescript
// Lenis handles anchors natively with `anchors: true` option
// But for programmatic scroll-to from React:
"use client"
import { useLenis } from "@/components/providers/lenis-provider"

export function useScrollTo() {
  const lenis = useLenis()

  return (target: string | HTMLElement, options?: { duration?: number; offset?: number }) => {
    if (!lenis) return
    lenis.scrollTo(target, {
      duration: options?.duration ?? 1.5,
      offset: options?.offset ?? 0,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })
  }
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `framer-motion` package | `motion` package, import from `motion/react` | 2024 (Motion v11) | Must install `motion`, NOT `framer-motion`. Old package still works but deprecated. |
| `tailwind.config.js` | `@theme` in CSS | Tailwind v4 (Jan 2025) | No JS config. CSS-native. OKLCH by default. |
| Manual useEffect+cleanup for GSAP | `useGSAP` from `@gsap/react` | GSAP 3.12+ | Auto-reverts all animations via gsap.context(). Prevents memory leaks. |
| `@studio-freight/react-lenis` | `lenis/react` (subpath import) | Lenis 1.x | Old package deprecated. Import from `lenis/react`. |
| GSAP paid plugins (SplitText, ScrollTrigger) | All free | 2024 (Webflow acquisition) | No license needed. SplitText now available for text reveals. |
| CSS `scroll-behavior: smooth` | Lenis | Ongoing | CSS smooth scroll lacks easing control, breaks ScrollTrigger measurements. |

**Deprecated/outdated:**
- `framer-motion` npm package: renamed to `motion`
- `@studio-freight/react-lenis`: merged into `lenis/react`
- `tailwind.config.js`: replaced by `@theme` in CSS for v4
- `ScrollMagic`: replaced by GSAP ScrollTrigger
- `Locomotive Scroll`: replaced by Lenis (same team)

## WCAG Contrast Verification

Pre-calculated contrast ratios for all theme color pairs:

### Gold Accents on #121212 (ink) Background

| Color | Hex | OKLCH | Ratio | WCAG AA (4.5:1) | WCAG AAA (7:1) |
|-------|-----|-------|-------|-----------------|----------------|
| gold | #D4AF37 | oklch(0.77 0.139 91) | 8.91:1 | PASS | PASS |
| gold-muted | #C9A96E | oklch(0.75 0.085 82) | 8.37:1 | PASS | PASS |
| gold-light | #DDB96B | oklch(0.80 0.106 85) | 10.01:1 | PASS | PASS |

### Text on #121212 (ink) Background

| Color | Hex | OKLCH | Ratio | WCAG AA | WCAG AAA |
|-------|-----|-------|-------|---------|----------|
| bone | #F5F0E8 | oklch(0.96 0.012 80) | 16.51:1 | PASS | PASS |
| bone-muted | #E8E0D0 | oklch(0.91 0.023 85) | 14.28:1 | PASS | PASS |
| white | #FFFFFF | oklch(1.00 0.000 90) | 18.73:1 | PASS | PASS |

All pairs pass WCAG AAA (7:1), well above the AA minimum (4.5:1).

## Open Questions

1. **Display font choice**
   - What we know: `next/font` handles loading optimization. Project needs a premium serif/display font for headings.
   - What's unclear: Which specific font. Candidates: Playfair Display, Cormorant Garamond, DM Serif Display (all on Google Fonts, free).
   - Recommendation: Choose during Plan 01-01 execution. Prioritize: (a) good italic/weight variants, (b) similar fallback metrics to system serif, (c) premium feel that matches tattoo studio aesthetic. Test with `font-display: 'swap'` on dark background.

2. **Body font choice**
   - What we know: Needs to be highly legible at small sizes on dark backgrounds.
   - What's unclear: Which specific sans-serif.
   - Recommendation: Inter (excellent screen legibility, variable font) or DM Sans (slightly warmer). Both free on Google Fonts.

3. **Lenis `anchors` option behavior with Next.js App Router navigation**
   - What we know: Lenis has `anchors: true` for native anchor link support.
   - What's unclear: Whether this conflicts with Next.js `<Link>` component's scroll behavior.
   - Recommendation: Test during Phase 1 execution. If conflicts arise, disable Lenis anchors and use programmatic `lenis.scrollTo()`.

## Sources

### Primary (HIGH confidence)
- [Tailwind CSS v4 @theme documentation](https://tailwindcss.com/docs/theme) — CSS-native config, OKLCH syntax, namespace override
- [GSAP React integration guide](https://gsap.com/resources/React/) — useGSAP hook, scope, contextSafe, cleanup
- [GSAP ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — config options, React pattern, Lenis sync
- [Lenis GitHub README](https://github.com/darkroomengineering/lenis) — installation, autoRaf, GSAP integration code
- [Next.js Static Exports guide](https://nextjs.org/docs/app/guides/static-exports) — output: "export" config, limitations
- [Motion LazyMotion docs](https://motion.dev/docs/react-lazy-motion) — domAnimation vs domMax, m component, bundle savings

### Secondary (MEDIUM confidence)
- [Lenis + Next.js integration guide (bridger.to)](https://bridger.to/lenis-nextjs) — LenisProvider pattern, GSAP ticker sync, scroll-to helpers
- [Motion guide for React & Next.js (inhaq.com)](https://inhaq.com/blog/framer-motion-complete-guide-react-nextjs-developers) — whileInView, variants, AnimatePresence, "use client"
- [OKLCH accessible palettes (LogRocket)](https://blog.logrocket.com/oklch-css-consistent-accessible-color-palettes) — lightness-based contrast strategy
- [OddContrast OKLCH checker](https://www.oddcontrast.com/) — OKLCH-native contrast validation tool

### Tertiary (LOW confidence)
- Contrast ratio calculations: computed locally via relative luminance formula (verified against WebAIM checker for spot-check values)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all libraries verified via official docs and current releases
- Architecture: HIGH — patterns verified with official GSAP React guide, Tailwind v4 docs, Lenis README
- Pitfalls: HIGH — contrast ratios computed and verified; bundle size numbers from official Motion docs; dual RAF issue from Lenis docs
- Color tokens: HIGH — OKLCH values computed from hex, contrast ratios calculated programmatically

**Research date:** 2026-03-08
**Valid until:** 2026-04-08 (stable stack, no breaking changes expected)
