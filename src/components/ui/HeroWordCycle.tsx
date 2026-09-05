'use client'

import { useState, useEffect } from 'react'

const words = ['Strength', 'Discipline', 'Progress']

export default function HeroWordCycle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400)
    return () => clearInterval(id)
  }, [])

  return <span className="hero-word">{words[index]}</span>
}
