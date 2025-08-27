'use client'
import { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type MapTheme = 'neutral' | 'light' | 'dark'

interface MapProps {
  theme: MapTheme
}

const Map = forwardRef<any, MapProps>(({ theme }, ref) => {
  const [isClient, setIsClient] = useState(false)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useImperativeHandle(ref, () => ({
    setZoom: (zoom: number) => {
      if (mapRef.current) {
        mapRef.current.setZoom(zoom)
      }
    },
    getZoom: () => {
      if (mapRef.current) {
        return mapRef.current.getZoom()
      }
      return 8
    }
  }))

  const getTileLayer = () => {
    switch (theme) {
      case 'light':
        return {
          url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      case 'dark':
        return {
          url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      default: // neutral
        return {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    }
  }

  const tileLayer = getTileLayer()

  if (!isClient) {
    return (
      <div className="h-full w-full rounded-lg border border-gray-200 bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    )
  }

  return (
    <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200 relative z-10">
      <MapContainer
        ref={mapRef}
        center={[46.8182, 8.2275]} // Center of Switzerland
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        zoomControl={false} // Disable default zoom controls to avoid conflicts
      >
        <TileLayer
          key={theme} // Force re-render when theme changes
          url={tileLayer.url}
          attribution={tileLayer.attribution}
        />
      </MapContainer>
    </div>
  )
})

Map.displayName = 'Map'

export default Map