'use client'

import { useEffect } from 'react'

/*
 * Pointer-driven effects ported from Aceternity UI, attached to existing
 * markup by class name so no page structure changes:
 *   - Glowing Effect: a gold light traces a card's border toward the cursor
 *   - Comet Card:     3D tilt + glare on trainer cards
 * Styling lives in globals.css; this only feeds CSS custom properties.
 * Mouse / trackpad only — touch devices keep the static design.
 */

const GLOW_SELECTOR = [
  '.price-card',
  '.class-price-card',
  '.offer-box',
  '.why-grid article',
  '.teaser-grid a',
  '.branch-card',
].join(',')
const TILT_SELECTOR = '.trainer-card:not(.trainer-soon)'

const PROXIMITY = 64 // px outside a card where the glow still wakes up
const INACTIVE_ZONE = 0.01 // fraction of the card centre with no glow
const TILT_DEG = 9
const EASE = 0.12 // per-frame smoothing (stand-in for motion's spring)

type Glow = { angle: number; target: number }
type Tilt = { x: number; y: number; tx: number; ty: number; hover: boolean }

export default function InteractiveEffects() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!fine.matches) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const glows = new Map<HTMLElement, Glow>()
    const tilts = new Map<HTMLElement, Tilt>()
    let pointer = { x: -9999, y: -9999 }
    let frame = 0

    const updateGlows = () => {
      document.querySelectorAll<HTMLElement>(GLOW_SELECTOR).forEach((el) => {
        const r = el.getBoundingClientRect()
        const active =
          pointer.x > r.left - PROXIMITY &&
          pointer.x < r.right + PROXIMITY &&
          pointer.y > r.top - PROXIMITY &&
          pointer.y < r.bottom + PROXIMITY
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const inCentre =
          Math.hypot(pointer.x - cx, pointer.y - cy) < 0.5 * Math.min(r.width, r.height) * INACTIVE_ZONE
        el.style.setProperty('--glow-active', active && !inCentre ? '1' : '0')
        if (!active) return

        const g = glows.get(el) ?? { angle: 0, target: 0 }
        const raw = (Math.atan2(pointer.y - cy, pointer.x - cx) * 180) / Math.PI + 90
        // Take the short way round so the light never spins backwards.
        const diff = ((((raw - g.angle + 180) % 360) + 360) % 360) - 180
        g.target = g.angle + diff
        glows.set(el, g)
      })
    }

    const tick = () => {
      frame = 0
      let moving = false

      glows.forEach((g, el) => {
        const d = g.target - g.angle
        if (Math.abs(d) < 0.1) return
        g.angle += d * EASE
        el.style.setProperty('--glow-start', g.angle.toFixed(2))
        moving = true
      })

      tilts.forEach((t, el) => {
        const dx = t.tx - t.x
        const dy = t.ty - t.y
        if (Math.abs(dx) < 0.001 && Math.abs(dy) < 0.001) {
          if (!t.hover) tilts.delete(el)
          return
        }
        t.x += dx * EASE
        t.y += dy * EASE
        el.style.setProperty('--tilt-x', `${(t.y * TILT_DEG).toFixed(2)}deg`)
        el.style.setProperty('--tilt-y', `${(-t.x * TILT_DEG).toFixed(2)}deg`)
        el.style.setProperty('--glare-x', `${((t.x + 0.5) * 100).toFixed(1)}%`)
        el.style.setProperty('--glare-y', `${((t.y + 0.5) * 100).toFixed(1)}%`)
        moving = true
      })

      if (moving) frame = requestAnimationFrame(tick)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      pointer = { x: e.clientX, y: e.clientY }
      updateGlows()

      if (!reduced) {
        const card = (e.target as Element | null)?.closest<HTMLElement>(TILT_SELECTOR)
        tilts.forEach((t, el) => {
          if (el !== card) { t.hover = false; t.tx = 0; t.ty = 0 }
        })
        if (card) {
          const r = card.getBoundingClientRect()
          const t = tilts.get(card) ?? { x: 0, y: 0, tx: 0, ty: 0, hover: true }
          t.hover = true
          t.tx = (e.clientX - r.left) / r.width - 0.5
          t.ty = (e.clientY - r.top) / r.height - 0.5
          tilts.set(card, t)
        }
      }
      schedule()
    }

    const onScroll = () => {
      updateGlows()
      schedule()
    }

    const onLeave = () => {
      pointer = { x: -9999, y: -9999 }
      tilts.forEach((t) => { t.hover = false; t.tx = 0; t.ty = 0 })
      updateGlows()
      schedule()
    }

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
