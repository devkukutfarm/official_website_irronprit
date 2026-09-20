import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Find IRRONPRIT Fitness in Baruipur, West Bengal. Get directions, call us or drop us a message on WhatsApp.',
  alternates: { canonical: 'https://www.irronprit.com/contact' },
  openGraph: {
    title: 'Contact IRRONPRIT Fitness | Gym in Baruipur',
    description:
      'Visit IRRONPRIT Fitness at Jogibattala Khasmallik, Baruipur, West Bengal. Call us, WhatsApp us or get directions. Mon–Sat 9 am–8 pm, Sun 10 am–2 pm.',
    url: 'https://www.irronprit.com/contact',
    siteName: 'IRRONPRIT Fitness',
    images: [
      {
        url: 'https://www.irronprit.com/images/ironprit-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact IRRONPRIT Fitness — Baruipur Gym',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact IRRONPRIT Fitness | Gym in Baruipur',
    description:
      'Visit us at Jogibattala Khasmallik, Baruipur, West Bengal. Call or WhatsApp us anytime.',
    images: ['https://www.irronprit.com/images/ironprit-banner.jpg'],
  },
}

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero" style={{ background: 'var(--green)' }}>
        <div className="about-hero-copy">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>Get in touch</p>
          <h1 className="display" style={{ color: 'var(--white)' }}>
            VISIT
            <br />
            <span style={{ color: 'var(--gold)' }}>IRRONPRIT</span>
            <br />
            FITNESS
          </h1>
          <p style={{ color: 'rgba(255,255,255,.78)', marginTop: 22, maxWidth: 440 }}>
            We are in Baruipur, West Bengal. Come in for a free session or reach out on WhatsApp —
            we reply fast.
          </p>
          <div className="actions" style={{ marginTop: 32 }}>
            <a
              href="https://wa.me/919903475355"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <i className="fa-brands fa-whatsapp" /> WhatsApp Us
            </a>
            <a href="tel:+919903475355" className="btn btn-ghost">
              Call Now
            </a>
          </div>
        </div>
        <div className="about-hero-media">
          <img
            src="/images/Characters/2.png"
            alt="IRONPRIT Fitness"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 28 }}
          />
        </div>
      </section>

      {/* ── Branch info ── */}
      <section className="contact-branches">
        <div className="container">
          <p className="eyebrow">Our location</p>
          <h2 className="display" style={{ marginBottom: 12 }}>
            FIND <span className="accent">US</span>
          </h2>
          <div className="branch-grid">
            <div className="branch-card">
              <i className="fa-solid fa-location-dot" style={{ color: 'var(--gold)', fontSize: 28 }} />
              <h3>IRRONPRIT Fitness</h3>
              <p>
                Jogibattala Khasmallik, Near Baruipur Padmapukur More,
                <br />
                Beside Holy Cross School, West Bengal 700144
              </p>
              <p>
                <i className="fa-solid fa-phone" style={{ marginRight: 6 }} />
                <a href="tel:+919903475355">9903475355</a>
              </p>
              <p>
                <i className="fa-solid fa-envelope" style={{ marginRight: 6 }} />
                <a href="mailto:info@ironprit.com">info@ironprit.com</a>
              </p>
              <div style={{ marginTop: 14, fontSize: 14 }}>
                <strong>Gym Hours:</strong>
                <br />
                Mon - Sat: 9:00 am - 8:00 pm
                <br />
                Sunday: 10:00 am - 2:00 pm
              </div>
              <a
                href="https://wa.me/919903475355"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ marginTop: 16 }}
              >
                <i className="fa-brands fa-whatsapp" /> Chat with Us
              </a>
            </div>

            {/* Quick info cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: 'fa-solid fa-clock', title: 'Weekdays', sub: 'Mon - Sat', time: '9:00 am - 8:00 pm' },
                { icon: 'fa-solid fa-sun', title: 'Sunday', sub: 'Open hours', time: '10:00 am - 2:00 pm' },
                { icon: 'fa-solid fa-phone', title: 'Phone', sub: 'Call us anytime', time: '9903475355' },
                { icon: 'fa-brands fa-whatsapp', title: 'WhatsApp', sub: 'Fastest reply', time: 'Usually within the hour' },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: '#f6f3ea', borderRadius: 20, padding: '24px 20px',
                    display: 'flex', flexDirection: 'column', gap: 8,
                  }}
                >
                  <i className={item.icon} style={{ color: 'var(--gold)', fontSize: 24 }} />
                  <strong style={{ fontFamily: 'var(--display)', fontStyle: 'italic', textTransform: 'uppercase', fontSize: 20 }}>
                    {item.title}
                  </strong>
                  <small style={{ color: 'var(--muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.sub}
                  </small>
                  <span style={{ fontWeight: 700 }}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="contact-map" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Get directions</p>
          <h2 className="display" style={{ marginBottom: 12 }}>
            WE&apos;RE ON THE <span className="accent">MAP</span>
          </h2>
          <div className="map-frame">
            <iframe
              src="https://maps.google.com/maps?q=22.382185,88.419228&z=17&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IRRONPRIT Fitness location"
            />
          </div>
          <div className="contact-map-actions">
            <a
              href="https://maps.google.com/?q=22.382185,88.419228"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <i className="fa-solid fa-map-location-dot" /> Open in Google Maps
            </a>
            <a
              href="https://wa.me/919903475355"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <i className="fa-brands fa-whatsapp" /> Ask for directions
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container">
          <p className="eyebrow">Your journey starts here</p>
          <h2 className="display">
            Are you ready
            <br />
            to become stronger?
          </h2>
          <div className="actions">
            <a
              className="btn btn-dark"
              href="https://wa.me/919903475355?text=Hi%20IRONPRIT%2C%20I%20am%20ready%20to%20join."
              target="_blank"
              rel="noopener noreferrer"
            >
              Join IRRONPRIT
            </a>
            <a className="btn btn-ghost" href="tel:+919903475355">
              Call 9903475355
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

