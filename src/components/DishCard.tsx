import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Lang } from '../i18n'
import { ui } from '../i18n'
import { itemDescription, itemName, type MenuItem } from '../menuData'

type Props = { item: MenuItem; lang: Lang; compact?: boolean }

export default function DishCard({ item, lang, compact = false }: Props) {
  const t = ui[lang]
  const name = itemName(item, lang)
  const description = itemDescription(item, lang)
  return (
    <article className={`dish-card ${compact ? 'dish-card-compact' : ''}`}>
      <Link href="/menu" className="dish-image-wrap" aria-label={`${name} — ${t.navMenu}`}>
        <Image src={item.image} alt={name} width={650} height={780} sizes="(max-width: 520px) 90vw, (max-width: 800px) 44vw, 24vw" />
        {item.popular && <span className="dish-tag"><span className="tag-dot" />{t.popular}</span>}
        <span className="dish-arrow"><ArrowUpRight size={19} /></span>
      </Link>
      <div className="dish-info">
        <div className="dish-heading"><h3>{name}</h3><span className="dish-price">{item.price}</span></div>
        {!compact && <p>{description}</p>}
      </div>
    </article>
  )
}
