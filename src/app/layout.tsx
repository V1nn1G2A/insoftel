import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { PopupProvider } from '@/ui/Popup/PopupContext'

import { Lenis } from '@/ui'
import { Footer, Header } from '@/ui'

import '../styles/globals.scss'
import { Popup } from '@/ui/Popup'

export const metadata: Metadata = {
  title: 'Insoftel Technologies',
  description: 'Insoftel Technologies',
  icons: {
    icon: './assets/favicon.ico',
  },
}

const neueHaas = localFont({
  variable: '--font-neue-haas',
  display: 'swap',
  src: [
    {
      path: '../fonts/nhgd/NeueHaasDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/nhgd/NeueHaasDisplay-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/nhgd/NeueHaasDisplay-Mediu.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/nhgd/NeueHaasDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={neueHaas.variable}>
        <PopupProvider>
          <Lenis />
          <Header />
          {children}
          <Footer />
          <Popup />
        </PopupProvider>
        <div id='portal-root'></div>
      </body>
    </html>
  )
}
