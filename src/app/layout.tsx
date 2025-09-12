import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Head from 'next/head'

import { ClientProviders } from '@/providers'
import { Footer, Header } from '@/ui'
import { Popup } from '@/ui/Popup'
import { PopupProvider } from '@/ui/Popup/PopupContext'

import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'Insoftel Technologies - Custom Software Development',
  description: 'Insoftel Technologies - Custom Software Development',
  icons: {
    icon: './assets/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const neueHaas = localFont({
  variable: '--font-neue-haas',
  display: 'swap',
  src: [
    {
      path: '../fonts/nhgd/NeueHaasDisplay-XThin.woff2',
      weight: '200',
      style: 'xthin',
    },
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

const neueWeb = localFont({
  variable: '--font-neue-web',
  display: 'swap',
  src: [
    {
      path: '../fonts/nwgd/HaasGrotDispWeb15XXThnRegular.woff2',
      weight: '200',
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
      <Head>
        <link
          rel="preload"
          href="public\img\cards\fifth.png"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\cards\first.png"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\cards\fourth.png"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\cards\second.png"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\cards\third.png"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\products\first.png"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\products\fourth.png"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\products\main.png"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\products\second.png"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\products\third.png"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\services\services.webp"
          as="image"
        />

        <link
          rel="preload"
          href="public\img\technologies\tech.webp"
          as="image"
        />
        <link
          rel="preload"
          href="public\img\technologies\tech_home.webp"
          as="image"
        />
      </Head>
      <body className={neueHaas.variable + ' ' + neueWeb.variable}>
        <PopupProvider>
          <Header />
          <ClientProviders>
            <>
              {children}
              <div data-section="footer">
                <Footer />
              </div>
            </>
          </ClientProviders>
          <Popup />
        </PopupProvider>
        <div id="portal-root"></div>
      </body>
    </html>
  )
}
