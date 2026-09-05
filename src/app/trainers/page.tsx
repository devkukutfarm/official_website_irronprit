import Link from 'next/link'
import { trainersList } from '@/lib/data/trainers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Trainers | IRONPRIT Fitness',
  description:
    'Meet the certified coaches at IRONPRIT Fitness Baruipur. Professional trainers dedicated to your real transformation.',
}

export default function TrainersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero" style={{ background: '#f6f3ea' }}>
        <div className="about-hero-copy">
          <p className="eyebrow">Your coaches</p>
          <h1 className="display">
            MEET THE
            <br />
            <span className="accent">TEAM</span>
          </h1>
          <p style={{ color: 'var(--muted)', marginTop: 22, maxWidth: 440 }}>
            Certified professionals who take your progress personally. At IRONPRIT, every trainer
            knows your name, your goal and your starting point.
          </p>
        </div>
        <div className="about-hero-media">
          <img
            src="https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/trainer2-610x610.jpg"
            alt="IRONPRIT trainers"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 28 }}
          />
        </div>
      </section>

      {/* ── Trainers list ── */}
      <section className="trainers-list">
        <div className="container">
          <p className="eyebrow">Our coaches</p>
          <h2 className="display" style={{ marginBottom: 32 }}>
            CERTIFIED.
            <br />
            <span className="accent">DEDICATED.</span>
          </h2>
          <div className="trainers-list-grid">
            {trainersList.map((trainer) => (
              <Link key={trainer.id} href={`/trainers/${trainer.id}`} className="trainer-card" style={{ minHeight: 400 }}>
                <div className="bg" style={{ backgroundImage: `url(${trainer.photo})` }} />
                <div className="meta">
                  <span>{trainer.role}</span>
                  <h3>{trainer.name}</h3>
                </div>
              </Link>
            ))}

            {/* Coming soon placeholder */}
            <div className="trainer-card trainer-soon">
              <div className="soon-inner">
                <span className="eyebrow">Coming Soon</span>
                <h3 className="display" style={{ fontSize: 36 }}>NEW COACH</h3>
                <p>We are expanding our team. Stay tuned.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">Train with the best</p>
          <h2 className="display">
            READY TO
            <br />
            START?
          </h2>
          <p className="lead" style={{ margin: '12px auto 0' }}>
            Book a free trial session and meet your coach before committing to any plan.
          </p>
          <div className="actions" style={{ justifyContent: 'center', marginTop: 28 }}>
            <Link href="/packages" className="btn btn-dark">
              View Plans
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <i className="fa-brands fa-whatsapp" /> Free Trial
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
