/* eslint-disable @next/next/no-sync-scripts */
import '@/styles/globals.scss'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Roboto } from 'next/font/google'

import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'

// const FooterComp = dynamic (() => import('@/components/Footer'))
// const NavBarComp = dynamic (() => import('@/components/Navbar'))
const inter = Roboto({
  weight: ['400'], 
  subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL ('https://www.exhouseconstrutora.com'), //PARA ALTERAR 
  title: {
    default: 'Exhouse Construtora',
    template: '%s | Exhouse Construtora',
  },
  description: 'Modelo de site para empresa com atuação em construção. Integrado com redes sociais, chat e com possibilidade para  adicionar whatsApp',
  verification:{
    google: 'google-site-verification=898989', //PARA ALTERAR 
  },
  generator: 'Next13.js',
  applicationName: 'Exshouse Construtora',
  referrer: 'origin-when-cross-origin',
  keywords: ['Construção', 'Construtora', 'Contrução de luxo'],
  authors: [{ name: 'Iago Nascimento' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Exhouse Construtora',
    description: 'Modelo de site para empresa com atuação em construção. Integrado com redes sociais, chat e com possibilidade para  adicionar whatsApp',
    siteName: 'Exshouse Construtora',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <NavBar/>
        {children}
       <Footer/> 
        </body>
    </html>
  )
}
