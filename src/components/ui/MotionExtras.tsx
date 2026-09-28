'use client'

import { useEffect } from 'react'

/*
 * Effects inspired by HorizonX and Jiro, attached to existing markup by class
 * name (no page structure or content changes). Styling lives in globals.css.
 *   - Scroll Expand (all devices): media frames open from an inset rounded
 *     card to full width as they scroll into view
 *   - Magnet (mouse only):     key CTAs lean toward the approaching cursor
 *   - Spot Fill (mouse only):  dark/outline buttons fill from the entry point
 *   - Cursor Grid (mouse only): a gold grid lights up under the cursor on
 *     dark sections
 */

const EXPAND_SELECTOR = '.push, .video-frame'
const MAGNET_SELECTOR = [
  '.hero .actions .btn',
  '.header-actions .btn',
  '.push .actions .btn',
  '.mid-cta .actions .btn',
  '.whatsapp-float',
].join(',')
const SPOT_SELECTOR = '.btn-dark, .btn-ghost'
const GRID_SELECTOR = '.reviews, .faq'

const MAGNET_RADIUS = 110 // px from the button centre where the pull starts
const MAGNET_PULL = 0.28
const MAGNET_MAX = 10 // px

export default function MotionExtras() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const cleanups: (() => void)[] = []

    // ── Scroll Expand ──
    if (!reduced) {
      let frame = 0
      const update = () => {
        frame = 0
        const vh = window.innerHeight
        document.querySelectorAll<HTMLElement>(EXPAND_SELECTOR).forEach((el) => {
          const top = el.getBoundingClientRect().top
          // 0 when the frame's top enters at the bottom, 1 by 35% of the viewport.
          const p = Math.min(Math.max((vh - top) / (vh * 0.65), 0), 1)
          el.style.setProperty('--expand', p.toFixed(3))
        })
      }
      const onScroll = () => {
        if (!frame) frame = requestAnimationFrame(update)
      }
      update()
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)
      document.documentElement.classList.add('has-scroll-expand')
      cleanups.push(() => {
        cancelAnimationFrame(frame)
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
        document.documentElement.classList.remove('has-scroll-expand')
      })
    }

    // ── Pointer effects ──
    if (fine) {
      let pulled: HTMLElement[] = []
      let litGrid: HTMLElement | null = null

      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerType !== 'mouse') return
        const target = e.target as Element | null

        // Magnet
        if (!reduced) {
          const next: HTMLElement[] = []
          document.querySelectorAll<HTMLElement>(MAGNET_SELECTOR).forEach((el) => {
            const r = el.getBoundingClientRect()
            const dx = e.clientX - (r.left + r.width / 2)
            const dy = e.clientY - (r.top + r.height / 2)
            if (Math.hypot(dx, dy) > MAGNET_RADIUS + Math.max(r.width, r.height) / 2) return
            const clamp = (v: number) => Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, v * MAGNET_PULL))
            el.style.setProperty('--mag-x', `${clamp(dx).toFixed(1)}px`)
            el.style.setProperty('--mag-y', `${clamp(dy).toFixed(1)}px`)
            next.push(el)
          })
          pulled.forEach((el) => {
            if (!next.includes(el)) {
              el.style.setProperty('--mag-x', '0px')
              el.style.setProperty('--mag-y', '0px')
            }
          })
          pulled = next
        }

        // Spot Fill: remember where the pointer is inside the button
        const btn = target?.closest<HTMLElement>(SPOT_SELECTOR)
        if (btn) {
          const r = btn.getBoundingClientRect()
          btn.style.setProperty('--spot-x', `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`)
          btn.style.setProperty('--spot-y', `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`)
        }

        // Cursor Grid
        const grid = target?.closest<HTMLElement>(GRID_SELECTOR) ?? null
        if (litGrid && litGrid !== grid) litGrid.style.setProperty('--grid-on', '0')
        if (grid) {
          const r = grid.getBoundingClientRect()
          grid.style.setProperty('--grid-x', `${(e.clientX - r.left).toFixed(0)}px`)
          grid.style.setProperty('--grid-y', `${(e.clientY - r.top).toFixed(0)}px`)
          grid.style.setProperty('--grid-on', '1')
        }
        litGrid = grid
      }

      const onLeave = () => {
        pulled.forEach((el) => {
          el.style.setProperty('--mag-x', '0px')
          el.style.setProperty('--mag-y', '0px')
        })
        pulled = []
        litGrid?.style.setProperty('--grid-on', '0')
        litGrid = null
      }

      document.addEventListener('pointermove', onPointerMove, { passive: true })
      document.documentElement.addEventListener('pointerleave', onLeave)
      cleanups.push(() => {
        document.removeEventListener('pointermove', onPointerMove)
        document.documentElement.removeEventListener('pointerleave', onLeave)
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return null
}
