import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import 'animate.css'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import BackToTop from '@/components/layout/BackToTop'
import ScrollReveal from '@/components/ui/ScrollReveal'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = 'https://www.irronprit.com'
const SITE_NAME = 'IRRONPRIT Fitness'
const DEFAULT_DESC =
  'IRRONPRIT Fitness is a professional gym in Baruipur, West Bengal. Strength training, cardio, HIIT, yoga, zumba and personal training — real results through proper coaching.'
const OG_IMAGE = `${SITE_URL}/images/ironprit-banner.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Gym in Baruipur, West Bengal`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,
  keywords: [
    'gym baruipur',
    'fitness center west bengal',
    'ironprit',
    'strength training baruipur',
    'personal trainer baruipur',
    'gym near me baruipur',
    'fitness gym south 24 parganas',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Gym in Baruipur, West Bengal`,
    description: DEFAULT_DESC,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'IRRONPRIT Fitness — Gym in Baruipur, West Bengal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Gym in Baruipur, West Bengal`,
    description: DEFAULT_DESC,
    images: [OG_IMAGE],
  },
  // App icons (favicon / apple-touch) are provided by the file-based
  // conventions src/app/icon.png and src/app/apple-icon.png, both derived
  // from the footer brand logo (Logo-with-arms.png).
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL,
  },
}

// JSON-LD structured data for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  name: SITE_NAME,
  description: DEFAULT_DESC,
  url: SITE_URL,
  telephone: '+919903475355',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jogibattala Khasmallik, Near Baruipur Padmapukur More, Beside Holy Cross School',
    addressLocality: 'Baruipur',
    addressRegion: 'West Bengal',
    postalCode: '700144',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.680166,
    longitude: 88.440415,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  image: OG_IMAGE,
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Strength Training', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Cardio Equipment', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Personal Training', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Yoga Classes', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Zumba Classes', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Locker Room', value: true },
  ],
  sameAs: [
    'https://www.instagram.com/irronpritfitness.baruipur',
    'https://www.facebook.com/share/1DYzeVuTd4/',
    'https://www.youtube.com/@IrronpritFitness',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`} suppressHydrationWarning>
      <head>
        {/* Scroll-reveal gate: hide reveal targets only when JS runs. Falls back
            to fully visible content if the reveal script never boots. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js-reveal');setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.remove('js-reveal')},4000)",
          }}
        />
        {/* Font Awesome 6 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject
          attributes on <body> before React hydrates. */}
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
        <ScrollReveal />
      </body>
    </html>
  )
}
