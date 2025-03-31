'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import Toast from '@/components/Toast'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()
  const [showToast, setShowToast] = useState(false)
  const [removedItemName, setRemovedItemName] = useState('')

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id)
    setRemovedItemName(name)
    setShowToast(true)
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Корзина пуста</h1>
          <p className="text-gray-500 mb-8">Добавьте товары в корзину, чтобы оформить заказ</p>
          <Link
            href="/catalog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Перейти в каталог
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="text-gray-500">{item.price} ₽</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-gray-600 hover:text-gray-900"
                    >
                      -
                    </button>
                    <span className="px-2 py-1 text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-gray-600 hover:text-gray-900"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="ml-4 text-red-600 hover:text-red-800"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-gray-900">
                    {item.price * item.quantity} ₽
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Итого</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Товары ({items.length})</span>
              <span className="text-gray-900">{totalPrice} ₽</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Доставка</span>
              <span className="text-gray-900">Бесплатно</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-900">Итого к оплате</span>
                <span className="text-lg font-semibold text-gray-900">{totalPrice} ₽</span>
              </div>
            </div>
          </div>
          <button
            onClick={clearCart}
            className="w-full mt-6 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800"
          >
            Очистить корзину
          </button>
          <button
            className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Оформить заказ
          </button>
        </div>
      </div>
      <Toast
        message={`${removedItemName} удален из корзины`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  )
} 