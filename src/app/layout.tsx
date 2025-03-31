import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://agrosputnik.ru'),
  title: {
    default: 'АгроСпутник - Ваш надежный помощник в садоводстве',
    template: '%s | АгроСпутник'
  },
  description: 'Интернет-магазин садовых товаров и растений. Качественные саженцы, семена и садовый инвентарь от лучших производителей.',
  keywords: ['саженцы', 'семена', 'садовый инвентарь', 'растения', 'садоводство', 'огород', 'дача', 'питомник'],
  authors: [{ name: 'АгроСпутник' }],
  creator: 'АгроСпутник',
  publisher: 'АгроСпутник',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://agrosputnik.ru',
    siteName: 'АгроСпутник',
    title: 'АгроСпутник - Ваш надежный помощник в садоводстве',
    description: 'Интернет-магазин садовых товаров и растений. Качественные саженцы, семена и садовый инвентарь от лучших производителей.',
    images: [
      {
        url: '/images/Logo.jpg',
        width: 800,
        height: 600,
        alt: 'АгроСпутник - интернет-магазин садовых товаров',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'АгроСпутник - Ваш надежный помощник в садоводстве',
    description: 'Интернет-магазин садовых товаров и растений. Качественные саженцы, семена и садовый инвентарь от лучших производителей.',
    images: ['/images/Logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ваш-код-верификации-google',
    yandex: 'ваш-код-верификации-yandex',
  },
  alternates: {
    canonical: 'https://agrosputnik.ru',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <CartProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
} 