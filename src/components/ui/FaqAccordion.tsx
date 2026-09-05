'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: React.ReactNode
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? ' is-open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            {item.q}
            <i className={`fa-solid fa-${open === i ? 'minus' : 'plus'}`} />
          </button>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </div>
  )
}
