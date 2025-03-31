import type { Metadata } from 'next'
import CatalogContent from './CatalogContent'

export const metadata: Metadata = {
  title: 'Каталог товаров',
  description: 'Каталог садовых товаров и растений. Широкий выбор саженцев, семян и садового инвентаря от лучших производителей.',
  openGraph: {
    title: 'Каталог товаров | АгроСпутник',
    description: 'Каталог садовых товаров и растений. Широкий выбор саженцев, семян и садового инвентаря от лучших производителей.',
    images: [
      {
        url: '/images/products/tomato-seeds.jpg',
        width: 800,
        height: 600,
        alt: 'Каталог садовых товаров АгроСпутник',
      },
    ],
  },
}

export default function CatalogPage() {
  return <CatalogContent />
} 