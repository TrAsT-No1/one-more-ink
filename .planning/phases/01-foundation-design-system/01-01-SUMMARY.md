---
phase: 01-foundation-design-system
plan: 01
subsystem: ui
tags: [next.js, tailwind-v4, oklch, design-system, typography, static-export]

requires:
  - phase: none
    provides: greenfield project
provides:
  - Next.js 16 scaffold with static export
  - Dark design system with OKLCH color tokens (ink/gold/bone)
  - Typography system (Cormorant Garamond display + Inter body)
  - Tailwind v4 custom utilities (bg-ink, text-bone, text-gold, font-display, font-body)
  - Studio static data (artists, services, contacts, hours)
  - Animation libraries installed (motion, gsap, @gsap/react, lenis)
affects: [01-02, 02-sections, 03-gallery, 04-images, 05-animations, 06-deploy]

tech-stack:
  added: [next.js 16.1.6, tailwind-v4, motion 12, gsap 3, @gsap/react, lenis]
  patterns: [static-export, oklch-color-tokens, next-font-swap, app-router]

key-files:
  created:
    - src/app/globals.css
    - src/app/layout.tsx
    - src/app/page.tsx
    - src/lib/constants.ts
    - src/lib/data.ts
    - next.config.ts
  modified: []

key-decisions:
  - "OKLCH color space for all design tokens (perceptually uniform, wide gamut)"
  - "Cormorant Garamond as display font, Inter as body font — loaded via next/font with swap"
  - "Static export from day one (output: export, unoptimized images)"
  - "Lenis CSS imported globally for smooth scroll readiness"

patterns-established:
  - "Dark-first design: bg-ink body default, bone text, gold accents"
  - "@theme block in globals.css for all custom Tailwind tokens"
  - "font-display / font-body semantic font families via CSS custom properties"
  - "prefers-reduced-motion media query disabling all animations"

duration: 5min
completed: 2026-03-08
---

# Phase 1 Plan 1: Foundation + Design System Summary

**Next.js 16 scaffold with Tailwind v4 dark design system using OKLCH tokens (ink/gold/bone), Cormorant Garamond + Inter typography, and studio static data**

## Performance

- **Duration:** 5 min
- **Started:** 2026-03-08T18:13:59Z
- **Completed:** 2026-03-08T18:18:41Z
- **Tasks:** 2
- **Files modified:** 10

## Accomplishments
- Next.js 16.1.6 scaffolded with App Router, TypeScript, Tailwind v4, and static export
- Dark design system with 8 OKLCH color tokens across 3 groups (ink backgrounds, gold accents, bone text)
- Typography loaded via next/font/google with display:swap (no FOIT on dark backgrounds)
- Test page verifying all tokens: colors, fonts, spacing, interactive states, responsive grid
- Studio data scaffold: 3 artists, 4 services, contacts, social links, business hours
- Animation dependencies pre-installed: motion 12, gsap 3, @gsap/react, lenis

## Task Commits

Each task was committed atomically:

1. **Task 1: Scaffold Next.js 16, install deps, configure static export** - `6e4d258` (feat)
2. **Task 2: Design system dark with tokens, typography, data** - `aa76497` (feat)

## Files Created/Modified
- `src/app/globals.css` - Tailwind v4 @theme with OKLCH tokens, Lenis import, reduced-motion query
- `src/app/layout.tsx` - Root layout with Cormorant Garamond + Inter, Italian metadata
- `src/app/page.tsx` - Design system test page (all tokens, responsive, interactive states)
- `src/lib/constants.ts` - STUDIO_INFO, SOCIAL_LINKS, BUSINESS_HOURS
- `src/lib/data.ts` - Artist and Service types + placeholder data
- `next.config.ts` - Static export with unoptimized images
- `package.json` - Dependencies: next, react, motion, gsap, @gsap/react, lenis
- `tsconfig.json` - TypeScript config with @/* path alias
- `postcss.config.mjs` - PostCSS with @tailwindcss/postcss
- `eslint.config.mjs` - ESLint with next config

## Decisions Made
- Used OKLCH color space for all tokens (perceptually uniform, wide gamut support)
- Cormorant Garamond (display serif) + Inter (body sans) — elegant+readable combo for tattoo studio
- Static export configured from day one — no server needed for deployment
- Lenis CSS imported globally even before smooth scroll implementation (ready for Phase 2)
- prefers-reduced-motion query added from the start (accessibility baseline)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- create-next-app refused to scaffold in directory with existing .planning/ folder — solved by scaffolding in /tmp and rsync-ing files back (expected behavior, handled as planned)

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All color tokens, fonts, and Tailwind utilities verified and working
- Static export producing out/ folder successfully
- Ready for 01-02 (component architecture, navigation, layout components)
- Animation libraries installed but not yet integrated — validation deferred to Phase 2

---
*Phase: 01-foundation-design-system*
*Completed: 2026-03-08*
