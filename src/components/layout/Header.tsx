'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/classes', label: 'Classes' },
  { href: '/packages', label: 'Packages' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link href="/" className="logo">
            <Image
              src="/images/Inner-logo.png"
              alt="IRONPRIT logo"
              width={64}
              height={64}
              priority
            />
            <span className="logo-text">IRONPRIT</span>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'is-active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <div className="header-phone">
              <span>Call us</span>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <Link href="/packages" className="btn btn-dark">
              Join Now
            </Link>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav${menuOpen ? ' is-open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'is-active' : ''}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ marginTop: 28 }}>
          <Link href="/packages" className="btn btn-dark" style={{ width: '100%' }}>
            Join Now
          </Link>
        </div>
      </nav>
    </>
  )
}
