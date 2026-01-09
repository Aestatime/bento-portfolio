'use client'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapInstance, setMapInstance] = useState<any>(null)

  useEffect(() => {
    if (!mapRef.current) return

    import('leaflet').then((L) => {

      // Fix icon
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const map = L.map(mapRef.current!, {
        center: [-7.7956, 110.3695],
        zoom: 9.5,
        zoomControl: false,
        attributionControl: false,
      })

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(map)

      setMapInstance(map)
    })

    return () => {
      if (mapInstance) mapInstance.remove()
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-2xl overflow-hidden" />
      
      {/* Zoom buttons */}
      <button
        onClick={() => mapInstance?.zoomOut()}
        className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-1000"
      >
        <span className="text-2xl font-bold">-</span>
      </button>
      
      <button
        onClick={() => mapInstance?.zoomIn()}
        className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-1000"
      >
        <span className="text-2xl font-bold">+</span>
      </button>
    </div>
  )
}