'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutPage(): React.ReactElement {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      {/* Заголовок */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          О компании АгроСпутник
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Мы объединяем лучшие питомники центральной России, чтобы предложить вам качественные саженцы и садовые товары
        </p>
      </div>

      {/* История */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Наша история</h2>
            <p className="text-gray-600 mb-4">
              АгроСпутник был создан в 2020 году как объединение ведущих питомников центральной России. 
              Наша миссия - сделать качественные саженцы и садовые товары доступными для каждого садовода.
            </p>
            <p className="text-gray-600">
              За годы работы мы объединили более 10 питомников, расположенных в разных регионах, 
              что позволяет нам предлагать широкий ассортимент растений, адаптированных к различным климатическим условиям.
            </p>
          </div>
          <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/nursery-1.jpg"
              alt="Наш питомник"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Наши преимущества */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Качество продукции</h3>
            <p className="text-gray-600">
              Все саженцы выращиваются в наших собственных питомниках с соблюдением всех технологических норм
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-gray-600">
              Собственная служба доставки обеспечивает быструю и бережную транспортировку растений
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Опытные специалисты</h3>
            <p className="text-gray-600">
              Наши консультанты всегда готовы помочь с выбором растений и уходом за ними
            </p>
          </div>
        </div>
      </section>

      {/* Наши питомники */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Наши питомники</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/nursery-2.jpg"
                alt="Питомник в Московской области"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Центральный питомник</h3>
              <p className="text-gray-600 mb-4">
                Расположен в Московской области, специализируется на выращивании плодовых деревьев и кустарников
              </p>
              <p className="text-sm text-gray-500">
                Площадь: 50 га<br />
                Год основания: 2015
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/nursery-3.jpg"
                alt="Питомник во Владимирской области"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Северный питомник</h3>
              <p className="text-gray-600 mb-4">
                Находится во Владимирской области, выращивает декоративные растения и хвойные культуры
              </p>
              <p className="text-sm text-gray-500">
                Площадь: 35 га<br />
                Год основания: 2018
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/nursery-4.jpg"
                alt="Питомник в Калужской области"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Южный питомник</h3>
              <p className="text-gray-600 mb-4">
                Расположен в Калужской области, специализируется на выращивании роз и многолетних цветов
              </p>
              <p className="text-sm text-gray-500">
                Площадь: 40 га<br />
                Год основания: 2017
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 