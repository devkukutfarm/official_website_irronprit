'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function PushSection() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onScroll = () => {
      if (!bgRef.current) return
      const rect = bgRef.current.parentElement!.getBoundingClientRect()
      const offset = rect.top * 0.28
      bgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="push">
      <div
        ref={bgRef}
        className="bg"
        style={{ backgroundImage: 'url(/images/Characters/4.png)' }}
      />
      <div className="container">
        <p className="eyebrow" style={{ color: 'var(--gold)' }}>
          Your next level
        </p>
        <h2 className="display" style={{ color: 'var(--white)', fontSize: 'clamp(42px,6.4vw,88px)' }}>
          PUSH<br />
          <span style={{ color: 'var(--red)' }}>YOUR</span><br />
          LIMITS
        </h2>
        <div className="actions" style={{ marginTop: 36 }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScXW9WUCkpE8DMD4KNH-4P-a7j6iWlKjqvld0He3oZ1AiIORw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Start Today
          </a>
          <Link href="/classes" className="btn btn-ghost">
            Explore Classes
          </Link>
        </div>
      </div>
    </section>
  )
}
