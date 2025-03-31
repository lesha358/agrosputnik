import type { Metadata } from 'next'
import ContactsContent from './ContactsContent'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Свяжитесь с нами по телефону, email или посетите наш офис. Мы всегда готовы помочь вам с выбором садовых товаров.',
  openGraph: {
    title: 'Контакты | АгроСпутник',
    description: 'Свяжитесь с нами по телефону, email или посетите наш офис. Мы всегда готовы помочь вам с выбором садовых товаров.',
    images: [
      {
        url: '/images/Logo.jpg',
        width: 800,
        height: 600,
        alt: 'Контакты АгроСпутник',
      },
    ],
  },
}

export default function ContactsPage() {
  return <ContactsContent />
} 