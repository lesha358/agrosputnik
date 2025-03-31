'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/Logo.jpg"
                  alt="АгроСпутник"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <span className="ml-2 text-xl font-bold text-green-600">АгроСпутник</span>
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/catalog" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-green-500">
              Каталог
            </Link>
            <Link href="/about" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-green-500">
              О нас
            </Link>
            <Link href="/contacts" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-green-500">
              Контакты
            </Link>
            <Link href="/cart" className="text-gray-900 hover:text-green-600 relative">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Открыть меню</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/catalog"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Каталог
          </Link>
          <Link
            href="/about"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            О нас
          </Link>
          <Link
            href="/contacts"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Контакты
          </Link>
          <Link
            href="/cart"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Корзина {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      </div>
    </nav>
  )
} 