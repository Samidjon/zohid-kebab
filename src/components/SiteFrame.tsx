'use client'

import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { Phone } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { Lang } from '../i18n'
import { LanguageContext } from './LanguageContext'

export default function SiteFrame({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('uz')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('zohid-kebab-language')
      if (stored === 'ru' || stored === 'en' || stored === 'uz') setLangState(stored)
    } catch {
      // Language preference is optional when browser storage is unavailable.
    }
  }, [])

  const setLang = useCallback((nextLang: Lang) => {
    setLangState(nextLang)
    try {
      window.localStorage.setItem('zohid-kebab-language', nextLang)
    } catch {
      // Keep language switching functional even if storage is disabled.
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className={`site-shell lang-${lang}`}>
        <Navbar />
        <div className="route-content">{children}</div>
        <Footer />
        <a className="floating-call" href="tel:+998998780007" aria-label="Call Zohid Kebab">
          <span className="floating-call-pulse" />
          <Phone className="floating-call-icon" size={20} />
        </a>
      </div>
    </LanguageContext.Provider>
  )
}
