'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu as MenuIcon, Phone, X } from 'lucide-react'
import type { Lang } from '../i18n'
import { ui } from '../i18n'
import { useLanguage } from './LanguageContext'

type NavigationLink = { href: string; text: string }

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const t = ui[lang]
  const links: NavigationLink[] = [
    { href: '/', text: t.navHome },
    { href: '/menu', text: t.navMenu },
    { href: '/#story', text: t.navStory },
    { href: '/#contact', text: t.navContact },
  ]
  const closeMenu = () => setOpen(false)
  const classForLink = (href: string) => pathname === href ? 'active' : ''

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Zohid Kebab — home" onClick={closeMenu}>
          <Image
            src="/images/zohid-logo.webp"
            alt="Zohid Kebab"
            width={180}
            height={86}
            className="brand-logo"
            loading="eager"
            sizes="(max-width: 500px) 126px, (max-width: 800px) 136px, 165px"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className={classForLink(link.href)}>
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Choose language">
            {(['uz', 'ru', 'en'] as Lang[]).map((option) => (
              <button key={option} className={lang === option ? 'active' : ''} onClick={() => setLang(option)} aria-pressed={lang === option}>
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="header-call" href="tel:+998998780007"><Phone size={15} strokeWidth={1.8} /><span>{t.call}</span><ArrowUpRight size={15} /></a>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
                {open ? <X size={23} /> : <MenuIcon size={23} />}
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="mobile-menu-overlay" />
              <Dialog.Content className="mobile-menu-content" aria-describedby={undefined}>
                <div className="mobile-menu-head">
                  <Dialog.Title className="mobile-menu-title">ZOHID KEBAB <span>✳</span><span className="sr-only">mobile navigation menu</span></Dialog.Title>
                  <Dialog.Close asChild><button className="mobile-menu-close" aria-label="Close navigation"><X size={20} /></button></Dialog.Close>
                </div>
                <nav className="mobile-menu-links" aria-label="Mobile navigation">
                  {links.map((link) => (
                    <Link href={link.href} key={link.href} onClick={closeMenu} className={classForLink(link.href)}>
                      <span>{link.text}</span><ArrowUpRight size={16} />
                    </Link>
                  ))}
                </nav>
                <a className="mobile-menu-phone" href="tel:+998998780007"><Phone size={16} /> +998 99 878 00 07</a>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
