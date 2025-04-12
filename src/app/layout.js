import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  metadataBase: new URL('https://okla-labs.com'),
  title: {
    template: '%s | OKLA Labs',
    default: 'OKLA Labs - Technology & Growth Strategy Consulting',
  },
  description: 'OKLA Labs specializes in modernizing technology solutions and developing growth strategies to enhance customer acquisition and profitability.',
  keywords: ['Technology Consulting', 'Growth Strategy', 'Digital Transformation', 'Customer Acquisition', 'AWS Expertise', 'Military Contracts'],
  authors: [{ name: 'OKLA Labs' }],
  creator: 'OKLA Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'OKLA Labs',
    title: 'OKLA Labs - Technology & Growth Strategy Consulting',
    description: 'Expert technology and growth strategy consulting by former AWS leaders and military contract managers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OKLA Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OKLA Labs - Technology & Growth Strategy Consulting',
    description: 'Expert technology and growth strategy consulting by former AWS leaders and military contract managers.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-primary-900 font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
