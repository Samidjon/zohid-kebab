'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { ui } from '../i18n'
import { useLanguage } from './LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()
  const t = ui[lang]
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=8739%2BW3%20Tashkent%2C%20Uzbekistan'
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand" aria-label="Zohid Kebab — home">
            <Image src="/images/zohid-logo.webp" alt="Zohid Kebab" width={200} height={95} className="brand-logo footer-brand-logo" sizes="180px" />
          </Link>
          <p>{t.footerLine}</p>
        </div>
        <div className="footer-column"><span className="footer-label">{t.footerNavLabel}</span><Link href="/">{t.navHome}</Link><Link href="/menu">{t.navMenu}</Link><Link href="/#story">{t.navStory}</Link><Link href="/#contact">{t.navContact}</Link></div>
        <div className="footer-column"><span className="footer-label">{t.phone.toUpperCase()}</span><a className="footer-phone" href="tel:+998998780007">+998 99 878 00 07 <ArrowUpRight size={14} /></a><span className="footer-label footer-label-spaced">{t.address.toUpperCase()}</span><a href={mapsUrl} target="_blank" rel="noreferrer">8739+W3, Tashkent <ArrowUpRight size={14} /></a></div>
        <div className="footer-social"><span className="footer-label">{t.footerFindLabel}</span><a className="social-link" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Find Zohid Kebab on Google Maps"><MapPin size={18} /></a><a className="social-link" href="tel:+998998780007" aria-label="Call Zohid Kebab"><Phone size={18} /></a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Zohid Kebab. {t.rights}</span><span className="footer-bottom-note">MADE WITH FIRE <span>✦</span></span></div>
    </footer>
  )
}
