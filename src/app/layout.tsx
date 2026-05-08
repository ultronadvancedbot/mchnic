import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MCHNIC — AI Automation Agency',
  description:
    'We design, build, and deploy custom AI systems that automate your operations, reduce overhead, and unlock new revenue streams.',
  keywords: [
    'AI automation',
    'AI agency',
    'business automation',
    'AI consulting',
    'workflow automation',
    'artificial intelligence',
  ],
  openGraph: {
    title: 'MCHNIC — AI Automation Agency',
    description:
      'We design, build, and deploy custom AI systems that automate your operations, reduce overhead, and unlock new revenue streams.',
    type: 'website',
    url: 'https://mchnic.com',
    siteName: 'MCHNIC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCHNIC — AI Automation Agency',
    description: 'We design, build, and deploy custom AI systems that automate your operations.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
