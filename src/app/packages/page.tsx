import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Packages & Pricing | IRONPRIT Fitness',
  description:
    'Flexible gym membership plans at IRONPRIT Fitness Baruipur. Monthly, quarterly, half-yearly and annual plans with couple and referral offers. No joining fee.',
}

const plans = [
  {
    name: 'Monthly',
    old: '₹1,400',
    now: '₹999',
    period: '/month',
    featured: false,
    features: [
      'All group classes',
      'Locker facility',
      'Progress tracking',
      '1 diet guidance session',
      'Free trial included',
    ],
  },
  {
    name: 'Quarterly',
    old: '₹3,900',
    now: '₹2,799',
    period: '/3 months',
    featured: false,
    features: [
      'All group classes',
      'Locker facility',
      'Progress tracking',
      '1 diet guidance session',
      '1 personal training session',
    ],
  },
  {
    name: 'Half Yearly',
    old: '₹7,200',
    now: '₹4,999',
    period: '/6 months',
    featured: true,
    features: [
      'All group classes',
      'Locker facility',
      'Progress tracking',
      'Monthly diet guidance',
      '3 personal training sessions',
      '1 month FREE bonus',
    ],
  },
  {
    name: 'Annual',
    old: '₹13,200',
    now: '₹8,999',
    period: '/year',
    featured: false,
    features: [
      'All group classes',
      'Locker facility',
      'Progress tracking',
      'Unlimited diet guidance',
      '6 personal training sessions',
      '2 months FREE bonus',
    ],
  },
]

export default function PackagesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero pkg-hero">
        <div className="about-hero-copy">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>Membership plans</p>
          <h1 className="display" style={{ color: 'var(--white)' }}>
            SIMPLE,
            <br />
            HONEST
            <br />
            <span style={{ color: 'var(--gold)' }}>PRICING</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,.78)', marginTop: 22, maxWidth: 440 }}>
            No hidden fees, no joining charges, no pressure. Just pick the plan that fits your
            life and start training.
          </p>
          <div className="actions" style={{ marginTop: 32 }}>
            <a href="#plans" className="btn">
              See Plans
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Ask a Question
            </a>
          </div>
        </div>
        <div className="about-hero-media">
          <img
            src="https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/african-bodybuilder-exercising-with-dumbbells-PYYBBGT.jpg"
            alt="Training at IRONPRIT"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 28 }}
          />
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="pkg-intro" id="plans">
        <div className="container">
          <p className="eyebrow">Our plans</p>
          <h2 className="display">
            CHOOSE YOUR
            <br />
            <em>MEMBERSHIP</em>
          </h2>
          <p>
            Every plan includes all group classes — Strength, Cardio, HIIT, Yoga and Zumba. No
            extra cost, no surprises.
          </p>

          <div className="promo-strip" style={{ marginTop: 28 }}>
            <strong>Current Offer:</strong> Get 1 month FREE on 6-month plans &amp; 2 months FREE on
            annual plans. <strong>Couple Discount: 15% off</strong> when joining together.
          </div>
        </div>
      </section>

      {/* ── Plans grid ── */}
      <section className="pkg-pricing">
        <div className="container">
          <div className="price-grid">
            {plans.map((plan) => (
              <div key={plan.name} className={`price-card${plan.featured ? ' featured' : ''}`}>
                <h3>{plan.name}</h3>
                <p className="price-old">{plan.old}</p>
                <div className="price-now">
                  {plan.now}
                  <span style={{ fontSize: 16, fontWeight: 500, opacity: 0.7 }}>
                    {plan.period}
                  </span>
                </div>
                <ul style={{ marginBottom: 22 }}>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <i className="fa-solid fa-circle-check" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://forms.gle/YOUR_ENROLLMENT_FORM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn${plan.featured ? '' : ' btn-dark'}`}
                  style={{ marginTop: 'auto' }}
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>

          {/* Offers */}
          <div className="offer-row">
            <div className="offer-box offer-refer">
              <span className="offer-label">Referral Offer</span>
              <div className="offer-icon">
                <i className="fa-solid fa-people-group" />
              </div>
              <h3>Refer a Friend</h3>
              <p>
                Bring a friend who joins any plan and both of you get{' '}
                <strong>₹500 off your next renewal</strong>. No limit on how many friends you
                refer.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{ alignSelf: 'flex-start' }}
              >
                Claim Offer
              </a>
            </div>
            <div className="offer-box offer-couple">
              <span className="offer-label">Couple Offer</span>
              <div className="offer-icon" style={{ background: 'var(--gold)' }}>
                <i className="fa-solid fa-heart" />
              </div>
              <h3>Train Together</h3>
              <p>
                Couples who join together get{' '}
                <strong>15% off on any plan</strong>. Because the couple that trains together,
                stays together.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Get the Deal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Personal Training ── */}
      <section className="pkg-pt">
        <div className="container">
          <p className="eyebrow">Need more focus?</p>
          <h2 className="display">
            PERSONAL
            <br />
            <span className="accent">TRAINING</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px' }}>
            One-to-one sessions with your coach — custom plan, form correction and full
            accountability.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, maxWidth: 880, margin: '0 auto 32px' }}>
            {[
              { title: 'Standard PT', desc: 'Great for goal-focused individuals looking for a personalised plan.' },
              { title: 'Exclusive PT', desc: 'Priority time slots, dedicated trainer and intensive programming.' },
              { title: 'Special Population', desc: 'Tailored for seniors, post-injury, prenatal or medical conditions.' },
              { title: 'Diet Consultancy', desc: 'Standalone nutrition sessions — no gym membership required.' },
            ].map((item) => (
              <div
                key={item.title}
                style={{ background: '#fff', borderRadius: 20, padding: '24px 22px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{
                  margin: '0 0 10px', fontFamily: 'var(--display)', fontStyle: 'italic',
                  textTransform: 'uppercase', fontSize: 22, color: 'var(--red)',
                }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, color: 'var(--muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="https://forms.gle/YOUR_PT_ENQUIRY_FORM"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Enquire About PT
          </a>
        </div>
      </section>

      {/* ── Standard ── */}
      <section className="standard">
        <div className="container">
          <p className="eyebrow">Our promise</p>
          <h2 className="display" style={{ color: 'var(--white)', marginBottom: 18 }}>
            THE IRONPRIT STANDARD
          </h2>
          <ul>
            {['No Hidden Fees', 'No Joining Charges', 'Flexible Plans', 'Cancel Anytime*', 'Real Coaches'].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p style={{ color: 'rgba(255,255,255,.78)', maxWidth: 620, margin: '0 auto 8px' }}>
            We believe fitness should be affordable and accessible. Our pricing reflects that.
          </p>
          <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 13 }}>
            * Subject to membership terms. Contact us for details.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mid-cta">
        <div className="container">
          <p className="eyebrow">Ready to start?</p>
          <h2 className="display">
            TAKE THE
            <br />
            <span className="accent">FIRST STEP</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Walk in for a free session first — then decide. No pressure, no commitment.
          </p>
          <div className="actions" style={{ justifyContent: 'center', marginTop: 28 }}>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <i className="fa-brands fa-whatsapp" /> Book Free Trial
            </a>
            <Link href="/contact" className="btn btn-dark">
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
