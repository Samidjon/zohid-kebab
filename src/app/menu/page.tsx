import type { Metadata } from 'next'
import MenuPage from '../../components/MenuPage'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore kebabs, steaks, salads, burgers, drinks and desserts at Zohid Kebab in Tashkent.',
  openGraph: {
    title: 'Zohid Kebab Menu',
    description: 'Explore kebabs, steaks, salads, burgers, drinks and desserts.',
    images: ['/images/mixed-grill.webp'],
  },
}

export default function Page() {
  return <MenuPage />
}
