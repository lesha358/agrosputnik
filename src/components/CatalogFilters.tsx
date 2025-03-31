'use client'

import React from 'react'

interface CatalogFiltersProps {
  categories: string[]
  selectedCategories: string[]
  onCategoryChange: (categories: string[]) => void
  priceRange: { min: number; max: number }
  onPriceRangeChange: (range: { min: number; max: number }) => void
  regions: string[]
  selectedRegion: string | null
  onRegionChange: (region: string) => void
}

export default function CatalogFilters({
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  regions,
  selectedRegion,
  onRegionChange,
}: CatalogFiltersProps): React.ReactElement {
  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    onCategoryChange(newCategories)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg sm:text-xl font-semibold mb-6 hidden lg:block">Фильтры</h2>
      
      {/* Категории */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Категории</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className={`
                flex items-center p-2 rounded-lg cursor-pointer transition-colors
                ${selectedCategories.includes(category)
                  ? 'bg-primary-50 text-primary-700' 
                  : 'hover:bg-gray-50 text-gray-700'
                }
              `}
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
              />
              <span className="ml-3">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ценовой диапазон */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Ценовой диапазон</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Минимальная цена
            </label>
            <input
              type="number"
              id="minPrice"
              value={priceRange.min}
              onChange={(e) => onPriceRangeChange({ ...priceRange, min: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Максимальная цена
            </label>
            <input
              type="number"
              id="maxPrice"
              value={priceRange.max}
              onChange={(e) => onPriceRangeChange({ ...priceRange, max: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Регионы */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Регионы</h3>
        <div className="space-y-2">
          {regions.map((region) => (
            <label
              key={region}
              className={`
                flex items-center p-2 rounded-lg cursor-pointer transition-colors
                ${selectedRegion === region 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'hover:bg-gray-50 text-gray-700'
                }
              `}
            >
              <input
                type="radio"
                name="region"
                value={region}
                checked={selectedRegion === region}
                onChange={() => onRegionChange(region)}
                className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
              />
              <span className="ml-3">{region}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
} 