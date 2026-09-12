import Link from 'next/link'
import { notFound } from 'next/navigation'
import { classesData, classesList } from '@/lib/data/classes'
import { trainersList } from '@/lib/data/trainers'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return Object.keys(classesData).map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const cls = classesData[id]
  if (!cls) return {}
  return {
    title: `${cls.title} | IRRONPRIT Fitness`,
    description: cls.lead,
  }
}

export default async function ClassDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const cls = classesData[id]
  if (!cls) notFound()

  return (
    <>
      {/* ── Hero ── */}
      <section className="class-hero">
        <div className="class-hero-copy">
          <p className="eyebrow">{cls.intensity} intensity · {cls.time}</p>
          <h1 className="display">{cls.title.toUpperCase()}</h1>
          <p className="lead">{cls.lead}</p>
          <div className="actions">
            <a
              href="https://forms.gle/YOUR_ENROLLMENT_FORM"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Enroll in This Class
            </a>
            <a href="#class-video" className="class-play">
              <i className="fa-solid fa-play class-play__icon" />
              See a session
            </a>
          </div>
        </div>
        <div className="class-hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cls.poster} alt={cls.title} />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="class-stats">
        <div className="container">
          <div className="stats-row">
            {[
              { label: 'Intensity', value: cls.intensity },
              { label: 'Duration', value: cls.time },
              { label: 'Maximize', value: cls.maximize },
              { label: 'Schedule', value: cls.dates },
            ].map((stat) => (
              <div key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="class-video" id="class-video">
        <div className="container">
          <p className="eyebrow">See it in action</p>
          <h2 className="display">{cls.title.toUpperCase()} AT IRRONPRIT</h2>
          <p className="video-note">A snapshot of what a typical session looks like.</p>
          <div className="video-frame">
            <video controls preload="none" poster={cls.poster}>
              <source src="/videos/training.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="class-benefits">
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>What you gain</p>
          <h2 className="display" style={{ color: 'var(--white)' }}>
            WHY <span style={{ color: 'var(--gold)' }}>{cls.title.toUpperCase()}</span>
          </h2>
          <p className="lead">{cls.benefits}</p>
          <div className="actions" style={{ marginTop: 32 }}>
            <a
              href="https://forms.gle/YOUR_ENROLLMENT_FORM"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Join This Class
            </a>
          </div>
        </div>
      </section>

      {/* ── Trainers ── */}
      <section className="class-trainers trainers">
        <div className="container">
          <p className="eyebrow">Coached by</p>
          <h2 className="display">
            YOUR <span className="accent">COACHES</span>
          </h2>
          <div className="trainer-grid class-trainer-grid">
            {trainersList.map((trainer) => (
              <Link key={trainer.id} href={`/trainers/${trainer.id}`} className="trainer-card">
                <div
                  className="bg"
                  style={{ backgroundImage: `url(${trainer.photo})` }}
                />
                <div className="meta">
                  <span>{trainer.role}</span>
                  <h3>{trainer.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership card ── */}
      <section className="class-member">
        <div className="container">
          <div className="class-member-grid">
            <div>
              <p className="eyebrow">Ready to train?</p>
              <h2 className="display">
                JOIN IRRONPRIT
                <br />
                <span className="accent">TODAY</span>
              </h2>
              <p style={{ color: 'var(--muted)', marginTop: 12 }}>
                {cls.title} is included in all IRRONPRIT membership plans. Start with a free trial —
                no commitment required.
              </p>
              <div className="actions" style={{ marginTop: 28 }}>
                <Link href="/packages" className="btn">
                  View Plans
                </Link>
                <a
                  href="https://wa.me/919903475355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  <i className="fa-brands fa-whatsapp" /> Free Trial
                </a>
              </div>
            </div>
            <div style={{ background: 'var(--gold)', borderRadius: 24, padding: 32 }}>
              <p className="eyebrow" style={{ color: 'var(--ink)' }}>All plans include</p>
              <ul className="check-list">
                {[
                  `${cls.title} classes`,
                  'All other group classes',
                  'Locker facility',
                  'Progress tracking',
                  'Diet guidance session',
                ].map((f) => (
                  <li key={f}>
                    <i className="fa-solid fa-check" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/packages" className="btn btn-dark" style={{ marginTop: 24 }}>
                View Plans &amp; Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── More classes ── */}
      <section style={{ paddingBottom: 90, background: '#f6f3ea' }}>
        <div className="container">
          <p className="eyebrow">Explore more</p>
          <h2 className="display" style={{ marginBottom: 28 }}>
            OTHER <span className="accent">CLASSES</span>
          </h2>
          <div className="classes-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {classesList
              .filter((c) => c.id !== id)
              .slice(0, 3)
              .map((c) => (
                <Link key={c.id} href={`/classes/${c.id}`} className="class-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.photo} alt={c.title} />
                  <div className="content">
                    <h3>{c.title}</h3>
                    <p>{c.lead}</p>
                    <span className="learn">
                      Learn more <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
