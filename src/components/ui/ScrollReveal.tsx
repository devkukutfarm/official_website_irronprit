'use client'

import { useEffect } from 'react'

/*
 * Site-wide scroll reveal powered by Animate.css.
 *
 * Markup API (works in server components — no wrappers needed):
 *   data-animate="fadeInUp"      animate this element when it scrolls into view
 *   data-animate-delay="200"     extra delay in ms
 *   data-stagger="fadeInUp"      animate each direct child, staggered
 *   data-countup                 count the number inside from 0 once revealed
 *
 * Elements are hidden only while <html> has the `js-reveal` class (set by an
 * inline script in the layout), so content is always visible without JS.
 */

const SELECTOR = '[data-animate], [data-stagger] > *'
const STAGGER_MS = 110
const MAX_STAGGER_STEPS = 6

declare global {
  interface Window {
    __revealReady?: boolean
  }
}

function countUp(el: HTMLElement, delay: number) {
  const original = el.textContent ?? ''
  const match = original.match(/^(\D*)([\d,]+)(\D*)$/)
  if (!match) return
  const [, prefix, digits, suffix] = match
  const target = Number(digits.replace(/,/g, ''))
  const format = (n: number) =>
    digits.includes(',') ? n.toLocaleString('en-IN') : String(n)

  // Lock the width so the counting digits don't nudge the layout.
  el.style.display = 'inline-block'
  el.style.minWidth = `${el.getBoundingClientRect().width}px`
  el.textContent = `${prefix}${format(0)}${suffix}`

  const duration = 1400
  window.setTimeout(() => {
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 4)
      el.textContent = `${prefix}${format(Math.round(target * eased))}${suffix}`
      if (t < 1) requestAnimationFrame(tick)
      else el.textContent = original
    }
    requestAnimationFrame(tick)
  }, delay)
}

export default function ScrollReveal() {
  useEffect(() => {
    window.__revealReady = true
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const tracked = new WeakSet<Element>()

    const reveal = (el: HTMLElement, batchDelay: number) => {
      el.dataset.revealed = ''
      if (reduced) return

      const name =
        el.dataset.animate || el.parentElement?.dataset.stagger || 'fadeInUp'
      const delay = batchDelay + Number(el.dataset.animateDelay ?? 0)
      const classes = ['animate__animated', `animate__${name}`]

      el.style.animationDelay = `${delay}ms`
      el.classList.add(...classes)

      // Drop the animation classes once finished so hover transforms and
      // existing layout transforms behave exactly as before.
      const onEnd = (e: AnimationEvent) => {
        if (e.target !== el) return
        el.classList.remove(...classes)
        el.style.animationDelay = ''
        el.removeEventListener('animationend', onEnd)
      }
      el.addEventListener('animationend', onEnd)

      const counters = el.matches('[data-countup]')
        ? [el]
        : Array.from(el.querySelectorAll<HTMLElement>('[data-countup]'))
      counters.forEach((c) => countUp(c, delay + 150))
    }

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top ||
            a.boundingClientRect.left - b.boundingClientRect.left
          )
        visible.forEach((entry, i) => {
          io.unobserve(entry.target)
          reveal(entry.target as HTMLElement, Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    const scan = (root: ParentNode) => {
      root.querySelectorAll(SELECTOR).forEach((el) => {
        if (tracked.has(el) || (el as HTMLElement).dataset.revealed !== undefined) return
        tracked.add(el)
        io.observe(el)
      })
    }

    scan(document)

    // Pick up content rendered by client-side navigation.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) scan(node.parentElement ?? node)
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
