import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'DR Sports | Where the Fans Run the Football Conversation',
  description:
    'DR Sports is the home of football banter, hot takes and fan debates. Live call-ins, weekend round-ups, Best of Enemies and more — real fans, real opinions, no filter.',
  generator: 'Jolaoluwa Olusanya',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${inter.variable} ${oswald.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
