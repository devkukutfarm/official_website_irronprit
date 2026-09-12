import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* WhatsApp CTA bar */}
      <div className="footer-cta">
        <Image
          src="/images/Inner-logo.png"
          alt="IRRONPRIT"
          width={84}
          height={84}
          style={{ borderRadius: 16, objectFit: 'cover' }}
        />
        <div>
          <p className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 4 }}>
            Ready to start?
          </p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,.8)', fontSize: 15 }}>
            Chat with us on WhatsApp — get your questions answered fast and book your free trial session.
          </p>
        </div>
        <a
          href="https://wa.me/919903475355"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ flexShrink: 0 }}
        >
          <i className="fa-brands fa-whatsapp" /> WhatsApp Us
        </a>
      </div>

      <div className="container footer-main">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Image
              src="/images/Logo-with-arms.png"
              alt="IRRONPRIT Fitness"
              width={96}
              height={96}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <p>
              IRRONPRIT Fitness is a professional gym in Baruipur, West Bengal — built around proper
              training, real coaching and a community that keeps you consistent.
            </p>
            <div className="socials" style={{ marginTop: 14 }}>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube" />
              </a>
              <a
                href="https://wa.me/919903475355"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4>Quick Links</h4>
            <ul>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/classes', label: 'Classes' },
                { href: '/packages', label: 'Packages' },
                { href: '/trainers', label: 'Our Trainers' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              <i className="fa-solid fa-location-dot" style={{ color: 'var(--gold)', marginRight: 8 }} />
              Jogibattala Khasmallik, Near Baruipur
              <br />
              Padmapukur More, Beside Holy Cross School,
              <br />
              West Bengal 700144
            </p>
            <p>
              <i className="fa-solid fa-phone" style={{ color: 'var(--gold)', marginRight: 8 }} />
              <a href="tel:+919903475355">9903475355</a> / <a href="tel:+919903745355">9903745355</a>
            </p>
            <p>
              <i className="fa-solid fa-envelope" style={{ color: 'var(--gold)', marginRight: 8 }} />
              <a href="mailto:info@ironprit.com">info@ironprit.com</a>
            </p>
            <p style={{ marginTop: 16, fontSize: 14 }}>
              <strong style={{ color: 'var(--gold)' }}>Hours:</strong>
              <br />
              Mon - Sat: 10:00 am - 10:00 pm
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ margin: 0 }}>
            Copyright © 2026 IRRONPRIT Fitness. Strength that defines you.
          </p>
          <p style={{ margin: 0 }}>
            Designed &amp; built with <span style={{ color: 'var(--red)' }}>♥</span> for Baruipur.
          </p>
        </div>
      </div>
    </footer>
  )
}
