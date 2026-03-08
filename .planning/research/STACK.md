# Technology Stack

**Project:** One More Ink — Premium Tattoo Studio Website
**Researched:** 2026-03-08
**Overall confidence:** HIGH

---

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Next.js | 16.1.x | Framework, SSG, routing | Developer's existing stack. v16 ships Turbopack stable (5x faster builds), React Compiler stable, App Router mature. Static export (`output: "export"`) produces zero-server deployable artifacts — perfect for a brochure site. | HIGH |
| React | 19.x | UI layer | Ships with Next.js 16. Server Components reduce client JS bundle. React Compiler eliminates manual `useMemo`/`useCallback`. | HIGH |
| TypeScript | 5.x | Type safety | Next.js 16 has first-class TS support. Prevents bugs in animation configs and component props. No reason to use JS in 2026. | HIGH |

### Styling

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Tailwind CSS | 4.2.x | Utility-first CSS | Developer's existing stack. v4 is a ground-up rewrite: CSS-native config via `@import "tailwindcss"` (zero JS config), OKLCH color space (richer darks for the dark theme), cascade layers, 5x faster builds. v4.2 adds new color palettes and logical property utilities. | HIGH |

### Animation (Primary Decision)

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Motion (ex Framer Motion) | 12.x | UI transitions, entrance animations, layout animations | Developer's existing stack. React-native API (`<motion.div>`), `AnimatePresence` for exit animations, `whileInView` for scroll-triggered reveals, `useScroll` for scroll-linked animations. Declarative = less code for standard animations. | HIGH |
| GSAP + ScrollTrigger | 3.14.x | Advanced scroll sequences, text reveals, parallax | Now 100% free (Webflow acquired GSAP in 2024). ScrollTrigger is the industry standard for complex scroll-driven timelines — pin sections, scrub animations, progress-based triggers. SplitText (formerly paid) is free — essential for premium text reveal animations. No true alternative for timeline sequencing. | HIGH |
| Lenis | 1.x | Smooth momentum scrolling | Industry standard (3KB). Does NOT break `position: sticky` or Intersection Observers (unlike older smooth scroll libs). Works seamlessly with both GSAP ScrollTrigger and Motion. `autoRaf` option simplifies setup. Used by darkroom.engineering (creators of Awwwards-level sites). | HIGH |

**Animation strategy: Motion + GSAP is not redundant — they complement each other.**
- Motion: component-level animations (hover, tap, enter/exit, layout shifts)
- GSAP: page-level orchestration (scroll timelines, text splits, pinned sections, parallax)
- Lenis: the scroll foundation both libraries animate against

### Image Optimization

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| next-image-export-optimizer | 1.20.x | Build-time image optimization for static export | Solves the key limitation: `next/image` default loader requires a server, but `output: "export"` has no server. This package runs Sharp at build time, generates WebP/AVIF variants at multiple sizes, and provides a drop-in `<ExportedImage>` component. 40-70% file size reduction. Critical for a portfolio site with dozens of tattoo photos. | HIGH |
| Sharp | (dependency) | Image processing engine | Used internally by next-image-export-optimizer. Same engine Next.js uses in production. Fast, reliable. | HIGH |

### Fonts & Icons

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| next/font | (built-in) | Font loading | Zero-layout-shift font loading with `next/font/google` or `next/font/local`. Automatic self-hosting = no external requests = faster LCP. Essential for premium typography. | HIGH |
| Lucide React | 0.4x+ | Icons | Tree-shakeable, consistent icon set. Lightweight alternative to Font Awesome. Only ships icons actually used. | MEDIUM |

### SEO & Metadata

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Next.js Metadata API | (built-in) | SEO meta tags, Open Graph, structured data | Built into App Router. Export `metadata` or `generateMetadata` per page. Handles `<title>`, OG images, JSON-LD structured data for local business schema. No extra library needed. | HIGH |
| @vercel/og | 0.6.x | OG image generation | Dynamic Open Graph images at build time. Optional but adds polish for social sharing. | LOW |

### Hosting & Deployment

| Technology | Purpose | Why | Confidence |
|------------|---------|-----|------------|
| Vercel (Free tier) | Hosting, CDN, preview deploys | Native Next.js integration (Vercel makes Next.js). Free tier is generous for static sites. Automatic preview URLs per branch/PR. Global CDN. Zero config deployment from Git. | HIGH |

**Alternative: Cloudflare Pages** — faster edge latency (15ms vs 150ms), more generous free tier. But `next/image` doesn't work plug-and-play, and edge runtime has nodejs limitations. For a static export these matter less, but Vercel's DX is significantly better for Next.js projects.

### Dev Tooling

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| ESLint | 9.x | Linting | Flat config in v9. Next.js 16 ships `eslint-config-next` compatible. | HIGH |
| Prettier | 3.x | Formatting | Pairs with ESLint. `prettier-plugin-tailwindcss` auto-sorts utility classes. | HIGH |

---

## What NOT to Use

| Technology | Why Not |
|------------|---------|
| **CSS Modules / Styled Components / Emotion** | Tailwind v4 handles everything. Adding a CSS-in-JS layer adds bundle size and complexity for zero benefit on a brochure site. |
| **Three.js / React Three Fiber** | Overkill for a tattoo studio site. 3D adds loading time that hurts mobile performance and doesn't serve the content (tattoo photos are 2D). Premium feel comes from scroll choreography, not 3D. |
| **Contentful / Sanity / any CMS** | No CMS needed. Content is static (2 artists, fixed portfolio). A CMS adds auth, API calls, build hooks — unnecessary complexity. If content updates become frequent later, add a CMS then. |
| **AOS (Animate on Scroll)** | Outdated pattern. Motion's `whileInView` + GSAP ScrollTrigger cover every use case with better performance and control. AOS adds jQuery-era overhead. |
| **ScrollMagic** | Deprecated in practice. GSAP ScrollTrigger replaced it entirely. |
| **Locomotive Scroll** | Superseded by Lenis (same team, darkroom.engineering). Lenis is lighter, maintained, and doesn't break native browser features. |
| **Swiper / Slick** | For the portfolio gallery, Motion's layout animations + CSS scroll-snap provide a more premium, custom feel. Pre-built carousels look generic. |
| **next-seo** | Redundant with Next.js App Router's built-in Metadata API. Was useful in Pages Router era, no longer needed. |
| **Tailwind CSS v3** | v4 is stable since early 2025. v3's JS-based config is legacy. No reason to use it for a new project. |
| **framer-motion (package name)** | Deprecated npm package. The library was rebranded to `motion`. Install `motion`, not `framer-motion`. |

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not Alternative |
|----------|-------------|-------------|---------------------|
| Framework | Next.js 16 | Astro 5.x | Astro is excellent for static sites and ships zero JS by default. But developer already knows Next.js, and the animation-heavy nature of this site means we WANT client JS (Motion, GSAP). Astro's island architecture would fight the animation requirements. |
| Scroll animation | GSAP ScrollTrigger | Motion useScroll only | Motion's `useScroll` handles simple parallax and progress bars, but lacks timeline sequencing, pinning, and scrub. For Awwwards-level scroll choreography, GSAP ScrollTrigger is non-negotiable. |
| Smooth scroll | Lenis | GSAP ScrollSmoother | ScrollSmoother is GSAP's own smooth scroll plugin. Works well but is heavier and less flexible than Lenis. The community standard is Lenis + GSAP ScrollTrigger together. |
| Image optimization | next-image-export-optimizer | Cloudinary loader | Cloudinary adds an external dependency and costs money at scale. Build-time optimization is simpler, free, and works offline. For a portfolio with ~50-100 images, build-time is fast enough. |
| Hosting | Vercel | Netlify | Both work for static Next.js. Vercel has tighter Next.js integration (same company). Preview deploys are smoother. |
| CSS | Tailwind v4 | UnoCSS | UnoCSS is faster but has smaller ecosystem. Tailwind v4's performance gap closed significantly. Developer already knows Tailwind. |

---

## Installation

```bash
# Create project
npx create-next-app@latest one-more-ink --typescript --tailwind --eslint --app --src-dir

# Core animation stack
npm install motion gsap lenis

# Image optimization for static export
npm install next-image-export-optimizer

# Icons
npm install lucide-react

# Dev dependencies
npm install -D prettier prettier-plugin-tailwindcss
```

### next.config.ts (key settings)

```typescript
const nextConfig = {
  output: 'export',          // Static site generation
  images: {
    loader: 'custom',        // Required for static export
    imageSizes: [320, 640, 960, 1280, 1920],
  },
};
```

### Tailwind v4 setup (app/globals.css)

```css
@import "tailwindcss";

/* Dark theme as default — no config file needed in v4 */
@theme {
  --color-ink: oklch(0.13 0.01 260);
  --color-bone: oklch(0.92 0.01 80);
  --color-accent: oklch(0.65 0.15 25);
}
```

---

## Version Summary

| Package | Version | Verified Source |
|---------|---------|-----------------|
| next | 16.1.x | [Next.js Blog](https://nextjs.org/blog/next-16-1) |
| react | 19.x | Ships with Next.js 16 |
| tailwindcss | 4.2.x | [Tailwind Releases](https://github.com/tailwindlabs/tailwindcss/releases) |
| motion | 12.x | [npm: motion](https://www.npmjs.com/package/motion) — latest 12.35.1 |
| gsap | 3.14.x | [npm: gsap](https://www.npmjs.com/package/gsap) — latest 3.14.2 |
| lenis | 1.x | [npm: lenis](https://www.npmjs.com/package/lenis) |
| next-image-export-optimizer | 1.20.x | [npm](https://www.npmjs.com/package/next-image-export-optimizer) — latest 1.20.1 |
| typescript | 5.x | Ships with create-next-app |

---

## Sources

- [Next.js 16.1 Blog Post](https://nextjs.org/blog/next-16-1)
- [Tailwind CSS v4.0 Announcement](https://tailwindcss.com/blog/tailwindcss-v4)
- [Motion Documentation](https://motion.dev/docs)
- [Motion useScroll API](https://motion.dev/docs/react-use-scroll)
- [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [GSAP Free Licensing Announcement](https://css-tricks.com/gsap-is-now-completely-free-even-for-commercial-use/)
- [Lenis by darkroom.engineering](https://lenis.darkroom.engineering/)
- [next-image-export-optimizer GitHub](https://github.com/Niels-IO/next-image-export-optimizer)
- [Next.js Static Exports Guide](https://nextjs.org/docs/pages/guides/static-exports)
- [GSAP vs Motion Comparison (motion.dev)](https://motion.dev/docs/gsap-vs-motion)
- [Best React Animation Libraries 2026 (LogRocket)](https://blog.logrocket.com/best-react-animation-libraries/)
