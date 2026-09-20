import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Find IRRONPRIT Fitness in Baruipur, West Bengal. Get directions, call us or drop us a message on WhatsApp.',
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
                Mon - Sat: 10:00 am - 10:00 pm
                <br />
                Sunday: Closed
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
                { icon: 'fa-solid fa-clock', title: 'Weekdays', sub: 'Mon - Sat', time: '10:00 am - 10:00 pm' },
                { icon: 'fa-solid fa-sun', title: 'Sunday', sub: 'Weekly off', time: 'Closed' },
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
            {/* Replace src with actual IRRONPRIT Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117968.47591337767!2d88.30820815!3d22.358880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026f49cf2cfd1b%3A0x8edadb6dda6d7c8f!2sBaruipur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IRRONPRIT Fitness location"
            />
          </div>
          <div className="contact-map-actions">
            <a
              href="https://maps.google.com/?q=Baruipur+West+Bengal"
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

