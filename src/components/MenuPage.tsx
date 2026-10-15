'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react'
import { ui } from '../i18n'
import { categories, itemDescription, itemName, menuItems, type Category } from '../menuData'
import Reveal from './Reveal'
import { useLanguage } from './LanguageContext'

export default function MenuPage() {
  const { lang } = useLanguage()
  const t = ui[lang]
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all')
  const [search, setSearch] = useState('')
  const categoryLabel = (category: Category | 'all') => category === 'all' ? t.all : t[category]
  const filteredItems = useMemo(() => {
    const query = search.trim().toLocaleLowerCase()
    return menuItems.filter((item) => {
      const categoryMatches = activeCategory === 'all' || item.category === activeCategory
      const searchMatches = !query || [item.name, item.ru, item.en, item.description, item.ruDescription, item.enDescription, item.price].some((value) => value.toLocaleLowerCase().includes(query))
      return categoryMatches && searchMatches
    })
  }, [activeCategory, search])
  return (
    <main className="menu-page">
      <section className="menu-hero">
        <div className="menu-hero-image" />
        <div className="menu-hero-overlay" />
        <div className="container menu-hero-content">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t.menuEyebrow}</div>
          <h1>{t.menuTitle.split(' ').slice(0, -1).join(' ')}<br /><em>{t.menuTitle.split(' ').slice(-1)}</em></h1>
          <p>{t.menuText}</p>
          <div className="menu-hero-note"><span>✳</span> CHARCOAL · CRAFT · HOSPITALITY</div>
        </div>
        <div className="menu-hero-bottom container"><span>02 / MENU</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="menu-content-section section">
        <div className="container">
          <Reveal className="menu-intro-row"><div><div className="eyebrow"><span className="eyebrow-line" />{t.menuEyebrow}</div><h2>{t.menuTitle}</h2></div><p>{t.priceNote}</p></Reveal>
          <Reveal className="menu-tools" delay={80}>
            <div className="menu-search"><Search size={17} /><input aria-label={t.search} placeholder={t.search} value={search} onChange={(event) => setSearch(event.target.value)} /><SlidersHorizontal className="search-sliders" size={16} /></div>
            <div className="menu-count"><span>0{filteredItems.length}</span> {t.dishesLabel}</div>
          </Reveal>
          <div className="category-filter" aria-label="Menu categories">
            <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>{t.all}</button>
            {categories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{categoryLabel(category)}</button>)}
          </div>
          {filteredItems.length > 0 ? (
            <div className="menu-grid">
              {filteredItems.map((item, index) => (
                <Reveal key={item.id} delay={(index % 4) * 45}>
                  <article className="menu-item-card">
                    <div className="menu-item-image"><img src={item.image} alt={itemName(item, lang)} loading="lazy" />{item.popular && <span className="menu-item-popular">✳ {t.popular}</span>}<span className="menu-item-number">{String(index + 1).padStart(2, '0')}</span></div>
                    <div className="menu-item-body"><div><h3>{itemName(item, lang)}</h3><p>{itemDescription(item, lang)}</p></div><div className="menu-item-bottom"><span>{item.price}</span><a href="tel:+998998780007" aria-label={`${t.call}: ${itemName(item, lang)}`}><ArrowUpRight size={16} /></a></div></div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : <div className="menu-empty"><span>✳</span><h3>{t.noResults}</h3><button onClick={() => { setSearch(''); setActiveCategory('all') }}>{t.all}</button></div>}
        </div>
      </section>

      <section className="menu-bottom-cta"><div className="container menu-bottom-inner"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" />ZOHID KEBAB</div><h2>{t.menuCtaTitle}</h2><p>{t.menuCtaText}</p></div><a className="button button-gold" href="tel:+998998780007">{t.call}<ArrowUpRight size={17} /></a></div></section>
    </main>
  )
}
