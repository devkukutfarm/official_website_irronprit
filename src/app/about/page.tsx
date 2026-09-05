import Link from 'next/link'
import Image from 'next/image'
import FaqAccordion from '@/components/ui/FaqAccordion'
import CertGrid from '@/components/ui/CertGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'IRONPRIT Fitness was built on the belief that real transformation comes through proper training and consistency. Meet our founder and learn our story.',
}

const certs = [
  {
    src: '/images/certification_1.jpg',
    title: 'CPT Certification',
    issuer: 'Certified Personal Trainer',
    width: 600,
    height: 440,
  },
  {
    src: '/images/certification_2.jpg',
    title: 'Nutrition Specialist',
    issuer: 'Sports Nutrition Certification',
    width: 600,
    height: 440,
  },
  {
    src: '/images/certification_3.jpg',
    title: 'Strength & Conditioning',
    issuer: 'Advanced S&C Certificate',
    width: 600,
    height: 440,
  },
]

const aboutFaqs = [
  {
    q: 'When was IRONPRIT founded?',
    a: 'IRONPRIT Fitness was founded in Baruipur, West Bengal, with the mission of bringing professional fitness coaching to the community.',
  },
  {
    q: 'What makes IRONPRIT different from other gyms?',
    a: 'We focus on coaching quality over headcount. Every member gets personalised attention, form correction and a plan that actually suits their goal — not just a membership card.',
  },
  {
    q: 'Is IRONPRIT suitable for beginners?',
    a: 'Absolutely. We welcome complete beginners and tailor every program to current fitness level. Our trainers ensure you start safely and build confidence progressively.',
  },
  {
    q: 'Do you offer nutrition guidance?',
    a: 'Yes — diet guidance is included in all memberships. We do not prescribe supplements; we help you eat better for your specific goal.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">Our story</p>
          <h1 className="display" style={{ color: 'var(--white)' }}>
            BUILT FOR
            <br />
            <span style={{ color: 'var(--gold)' }}>REAL</span>
            <br />
            PEOPLE
          </h1>
          <p style={{ color: 'rgba(255,255,255,.78)', marginTop: 22, maxWidth: 440 }}>
            IRONPRIT was born from a simple belief — every person deserves access to proper fitness
            coaching that produces real, lasting results.
          </p>
          <div className="actions" style={{ marginTop: 32 }}>
            <Link href="/packages" className="btn">
              Join IRONPRIT
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Find Us
            </Link>
          </div>
        </div>
        <div className="about-hero-media">
          <Image
            src="/images/GYM_5.png"
            alt="IRONPRIT Fitness gym"
            width={600}
            height={750}
            priority
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 28 }}
          />
        </div>
      </section>

      {/* ── Intro / Mission ── */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-head" style={{ margin: '0 auto 64px' }}>
            <p className="eyebrow">What drives us</p>
            <h2 className="display">
              TRAIN RIGHT.
              <br />
              STAY <em>CONSISTENT.</em>
              <br />
              TRANSFORM.
            </h2>
            <p>
              Too many gyms sell memberships, not results. At IRONPRIT we measure success by
              the progress of our members, not by how many sign up.
            </p>
          </div>

          <div className="about-who">
            <div className="about-who-copy">
              <p className="eyebrow">Who we are</p>
              <h2 className="display">
                YOUR COACHES.
                <br />
                YOUR <span className="accent">COMMUNITY.</span>
              </h2>
              <div className="about-who-meta">
                {[
                  {
                    icon: 'fa-solid fa-dumbbell',
                    label: 'Expert Coaching',
                    text: 'Certified trainers with years of hands-on experience in strength, conditioning and nutrition.',
                  },
                  {
                    icon: 'fa-solid fa-chart-line',
                    label: 'Tracked Progress',
                    text: 'We document your starting point and track every milestone so you can see how far you have come.',
                  },
                  {
                    icon: 'fa-solid fa-people-group',
                    label: 'Inclusive Community',
                    text: 'From beginners to advanced athletes — everyone is welcome. We grow together.',
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="about-who-meta__icon" style={{
                      width: 42, height: 42, borderRadius: '50%',
                      background: 'var(--gold)', color: 'var(--ink)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <i className={item.icon} />
                    </span>
                    <div>
                      <strong style={{ fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>
                        {item.label}
                      </strong>
                      <p style={{ margin: '4px 0 0', color: 'var(--muted)' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/trainers" className="btn">
                Meet Our Trainers
              </Link>
            </div>
            <div className="about-who-photo">
              <Image
                src="/images/GYM_6.png"
                alt="Training at IRONPRIT"
                width={520}
                height={680}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 28 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MVV ── */}
      <section className="mvv">
        <div className="container">
          <div className="mvv-grid">
            {/* Mission photo */}
            <div
              className="mvv-mission"
              style={{ backgroundImage: 'url(/images/GYM_3.png)', minHeight: 640, borderRadius: 28 }}
            >
              <div className="mvv-copy" style={{ padding: 36 }}>
                <h3 style={{ color: 'var(--white)' }}>Our Mission</h3>
                <p className="mvv-line" style={{ color: 'var(--gold)' }}>
                  Make real fitness coaching accessible to everyone in Baruipur.
                </p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,.78)' }}>
                  We exist to close the gap between wanting to change and actually changing — with
                  coaches who care, programs that work and a space that keeps you coming back.
                </p>
              </div>
            </div>

            {/* Vision + Values */}
            <div className="mvv-stack">
              <div className="mvv-split" style={{ borderRadius: 28, overflow: 'hidden' }}>
                <div className="mvv-copy" style={{ padding: '28px 24px' }}>
                  <h3>Our Vision</h3>
                  <p className="mvv-line" style={{ color: 'var(--red)' }}>
                    To be West Bengal&apos;s most trusted fitness community.
                  </p>
                  <p style={{ margin: 0, color: 'var(--muted)' }}>
                    A gym where every member leaves better than they arrived — physically,
                    mentally and in their habits.
                  </p>
                </div>
                <div
                  className="mvv-photo"
                  style={{ backgroundImage: 'url(/images/GYM_4.png)', minHeight: 220 }}
                />
              </div>

              <div style={{ background: 'var(--gold)', borderRadius: 28, padding: '28px 24px' }}>
                <h3>Our Values</h3>
                <p className="mvv-line">Discipline. Honesty. Results.</p>
                <ul className="value-list">
                  {[
                    'Proper Technique Always',
                    'No Shortcuts',
                    'Member-First Mindset',
                    'Continuous Learning',
                    'Community Over Competition',
                    'Respect for Every Goal',
                  ].map((v) => (
                    <li key={v}>
                      <i className="fa-solid fa-check" style={{ marginRight: 6 }} />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why IRONPRIT ── */}
      <section className="why-us">
        <div
          className="why-us-bg"
          style={{ backgroundImage: 'url(/images/ironprit-banner.jpg)' }}
        />
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>Why choose us</p>
          <h2 className="display" style={{ color: 'var(--white)' }}>
            THE IRONPRIT
            <br />
            <span style={{ color: 'var(--gold)' }}>DIFFERENCE</span>
          </h2>
          <div className="why-grid">
            {[
              {
                icon: 'fa-solid fa-user-check',
                title: 'Certified Coaches',
                text: 'Every trainer holds professional certifications and undergoes continuous education to stay current.',
              },
              {
                icon: 'fa-solid fa-clipboard-list',
                title: 'Structured Programs',
                text: 'No random workouts. Every session follows a plan built for your specific goal and fitness level.',
              },
              {
                icon: 'fa-solid fa-heart-pulse',
                title: 'Holistic Approach',
                text: 'Training, nutrition and recovery — we address all three pillars because fitness is a complete picture.',
              },
            ].map((item) => (
              <article key={item.title}>
                <i className={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="approach">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow">How we do it</p>
            <h2 className="display">
              THE IRONPRIT
              <br />
              <span className="accent">APPROACH</span>
            </h2>
          </div>
          <div className="approach-grid">
            {[
              {
                step: '01 / Train',
                title: 'TRAIN',
                text: 'Form-first, progressive training that builds strength safely and efficiently — no ego lifting.',
                featured: false,
              },
              {
                step: '02 / Learn',
                title: 'LEARN',
                text: 'We teach you why behind every movement and nutrition decision so you become self-sufficient.',
                featured: true,
              },
              {
                step: '03 / Transform',
                title: 'TRANSFORM',
                text: 'Real, visible changes that go beyond the scale — energy, strength, posture, confidence.',
                featured: false,
              },
            ].map((item) => (
              <article key={item.title} className={item.featured ? 'is-featured' : ''}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="founder">
        <div
          className="founder-photo"
          style={{ backgroundImage: 'url(https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/trainer2-610x610.jpg)' }}
        />
        <div className="founder-copy">
          <p className="eyebrow">The person behind it</p>
          <h2 className="display">
            MEET THE
            <br />
            <span className="accent">FOUNDER</span>
          </h2>
          <p className="founder-standard">Pritam M Sen</p>
          <p style={{ color: 'var(--muted)', marginBottom: 22 }}>
            IRONPRIT was born from a simple belief — real transformation is built through proper
            training, consistency, discipline and knowledge, not shortcuts.
          </p>
          <p style={{ color: 'var(--muted)', marginBottom: 28 }}>
            Pritam M Sen has spent years in the fitness industry helping people of all ages and
            backgrounds reach goals they once thought were impossible. His approach is direct,
            science-backed and always personal.
          </p>
          <div className="founder-sign">
            <strong>Pritam M Sen</strong>
            <small>Founder &amp; Head Coach, IRONPRIT Fitness</small>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="achievements">
        <div className="container">
          <p className="eyebrow">Credentials</p>
          <h2 className="display">
            CERTIFIED.
            <br />
            <span className="accent">QUALIFIED.</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: 8, maxWidth: 540 }}>
            Our certifications back up what we promise in the gym.
          </p>
          <CertGrid certs={certs} />
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
            {['Train Hard', 'Stay Consistent', 'Eat Right', 'Rest Well', 'Repeat'].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p style={{ color: 'rgba(255,255,255,.78)', maxWidth: 620, margin: '0 auto 16px' }}>
            Simple principles. Exceptional results. This is what every IRONPRIT member commits to —
            and what we commit right back to them.
          </p>
          <p className="standard-lines">Excellence is not an option. It is the standard.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq">
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>Got questions?</p>
          <h2 className="display" style={{ color: 'var(--white)' }}>
            ABOUT <span style={{ color: 'var(--gold)' }}>FAQs</span>
          </h2>
          <FaqAccordion items={aboutFaqs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">Ready?</p>
          <h2 className="display">
            JOIN IRONPRIT
            <br />
            TODAY
          </h2>
          <p className="lead" style={{ margin: '12px auto 0' }}>
            Take your first step. Walk in for a free session — no commitment, no pressure.
          </p>
          <div className="actions" style={{ justifyContent: 'center', marginTop: 28 }}>
            <Link href="/packages" className="btn btn-dark">
              View Plans
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
