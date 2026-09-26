'use client'

import { useState, useEffect } from 'react'

const words = ['Strength', 'Discipline', 'Progress']

export default function HeroWordCycle() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2400)
    return () => clearInterval(id)
  }, [])

  // Keyed by tick so each new word remounts and replays its entrance animation.
  return (
    <span key={tick} className={tick === 0 ? 'hero-word' : 'hero-word is-cycling'}>
      {words[tick % words.length]}
    </span>
  )
}
