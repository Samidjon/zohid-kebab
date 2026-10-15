'use client'

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Flame,
  MapPin,
  Phone,
  Sparkles,
  UtensilsCrossed
} from 'lucide-react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ui } from '../i18n'
import { menuItems } from '../menuData'
import DishCard from './DishCard'
import HeroScene from './HeroScene'
import Reveal from './Reveal'
import { useLanguage } from './LanguageContext'

export default function HomePage() {
  const { lang } = useLanguage()
  const t = ui[lang]
  const featuredIds = ['assorti-kabob', 'new-york', 'sezar', 'zohid-burger']
  const featured = featuredIds.map((id) => menuItems.find((item) => item.id === id)!).filter(Boolean)
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=8739%2BW3%20Tashkent%2C%20Uzbekistan'
  return (
    <main>
      <section className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline poster="/images/grill-poster.webp" aria-hidden="true">
          <source src="/videos/grill-loop.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-grid" />
        <HeroScene />
        <div className="hero-content container">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t.heroEyebrow}</div>
            <h1>{t.heroTitleA}<br /><em>{t.heroTitleB}</em></h1>
            <p className="hero-description">{t.heroText}</p>
            <div className="hero-buttons">
              <Link href="/menu" className="button button-gold">{t.exploreMenu}<ArrowUpRight size={17} /></Link>
              <a href="#story" className="button button-ghost"><span className="play-hollow"><ArrowDown size={15} /></span>{t.discover}</a>
            </div>
            <div className="hero-footnote"><span className="hero-spark">✳</span><span>Charcoal · Craft · Hospitality</span><span className="footnote-rule" /></div>
          </div>
          <div className="hero-aside">
            <span className="hero-aside-number">01 <i /> 03</span>
            <div className="hero-aside-note"><span>FIRE / FLAVOUR / FAMILY</span><strong>Made over<br />open fire.</strong></div>
          </div>
        </div>
        <a className="hero-scroll" href="#signature"><span>{t.scroll}</span><ArrowDown size={16} /></a>
        <div className="hero-coordinates">41°18' N — 69°16' E <span /> TASHKENT, UZBEKISTAN</div>
      </section>

      <section className="promise-strip" aria-label="Our values">
        <div className="container promise-inner">
          <div><Flame size={18} /><span>{t.promiseOne}</span></div><span className="promise-separator" />
          <div><Sparkles size={18} /><span>{t.promiseTwo}</span></div><span className="promise-separator" />
          <div><UtensilsCrossed size={18} /><span>{t.promiseThree}</span></div>
          <span className="promise-star">✳</span>
        </div>
      </section>

      <section className="section signature-section" id="signature">
        <div className="container">
          <Reveal className="section-heading-row">
            <div className="section-heading-copy"><div className="eyebrow"><span className="eyebrow-line" />{t.signatureEyebrow}</div><h2>{t.signatureTitle}</h2></div>
            <div className="section-heading-aside"><p>{t.signatureText}</p><Link className="text-link" href="/menu">{t.viewAll}<ArrowUpRight size={16} /></Link></div>
          </Reveal>
          <div className="signature-carousel" role="region" aria-label="Featured Zohid Kebab dishes">
            <Swiper
              className="signature-swiper"
              spaceBetween={20}
              slidesPerView={1.12}
              grabCursor
              breakpoints={{
                520: { slidesPerView: 2, spaceBetween: 15 },
                800: { slidesPerView: 3, spaceBetween: 18 },
                1160: { slidesPerView: 4, spaceBetween: 20 },
              }}
            >
              {featured.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <Reveal delay={index * 80}><DishCard item={item} lang={lang} /></Reveal>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="signature-bottom"><span className="tiny-stamp">ZK <span>✦</span> 01</span><span className="micro-caption">THE ART OF OPEN-FIRE COOKING</span></div>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-ornament story-ornament-one" /><div className="story-ornament story-ornament-two" />
        <div className="container story-layout">
          <Reveal className="story-visual-wrap">
            <div className="story-photo-frame">
              <img src="/images/kebab.webp" alt="Zohid Kebab kabob platter" loading="lazy" />
              <div className="story-photo-grain" />
              <div className="story-photo-label"><span>FROM OUR GRILL</span><strong>Since the first flame.</strong></div>
              <div className="story-photo-stamp">ZOHID<br />KEBAB<span>✦</span></div>
            </div>
            <div className="story-caption"><span>01 / FIRE & CRAFT</span><span>—</span><span>MADE TO BE SHARED</span></div>
          </Reveal>
          <Reveal className="story-copy" delay={110}>
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t.storyEyebrow}</div>
            <h2>{t.storyTitle}</h2>
            <p>{t.storyText}</p>
            <div className="story-points">
              <div><span className="story-point-num">01</span><span><strong>{t.storyPointOne}</strong><small>{t.storyPointOneSub}</small></span></div>
              <div><span className="story-point-num">02</span><span><strong>{t.storyPointTwo}</strong><small>{t.storyPointTwoSub}</small></span></div>
            </div>
            <Link className="button button-outline-light" href="/menu">{t.exploreMenu}<ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="reel-section section">
        <div className="container">
          <Reveal className="reel-header"><div><div className="eyebrow"><span className="eyebrow-line" />{t.reelLabel}</div><h2>{t.reelTitleA}<br /><em>{t.reelTitleB}</em></h2></div><p className="reel-side-note">{t.reelNote}</p></Reveal>
          <Reveal className="reel-film" delay={80}>
            <video autoPlay muted loop playsInline poster="/images/restaurant-poster.webp" aria-label="A glimpse of the Zohid Kebab food and restaurant">
              <source src="/videos/restaurant-reel.mp4" type="video/mp4" />
            </video>
            <div className="film-vignette" />
            <span className="film-top-label"><span className="live-dot" /> ZOHID KEBAB · TASHKENT</span>
            <span className="film-bottom-label">FIRE — FLAVOUR — FAMILY</span>
            <div className="film-center-mark">✳</div>
          </Reveal>
        </div>
      </section>

      <section className="visit-section" id="contact">
        <div className="visit-pattern" />
        <div className="container visit-layout">
          <Reveal className="visit-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t.visitEyebrow}</div><h2>{t.visitTitle}</h2><p>{t.visitText}</p><a className="button button-gold" href={mapsUrl} target="_blank" rel="noreferrer">{t.directions}<ArrowUpRight size={17} /></a><div className="visit-deco">ZOHID <span>✦</span> KEBAB</div></Reveal>
          <Reveal className="visit-details" delay={100}>
            <div className="visit-detail-card"><span className="detail-icon"><MapPin size={19} /></span><div><small>{t.address}</small><strong>{t.addressText}</strong><span>8739+W3, Tashkent</span><a href={mapsUrl} target="_blank" rel="noreferrer">{t.map}<ArrowUpRight size={13} /></a></div></div>
            <div className="visit-detail-card"><span className="detail-icon"><Clock size={19} /></span><div><small>{t.hours}</small><strong>{t.hoursText}</strong><span>{t.hoursNote}</span></div></div>
            <div className="visit-detail-card"><span className="detail-icon"><Phone size={19} /></span><div><small>{t.phone}</small><strong>+998 99 878 00 07</strong><span>{t.phoneNote}</span><a href="tel:+998998780007">{t.call}<ArrowUpRight size={13} /></a></div></div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
