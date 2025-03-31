'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import Toast from './Toast'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addItem } = useCart()
  const [showToast, setShowToast] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
    })
    setShowToast(true)
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Link href={`/catalog/${id}`}>
          <div className="relative h-48">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <div className="p-4">
          <Link href={`/catalog/${id}`}>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{name}</h3>
          </Link>
          <p className="text-sm text-gray-500 mb-2">{category}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">{price} ₽</span>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>В корзину</span>
            </button>
          </div>
        </div>
      </div>
      <Toast
        message={`${name} добавлен в корзину`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  )
} 