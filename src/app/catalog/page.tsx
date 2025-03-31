'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import CatalogFilters from '@/components/CatalogFilters'
import ProductCard from '@/components/ProductCard'

const CATEGORIES = [
  'Саженцы',
  'Семена',
  'Удобрения',
  'Инструменты',
  'Грунты',
  'Средства защиты'
]

const REGIONS = [
  'Московская область',
  'Владимирская область',
  'Тверская область',
  'Калужская область',
  'Рязанская область',
  'Тульская область'
]

const PRODUCTS = [
  {
    id: 1,
    name: 'Саженец яблони "Антоновка"',
    price: 1200,
    image: '/images/products/apple.jpg',
    category: 'Саженцы',
    description: 'Классический сорт яблони с кисло-сладкими плодами'
  },
  {
    id: 2,
    name: 'Семена томатов "Бычье сердце"',
    price: 150,
    image: '/images/products/tomato.jpg',
    category: 'Семена',
    description: 'Крупноплодный сорт томатов для теплиц и открытого грунта'
  },
  {
    id: 3,
    name: 'Удобрение "Весеннее"',
    price: 450,
    image: '/images/products/fertilizer.jpg',
    category: 'Удобрения',
    description: 'Комплексное минеральное удобрение для весенней подкормки'
  },
  {
    id: 4,
    name: 'Садовые ножницы',
    price: 800,
    image: '/images/products/shears.jpg',
    category: 'Инструменты',
    description: 'Профессиональные садовые ножницы для обрезки'
  },
  {
    id: 5,
    name: 'Грунт "Универсальный"',
    price: 300,
    image: '/images/products/soil.jpg',
    category: 'Грунты',
    description: 'Питательный грунт для рассады и комнатных растений'
  },
  {
    id: 6,
    name: 'Препарат от вредителей',
    price: 250,
    image: '/images/products/pesticide.jpg',
    category: 'Средства защиты',
    description: 'Биологический препарат для защиты растений от вредителей'
  },
  {
    id: 7,
    name: 'Саженец груши "Конференция"',
    price: 1500,
    image: '/images/products/pear.jpg',
    category: 'Саженцы',
    description: 'Сладкий сорт груши с сочными плодами'
  },
  {
    id: 8,
    name: 'Семена огурцов "Кураж"',
    price: 180,
    image: '/images/products/cucumber.jpg',
    category: 'Семена',
    description: 'Раннеспелый гибрид огурцов для теплиц'
  },
  {
    id: 9,
    name: 'Удобрение "Осеннее"',
    price: 400,
    image: '/images/products/fertilizer-fall.jpg',
    category: 'Удобрения',
    description: 'Специальное удобрение для подготовки растений к зиме'
  },
  {
    id: 10,
    name: 'Садовый секатор',
    price: 1200,
    image: '/images/products/pruner.jpg',
    category: 'Инструменты',
    description: 'Профессиональный секатор для обрезки деревьев'
  },
  {
    id: 11,
    name: 'Грунт "Для рассады"',
    price: 280,
    image: '/images/products/seedling-soil.jpg',
    category: 'Грунты',
    description: 'Специальный грунт для выращивания рассады'
  },
  {
    id: 12,
    name: 'Фунгицид "Защита"',
    price: 350,
    image: '/images/products/fungicide.jpg',
    category: 'Средства защиты',
    description: 'Препарат для профилактики грибковых заболеваний'
  }
]

export default function CatalogPage(): React.ReactElement {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 })
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
    return matchesCategory && matchesPrice
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок и кнопка фильтров для мобильных */}
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <h1 className="text-2xl font-bold text-gray-900">Каталог</h1>
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Фильтры
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Фильтры */}
        <div className={`
          lg:w-64 flex-shrink-0
          ${isFiltersOpen ? 'block' : 'hidden lg:block'}
        `}>
          <CatalogFilters
            categories={CATEGORIES}
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            regions={REGIONS}
            selectedRegion={selectedRegion}
            onRegionChange={setSelectedRegion}
          />
        </div>

        {/* Сетка товаров */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 hidden lg:block">Каталог</h1>
          
          {/* Выбранные категории */}
          {selectedCategories.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-medium text-gray-700 mb-2">Выбранные категории:</h2>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map(category => (
                  <span
                    key={category}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                  >
                    {category}
                    <button
                      onClick={() => setSelectedCategories(prev => prev.filter(c => c !== category))}
                      className="ml-2 text-primary-600 hover:text-primary-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 