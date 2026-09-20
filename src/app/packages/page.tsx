import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Packages & Pricing',
  description:
    'IRRONPRIT membership plans — 1, 3, 6 and 12 months with up to 50% off and zero admission fee. Couple & referral offers available.',
  alternates: { canonical: 'https://www.ironprit.com/packages' },
  openGraph: {
    title: 'Gym Membership Plans & Pricing | IRRONPRIT Fitness',
    description:
      'Join IRRONPRIT Fitness — 1, 3, 6 and 12 month plans with up to 50% off, zero admission fee. Couple & referral offers available in Baruipur.',
    url: 'https://www.ironprit.com/packages',
    siteName: 'IRRONPRIT Fitness',
    images: [
      {
        url: 'https://www.ironprit.com/images/ironprit-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'IRRONPRIT Fitness Membership Plans — Baruipur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Membership Plans & Pricing | IRRONPRIT Fitness',
    description:
      'Join IRRONPRIT — 1, 3, 6 and 12 month plans with up to 50% off and zero admission fee.',
    images: ['https://www.ironprit.com/images/ironprit-banner.jpg'],
  },
}

const plans = [
  {
    name: '1 Month Pro',
    old: '₹3,500',
    now: '₹1,999',
    featured: false,
    waMsg: 'Hi%20IRRONPRIT%2C%20I%20want%20the%201%20Month%20Pro%20package%20(Rs%201999).',
    features: [
      'Premium Gym Shaker',
      'Zero admission fee',
    ],
  },
  {
    name: '3 Months Elite',
    old: '₹8,000',
    now: '₹3,999',
    featured: false,
    waMsg: 'Hi%20IRRONPRIT%2C%20I%20want%20the%203%20Months%20Elite%20package%20(Rs%203999).',
    features: [
      'Gym Towel',
      '1 Steam Bath Session',
    ],
  },
  {
    name: '6 Months Supreme',
    old: '₹14,500',
    now: '₹6,998',
    featured: true,
    waMsg: 'Hi%20IRRONPRIT%2C%20I%20want%20the%206%20Months%20Supreme%20package%20(Rs%206998).',
    features: [
      'Gym Towel & Premium Shaker',
      '2 Steam Bath Sessions',
      '2 Yoga Sessions / week',
      '3-Day Trial Pass (valid 2 months)',
    ],
  },
  {
    name: '12 Months Ultimate',
    old: '₹26,500',
    now: '₹12,999',
    featured: false,
    waMsg: 'Hi%20IRRONPRIT%2C%20I%20want%20the%2012%20Months%20Ultimate%20package%20(Rs%2012999).',
    features: [
      'Premium Gym Bag & Gym Essentials',
      '2 Yoga Sessions / week',
      '1 Zumba Session / week',
      '5 Steam Bath Sessions',
      '5-Day Friend Trial Pass (valid 2 months)',
    ],
  },
]

export default function PackagesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero pkg-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">Membership</p>
          <h1 className="display" style={{ color: 'var(--white)' }}>
            Be physically
            <br />fit. Join
            <br />today.
          </h1>
        </div>
        <div className="about-hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Characters/6.png"
            alt="Athlete training at IRONPRIT"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 28 }}
          />
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="pkg-intro" id="plans">
        <div className="container">
          <h2 className="display">
            Choose the plan
            <br />that matches your <em>commitment</em>
          </h2>
          <p>
            Long-term packages include zero admission fee and up to 50% off. Monthly members also
            get zero admission fee.
          </p>
          <div className="promo-strip">
            Flat <strong>50% OFF</strong> + <strong>Zero Admission Fee</strong> on quarterly,
            half-yearly and yearly plans.
          </div>
        </div>
      </section>

      {/* ── Plans grid ── */}
      <section className="pricing pkg-pricing">
        <div className="container">
          <div className="price-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={`price-card${plan.featured ? ' featured' : ''}`}>
                <h3>{plan.name}</h3>
                <div className="price-old">{plan.old}</div>
                <div className="price-now"><span className="cur">₹</span>{plan.now.replace('₹', '')}</div>
                <span className="gift-label">Gifts included</span>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <i className="fa-solid fa-check" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/919903475355?text=${plan.waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ marginTop: 'auto' }}
                >
                  Join this plan
                </a>
              </article>
            ))}
          </div>

          {/* Referral strip */}
          <div className="refer-strip">
            <i className="fa-solid fa-gift" aria-hidden="true" />
            <span>
              <em>Refer a friend</em> &amp; get <strong>1 Month Free</strong> or{' '}
              <strong className="refer-accent">20% OFF</strong> on any package!
            </span>
            <a
              href="https://wa.me/919903475355?text=Hi%20IRRONPRIT%2C%20I%20want%20to%20claim%20the%20referral%20offer."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Claim reward
            </a>
          </div>

          {/* Special offers */}
          <div className="special-head">
            <p className="eyebrow">More ways to save</p>
            <h2 className="display">Special Offers</h2>
          </div>

          <article className="offer-box offer-couple offer-couple-wide">
            <span className="offer-icon" aria-hidden="true">
              <i className="fa-solid fa-heart" />
            </span>
            <span className="offer-label">Couple / Dual Offer</span>
            <h3>Train together, save together</h3>
            <p>
              Join in with a partner for the yearly package. Get <strong>10% off</strong> on
              monthly, quarterly and half-yearly plans — and on yearly, you both train for a flat{' '}
              <strong>₹18,999</strong>. Ultimate value together!
            </p>
            <a
              href="https://wa.me/919903475355?text=Hi%20IRRONPRIT%2C%20I%20want%20the%20couple%20%2F%20dual%20offer."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ alignSelf: 'flex-start' }}
            >
              Ask for couple rate
            </a>
          </article>

          <div className="class-price-grid">
            <article className="class-price-card">
              <h3>
                <i className="fa-solid fa-music" aria-hidden="true" /> Zumba
              </h3>
              <div className="class-price-tier">
                <span>2 classes / week</span>
                <strong><span className="cur">₹</span>1,299</strong>
              </div>
              <div className="class-price-tier">
                <span>3 classes / week</span>
                <strong><span className="cur">₹</span>1,599</strong>
              </div>
            </article>
            <article className="class-price-card">
              <h3>
                <i className="fa-solid fa-spa" aria-hidden="true" /> Yoga
              </h3>
              <div className="class-price-tier">
                <span>2 classes / week</span>
                <strong><span className="cur">₹</span>1,299</strong>
              </div>
              <div className="class-price-tier">
                <span>3 classes / week</span>
                <strong><span className="cur">₹</span>1,599</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Personal Training ── */}
      <section className="pkg-pt">
        <div className="container">
          <p className="eyebrow">Personal training</p>
          <h2 className="display">
            Coaching with
            <br />direction
          </h2>
          <p className="lead">
            Standard, Exclusive and Special Population PT are available, plus diet consultancy. We
            do not list PT rates here yet — message us and we will match a plan to your goal.
          </p>
          <a
            href="https://wa.me/919903475355?text=Hi%20IRONPRIT%2C%20I%20want%20personal%20training%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ask for PT pricing
          </a>
        </div>
      </section>

      {/* ── Standard ── */}
      <section className="standard">
        <div className="container">
          <p className="eyebrow">The IRRONPRIT Standard</p>
          <ul>
            <li>No shortcuts.</li>
            <li>No false promises.</li>
            <li>No compromise on quality.</li>
          </ul>
          <p className="standard-lines">
            Train with purpose. Stay disciplined. Keep progressing.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container">
          <p className="eyebrow">Your journey starts here</p>
          <h2 className="display">
            Are you ready
            <br />to become stronger?
          </h2>
          <div className="actions">
            <a
              href="https://wa.me/919903475355?text=Hi%20IRONPRIT%2C%20I%20am%20ready%20to%20join."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Join IRRONPRIT
            </a>
            <a href="tel:+919903475355" className="btn btn-ghost">
              Call 9903475355
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
