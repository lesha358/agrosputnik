import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'О нас',
  description: 'АгроСпутник - объединение лучших питомников Центральной России. Мы предлагаем качественные саженцы и садовые товары с 2020 года.',
  openGraph: {
    title: 'О нас | АгроСпутник',
    description: 'АгроСпутник - объединение лучших питомников Центральной России. Мы предлагаем качественные саженцы и садовые товары с 2020 года.',
    images: [
      {
        url: '/images/Logo.jpg',
        width: 800,
        height: 600,
        alt: 'О компании АгроСпутник',
      },
    ],
  },
}

export default function AboutPage() {
  return <AboutContent />
} 