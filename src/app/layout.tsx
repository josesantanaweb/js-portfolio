import type { Metadata } from 'next'
import { Fira_Code, Inter } from 'next/font/google'
import { GradientCanvas } from '@/components/common'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio - Jose Santana',
  description: 'Portfolio - Jose Santana',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Portfolio',
    'Jose Santana',
    'Developer',
    'Software Engineer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Jose Santana', url: 'https://josesantana.com' }],
  creator: 'Jose Santana',
  publisher: 'Jose Santana',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="bg-canvas text-ink relative flex min-h-full flex-col">
        <GradientCanvas />
        {children}
      </body>
    </html>
  )
}
