'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-2">
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
            <p className="mt-4 text-gray-500">
              Ваш надежный помощник в садоводстве. Мы предлагаем качественные саженцы и садовые товары от лучших производителей.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Навигация
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/catalog" className="text-base text-gray-500 hover:text-gray-900">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-base text-gray-500 hover:text-gray-900">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Контакты
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-500">
                <span className="block">Телефон:</span>
                <a href="tel:+74951234567" className="hover:text-gray-900">+7 (495) 123-45-67</a>
              </li>
              <li className="text-base text-gray-500">
                <span className="block">Email:</span>
                <a href="mailto:info@agrosputnik.ru" className="hover:text-gray-900">info@agrosputnik.ru</a>
              </li>
              <li className="text-base text-gray-500">
                <span className="block">Адрес:</span>
                <span>г. Москва, ул. Садовая, д. 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} АгроСпутник. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
} 