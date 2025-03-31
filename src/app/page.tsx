'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Динамический импорт компонента карты для избежания ошибок SSR
const Map = dynamic(() => import('@/components/Map'), { ssr: false })

const NURSERIES = [
  {
    id: 1,
    name: 'Питомник "Московский"',
    region: 'Московская область',
    address: 'г. Подольск, ул. Садовая, 15',
    coordinates: [55.4311, 37.5457] as [number, number],
    products: ['Саженцы', 'Семена', 'Удобрения']
  },
  {
    id: 2,
    name: 'Питомник "Владимирский"',
    region: 'Владимирская область',
    address: 'г. Владимир, ул. Лесная, 8',
    coordinates: [56.1290, 40.4070] as [number, number],
    products: ['Саженцы', 'Семена', 'Средства защиты']
  },
  {
    id: 3,
    name: 'Питомник "Тверской"',
    region: 'Тверская область',
    address: 'г. Тверь, ул. Промышленная, 25',
    coordinates: [56.8584, 35.9006] as [number, number],
    products: ['Саженцы', 'Семена', 'Техника']
  },
  {
    id: 4,
    name: 'Питомник "Калужский"',
    region: 'Калужская область',
    address: 'г. Калуга, ул. Садовая, 42',
    coordinates: [54.5293, 36.2754] as [number, number],
    products: ['Саженцы', 'Семена', 'Удобрения', 'Средства защиты']
  },
  {
    id: 5,
    name: 'Питомник "Рязанский"',
    region: 'Рязанская область',
    address: 'г. Рязань, ул. Парковая, 12',
    coordinates: [54.6269, 39.7466] as [number, number],
    products: ['Саженцы', 'Семена', 'Удобрения', 'Техника']
  },
  {
    id: 6,
    name: 'Питомник "Тульский"',
    region: 'Тульская область',
    address: 'г. Тула, ул. Лесная, 15',
    coordinates: [54.1931, 37.6172] as [number, number],
    products: ['Саженцы', 'Семена', 'Средства защиты', 'Техника']
  }
]

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-50 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-800 mb-4 sm:mb-6">
              Агроспутник
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl">
              Ваш надежный помощник в выборе качественных саженцев и садовых товаров
            </p>
            <Link 
              href="/catalog" 
              className="w-full sm:w-auto bg-primary-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors text-center"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Категории товаров</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Саженцы</h3>
              <p className="text-sm sm:text-base text-gray-600">Широкий выбор саженцев плодовых и декоративных растений</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Удобрения</h3>
              <p className="text-sm sm:text-base text-gray-600">Качественные удобрения для вашего сада</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Инструменты</h3>
              <p className="text-sm sm:text-base text-gray-600">Все необходимое для ухода за садом</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">География наших питомников</h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            Мы представлены в центральном регионе России, чтобы обеспечить качественными саженцами и товарами для садоводства как можно больше садоводов
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Карта */}
            <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Map nurseries={NURSERIES} />
            </div>

            {/* Список питомников */}
            <div className="space-y-4 sm:space-y-6">
              {NURSERIES.map(nursery => (
                <div key={nursery.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{nursery.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{nursery.address}</p>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4">{nursery.region}</p>
                  <div className="flex flex-wrap gap-2">
                    {nursery.products.map(product => (
                      <span
                        key={product}
                        className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 