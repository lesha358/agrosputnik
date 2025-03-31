import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Nursery {
  id: number
  name: string
  region: string
  address: string
  coordinates: [number, number]
  products: string[]
}

interface MapProps {
  nurseries: Nursery[]
}

export default function Map({ nurseries }: MapProps): React.ReactElement {
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainerRef.current) return

    // Инициализация карты с ограничениями
    const map = L.map(mapContainerRef.current, {
      center: [55.7558, 37.6173], // Центр карты - Москва
      zoom: 7, // Начальный зум
      minZoom: 6, // Минимальный зум
      maxZoom: 10, // Максимальный зум
      maxBounds: [
        [53.5, 34.5], // Юго-западная граница
        [58.0, 41.5]  // Северо-восточная граница
      ],
      maxBoundsViscosity: 1.0 // Полное ограничение прокрутки
    })
    mapRef.current = map

    // Добавление слоя карты
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    // Добавление маркеров для каждого питомника
    nurseries.forEach(nursery => {
      const marker = L.marker(nursery.coordinates)
        .bindPopup(`
          <div class="p-2">
            <h3 class="font-semibold">${nursery.name}</h3>
            <p class="text-sm">${nursery.address}</p>
            <p class="text-sm">${nursery.region}</p>
            <div class="mt-2">
              ${nursery.products.map(product => 
                `<span class="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mr-1 mb-1">${product}</span>`
              ).join('')}
            </div>
          </div>
        `)
        .addTo(map)
    })

    // Подстраиваем карту под все маркеры
    const bounds = L.latLngBounds(nurseries.map(n => n.coordinates))
    map.fitBounds(bounds, {
      padding: [50, 50], // Отступы от краев
      maxZoom: 8 // Ограничиваем максимальный зум при подстройке
    })

    // Очистка при размонтировании
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
      }
    }
  }, [nurseries])

  return <div ref={mapContainerRef} className="w-full h-full" />
} 