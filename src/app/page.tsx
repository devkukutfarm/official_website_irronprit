import Link from 'next/link'
import Image from 'next/image'
import HeroWordCycle from '@/components/ui/HeroWordCycle'
import FaqAccordion from '@/components/ui/FaqAccordion'
import PushSection from '@/components/ui/PushSection'
import { classesList } from '@/lib/data/classes'
import { trainersList } from '@/lib/data/trainers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IRRONPRIT Fitness | Gym in Baruipur, West Bengal',
  description:
    'IRRONPRIT Fitness â€” professional gym in Baruipur, West Bengal. Strength training, cardio, HIIT, yoga, zumba and personal training. Real coaching. Real results.',
}

const homeFaqs = [
  {
    q: 'What are your gym timings?',
    a: (
      <>
        We are open Monday to Saturday from <strong>6 am to 9 pm</strong> and Sunday from{' '}
        <strong>8 am to 1 pm</strong>. Public holiday timings may vary â€” check our{' '}
        <a href="https://wa.me/919903475355">WhatsApp</a> for updates.
      </>
    ),
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes! We offer a free trial session for new members. Just walk in or contact us on WhatsApp to schedule your slot.',
  },
  {
    q: 'Which classes are included in a standard membership?',
    a: 'All group classes â€” Strength, Cardio, HIIT, Yoga and Zumba â€” are included in every membership. Personal Training is available as an add-on.',
  },
  {
    q: 'Is there a joining fee?',
    a: 'No joining fee for any of our standard plans. See our Packages page for full details including current offers.',
  },
  {
    q: 'Do you have separate timings for female members?',
    a: 'Yes, we have dedicated ladies-only slots. Contact us directly to get the current schedule.',
  },
  {
    q: 'Can I pause my membership?',
    a: 'Yes, memberships can be paused for genuine reasons (illness, travel). Speak to us directly â€” we work it out case by case.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* â”€â”€ Hero â”€â”€ */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Baruipur&apos;s Fitness Hub</p>
          <h1 className="display">
            BUILD YOUR
            <br />
            <HeroWordCycle />
            <br />
            EVERY DAY
          </h1>
          <p className="hero-tagline">
            Real transformation through proper training, consistency and discipline.
          </p>
          <div className="actions" style={{ marginTop: 36 }}>
            <Link href="/packages" className="btn">
              Start Your Journey
            </Link>
            <Link href="/classes" className="btn btn-dark">
              Explore Classes
            </Link>
          </div>
        </div>

        <div className="hero-media">
          <Image
            src="/images/ironprit-banner.jpg"
            alt="IRRONPRIT Fitness gym floor"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />

          {/* Book card */}
          <div className="book-card">
            <h3>Book a Free Trial</h3>
            <div className="book-card-row">
              <Image
                src="/images/Inner-logo.png"
                alt="IRRONPRIT"
                width={52}
                height={52}
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong>IRRONPRIT Fitness</strong>
                <small>Baruipur, West Bengal</small>
              </div>
            </div>
            <a
              href="https://wa.me/919903475355"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ marginTop: 14, width: '100%' }}
            >
              <i className="fa-brands fa-whatsapp" /> WhatsApp Us
            </a>
          </div>

          {/* Social links */}
          <div className="hero-social">
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
      </section>

      {/* â”€â”€ Intro â”€â”€ */}
      <section className="intro">
        <div className="shape shape-top shape-cream">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
            <path d="M0,70 C360,0 1080,0 1440,70 L1440,0 L0,0 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container intro-grid">
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold)' }}>Why IRRONPRIT</p>
            <h2 className="display" style={{ color: 'var(--white)' }}>
              MORE THAN A GYM.
              <br />
              <span style={{ color: 'var(--gold)' }}>A WAY OF LIFE.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.78)', marginBottom: 28 }}>
              IRRONPRIT was built on the belief that real results come from proper coaching, not
              shortcuts. Every session is designed to move you forward â€” whether you&apos;re a
              beginner or a seasoned athlete.
            </p>
            <ul className="check-list">
              {[
                'Professional coaching at every level',
                'Structured programs that actually work',
                'Community that keeps you consistent',
                'Equipment maintained to the highest standard',
              ].map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="actions" style={{ marginTop: 32 }}>
              <Link href="/about" className="btn">
                Our Story
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Visit Us
              </Link>
            </div>
          </div>

          <div className="intro-photos">
            <Image
              src="/images/GYM_5.png"
              alt="Gym interior"
              width={380}
              height={460}
              style={{ borderRadius: 26, objectFit: 'cover' }}
            />
            <Image
              src="/images/GYM_6.png"
              alt="Training session"
              width={340}
              height={430}
              style={{ borderRadius: 26, objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="shape shape-bottom shape-white">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
            <path d="M0,70 C360,0 1080,0 1440,70 L1440,0 L0,0 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* â”€â”€ Classes â”€â”€ */}
      <section className="classes">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">What we offer</p>
              <h2 className="display">
                CLASSES FOR
                <br />
                EVERY <span className="accent">GOAL</span>
              </h2>
            </div>
            <div>
              <p className="lead">
                Six structured classes designed to cover every angle of your fitness â€” strength,
                conditioning, mobility and everything in between.
              </p>
              <Link href="/classes" className="btn btn-dark" style={{ marginTop: 18 }}>
                All Classes
              </Link>
            </div>
          </div>
        </div>

        <div className="container-wide">
          <div className="class-track">
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

      {/* â”€â”€ Benefits â”€â”€ */}
      <section className="benefits">
        <div
          className="benefits-photo"
          style={{ backgroundImage: 'url(/images/GYM_4.png)' }}
        />
        <div className="benefits-copy">
          <p className="eyebrow">Why choose us</p>
          <h2 className="display">
            REAL RESULTS.
            <br />
            REAL <span className="accent">COACHES.</span>
          </h2>

          <div className="badge-35">
            <strong>5+</strong>
            <span>Years of coaching</span>
          </div>

          <div className="benefits-lists">
            <ul className="check-list">
              {[
                'Expert trainers on floor daily',
                'Progress tracking every session',
                'Separate ladies-only slots',
                'Diet guidance included',
              ].map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="check-list">
              {[
                'Clean, premium-maintained equipment',
                'Flexible membership plans',
                'No long-term lock-ins',
                'Free trial for new members',
              ].map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="actions" style={{ marginTop: 32 }}>
            <Link href="/packages" className="btn">
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ Trainers â”€â”€ */}
      <section className="trainers">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Who coaches you</p>
              <h2 className="display">
                MEET YOUR
                <br />
                <span className="accent">TRAINERS</span>
              </h2>
            </div>
            <div>
              <p className="lead">
                Certified, experienced coaches who take your progress personally.
              </p>
              <Link href="/trainers" className="btn btn-dark" style={{ marginTop: 18 }}>
                All Trainers
              </Link>
            </div>
          </div>

          <div className="trainer-grid">
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

      {/* â”€â”€ Push / Parallax â”€â”€ */}
      <PushSection />

      {/* â”€â”€ Reviews â”€â”€ */}
      <section className="reviews">
        <div className="container reviews-grid">
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold)' }}>Member stories</p>
            <Image
              src="/images/GYM_3.png"
              alt="Member review"
              width={360}
              height={360}
              className="reviews-photo"
            />
          </div>
          <div>
            <h2 className="display" style={{ color: 'var(--white)' }}>
              REAL PEOPLE,
              <br />
              <span style={{ color: 'var(--gold)' }}>REAL RESULTS</span>
            </h2>
            <span className="sample-note">Member review</span>
            <p className="quote">
              &ldquo;I had tried multiple gyms before IRRONPRIT but always quit within a month. Here the
              trainers actually pay attention to your form, track your progress and push you to be
              consistent. Three months in, I&apos;m stronger than I&apos;ve ever been.&rdquo;
            </p>
            <div className="quote-meta">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/trainer2-610x610.jpg"
                alt="Member"
                width={56}
                height={56}
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong>Arnab D.</strong>
                <small style={{ color: 'rgba(255,255,255,.6)' }}>Member since 2024</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Pricing â”€â”€ */}
      <section className="pricing">
        <div className="container">
          <div className="pricing-head">
            <p className="eyebrow">Our plans</p>
            <h2 className="display">
              Be physically fit
              <br />join today
            </h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Choose a plan that matches your commitment. Long-term packages include zero admission
              fee and up to 50% off.{' '}
              <Link href="/packages" style={{ color: 'var(--red)', fontWeight: 700 }}>
                See all packages
              </Link>
            </p>
          </div>

          <div className="promo-strip">
            Flat <strong>50% OFF</strong> + <strong>Zero Admission Fee</strong> on quarterly,
            half-yearly and yearly plans. Monthly members also get zero admission fee.
          </div>

          <div className="price-grid">
            {[
              {
                name: '1 Month Pro',
                old: 'â‚¹3,500',
                now: 'â‚¹1,999',
                featured: false,
                waMsg: 'Hi%20IRONPRIT%2C%20I%20want%20the%201%20Month%20Pro%20package%20(Rs%201999).',
                features: ['Gym floor access', 'Premium gym shaker', 'Zero admission fee'],
              },
              {
                name: '3 Months Elite',
                old: 'â‚¹8,000',
                now: 'â‚¹3,999',
                featured: false,
                waMsg: 'Hi%20IRONPRIT%2C%20I%20want%20the%203%20Months%20Elite%20package%20(Rs%203999).',
                features: ['Gym towel', '1 steam bath session', 'Zero admission fee'],
              },
              {
                name: '6 Months Supreme',
                old: 'â‚¹14,500',
                now: 'â‚¹6,998',
                featured: true,
                waMsg: 'Hi%20IRONPRIT%2C%20I%20want%20the%206%20Months%20Supreme%20package%20(Rs%206998).',
                features: ['Towel & premium shaker', '2 steam bath sessions', '2 yoga sessions / week', '3-day trial pass'],
              },
              {
                name: '12 Months Ultimate',
                old: 'â‚¹26,500',
                now: 'â‚¹12,999',
                featured: false,
                waMsg: 'Hi%20IRONPRIT%2C%20I%20want%20the%2012%20Months%20Ultimate%20package%20(Rs%2012999).',
                features: ['Premium gym bag & essentials', '2 yoga + 1 Zumba / week', '5 steam baths / month', '5-day friend trial pass'],
              },
            ].map((plan) => (
              <article key={plan.name} className={`price-card${plan.featured ? ' featured' : ''}`}>
                <h3>{plan.name}</h3>
                <div className="price-old">{plan.old}</div>
                <div className="price-now">{plan.now}</div>
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

          <div className="offer-row">
            <article className="offer-box offer-refer">
              <span className="offer-icon" aria-hidden="true">
                <i className="fa-solid fa-gift" />
              </span>
              <span className="offer-label">Referral reward</span>
              <h3>Bring a friend</h3>
              <p>
                Refer a friend and get <strong>1 month free</strong> +{' '}
                <strong>20% off</strong> on any package.</p>
              <a
                href="https://wa.me/919903475355?text=Hi%20IRONPRIT%2C%20I%20want%20to%20claim%20the%20referral%20offer."
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ alignSelf: 'flex-start' }}
              >
                Claim on WhatsApp
              </a>
            </article>
            <article className="offer-box offer-couple">
              <span className="offer-icon" aria-hidden="true">
                <i className="fa-solid fa-heart" />
              </span>
              <span className="offer-label">Couple / Dual</span>
              <h3>Train together</h3>
              <p>
                <strong>10% off</strong> on monthly, quarterly and half-yearly. Yearly together at
                a flat <strong>â‚¹18,999</strong>.</p>
              <a
                href="https://wa.me/919903475355?text=Hi%20IRONPRIT%2C%20I%20want%20the%20couple%20%2F%20dual%20offer."
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Ask for couple rate
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* â”€â”€ Mid CTA â”€â”€ */}
      <section className="mid-cta">
        <div className="container">
          <p className="eyebrow">Take the first step</p>
          <h2 className="display">
            YOUR JOURNEY STARTS
            <br />
            <span className="accent">TODAY</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Stop waiting for Monday. Come in for a free session and see what IRRONPRIT is about.
          </p>
          <div className="actions" style={{ justifyContent: 'center', marginTop: 28 }}>
            <Link href="/packages" className="btn">
              View Plans
            </Link>
            <a
              href="https://wa.me/919903475355?text=Hi%20IRONPRIT%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="fa-brands fa-whatsapp" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* â”€â”€ FAQ â”€â”€ */}
      <section className="faq">
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>Common questions</p>
          <h2 className="display" style={{ color: 'var(--white)' }}>
            FREQUENTLY ASKED
            <br />
            <span style={{ color: 'var(--gold)' }}>QUESTIONS</span>
          </h2>
          <FaqAccordion items={homeFaqs} />
          <p style={{ marginTop: 28, color: 'rgba(255,255,255,.72)' }}>
            Still have questions?{' '}
            <a href="https://wa.me/919903475355" style={{ color: 'var(--gold)', fontWeight: 700 }}>
              Ask us on WhatsApp
            </a>{' '}
            â€” we reply fast.
          </p>
        </div>
      </section>
    </>
  )
}

