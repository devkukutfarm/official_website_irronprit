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
    'IRRONPRIT Fitness — professional gym in Baruipur, West Bengal. Strength training, cardio, HIIT, yoga, zumba and personal training. Real coaching. Real results.',
  alternates: { canonical: 'https://www.irronprit.com' },
  openGraph: {
    title: 'IRRONPRIT Fitness | Gym in Baruipur, West Bengal',
    description:
      'Professional gym in Baruipur, West Bengal. Strength training, cardio, HIIT, yoga, zumba and personal training. Real coaching. Real results.',
    url: 'https://www.irronprit.com',
    siteName: 'IRRONPRIT Fitness',
    images: [
      {
        url: 'https://www.irronprit.com/images/ironprit-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'IRRONPRIT Fitness — Gym in Baruipur, West Bengal',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IRRONPRIT Fitness | Gym in Baruipur, West Bengal',
    description:
      'Professional gym in Baruipur, West Bengal. Strength training, cardio, HIIT, yoga, zumba and personal training.',
    images: ['https://www.irronprit.com/images/ironprit-banner.jpg'],
  },
}

const homeFaqs = [
  {
    q: 'What are your gym timings?',
    a: (
      <>
        We are open Monday to Saturday from <strong>9 am to 8 pm</strong> and Sunday from{' '}
        <strong>10 am to 2 pm</strong>. Public holiday timings may vary check our{' '}
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
          <p className="eyebrow" data-animate="fadeInUp">Baruipur&apos;s Fitness Hub</p>
          <h1 className="display" data-animate="fadeInUp">
            BUILD YOUR
            <br />
            <HeroWordCycle />
            <br />
            EVERY DAY
          </h1>
          <p className="hero-tagline" data-animate="fadeInUp">
            Real transformation through proper training, consistency and discipline.
          </p>
          <div className="actions" style={{ marginTop: 36 }} data-animate="fadeInUp">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScXW9WUCkpE8DMD4KNH-4P-a7j6iWlKjqvld0He3oZ1AiIORw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Start Your Journey
            </a>
            <Link href="/classes" className="btn btn-dark">
              Explore Classes
            </Link>
          </div>
        </div>

        <div className="hero-media">
          <Image
            src="/images/Characters/1.png"
            alt="IRONPRIT Fitness athlete"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />

          {/* Book card */}
          <div className="book-card" data-animate="fadeInUp" data-animate-delay="350">
            <h3>Book a Free Trial</h3>
            <div className="book-card-row">
              <Image
                src="/images/Logo-with-arms.png"
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
          <div className="hero-social" data-stagger="zoomIn">
            <a href="https://www.instagram.com/irronpritfitness.baruipur?stkn=cjUyMnBtcmcwdG43" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://www.facebook.com/share/1DYzeVuTd4/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="https://www.youtube.com/@IrronpritFitness" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
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
            <p className="eyebrow" style={{ color: 'var(--gold)' }} data-animate="fadeInUp">Why IRRONPRIT</p>
            <h2 className="display" style={{ color: 'var(--white)' }} data-animate="fadeInUp">
              MORE THAN A GYM.
              <br />
              <span style={{ color: 'var(--gold)' }}>A WAY OF LIFE.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.78)', marginBottom: 28 }} data-animate="fadeInUp">
              IRRONPRIT was built on the belief that real results come from proper coaching, not
              shortcuts. Every session is designed to move you forward whether you&apos;re a
              beginner or a seasoned athlete.
            </p>
            <ul className="check-list" data-stagger="fadeInLeft">
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
            <div className="actions" style={{ marginTop: 32 }} data-animate="fadeInUp">
              <Link href="/about" className="btn">
                Our Story
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Visit Us
              </Link>
            </div>
          </div>

          <div className="intro-photos" data-stagger="fadeInRight">
            <Image
              src="/images/Characters/5.png"
              alt="Athlete training"
              width={380}
              height={460}
              style={{ borderRadius: 26, objectFit: 'cover' }}
            />
            <Image
              src="/images/Characters/6.png"
              alt="Member workout"
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
              <p className="eyebrow" data-animate="fadeInUp">What we offer</p>
              <h2 className="display" data-animate="fadeInUp">
                CLASSES FOR
                <br />
                EVERY <span className="accent">GOAL</span>
              </h2>
            </div>
            <div data-animate="fadeInUp">
              <p className="lead">
                Six structured classes designed to cover every angle of your fitness — strength,
                conditioning, mobility and everything in between.
              </p>
              <Link href="/classes" className="btn btn-dark" style={{ marginTop: 18 }}>
                All Classes
              </Link>
            </div>
          </div>
        </div>

        <div className="container-wide">
          <div className="class-track" data-stagger="fadeInUp">
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
          data-animate="fadeIn"
          style={{ backgroundImage: 'url(/images/Characters/13.png)' }}
        />
        <div className="benefits-copy">
          <p className="eyebrow" data-animate="fadeInUp">Why choose us</p>
          <h2 className="display" data-animate="fadeInUp">
            REAL RESULTS.
            <br />
            REAL <span className="accent">COACHES.</span>
          </h2>

          <div className="badge-35" data-animate="zoomIn" data-animate-delay="250">
            <strong data-countup>5+</strong>
            <span>Years of coaching</span>
          </div>

          <div className="benefits-lists">
            <ul className="check-list" data-stagger="fadeInUp">
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
            <ul className="check-list" data-stagger="fadeInUp">
              {[
                'Clean, premium-maintained equipment',
                'Flexible membership plans',
                'No long-term lock-ins',
              ].map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="actions" style={{ marginTop: 32 }} data-animate="fadeInUp">
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
              <p className="eyebrow" data-animate="fadeInUp">Who coaches you</p>
              <h2 className="display" data-animate="fadeInUp">
                MEET YOUR
                <br />
                <span className="accent">TRAINERS</span>
              </h2>
            </div>
            <div data-animate="fadeInUp">
              <p className="lead">
                Certified, experienced coaches who take your progress personally.
              </p>
              <Link href="/trainers" className="btn btn-dark" style={{ marginTop: 18 }}>
                All Trainers
              </Link>
            </div>
          </div>

          <div className="trainer-grid" data-stagger="fadeInUp">
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
          <div data-animate="fadeInLeft">
            <p className="eyebrow" style={{ color: 'var(--gold)' }}>Member stories</p>
            <Image
              src="/images/Characters/4.png"
              alt="Member review"
              width={360}
              height={360}
              className="reviews-photo"
            />
          </div>
          <div>
            <h2 className="display" style={{ color: 'var(--white)' }} data-animate="fadeInUp">
              REAL PEOPLE,
              <br />
              <span style={{ color: 'var(--gold)' }}>REAL RESULTS</span>
            </h2>
            <span className="sample-note" data-animate="fadeInUp">Member review</span>
            <p className="quote" data-animate="fadeInUp">
              &ldquo;I had tried multiple gyms before IRRONPRIT but always quit within a month. Here the
              trainers actually pay attention to your form, track your progress and push you to be
              consistent. Three months in, I&apos;m stronger than I&apos;ve ever been.&rdquo;
            </p>
            <div className="quote-meta" data-animate="fadeInUp">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Characters/3.png"
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
          <div className="pricing-head" data-stagger="fadeInUp">
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

          <div className="promo-strip" data-animate="zoomIn">
            Flat <strong>50% OFF</strong> + <strong>Zero Admission Fee</strong> on quarterly,
            half-yearly and yearly plans. Monthly members also get zero admission fee.
          </div>

          <div className="price-grid" data-stagger="fadeInUp">
            {[
              {
                name: '1 Month Pro',
                old: '₹3,500',
                now: '₹1,999',
                featured: false,
                waMsg: 'Hi%20IRRONPRIT%2C%20I%20want%20the%201%20Month%20Pro%20package%20(Rs%201999).',
                features: ['Premium Gym Shaker', 'Zero admission fee'],
              },
              {
                name: '3 Months Elite',
                old: '₹8,000',
                now: '₹3,999',
                featured: false,
                waMsg: 'Hi%20IRRONPRIT%2C%20I%20want%20the%203%20Months%20Elite%20package%20(Rs%203999).',
                features: ['Gym Towel', '1 Steam Bath Session'],
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
            ].map((plan) => (
              <article key={plan.name} className={`price-card${plan.featured ? ' featured' : ''}`}>
                <h3>{plan.name}</h3>
                <div className="price-old">{plan.old}</div>
                <div className="price-now"><span className="cur">₹</span><span data-countup>{plan.now.replace('₹', '')}</span></div>
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
          <div className="refer-strip" data-animate="fadeInUp">
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
          <div className="special-head" data-stagger="fadeInUp">
            <p className="eyebrow">More ways to save</p>
            <h2 className="display">Special Offers</h2>
          </div>

          <article className="offer-box offer-couple offer-couple-wide" data-animate="fadeInUp">
            <span className="offer-icon" aria-hidden="true" data-animate="heartBeat" data-animate-delay="500">
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

          <div className="class-price-grid" data-stagger="fadeInUp">
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

      {/* â”€â”€ Mid CTA â”€â”€ */}
      <section className="mid-cta">
        <div className="container" data-stagger="fadeInUp">
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
          <p className="eyebrow" style={{ color: 'var(--gold)' }} data-animate="fadeInUp">Common questions</p>
          <h2 className="display" style={{ color: 'var(--white)' }} data-animate="fadeInUp">
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

