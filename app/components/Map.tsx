'use client'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type MapTheme = 'neutral' | 'light' | 'dark'

interface MapProps {
  theme: MapTheme
}

export default function Map({ theme }: MapProps) {
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

  return (
    <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200">
      <MapContainer
        center={[46.8182, 8.2275]} // Center of Switzerland
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          key={theme} // Force re-render when theme changes
          url={tileLayer.url}
          attribution={tileLayer.attribution}
        />
      </MapContainer>
    </div>
  )
}