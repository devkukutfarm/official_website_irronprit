import Link from 'next/link'
import { trainersList } from '@/lib/data/trainers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Trainers',
  description:
    'Meet the certified coaches at IRRONPRIT Fitness Baruipur. Professional trainers dedicated to your real transformation.',
  alternates: { canonical: 'https://www.irronprit.com/trainers' },
  openGraph: {
    title: 'Our Trainers | IRRONPRIT Fitness Baruipur',
    description:
      'Certified professionals who take your progress personally. Every trainer at IRRONPRIT knows your name, your goal and your starting point.',
    url: 'https://www.irronprit.com/trainers',
    siteName: 'IRRONPRIT Fitness',
    images: [
      {
        url: 'https://www.irronprit.com/images/ironprit-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'IRRONPRIT Fitness Trainers — Baruipur Gym',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Trainers | IRRONPRIT Fitness Baruipur',
    description:
      'Certified coaches dedicated to your real transformation. Meet the IRRONPRIT team.',
    images: ['https://www.irronprit.com/images/ironprit-banner.jpg'],
  },
}

export default function TrainersPage() {
  return (
    <>
      {/* â”€â”€ Hero â”€â”€ */}
      <section className="about-hero hero-compact hero-banner" style={{ background: '#f6f3ea' }}>
        <div className="about-hero-copy" data-stagger="fadeInUp">
          <p className="eyebrow">Your coaches</p>
          <h1 className="display" style={{ color: 'var(--ink)' }}>
            MEET THE
            <br />
            <span className="accent">TEAM</span>
          </h1>
          <p style={{ color: 'var(--muted)', marginTop: 22, maxWidth: 440 }}>
            Certified professionals who take your progress personally. At IRRONPRIT, every trainer
            knows your name, your goal and your starting point.
          </p>
        </div>
        <div className="about-hero-media">
          <img
            src="/images/Characters/3.png"
            alt="IRONPRIT trainers"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 28 }}
          />
        </div>
      </section>

      {/* â”€â”€ Trainers list â”€â”€ */}
      <section className="trainers-list">
        <div className="container">
          <p className="eyebrow" data-animate="fadeInUp">Our coaches</p>
          <h2 className="display" style={{ marginBottom: 32 }} data-animate="fadeInUp">
            CERTIFIED.
            <br />
            <span className="accent">DEDICATED.</span>
          </h2>
          <div className="trainers-list-grid" data-stagger="fadeInUp">
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

      {/* â”€â”€ CTA â”€â”€ */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: 'center' }} data-stagger="fadeInUp">
          <p className="eyebrow">Train with the best</p>
          <h2 className="display">
            READY TO
            <br />
            START?
          </h2>
          <p className="lead" style={{ margin: '12px auto 0' }}>
            Book a session and meet your coach before committing to any plan.
          </p>
          <div className="actions" style={{ justifyContent: 'center', marginTop: 28 }}>
            <Link href="/packages" className="btn btn-dark">
              View Plans
            </Link>
            <a
              href="https://wa.me/919903475355"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <i className="fa-brands fa-whatsapp" /> Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

