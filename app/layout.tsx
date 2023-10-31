import { Navbar, ScrollToTop } from '@/components/static'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MobileNavBar } from '@/components/static/MobileNavbar'
import NextTopLoader from 'nextjs-toploader';

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
        <NextTopLoader color="#A66EFC" speed={700} />
        {/* <Navbar /> */}
        {children}
        {/* <MobileNavBar /> */}
        <ScrollToTop />
      </body>
    </html>
  )
}
