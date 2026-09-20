import Link from 'next/link'
import { notFound } from 'next/navigation'
import { trainersData } from '@/lib/data/trainers'
import CertGrid from '@/components/ui/CertGrid'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return Object.keys(trainersData).map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const trainer = trainersData[id]
  if (!trainer) return {}
  return {
    title: `${trainer.name} | Trainer`,
    description: trainer.lead,
    alternates: { canonical: `https://www.ironprit.com/trainers/${id}` },
    openGraph: {
      title: `${trainer.name} — Certified Trainer at IRRONPRIT Fitness`,
      description: trainer.lead,
      url: `https://www.ironprit.com/trainers/${id}`,
      siteName: 'IRRONPRIT Fitness',
      images: [
        {
          url: 'https://www.ironprit.com/images/ironprit-banner.jpg',
          width: 1200,
          height: 630,
          alt: `${trainer.name} — IRRONPRIT Fitness Trainer`,
        },
      ],
      locale: 'en_IN',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${trainer.name} — Certified Trainer at IRRONPRIT Fitness`,
      description: trainer.lead,
      images: ['https://www.ironprit.com/images/ironprit-banner.jpg'],
    },
  }
}

const certsByTrainer: Record<string, { src: string; title: string; issuer: string; width: number; height: number }[]> = {
  pritam: [
    { src: '/images/certification_1.jpg', title: 'Diploma in Personal Training', issuer: 'Batch Topper of NIFS', width: 600, height: 440 },
    { src: '/images/certification_2.jpg', title: 'Cardio Pulmonary Resuscitation', issuer: 'CPR Certification', width: 600, height: 440 },
    { src: '/images/certification_3_new.jpg', title: 'Diploma in Sports, Fitness and Personal Training', issuer: '3rd Rank of OW', width: 600, height: 440 },
  ],
}

const gymPhotos = [
  '/images/GYM_3.png',
  '/images/GYM_4.png',
  '/images/GYM_5.png',
  '/images/GYM_6.png',
]

export default async function TrainerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const trainer = trainersData[id]
  if (!trainer) notFound()

  const certs = certsByTrainer[id] ?? []

  return (
    <>
      {/* ── Hero split ── */}
      <section className="about-hero hero-compact hero-stack" style={{ background: '#031912' }}>
        <div className="about-hero-copy">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>{trainer.role}</p>
          <h1 className="display" style={{ color: 'var(--white)' }}>
            {trainer.name.toUpperCase()}
          </h1>
          <p style={{ color: 'rgba(255,255,255,.78)', marginTop: 18, fontStyle: 'italic', fontSize: 18, fontWeight: 600, maxWidth: 420 }}>
            &ldquo;{trainer.lead}&rdquo;
          </p>
          <div className="actions" style={{ marginTop: 32 }}>
            <a
              href="https://wa.me/919903475355"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Book a Session
            </a>
            <Link href="/trainers" className="btn btn-ghost">
              All Trainers
            </Link>
          </div>
        </div>
        <div className="about-hero-media">
          <img
            src={trainer.photo}
            alt={trainer.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', borderRadius: 28 }}
          />
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="founder trainer-bio" style={{ display: 'block', background: 'var(--white)', padding: '90px 0' }}>
        <div className="container">
          <div className="class-member-grid">
            <div>
              <p className="eyebrow">About {trainer.name.split(' ')[0]}</p>
              <h2 className="display">
                THE COACH
                <br />
                <span className="accent">BEHIND THE GYM</span>
              </h2>
              <p style={{ color: 'var(--muted)', marginTop: 16, lineHeight: 1.8 }}>
                {trainer.bio}
              </p>
              <div className="actions" style={{ marginTop: 28 }}>
                <Link href="/packages" className="btn">
                  Train With {trainer.name.split(' ')[0]}
                </Link>
              </div>
            </div>
            <div style={{ background: 'var(--gold)', borderRadius: 24, padding: 32 }}>
              <p className="eyebrow">Specialities</p>
              <ul className="check-list">
                {[
                  'Fat Loss Programming',
                  'Nutrition Coaching',
                  'Rehabilitation Training',
                  'Group Class Coaching',
                  'Corporate Fitness',
                ].map((s) => (
                  <li key={s}>
                    <i className="fa-solid fa-check" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      {certs.length > 0 && (
        <section className="achievements">
          <div className="container">
            <p className="eyebrow">Credentials</p>
            <h2 className="display">
              CERTIFIED.
              <br />
              <span className="accent">QUALIFIED.</span>
            </h2>
            <CertGrid certs={certs} />
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {/* <section className="trainer-gallery">
        <div className="container">
          <p className="eyebrow">At IRRONPRIT</p>
          <h2 className="display" style={{ marginBottom: 18 }}>
            GYM <span className="accent">GALLERY</span>
          </h2>
          <div className="gallery-grid">
            {gymPhotos.map((src, i) => (
              <img key={i} src={src} alt={`IRRONPRIT gym ${i + 1}`} />
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Review ── */}
      <section className="reviews">
        <div className="container reviews-grid">
          <div>
            <img
              src={trainer.photo}
              alt={trainer.name}
              className="reviews-photo"
              style={{ borderRadius: 24, objectFit: 'cover', width: '100%', maxWidth: 360, aspectRatio: '1' }}
            />
          </div>
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold)' }}>What members say</p>
            <h2 className="display" style={{ color: 'var(--white)' }}>
              REAL RESULTS,
              <br />
              <span style={{ color: 'var(--gold)' }}>REAL FEEDBACK</span>
            </h2>
            <span className="sample-note">Member review</span>
            <p className="quote">
              &ldquo;Training with {trainer.name.split(' ')[0]} changed how I think about fitness. The
              attention to form, the progressive plans and the genuine care for your progress makes
              IRRONPRIT unlike any gym I&apos;ve trained at before.&rdquo;
            </p>
            <div className="quote-meta">
              <img
                src="/images/Characters/3.png"
                alt="Member"
                style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong>Rohit B.</strong>
                <small style={{ color: 'rgba(255,255,255,.6)' }}>Member since 2023</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">Book a session</p>
          <h2 className="display">
            TRAIN WITH
            <br />
            {trainer.name.split(' ')[0].toUpperCase()}
          </h2>
          <p className="lead" style={{ margin: '12px auto 0' }}>
            Start with a free trial and experience the IRRONPRIT difference first-hand.
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
              <i className="fa-brands fa-whatsapp" /> Book Free Trial
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
