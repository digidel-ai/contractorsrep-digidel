# Contractor's Rep Landing Page

A production-ready single-page application showcasing the Contractor's Rep platform: a digital credibility suite for roofing contractors. The site presents product value, feature highlights, and a lightweight shop-like browsing experience for NFC/QR products, with a waitlist CTA.

## Key Features

- Home and Features landing sections with animated, responsive UI
- Product catalog and product detail pages (client-side routed)
- Waitlist CTA and production ticker
- Header navigation with mobile menu and CTAs wired to waitlist
- Smooth animations using Motion/Framer Motion API
- Asset handling via Vite and Figma asset aliases
- Code-splitting: product detail `ProductPage` is lazy-loaded

## Tech Stack

- React 18 (TypeScript)
- Vite 6 (React SWC plugin)
- Motion (Framer Motion-compatible API)
- Radix UI & shadcn-inspired components
- Lucide Icons
- Tailwind v4 styles (prebuilt CSS under `src/index.css` and `src/styles/globals.css`)

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Start the dev server

```bash
npm run dev
```

3) Open the app

- Dev: http://localhost:3000 (Vite dev server is configured to open on port 3000)

## Build & Preview

```bash
# Build production assets to build/
npm run build

# Preview the built app locally
npx vite preview --outDir build --port 4173
```

- Output directory: `build/`
- The preview server returns `index.html` for deep links (SPA routes), so routes like `/features` or `/product/<id>` load correctly.

## Scripts

- `npm run dev` – Vite dev server
- `npm run build` – Production build with code splitting

## Routing & Navigation

This app implements a minimal client-side router in `src/Router.tsx` that maps URL paths to pages and syncs navigation with the browser history.

- `/` – Home
- `/features` – Features marketing page
- `/products` – Product listing
- `/product/:id` – Product detail (lazy-loaded)
- `/waitlist` – Waitlist landing
- `/solutions`, `/pricing`, `/resources` – Coming soon placeholders

Navigation is handled via the Header and various CTA buttons. The `Header` component accepts `currentPage` and `onNavigate` to update the route and highlight the active nav.

## Project Structure

```
src/
  App.tsx
  Router.tsx          # SPA router
  main.tsx            # App entrypoint
  index.css           # Tailwind v4 prebuilt + utilities
  styles/globals.css  # CSS variables and utilities
  components/
    layout/
      Header.tsx
      Footer.tsx
      ProductionTicker.tsx
    sections/
      HeroSection.tsx
      FeaturesHeroSection.tsx
      WhyTopContractorsSection.tsx
      HowItWorksSection.tsx
      ProductCarouselSection.tsx
      FairLeadAttributionSection.tsx
      UpcomingFeaturesSection.tsx
      WaitlistHeroSection.tsx
      WaitlistFormSection.tsx
    shared/
      LoadingSpinner.tsx
      SectionWrapper.tsx
      SectionSeparator.tsx
      AnimatedIPhone.tsx
    figma/
      ImageWithFallback.tsx
  Products.tsx        # Product listing page
  ProductPage.tsx     # Product detail (lazy-loaded in Router)
  Waitlist.tsx
  utils/animations.ts
  assets/             # Mapped via figma:asset aliases in vite.config.ts
```

## Assets & Figma Aliases

Vite is configured to map Figma asset identifiers to local files for straightforward imports in components:

- See `vite.config.ts` under `resolve.alias` for many `figma:asset/<hash>.png` entries.
- Example usage:

```ts
import cardImg from 'figma:asset/34fb5c340c0891aac50c44bd2d7de7f944db7ef0.png';
```

## Accessibility & SEO

- Accessible color contrasts and keyboard-focus outlines are included in CSS.
- SPA updates `document.title` for basic per-route titles. For full SEO/OG tags, consider SSR or a static export solution.

## Performance Notes

- Product detail page is lazy-loaded via `React.lazy` and `Suspense` to reduce the main bundle size.
- Consider adding additional dynamic imports for heavy sections if needed.

## Contributing

- Branch from `main` and open a pull request.
- Keep components small and cohesive.
- Prefer meaningful names and early returns; match existing code style.

## License

Proprietary © Contractor's Rep Technologies. All rights reserved.
  