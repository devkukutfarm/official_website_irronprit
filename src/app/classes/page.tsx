import Link from 'next/link'
import FaqAccordion from '@/components/ui/FaqAccordion'
import { classesList } from '@/lib/data/classes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Classes | IRONPRIT Fitness',
  description:
    'Strength training, cardio, HIIT, yoga, zumba and personal training — six structured classes designed for every fitness goal at IRONPRIT Baruipur.',
}

const classFaqs = [
  {
    q: 'Do I need to book a class in advance?',
    a: 'Group classes do not require advance booking — just show up at the scheduled time. Personal Training sessions must be booked in advance via WhatsApp.',
  },
  {
    q: 'Are classes suitable for beginners?',
    a: 'Every class is adaptable to any level. Our trainers will always show modifications for beginners.',
  },
  {
    q: 'Can I do multiple classes per day?',
    a: 'Yes, you can attend as many classes as you like within your membership. We recommend allowing for adequate recovery.',
  },
  {
    q: 'What should I bring to class?',
    a: 'Just bring yourself, a water bottle and comfortable workout clothes. Lockers are available for your belongings.',
  },
]

export default function ClassesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="classes-hero">
        <div className="container">
          <p className="eyebrow">What we offer</p>
          <h1 className="display">
            CLASSES FOR
            <br />
            <span className="accent">EVERY GOAL</span>
          </h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Six structured classes covering every angle of fitness — strength, conditioning,
            mobility, and everything in between. All included in your membership.
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="classes-grid-wrap">
        <div className="container">
          <div className="classes-grid">
            {classesList.map((cls) => (
              <Link key={cls.id} href={`/classes/${cls.id}`} className="class-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cls.photo} alt={cls.title} />
                <div className="content">
                  <h3>{cls.title}</h3>
                  <p>{cls.lead}</p>
                  <span className="learn">
                    Learn more <i className="fa-solid fa-arrow-right" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="classes-join">
        <div className="container">
          <p className="eyebrow">Start today</p>
          <h2 className="display">
            READY TO
            <br />
            <span className="accent">BEGIN?</span>
          </h2>
          <p className="lead">
            Walk in for a free trial session — pick any class and meet our coaches. No
            commitment required.
          </p>
          <div className="actions" style={{ justifyContent: 'center', marginTop: 28 }}>
            <Link href="/packages" className="btn">
              View Plans
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="fa-brands fa-whatsapp" /> Book Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* ── Price teaser ── */}
      <section className="classes-teaser">
        <div className="container">
          <p className="eyebrow">Plans from</p>
          <div className="teaser-grid">
            {[
              { label: 'Monthly', price: '₹999', featured: false },
              { label: 'Quarterly', price: '₹2,799', featured: false },
              { label: 'Half Yearly', price: '₹4,999', featured: true },
              { label: 'Annual', price: '₹8,999', featured: false },
            ].map((p) => (
              <Link key={p.label} href="/packages" className={p.featured ? 'is-featured' : ''}>
                <small>{p.label}</small>
                <strong>{p.price}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq">
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>Common questions</p>
          <h2 className="display" style={{ color: 'var(--white)' }}>
            CLASSES <span style={{ color: 'var(--gold)' }}>FAQs</span>
          </h2>
          <FaqAccordion items={classFaqs} />
        </div>
      </section>
    </>
  )
}
