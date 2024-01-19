import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {cn} from '@/lib/utils'
import {ThemeProvider} from '@/components/theme-provider'
import SiteHeader from '@/components/site-header'
import {TailwindIndicator} from '@/components/tailwind-indicator'
import SiteFooter from '@/components/site-footer'
import CopyrightBanner from '@/components/copyright-banner'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'GM4 Homepage',
  description: 'This is homepage of gm4 company',
  icons: '/images/logo_new_header.png',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn('min-h-screen bg-background font-sans', inter.className)}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='relative flex min-h-screen flex-col'>
            <SiteHeader />
            <div className='flex-1 lg:pt-12'>{children}</div>
            <SiteFooter />
            {/* <CopyrightBanner /> */}
            <TailwindIndicator />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
