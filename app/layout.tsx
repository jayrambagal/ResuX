import { Footer, Navbar, ScrollToTop } from '@/components/static'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MobileNavBar } from '@/components/static/MobileNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ResuX - Resume Scanner',
  description: 'Resume Scanner Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <MobileNavBar />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
