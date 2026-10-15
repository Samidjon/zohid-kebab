# Zohid Kebab — Next.js Restaurant Website

A responsive restaurant website draft for Zohid Kebab in Tashkent, Uzbekistan. The project now uses **Next.js 16.2.2 with the App Router**, React, TypeScript, Tailwind CSS, Framer Motion, Swiper, Radix UI, and a Three.js scene.

## Included

- Video-led home page with a Three.js 3D scene
- Dedicated `/menu` page with searchable, filterable menu items
- Uzbek / Russian / English interface switch (saved in local storage)
- Supplied Zohid Kebab logo used in the header/footer, favicon, and social metadata
- Framer Motion scroll reveals and responsive Swiper for featured dishes
- Radix UI accessible mobile navigation dialog
- Open Graph and Twitter metadata, page-specific menu metadata, and high-priority logo loading
- Existing restaurant videos and photos prepared from the supplied videos and menu PDFs
- Click-to-call and Google Maps directions

## Requirements

- Node.js 20.9 or newer (Node.js 22 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js, normally `http://localhost:3000`.

## Production build

```bash
npm run typecheck
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to a GitHub repository and import it in Vercel.
2. Vercel should detect **Next.js** automatically; no `dist` output directory or SPA rewrites are needed.
3. Optionally set `NEXT_PUBLIC_SITE_URL` to the deployed site's canonical URL (for example `https://your-domain.example`) so Open Graph metadata uses the final domain.

The development server uses Turbopack via `next dev --turbopack`. Next.js 16 uses Turbopack for the production build by default.

## Before publishing

- Confirm menu prices and the 15% service charge with the restaurant.
- Verify opening hours and the exact Google Maps location.
- Confirm permission to publish the supplied restaurant video and menu photos.
