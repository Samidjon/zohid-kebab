import type { Metadata, Viewport } from 'next'
import 'swiper/css'
import '../styles.css'
import SiteFrame from '../components/SiteFrame'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')),
  title: {
    default: 'Zohid Kebab — Taste Made Over Fire',
    template: '%s | Zohid Kebab',
  },
  description: 'Zohid Kebab — kebabs, steaks and grilled specialties in Tashkent, Uzbekistan. Explore our menu and plan your visit.',
  applicationName: 'Zohid Kebab',
  keywords: ['Zohid Kebab', 'kebab', 'steakhouse', 'restaurant', 'Tashkent', 'Uzbekistan', 'menu'],
  openGraph: {
    title: 'Zohid Kebab — Taste Made Over Fire',
    description: 'Charcoal, craft and hospitality. Discover the Zohid Kebab menu in Tashkent.',
    type: 'website',
    locale: 'uz_UZ',
    siteName: 'Zohid Kebab',
    images: [{ url: '/images/zohid-brand-texture.jpg', width: 640, height: 640, alt: 'Zohid Kebab gold logo on dark green pattern' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zohid Kebab — Taste Made Over Fire',
    description: 'Explore the Zohid Kebab menu in Tashkent, Uzbekistan.',
    images: ['/images/zohid-brand-texture.jpg'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#071d18',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <head>
        <link rel="preload" as="image" href="/images/grill-poster.webp" fetchPriority="high" />
      </head>
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  )
}
