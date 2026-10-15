'use client'

import { createContext, useContext } from 'react'
import type { Lang } from '../i18n'

export type LanguageContextValue = { lang: Lang; setLang: (lang: Lang) => void }
export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside SiteFrame')
  return context
}
