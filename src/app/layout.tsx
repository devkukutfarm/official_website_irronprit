import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import BackToTop from '@/components/layout/BackToTop'

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

export const metadata: Metadata = {
  title: 'IRONPRIT Fitness | Baruipur, West Bengal',
  description:
    'IRONPRIT Fitness is a professional gym in Baruipur, West Bengal. Strength training, cardio, HIIT, yoga, zumba and personal training — real results through proper coaching.',
  keywords: 'gym baruipur, fitness center west bengal, ironprit, strength training, personal trainer baruipur',
  openGraph: {
    title: 'IRONPRIT Fitness',
    description: 'Real transformation through proper training, consistency and discipline.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
      </body>
    </html>
  )
}
