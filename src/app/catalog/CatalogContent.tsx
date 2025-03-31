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
    id: '1',
    name: 'Семена томатов "Розовый гигант"',
    price: 150,
    image: '/images/products/tomato-seeds.jpg',
    category: 'Семена',
    description: 'Высокорослый сорт с крупными розовыми плодами',
  },
  {
    id: '2',
    name: 'Саженцы яблони "Антоновка"',
    price: 1200,
    image: '/images/products/apple-tree.jpg',
    category: 'Саженцы',
    description: 'Классический сорт яблони с кисло-сладкими плодами',
  },
  {
    id: '3',
    name: 'Лопата садовая "Универсал"',
    price: 800,
    image: '/images/products/shovel.jpg',
    category: 'Инвентарь',
    description: 'Прочная лопата из закаленной стали',
  },
  {
    id: '4',
    name: 'Семена огурцов "Кураж"',
    price: 120,
    image: '/images/products/cucumber-seeds.jpg',
    category: 'Семена',
    description: 'Раннеспелый гибрид с отличным вкусом',
  },
  {
    id: '5',
    name: 'Саженцы груши "Любимица"',
    price: 1500,
    image: '/images/products/pear-tree.jpg',
    category: 'Саженцы',
    description: 'Сладкий сорт груши с сочными плодами',
  },
  {
    id: '6',
    name: 'Грабли садовые "Комфорт"',
    price: 600,
    image: '/images/products/rake.jpg',
    category: 'Инвентарь',
    description: 'Удобные грабли с прорезиненной ручкой',
  },
]

export default function CatalogContent(): React.ReactElement {
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